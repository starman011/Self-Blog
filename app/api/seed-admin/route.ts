import { connectDB } from "@/lib/utils"; // your connectDB is in utils.ts
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const runtime = "nodejs";

export async function GET() {
  try {
    await connectDB();

    const email = "Forprogrammingonly01@gmail.com"; 
    const plainPassword = "Welcometogensler100@@"; 

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ status: "exists", message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    const user = await User.create({ email, password: hashedPassword });

    return NextResponse.json({ status: "created", user: { email: user.email } });
  } catch (err) {
    return NextResponse.json({ status: "error", error: String(err) }, { status: 500 });
  }
}
