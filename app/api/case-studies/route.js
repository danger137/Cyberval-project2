import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, client, description, image, category, date } = body;

    if (!title || !client || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const caseStudy = await prisma.caseStudy.create({
      data: {
        title,
        client,
        description,
        images: image ? [image] : [],
        category,
        date: date ? new Date(date) : new Date(),
      },
    });

    return NextResponse.json(caseStudy);
  } catch (error) {
    console.error("[CASE_STUDIES_POST]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const caseStudies = await prisma.caseStudy.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(caseStudies);
  } catch (error) {
    console.error("[CASE_STUDIES_GET]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
