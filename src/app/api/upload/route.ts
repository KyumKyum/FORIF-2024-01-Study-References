// import { NextResponse } from "next/server";

import {NextRequest, NextResponse} from "next/server";
import {writeFile} from "node:fs";
import * as path from 'path'
import prisma from "@/app/api/_client/client";
import generateRandomString from "@/utils/randomString";

interface MemoryDTO{
  id: string,
  filename: string,
  path: string,
  name: string,
  content: string,
}

export async function GET(): Promise<NextResponse<{ data: MemoryDTO[] }>> {
  //* DEMO: Fetch all

  const data: MemoryDTO[] = await prisma.memory.findMany() //* Query All

  return NextResponse.json({
    data
  });
}

export async function POST(req: NextRequest, res: NextResponse){

  const formData = await req.formData();
  const file:File = formData.get("file") as File

  const content: string = formData.get("content") as string
  const name: string = formData.get("name") as string

  if(!file) return NextResponse.json({message: "Not file found"}, {status: 400});
  if(!content) return NextResponse.json({message: "Not content found"}, {status: 400});

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename =  generateRandomString(10) + ".png";
  console.log(filename);

  const dir = path.join(process.cwd(), "public/assets/upload/" + filename)

  await prisma.memory.create({
    data:{
      filename,
      path: dir,
      name,
      content,
    }
  }).catch((err) => {
    console.log("Prisma error ", err)
    return NextResponse.json({status:500})
  });


  try {
    writeFile(
        dir,
        buffer,
        () => {console.log(`File Uploaded with ${filename}`)}
    );
    return NextResponse.json({  status: 201, name: filename});
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ status: 500 });
  }

}
