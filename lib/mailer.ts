import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const DEFAULT_TO = process.env.CONTACT_EMAIL ?? 'info@alpacasibiza.com'
const FROM_EMAIL = `Alpacas Ibiza Website <noreply@alpacasibiza.com>`

export interface SendEmailOptions {
  subject: string
  html: string
  to?: string
  replyTo?: string
}

/**
 * Wrapper around Resend.emails.send to centralize error handling and defaults.
 */
export async function sendEmail({
  subject,
  html,
  to = DEFAULT_TO,
  replyTo,
}: SendEmailOptions) {
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject,
    html,
    replyTo,
  })

  if (error) {
    // Resend returns an object with error.data containing message etc.
    throw new Error(error.message || 'Unknown email error')
  }

  return true
}
