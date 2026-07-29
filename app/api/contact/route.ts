import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    console.log('Contact form submission:', data)

    if (!data.email || !data.name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // If SendGrid is configured, send an email
    if (process.env.SENDGRID_API_KEY && process.env.SITE_CONTACT_EMAIL) {
      const msg = {
        to: process.env.SITE_CONTACT_EMAIL,
        from: process.env.SITE_CONTACT_EMAIL,
        subject: `New contact from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nMessage:\n${data.message}`
      }

      try {
        await sgMail.send(msg)
        return NextResponse.json({ ok: true }, { status: 200 })
      } catch (err) {
        console.error('SendGrid error', err)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }
    }

    // Fallback: log and return success (development)
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
