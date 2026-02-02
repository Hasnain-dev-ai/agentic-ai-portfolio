// src/components/layout/footer.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { SiGithub, SiLinkedin, SiX } from "react-icons/si"

export default function Footer() {
  const currentYear = new Date().getFullYear()


  return (
    
    <footer className="w-full py-12 px-6 bg-[var(--gradient-surface)] border-t border-[var(--gradient-card-border)] backdrop-blur-sm">
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
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-[var(--gradient-primary)] shadow-sm">
                <Image src="/ha.png" alt="Logo" width={40} height={40} />
              </div>
              <span className="font-bold text-xl text-foreground">Hasnain Ahmed</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              Web & Agentic AI developer. Specializing in TypeScript, Next.js, Python, and modern AI agent architectures
              to build autonomous, responsive, and user-friendly applications.
            </motion.p>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-semibold text-lg mb-4 text-[var(--color-text-primary)] dark:text-[var(--dark-color-text-primary)]"
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
                <Link href="/" className="text-[var(--color-text-secondary)] hover:text-[var(--color-link-hover-light)] transition-colors dark:text-[var(--dark-color-text-secondary)] dark:hover:text-[var(--dark-color-link-hover-dark)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[var(--color-text-secondary)] hover:text-[var(--color-link-hover-light)] transition-colors dark:text-[var(--dark-color-text-secondary)] dark:hover:text-[var(--dark-color-link-hover-dark)]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-[var(--color-text-secondary)] hover:text-[var(--color-link-hover-light)] transition-colors dark:text-[var(--dark-color-text-secondary)] dark:hover:text-[var(--dark-color-link-hover-dark)]">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-link-hover-light)] transition-colors dark:text-[var(--dark-color-text-secondary)] dark:hover:text-[var(--dark-color-link-hover-dark)]">
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
              className="font-semibold text-lg mb-4 text-[var(--color-text-primary)] dark:text-[var(--dark-color-text-primary)]"
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
              {/* GitHub - Remains grayscale by brand */}
              <Link
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--color-muted-foreground)] transition-colors duration-200
                           hover:text-github dark:hover:text-white" // Use defined github color, or white for dark
              >
                <SiGithub className="w-5 h-5" />
              </Link>
              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--color-muted-foreground)] transition-colors duration-200
                           hover:text-linkedin dark:hover:text-linkedin" // Use defined linkedin color
              >
                <SiLinkedin className="w-5 h-5" />
              </Link>
              {/* X (Twitter) - Remains grayscale by brand */}
              <Link
                href="https://x.com/your-x-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[var(--color-muted-foreground)] transition-colors duration-200
                           hover:text-x-black dark:hover:text-white" // Use defined x-black, or white for dark
              >
                <SiX className="w-5 h-5" />
              </Link>
              {/* Email (Gmail like) */}
              <Link
                href="mailto:hasnain.dev.ai@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-[var(--color-muted-foreground)] transition-colors duration-200
                           hover:text-gmail-red dark:hover:text-gmail-red" // Use defined gmail-red color
              >
                <Mail className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-[var(--gradient-card-border)] text-center text-sm text-[var(--color-text-secondary)] dark:text-[var(--dark-color-text-secondary)]"
        >
          © {currentYear} Hasnain Ahmed. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}