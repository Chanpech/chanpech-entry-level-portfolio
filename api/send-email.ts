import { VercelRequest, VercelResponse } from '@vercel/node';
import emailjs from '@emailjs/browser';

export default async function handler(req: VercelRequest, res: VercelResponse){
    if (req.method !== 'POST'){
        return res.status(405).json({error: 'Method not allowed'});
    }

    const { user_name, user_email, message } = req.body;

    try {
        const result = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID!,
            process.env.EMAILJS_TEMPLATE_ID!,
            { user_name, user_email, message },
            process.env.EMAILJS_PRIVATE_KEY!,
        );

        if(result.text === 'OK'){
            return res.status(200).json({message: 'Email sent sucessfully'});
        }else{
            return res.status(500).json({ error: 'Failed to send email'});
        }
    }catch(err){
        console.error(err);
        return res.status(500).json({error : 'something went wrong'});
    }
}