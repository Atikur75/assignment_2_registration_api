import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){

    try{

        const reqBody = await req.json();

        const prisma = new PrismaClient();

        const result = await prisma.users.create({
            data : reqBody
        })

        return NextResponse.json({status : "Succcess", data : result});
    }catch(e){
        return NextResponse.json({status : "Fail", data :e});
    }


}