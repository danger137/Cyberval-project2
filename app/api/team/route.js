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
    const { name, role, bio, image, linkedin } = body;

    if (!name || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const member = await prisma.teamMember.create({
      data: {
        name,
        designation: role,
        bio,
        imageUrl: image,
        linkedin,
      },
    });

    // Create a notification for the admin
    await prisma.notification.create({
      data: {
        title: "Team Member Added",
        message: `${name} has been added to the team as ${role}.`,
        type: "TEAM_MEMBER_ADDED"
      }
    });

    return NextResponse.json(member);
  } catch (error) {
    console.error("[TEAM_POST]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const team = await prisma.teamMember.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(team);
  } catch (error) {
    console.error("[TEAM_GET]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
