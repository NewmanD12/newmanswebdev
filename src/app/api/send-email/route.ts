import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // ────────────────────────────────────────────────
    // 1. Extract and verify Turnstile token
    // ────────────────────────────────────────────────
    const token = formData.get('cf-turnstile-response') as string | null;

    if (!token) {
      return NextResponse.json(
        { error: 'Missing verification token. Please complete the challenge.' },
        { status: 400 }
      );
    }

    // Verify with Cloudflare
    const verificationRes = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: token,
          // Optional: helps detect abuse better
          remoteip:
            req.headers.get('x-forwarded-for') ||
            req.headers.get('cf-connecting-ip') ||
            '',
        }),
      }
    );

    const verification = await verificationRes.json();

    if (!verification.success) {
      console.error('Turnstile verification failed:', verification['error-codes']);
      return NextResponse.json(
        {
          error:
            'Verification failed. Please prove you are not a robot and try again.',
        },
        { status: 400 }
      );
    }

    // ────────────────────────────────────────────────
    // 2. Proceed with form processing (only if verified)
    // ────────────────────────────────────────────────
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = (formData.get('phone') as string) || 'Not provided';
    const message = formData.get('message') as string;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const files = formData.getAll('pictures') as File[];

    const attachments = await Promise.all(
      files.map(
        async (
          file
        ): Promise<
          { filename: string; content: string; contentType?: string } | null
        > => {
          if (!file || file.size === 0 || !file.name) return null;

          try {
            const buffer = Buffer.from(await file.arrayBuffer());
            return {
              filename: file.name,
              content: buffer.toString('base64'),
              contentType: file.type || undefined,
            };
          } catch (err) {
            console.error(`Failed to process file ${file.name}:`, err);
            return null;
          }
        }
      )
    );

    const validAttachments = attachments.filter(
      (att): att is NonNullable<typeof att> => att !== null
    );

    // ────────────────────────────────────────────────
    // 3. Send email via Resend
    // ────────────────────────────────────────────────
    const { data, error } = await resend.emails.send({
      from: "Newman's Web Dev <hello@newmanswebdev.com>",
      to: ['dnewman@newmanswebdev.com'],
      subject: `New Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message}
${
  validAttachments.length > 0
    ? `\nAttachments: ${validAttachments.length} file(s)`
    : ''
}
      `.trim(),
      replyTo: email,
      attachments:
        validAttachments.length > 0 ? validAttachments : undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error('Route error:', err);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again later.' },
      { status: 500 }
    );
  }
}