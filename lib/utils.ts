import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import mongoose from "mongoose";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

// MongoDB connection
let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const mongooseUrl = process.env.MONGODB_URI;

  if (!mongooseUrl) {
    throw new Error("MONGODB_URI is missing in .env.local");
  }

  await mongoose.connect(mongooseUrl);
  isConnected = true;
}
