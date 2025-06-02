"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { SiGithub, SiLinkedin, SiX } from "react-icons/si"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-12 px-6 bg-card/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                {/* Logo */}
                <Image src="/profile.png"
                alt="Logo" width={40} height={40} />
              </div>
              <span className="font-bold text-xl">Hasnain Ahmed</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              Web & Agentic AI Developer specializing in TypeScript, Next.js, Python and Sanity.io. Building modern,
              responsive, and user-friendly web applications.
            </motion.p>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-semibold text-lg mb-4"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </motion.ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-semibold text-lg mb-4"
            >
              Connect
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <SiGithub className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <SiLinkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <SiX className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hasnainzahoor1996@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email in Gmail"
>
  <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
</Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground"
        >
          © {currentYear} Hasnain Ahmed. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

