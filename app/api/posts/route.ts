import { connectDB } from "@/lib/utils";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
