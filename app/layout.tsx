// app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

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
        {/* ThemeProvider wraps your entire app */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
