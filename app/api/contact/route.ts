import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, type, message } = await req.json()
    if (!name || !email) return NextResponse.json({ error: 'Name and email required' }, { status: 400 })

    const typeLabels: Record<string, string> = {
      access: 'API Access / Pricing',
      pilot: 'Pilot Program',
      enterprise: 'Enterprise Pricing',
      custom: 'Custom Signal Development',
      other: 'Other',
    }

    await resend.emails.send({
      from: 'Phoebex <hello@phoebex.io>',
      to: ['jordan@ziggytechventures.com'],
      replyTo: email,
      subject: `Phoebex Inquiry: ${typeLabels[type] || type} — ${company || name}`,
      html: `
        <h2>New Phoebex Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${typeLabels[type] || type}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
        <hr/>
        <p style="color:#888;font-size:12px">Sent from phoebex.io contact form</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
