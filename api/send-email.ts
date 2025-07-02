import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { token, user_name, user_email, message } = req.body;

  // 1. Verify reCAPTCHA token with Google
  try {
    const verifyResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: token,
      })
    );

    const recaptchaData = verifyResponse.data;

    if (!recaptchaData.success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed', details: recaptchaData['error-codes'] });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Error verifying reCAPTCHA', details: err });
  }

  // 2. Send email using EmailJS REST API
  try {
    const emailResponse = await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PRIVATE_KEY, // This is your public key in EmailJS dashboard
        template_params: {
          user_name,
          user_email,
          message,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('EmailJS send error:', error.response?.data || error.message);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.response?.data || error.message,
    });
  }
}
