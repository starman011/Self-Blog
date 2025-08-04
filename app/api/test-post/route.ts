import { connectDB } from "@/lib/utils";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    // Create a sample post (if it doesn't already exist)
    const existing = await Post.findOne({ slug: "Intro-post" });

    if (!existing) {
      const newPost = await Post.create({
        title: "Introduction",
        slug: "Intro-post",
        content: "This post marks my begining of my odyssey to self journal thoughts on my day to day basis.",
        tags: ["AI", "Tech", "Journal"],
      });

      return NextResponse.json({ status: "created", post: newPost });
    }

    return NextResponse.json({ status: "exists", post: existing });
  } catch (err) {
    return NextResponse.json({ status: "error", error: String(err) }, { status: 500 });
  }
}
