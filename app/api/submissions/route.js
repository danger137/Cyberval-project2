import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const submissions = await prisma.submission.findMany({
      include: {
        form: true
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Flatten the dynamic data for easier frontend consumption
    const formattedSubmissions = submissions.map(sub => ({
      id: sub.id,
      formName: sub.form.name,
      ... (typeof sub.data === 'object' ? sub.data : {}),
      createdAt: sub.createdAt
    }));

    return NextResponse.json(formattedSubmissions);
  } catch (error) {
    console.error("[SUBMISSIONS_GET]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// Public endpoint for submitting form data
export async function POST(req) {
  try {
    const body = await req.json();
    const { formId, data } = body;

    if (!formId || !data) {
      return NextResponse.json({ error: "Missing formId or data" }, { status: 400 });
    }

    const submission = await prisma.submission.create({
      data: {
        formId,
        data
      },
    });

    // Fetch form name for better notification
    const form = await prisma.customForm.findUnique({
      where: { id: formId },
      select: { name: true }
    });

    // Also create a notification for the admin
    await prisma.notification.create({
      data: {
        title: "New Form Submission",
        message: `You have a new inquiry from the "${form?.name || formId}" form.`,
        type: "FORM_SUBMISSION"
      }
    });

    // --- Nodemailer Integration ---
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const clientEmail = data.email;
      const clientName = `${data.firstName || ""} ${data.lastName || ""}`.trim() || "Valued Client";

      if (clientEmail) {
        await transporter.sendMail({
          from: process.env.SMTP_FROM,
          to: clientEmail,
          subject: "Thank you for contacting Cybervol",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #2E5A88;">Hello ${clientName},</h2>
              <p>Thank you for reaching out to Cybervol. We have received your inquiry and our team will get back to you shortly.</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p><strong>Your Inquiry Details:</strong></p>
              <p><strong>Message:</strong> ${data.message || "N/A"}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 12px; color: #888;">This is an automated response. Please do not reply to this email.</p>
            </div>
          `,
        });
      }

      // Also send a notification to the admin
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.SMTP_USER, // Sending to the admin email
        subject: "New Website Inquiry",
        text: `New submission from ${clientName} (${clientEmail}):\n\nMessage: ${data.message}`,
      });

    } catch (mailError) {
      console.error("[MAIL_ERROR]", mailError);
      // We don't return error here because the submission was already saved to DB
    }

    return NextResponse.json(submission);
  } catch (error) {
    console.error("[SUBMISSION_POST]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
