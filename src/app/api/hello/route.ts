// import { NextResponse } from "next/server";

import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<{ message: string }>> {
  //* Route - Create (api/hello)
  return NextResponse.json({
    message: "Hello world!",
  });
}

interface HelloResponseDto {
  message: string;
}

export async function POST(): Promise<NextResponse<HelloResponseDto>> {
  //SERVICE

  //..

  return NextResponse.json({
    message: "Hello!",
  });
}
