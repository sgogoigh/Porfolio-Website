import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/contact-schema'

/**
 * Delivers the Connect form straight to the inbox.
 *
 * The form used to build a mailto: link, which does not send anything - it
 * just hands off to whatever mail app the visitor has, and does nothing at all
 * if they have none. This sends server-side instead, via Resend's REST API.
 *
 * Called over fetch by src/components/sections/connect.tsx.
 *
 * Setup: put RESEND_API_KEY in .env.local (and in the host's env vars for the
 * deployed site). Resend's shared sender, onboarding@resend.dev, is allowed to
 * deliver to the address that owns the Resend account without verifying a
 * domain - which is this case exactly - so no DNS work is needed to start.
 * To send from your own domain later, verify it with Resend and set
 * CONTACT_FROM to an address on it.
 */

// The Resend SDK is not a dependency; this is one plain fetch call, and using
// the REST API directly keeps the install surface unchanged. Node runtime
// rather than edge, so the throttle map below persists per instance.
export const runtime = 'nodejs'

const RECIPIENT = process.env.CONTACT_TO ?? 'sgogoi2004@gmail.com'
const SENDER = process.env.CONTACT_FROM ?? 'Portfolio Contact <onboarding@resend.dev>'

/**
 * Crude per-IP throttle. In-memory, so it resets on redeploy and is per
 * instance on serverless - it is a speed bump against a script hammering the
 * form, not a security boundary.
 */
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 }
const hits = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter(t => now - t < RATE_LIMIT.windowMs)
  recent.push(now)
  hits.set(ip, recent)
  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every(t => now - t >= RATE_LIMIT.windowMs)) hits.delete(key)
    }
  }
  return recent.length > RATE_LIMIT.max
}

/** The message and name land inside an HTML email, so they must be escaped. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Loud and specific: a silent success here would lose real messages.
    console.error('[contact] RESEND_API_KEY is not set - cannot send mail.')
    return NextResponse.json(
      { error: 'The contact form is not configured yet. Please email me directly.' },
      { status: 503 }
    )
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages just now. Please try again in a few minutes.' },
      { status: 429 }
    )
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Malformed request.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Please check the form and try again.' },
      { status: 400 }
    )
  }

  const { fullName, email, message } = parsed.data
  const receivedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  })

  const text = [
    `New message from your portfolio`,
    ``,
    `Name:    ${fullName}`,
    `Email:   ${email}`,
    `Received: ${receivedAt} IST`,
    ``,
    `Message:`,
    message,
    ``,
    `--`,
    `Reply directly to this email to answer ${fullName}.`,
  ].join('\n')

  const html = `
<div style="margin:0;padding:24px;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
    <tr>
      <td style="background:linear-gradient(90deg,#00b3b3,#8b5cf6);padding:20px 28px;">
        <h1 style="margin:0;font-size:17px;line-height:1.4;color:#ffffff;font-weight:600;">
          New message from your portfolio
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding:28px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-size:14px;color:#18181b;">
          <tr>
            <td style="padding:0 0 10px;width:90px;color:#71717a;">Name</td>
            <td style="padding:0 0 10px;font-weight:600;">${escapeHtml(fullName)}</td>
          </tr>
          <tr>
            <td style="padding:0 0 10px;color:#71717a;">Email</td>
            <td style="padding:0 0 10px;">
              <a href="mailto:${escapeHtml(email)}" style="color:#0891b2;text-decoration:none;font-weight:600;">${escapeHtml(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:0 0 10px;color:#71717a;">Received</td>
            <td style="padding:0 0 10px;color:#52525b;">${escapeHtml(receivedAt)} IST</td>
          </tr>
        </table>

        <div style="margin:22px 0 0;padding:18px 20px;background:#fafafa;border-left:3px solid #00b3b3;border-radius:6px;">
          <div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#71717a;margin-bottom:8px;">Message</div>
          <div style="font-size:15px;line-height:1.65;color:#18181b;white-space:pre-wrap;">${escapeHtml(message)}</div>
        </div>

        <p style="margin:22px 0 0;font-size:13px;color:#71717a;line-height:1.6;">
          Reply directly to this email to answer ${escapeHtml(fullName)}.
        </p>
      </td>
    </tr>
  </table>
</div>`.trim()

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: SENDER,
        to: [RECIPIENT],
        // So hitting reply in the inbox goes to the visitor, not to Resend.
        reply_to: email,
        subject: `Portfolio message from ${fullName}`,
        text,
        html,
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('[contact] Resend rejected the send:', response.status, detail)
      return NextResponse.json(
        { error: 'Could not send the message right now. Please try again shortly.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] Network error talking to Resend:', error)
    return NextResponse.json(
      { error: 'Could not reach the mail service. Please try again shortly.' },
      { status: 502 }
    )
  }
}
