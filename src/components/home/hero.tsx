"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, ArrowRight, Code, Database, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_50%)]" />

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
              >
                Web & Agentic AI Developer
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Crafting Intelligent Digital{" "}
                <span className="gradient-text">Experiences</span> with AI & Code
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                Specializing in TypeScript, Next.js, Python, and modern AI agent architectures 
                to build autonomous, responsive, and user-friendly applications.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  Hire Me
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1">
              <div className="h-full w-full rounded-full bg-background p-4">
                <div className="h-full w-full rounded-full bg-muted overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Developer"
                    className="h-full w-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
