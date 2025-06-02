"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { useState } from "react"

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false)

      // Create a fake download link
      const link = document.createElement("a")
      link.href = "#" // In a real scenario, this would be the URL to your resume PDF
      link.setAttribute("download", "developer-resume.pdf")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 1500)
  }

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Resume</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Download My <span className="gradient-text">Resume</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Get a comprehensive overview of my skills, experience, and education in a downloadable PDF format.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <div className="flex items-center">
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Downloading...
                </div>
              ) : (
                <div className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </div>
              )}
            </Button>

            <motion.div
              className="absolute -z-10 inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 blur-md opacity-50"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          <div className="flex items-center justify-center mt-4">
            <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">PDF format, 2 pages</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

