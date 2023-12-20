import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { searchParams } = new URL(req.url);

    const id = parseInt(searchParams.get("id"));

    const reqBody = await req.json();

    const prisma = new PrismaClient();

    const result = await prisma.users.update({
        where : {id : id},
        data : reqBody
    })

    return NextResponse.json({ status: "Success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "Fail", data: e });
  }
}
