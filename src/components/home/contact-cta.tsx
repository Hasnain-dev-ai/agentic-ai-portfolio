"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="rounded-full bg-muted p-6 md:p-8">
            <div className="rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-px">
              <div className="rounded-full bg-background p-6 md:p-8">
                <motion.div
                  initial={{ scale: 0.8, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", repeatDelay: 5 }}
                  className="text-4xl md:text-5xl"
                >
                  👋
                </motion.div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can collaborate to bring your vision
            to life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="mt-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

