import type React from "react";
import type { Metadata } from "next";
import { Inter, Montez } from "next/font/google";
import { cn } from "@/lib/utils"; // For cleaner class name management
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SkipToContent from "@/components/shared/skip-to-content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Good practice for Tailwind font setup
});

const montez = Montez({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-montez',
});

export const metadata: Metadata = {
  // Using a template for dynamic page titles is a great pattern
  title: {
    default: "Hasnain Ahmed | Web & AI Developer",
    template: "%s | Hasnain Ahmed",
  },
  description: "The developer portfolio of Hasnain Ahmed, specializing in modern web development with Next.js, TypeScript, and Agentic AI workflows.",
  // Add more metadata for better SEO
  keywords: ["Hasnain Ahmed", "Web Developer", "AI Developer", "Next.js", "React", "Portfolio"],
  creator: "Hasnain Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          inter.variable,
          montez.variable
        )}
      >
        {/* Global Fallback Gradient */}
        <div className="fixed inset-0 w-full h-full -z-50 bg-page-base-gradient pointer-events-none" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="relative flex min-h-dvh flex-col">
              <SkipToContent />
              {/* <Header /> */}
              <Navbar />
              <main id="main-content" className="flex-1 pt-16 px-4 sm:px-6 lg:px-8">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster richColors position="top-right" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}