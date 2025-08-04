import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import mongoose from "mongoose";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// MongoDB connection
let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const url = process.env.MONGODB_URI;
  const username = process.env.MONGODB_USERNAME;
  const password = process.env.MONGODB_PASSWORD;
  const dbName = process.env.MONGODB_DB;

  if (!url) {
    throw new Error("MONGODB_URI is missing in .env.local");
  }

  if (!username || !password) {
    throw new Error("MongoDB credentials are missing in .env.local");
  }

  await mongoose.connect(url, {
    auth: { username, password },
    dbName,
  });
  isConnected = true;
}
