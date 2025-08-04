// app/api/categories/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/utils";
import Post from "@/models/Post";

export const runtime = "nodejs";

export async function GET() {
  try {
    await connectDB();

    const result = await Post.aggregate([
      { $unwind: "$tags" },
      { $group: { _id: null, uniqueTags: { $addToSet: "$tags" } } },
      { $project: { _id: 0, uniqueTags: 1 } }
    ]);

    const tags = result[0]?.uniqueTags || [];
    return NextResponse.json(tags);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch tags" }, { status: 500 });
  }
}
