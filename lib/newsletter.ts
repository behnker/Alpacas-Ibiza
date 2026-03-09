import fetch from 'node-fetch'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const SENDGRID_LIST_ID = process.env.SENDGRID_LIST_ID // optional
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'hello@alpacasibiza.com'

if (!SENDGRID_API_KEY) {
  console.warn('[newsletter] SENDGRID_API_KEY not defined; newsletter functionality will be disabled.')
}

interface NewsletterResponse {
  success: boolean
  message?: string
}

/**
 * subscribes an email address to the SendGrid Marketing list
 */
export async function subscribe(email: string): Promise<NewsletterResponse> {
  if (!SENDGRID_API_KEY) {
    return { success: false, message: 'API key not configured' }
  }

  const url = 'https://api.sendgrid.com/v3/marketing/contacts'
  const body: any = { contacts: [{ email }] }
  if (SENDGRID_LIST_ID) {
    body.list_ids = [SENDGRID_LIST_ID]
  }

  const res = await fetch(url, {
    method: 'PUT', // PUT to upsert
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('[newsletter] sendgrid error', res.status, text)
    return { success: false, message: `SendGrid error ${res.status}` }
  }

  return { success: true }
}
