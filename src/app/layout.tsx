import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SkipToContent from "@/components/shared/skip-to-content";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description:
    "Web & Agentic AI Developer Developer Portfolio showcasing TypeScript, Next.js, Python and Sanity.io projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SkipToContent />
          <div className="relative flex min-h-screen flex-col items-center"> {/* Added items-center */}
            <div className="w-full max-w-screen-xl px-2 sm:px-4 lg:px-6"> {/* Added this wrapper */}
              <Header />
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}