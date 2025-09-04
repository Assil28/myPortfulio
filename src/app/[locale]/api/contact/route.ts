import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { firstname, lastname, email, phone, service, message } =
    await request.json();

  // Validate request payload
  if (!firstname || !lastname || !email || !phone || !service || !message) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  // Create a transporter
  let transporter = nodemailer.createTransport({
    host: "smtppro.zoho.eu",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your email password or app password
    },
  });

  // Set up email data
  let mailOptions = {
    from: "assil.dkhil28@gmail.com", // Sender address
    to: process.env.EMAIL, // List of receivers
    subject: "New Contact Form Submission",
    text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json(
      { message: "Error sending email", error: (error as Error).toString() },
      { status: 500 }
    );
  }
}
