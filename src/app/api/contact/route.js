// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
// You'd use a library like nodemailer here to send an email
// import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Here you would implement your email sending logic
    // For example, using nodemailer:
    /*
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email, // Sender's email
      to: process.env.CONTACT_EMAIL_RECIPIENT, // Your email
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    */

    console.log('Form data received:', data); // Log for now
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));


    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Error sending message.' }, { status: 500 });
  }
}