import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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

    return NextResponse.json(submission);
  } catch (error) {
    console.error("[SUBMISSION_POST]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
