"use client";

import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
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
        {session && (
          <Link href="/write">
            <Pencil className="w-5 h-5" />
          </Link>
        )}
        <ThemeToggle />
        {session ? (
          <button onClick={() => signOut()} className="text-sm">Logout</button>
        ) : (
          <Link href="/login" className="text-sm">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
