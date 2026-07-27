import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("WhatsApp Request:", body);

    return NextResponse.json({
      success: true,
      message: "WhatsApp API working",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request",
      },
      { status: 500 }
    );
  }
}