// import { VercelRequest, VercelResponse } from '@vercel/node';
// import axios from 'axios';

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   // 🔧 Properly parse the body first
//   const rawBody = await new Promise<string>((resolve, reject) => {
//     let data = "";
//     req.on("data", chunk => (data += chunk));
//     req.on("end", () => resolve(data));
//     req.on("error", reject);
//   });

//   let body;
//   try {
//     body = JSON.parse(rawBody);
//   } catch (err) {
//     return res.status(400).json({ error: 'Invalid JSON payload' });
//   }

//   const { token, user_name, user_email, message } = body;

//   // 🛡️ Verify reCAPTCHA
//   try {
//     const verifyResponse = await axios.post(
//       'https://www.google.com/recaptcha/api/siteverify',
//       new URLSearchParams({
//         secret: process.env.RECAPTCHA_SECRET_KEY!,
//         response: token,
//       })
//     );

//     const recaptchaData = verifyResponse.data;

//     if (!recaptchaData.success) {
//       return res.status(400).json({
//         error: 'reCAPTCHA verification failed',
//         details: recaptchaData['error-codes'],
//       });
//     }
//   } catch (err) {
//     return res.status(500).json({
//       error: 'Error verifying reCAPTCHA',
//       details: err instanceof Error ? err.message : err,
//     });
//   }

//   console.log("BODY:", body);
//   console.log("SECRET:", process.env.RECAPTCHA_SECRET_KEY?.slice(0, 6));

//   // ✉️ Send email
//   try {
//     await axios.post(
//       'https://api.emailjs.com/api/v1.0/email/send',
//       {
//         service_id: process.env.EMAILJS_SERVICE_ID,
//         template_id: process.env.EMAILJS_TEMPLATE_ID,
//         user_id: process.env.EMAILJS_PRIVATE_KEY,
//         template_params: {
//           user_name,
//           user_email,
//           message,
//         },
//       },
//       {
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );

//     return res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error: any) {
//     console.error('EmailJS send error:', error.response?.data || error.message);
//     return res.status(500).json({
//       error: 'Failed to send email',
//       details: error.response?.data || error.message,
//     });
//   }
// }
