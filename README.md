# Sunny Gogoi — Portfolio

A single-page Next.js portfolio. Every section is exactly one viewport tall and
snaps into place; there is no separate backend.

```bash
npm install
npm run dev     # http://localhost:9002
```

## Swapping the resume

1. Drop the new PDF into `public/`.
2. Change `resume.file` in [`src/lib/data.ts`](src/lib/data.ts) to its filename.

That is the whole job. `downloadAs` in the same object is the name the
visitor's browser saves it as, so the file in `public/` can be called anything
convenient.

The PDF is served from this origin rather than a Google Drive share link
deliberately — the `download` attribute is ignored cross-origin, so a Drive
link can only open the file in Drive's viewer instead of saving it.

## Contact form

The Connect form posts to [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts),
which sends the message to `sgogoi2004@gmail.com` server-side through
[Resend](https://resend.com). Replying in the inbox goes straight back to the
sender, because the route sets `reply_to` to their address.

**It needs one environment variable to work.** Without it the route answers 503
and the form tells the visitor the form is not configured — it does not fail
silently.

1. Sign up at [resend.com](https://resend.com) **with sgogoi2004@gmail.com**.
   Resend's shared sender is allowed to deliver to the address that owns the
   account without verifying a domain, so this works with no DNS setup.
2. Create an API key.
3. Add it to `.env.local` in the project root:

   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   ```

4. Restart `npm run dev`.

When deploying, add the same variable to the host's environment settings —
`.env.local` is gitignored and is not deployed.

Two optional overrides, both with sensible defaults: `CONTACT_TO` (recipient)
and `CONTACT_FROM` (sender; needs a Resend-verified domain to be anything other
than the shared address).

## Notes

- **Fonts.** Eagle Horizon (the hero wordmark) is self-hosted from
  `src/app/fonts` via `next/font/local`. Its licence is **free for personal use
  only** — commercial use of this site needs a licence from Letterara Studio.
- **Layout constraint.** Sections are one viewport tall with `overflow-hidden`
  as a backstop, so any content that grows has to be paid for elsewhere. The
  custom `short:` breakpoint (`max-height: 720px`) tightens the expandable
  sections. The `gutter:` breakpoint (`min-width: 1360px`) gates the decorative
  side artwork.
- **AI scaffolding.** `src/ai/genkit.ts` is unused starter code from the
  Firebase Studio template. `firebase` is likewise in `package.json` but never
  imported.
