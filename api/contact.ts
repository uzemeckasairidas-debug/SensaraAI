import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, need, message } = req.body ?? {};

    if (!name || !email || !need) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'SensaraAI <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL ?? 'uzemeckasairidas@gmail.com'],
      subject: `New SensaraAI inquiry from ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || '—'}`,
        `Need: ${need}`,
        '',
        'Message:',
        message || '—',
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
