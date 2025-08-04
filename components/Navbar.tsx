"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Pencil, FileText, User, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b bg-background sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="font-semibold text-lg">Saqlain Khan&apos;s Blog</span>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/write">
          <Pencil className="w-5 h-5" />
        </Link>
        <Link href="/posts">
          <FileText className="w-5 h-5" />
        </Link>
        <Link href="/profile">
          <User className="w-5 h-5" />
        </Link>
        <Link href="/settings">
          <Settings className="w-5 h-5" />
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
