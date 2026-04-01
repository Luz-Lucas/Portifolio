import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // Validate API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service not configured. Please contact the site owner." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, subject, and message are required" },
      { status: 400 }
    );
  }

  // Send email using Resend SDK
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev", // Replace with your verified domain: "Lucas <noreply@yourdomain.com>"
    to: "lucaspmluz@hotmail.com",
    replyTo: email,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Message from Your Portfolio Contact Form</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6; margin: 0;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </div>
        <p style="color: #888; font-size: 12px; margin-top: 20px;">
          Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
  });

  // Handle Resend API errors
  if (error) {
    console.error("Resend API error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }

  // Success response
  console.log("Email sent successfully:", data?.id);
  return NextResponse.json(
    { success: true, message: "Email sent successfully", id: data?.id },
    { status: 200 }
  );
}
