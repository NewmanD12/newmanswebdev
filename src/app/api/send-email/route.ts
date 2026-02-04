import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Newman\'s Web Dev <hello@newmanswebdev.com>', // Change later to your domain
      to: ['dnewman@newmanswebdev.com'],
      subject: `New Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message:
${message}
      `.trim()
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}