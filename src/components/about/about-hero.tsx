"use client"

import { motion } from "framer-motion"
import Image from "next/image"
export default function AboutHero() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_50%)]" />

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="vibrant-badge-glass-3d mb-2">About Me</div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                The Story <span className="vibrant-text">Behind</span> the Code
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                A passionate developer with a love for creating elegant solutions to complex problems. Learn more about
                my journey, experience, and what drives me.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full bg-[var(--gradient-primary)] p-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.2),0_20px_40px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]">
              <div className="h-full w-full rounded-full bg-background p-4">
                <div className="h-full w-full rounded-full bg-muted overflow-hidden">
                  <Image src="/ha2.png"
                    alt="Developer Portrait"
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
  )
}

