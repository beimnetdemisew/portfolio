import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
const fromAddress = process.env.RESEND_FROM || "Contact Form <onboarding@resend.dev>"
const toAddress = process.env.RESEND_TO || "beimnetdemisew@gmail.com"

// Do NOT instantiate Resend at module evaluation time. Instantiating it
// without an API key will throw during build on platforms like Vercel.
// We'll create the client inside the request handler after checking the
// presence of the API key.

export async function POST(request: NextRequest) {
    try {
        if (!resendApiKey) {
            return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
        }
    // Instantiate the Resend client here so that builds won't fail
    // when the API key isn't present in the environment.
    const resend = new Resend(resendApiKey)
        const { name, email, message } = await request.json()

        // console.log("email: ", email, "  name: ", name, "   message: ", message)

        // Validate the data
        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 })
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: fromAddress,
            to: [toAddress],
            subject: `New Contact Form Message from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8b5cf6; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
            // Also send a plain text version
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

Reply to: ${email}
      `,
        })

        if (error) {
            console.error("Resend error:", error)
            return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
        }

        // Send auto-reply to the person who contacted you
        await resend.emails.send({
            from: fromAddress,
            to: [email],
            subject: "Thanks for reaching out!",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">Thanks for reaching out, ${name}!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for your message. I've received your inquiry and will get back to you as soon as possible, usually within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Your message:</strong></p>
            <p style="font-style: italic; color: #666; margin: 10px 0 0 0;">"${message}"</p>
          </div>
          
          <p>Best regards,<br>Beimnet Demisew</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            This is an automated response. Please don't reply to this email.
          </p>
        </div>
      `,
        })

        return NextResponse.json(
            {
                message: "Message sent successfully! You'll receive a confirmation email shortly.",
            },
            { status: 200 },
        )
    } catch (error) {
        console.error("Contact form error:", error)
        return NextResponse.json(
            {
                error: "Failed to send message. Please try again later.",
            },
            { status: 500 },
        )
    }
}
