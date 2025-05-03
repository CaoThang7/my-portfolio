import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `[Contact] ${subject}`,
      replyTo: email,
      html: `
          <div style="font-family: Arial, sans-serif; padding: 10px; color: #333;">
            <h2 style="color: #e63946;">📩 New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="padding: 10px; background-color: #f1f1f1; border-left: 4px solid #e63946; margin-top: 5px;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
            <hr style="margin-top: 20px;" />
            <p style="font-size: 12px; color: #888;">This email was sent from the contact form on your website.</p>
          </div>
        `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
