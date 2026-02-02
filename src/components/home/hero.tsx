"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, Code, Database, Layers, Download, FileText, ChevronDown } from "lucide-react"; // Added ChevronDown
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center space-y-4"> {/* Centering the text content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center mb-8" // Added margin-bottom for spacing
          >
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1">
              <div className="h-full w-full rounded-full bg-background p-2">
                <div className="h-full w-full rounded-full bg-muted overflow-hidden">
                  <Image
                    src="/proprofile.png"
                    alt="Developer"
                    className="h-full w-full object-cover"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <Badge variant="modern" className="px-4 py-1.5 rounded-full mb-4">
                Web & Agentic AI Developer
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            >
              Crafting Intelligent Digital{" "}
              <span className="vibrant-text">Experiences</span> with AI & Code
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[600px] text-muted-foreground md:text-xl mx-auto" // Added mx-auto for horizontal centering
            >
              Specializing in TypeScript, Next.js, Python, and modern AI agent architectures
              to build autonomous, responsive, and user-friendly applications.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row gap-2 justify-center" // Centering buttons
          >
            {/* Resume Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  variant="default"
                  className="bg-black dark:bg-white text-white dark:text-black font-bold h-12 px-8 rounded-full shadow-lg hover:scale-105 transition-all"
                >
                  Resume <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 flex flex-col items-center text-black-400 dark:text-white sm:w-auto sm:block">
                <DropdownMenuItem asChild>
                  {/* Using <Link> for external/new tab behavior */}
                  <a
                    href="/api/resume" // Points to your API route
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" /> View Resume
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/api/resume" // Points to your API route
                    download
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" /> Download PDF
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hire Me Button - Reverted */}
            <Button
              size="lg"
              variant="vibrant-yellow"
              className="h-12 px-8 rounded-full shadow-lg hover:scale-105 transition-all font-bold text-black dark:text-black"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Hire Me
                <ExternalLink size={16} />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground justify-center" // Centering skills
          >
            <div className="flex items-center gap-1">
              <Bot className="h-4 w-4" />
              <span>Agentic AI</span>
            </div>

            <div className="flex items-center gap-1">
              <Code className="h-4 w-4" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-1">
              <Layers className="h-4 w-4" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-1">
              <Database className="h-4 w-4" />
              <span>Python</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}