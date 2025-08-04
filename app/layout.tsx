import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import NavBar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Self Blog",
  description: "A personal blogging platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </Providers>
        </ThemeProvider>

        {/* ✅ These are now correctly used */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
