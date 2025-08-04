// app/api/categories/route.ts
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Post from "@/models/Post"; // adjust path if needed

export const runtime = "nodejs";

export async function GET() {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI || "");
    }

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
