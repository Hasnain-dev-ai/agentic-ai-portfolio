"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ProjectsHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <Badge variant="modern" className="px-4 py-1.5 rounded-full mb-4">
            My Work
          </Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Explore My <span className="vibrant-text">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[700px] text-muted-foreground md:text-xl mx-auto"
        >
          A collection of my work showcasing my skills and expertise in web development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-2xl mt-10 mx-auto"
        >
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-black dark:group-focus-within:text-white transition-colors" />
            <Input
              type="search"
              placeholder="Search projects by name, tech or category..."
              className="w-full pl-12 pr-4 h-14 bg-white dark:bg-zinc-900 border-border border-2 rounded-2xl focus-visible:ring-black dark:focus-visible:ring-white transition-all text-lg shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

