import nodemailer from "nodemailer";

import type { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // e.g., smtp.gmail.com for Gmail
    port: 587, // or 465 for secure
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        try {
            await transporter.sendMail({
                from: `"${name}" <${email}>`, 
                to: process.env.EMAIL_USER, 
                subject: subject || 'Contact Form Submission',
                text: message,
                html: `<p>${message}</p>`,
            });

            return res.status(200).json({ status: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send message' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default handler;
