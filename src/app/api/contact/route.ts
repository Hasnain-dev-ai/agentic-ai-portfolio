import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "@/emails/contact-email";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_EMAIL_TO;

// Define the schema for the request body using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate the request body against the schema
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      // If validation fails, return a 400 response with the errors
      return NextResponse.json(
        { error: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;

    // --- FIX APPLIED HERE ---
    // Change the "Portfolio Contact Form" text to your desired sender name.
    // The email part MUST remain a verified domain/email address in Resend (like onboarding@resend.dev).
    const SENDER_NAME = "Hasnain's Portfolio"; 
    
    // 2. Send the email using Resend
    const { error } = await resend.emails.send({
      // 🚨 FIX: Updated the displayed name in the 'from' field
      from: `${SENDER_NAME} <onboarding@resend.dev>`, 
      
      to: toEmail!,
      subject: `New Portfolio Message: ${subject}`,
      
      // ✅ Great job using 'replyTo'! This ensures your reply goes to the user's email.
      replyTo: email,
      
      react: ContactEmail({ name, email, subject, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    // 3. Return a success response
    return NextResponse.json({ message: "Message sent successfully!" });

  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}