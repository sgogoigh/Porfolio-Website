import * as z from 'zod'

/**
 * Shared by the Connect form and the /api/contact route, so the browser and
 * the server enforce exactly the same rules. Client-side validation is a
 * convenience only - the route revalidates, since anything can POST to it.
 */
export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name is too long.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address.' })
    .max(200, { message: 'Email address is too long.' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(500, { message: "Message can't exceed 500 characters." }),
})

export type ContactFormData = z.infer<typeof contactSchema>
