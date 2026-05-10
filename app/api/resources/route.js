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
    const { title, type, category, fileUrl, description, image, content, author } = body;

    if (!title || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resource = await prisma.resource.create({
      data: {
        title,
        type,
        category,
        fileUrl,
        description,
        image,
        content,
        author,
      },
    });

    // Create a notification for the admin
    await prisma.notification.create({
      data: {
        title: "New Resource Added",
        message: `A new ${category || 'Resource'} titled "${title}" has been added.`,
        type: "RESOURCE_ADDED"
      }
    });

    return NextResponse.json(resource);
  } catch (error) {
    console.error("[RESOURCES_POST]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const resources = await prisma.resource.findMany({
      where: category ? { category } : {},
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(resources);
  } catch (error) {
    console.error("[RESOURCES_GET]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
