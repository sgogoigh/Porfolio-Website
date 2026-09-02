'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { Mail, MessageSquare, Send, User } from 'lucide-react'

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: "Message can't exceed 500 characters."}),
})

type FormData = z.infer<typeof formSchema>

/** Shared field chrome: taller, softer, with a cyan focus ring. */
const fieldClass =
  'h-14 short:h-12 rounded-xl border-white/10 bg-white/[0.04] pl-12 text-base ' +
  'placeholder:text-muted-foreground/60 transition-all duration-300 ' +
  'hover:border-white/20 focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/50'

const iconClass =
  'pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground/60 transition-colors peer-focus:text-primary'

export default function Connect() {
  const { toast } = useToast()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const subject = encodeURIComponent(`Connection from ${data.fullName}`)
    const body = encodeURIComponent(`Email: ${data.email}\n\nMessage:\n${data.message}`)
    const mailtoLink = `mailto:sgogoi2004@gmail.com?subject=${subject}&body=${body}`

    window.location.href = mailtoLink

    toast({
      title: "Email Client Opening",
      description: "Your default email client should now be open to send your message.",
    })

    form.reset();
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 short:gap-3">
      <div className="relative text-center">
        {/* Soft bloom behind the wordmark. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/25 to-accent/25 blur-3xl"
        />
        <h2 className="font-headline text-5xl font-bold tracking-tight md:text-7xl short:text-4xl bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent pb-1">
          Let&apos;s Connect
        </h2>
        <p className="mt-2 short:mt-1 text-sm text-muted-foreground md:text-base">
          Have a question or want to work together? Drop me a line.
        </p>
      </div>

      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-card/40 p-5 short:p-3 backdrop-blur-sm md:p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 short:space-y-2.5">
            <div className="grid gap-4 short:gap-2.5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Full Name" {...field} className={`peer ${fieldClass}`} />
                        <User className={iconClass} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input type="email" placeholder="Email" {...field} className={`peer ${fieldClass}`} />
                        <Mail className={iconClass} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Textarea
                        placeholder="What do you wanna talk about?"
                        {...field}
                        rows={4}
                        className={`peer ${fieldClass} h-auto min-h-[7rem] short:min-h-[5rem] py-4 short:py-3 pl-12`}
                      />
                      <MessageSquare className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-muted-foreground/60 transition-colors peer-focus:text-primary" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="group h-14 short:h-12 w-full rounded-xl bg-gradient-to-r from-primary to-accent text-base font-bold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_28px_-4px_hsl(var(--primary)/0.6)] hover:brightness-110"
              disabled={form.formState.isSubmitting}
            >
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
