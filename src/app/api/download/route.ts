import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { file } = await req.json();

    if (!file) {
      return NextResponse.json({ error: "File parameter required" }, { status: 400 });
    }

    // Log download event
    console.log("📄 File downloaded:", {
      file,
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Download logging error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
