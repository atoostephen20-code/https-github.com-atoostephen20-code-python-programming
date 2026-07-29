import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    // TODO: Replace this stub with an integration to SendGrid/Mailgun/HubSpot/CRM.
    console.log('Contact form submission:', data)

    // Example validation
    if (!data.email || !data.name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Return success
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
