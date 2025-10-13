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

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: "Message can't exceed 500 characters."}),
})

type FormData = z.infer<typeof formSchema>

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
    <div className="flex flex-col h-full w-full">
      <div className="flex-grow flex flex-col items-center justify-center gap-8 w-full">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Connect</h2>
        <p className="text-muted-foreground text-center max-w-md">
          Have a question or want to work together? Drop me a line!
        </p>
        <div className="w-full max-w-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} className="bg-input border-white/10 focus-visible:ring-primary" />
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
                      <Input type="email" placeholder="Email" {...field} className="bg-input border-white/10 focus-visible:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="What do you wanna talk about!" {...field} rows={5} className="bg-input border-white/10 focus-visible:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 hover:shadow-[0_0_20px_0px_hsl(var(--primary)/0.5)] transition-all duration-300"
                disabled={form.formState.isSubmitting}
              >
                Connect
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
