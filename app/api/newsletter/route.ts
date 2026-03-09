import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/mailer'
import { subscribe } from '@/lib/newsletter'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    if (!email) {
      return NextResponse.json({ error: 'Email address is required' }, { status: 400 })
    }

    // attempt to subscribe to SendGrid list
    const result = await subscribe(email)
    if (!result.success) {
      console.warn('[newsletter] subscription failed', result.message)
      // still continue, maybe provider down
    }

    // notify owner of new signup
    await sendEmail({
      subject: `[Newsletter] New subscriber: ${email}`,
      html: `<p>New newsletter signup: <strong>${email}</strong></p>`,
    })

    // optionally send a confirmation to subscriber
    try {
      await sendEmail({
        to: email,
        subject: `You're subscribed!`,
        html: `<p>Thanks for subscribing to the Alpacas Ibiza newsletter. We'll keep you posted with farm news, new products, and special offers.</p>`,
      })
    } catch (subErr) {
      console.warn('[newsletter] confirmation email failed', subErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[newsletter] error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
