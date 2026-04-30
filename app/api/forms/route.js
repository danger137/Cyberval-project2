import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Fetch the main custom form (assuming we use one main form for now)
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const form = await prisma.customForm.findFirst({
      orderBy: {
        updatedAt: "desc",
      },
    });

    return NextResponse.json(form);
  } catch (error) {
    console.error("[FORMS_GET]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// Save or Update the form structure
export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, description, fields } = body;

    // Check if a form already exists
    const existingForm = await prisma.customForm.findFirst();

    let form;
    if (existingForm) {
      form = await prisma.customForm.update({
        where: { id: existingForm.id },
        data: {
          name,
          description,
          fields,
        },
      });
    } else {
      form = await prisma.customForm.create({
        data: {
          name,
          description,
          fields,
        },
      });
    }

    return NextResponse.json(form);
  } catch (error) {
    console.error("[FORMS_POST]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
