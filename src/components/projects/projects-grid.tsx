"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Github, ExternalLink } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, TypeScript, and Sanity.io",
    image: "/placeholder",
    tags: ["Next.js", "TypeScript", "Sanity.io", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Frontend",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered content generator using Python and OpenAI's GPT models",
    image: "/placeholder",
    tags: ["Python", "Flask", "OpenAI", "React"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Backend",
  },
  {
    id: 3,
    title: "Real-time Dashboard",
    description: "A real-time analytics dashboard with data visualization",
    image: "/placeholder",
    tags: ["Next.js", "TypeScript", "D3.js", "WebSockets"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "A cross-platform fitness tracking application",
    image: "/placeholder",
    tags: ["React Native", "TypeScript", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Others",
  },
  {
    id: 5,
    title: "Personal Blog",
    description: "A blog built with Next.js and Sanity.io for content management",
    image: "/placeholder",
    tags: ["Next.js", "Sanity.io", "Tailwind CSS", "MDX"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Tools",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "A weather forecast application with location-based services",
    image: "/placeholder",
    tags: ["React", "TypeScript", "Weather API", "Geolocation"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Frontend",
  },
]

const categories = ["All", "Frontend", "Backend", "Tools", "Others"]

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "filter-tab font-bold px-6 py-2 rounded-full",
                activeCategory === category && "active"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="bento-grid-12">
          {filteredProjects.map((project, index) => {
            // Bento Spanning Logic
            let spanClass = "col-span-12 md:col-span-6 lg:col-span-4"; // Default
            if (index === 0) spanClass = "col-span-12 md:col-span-8 lg:col-span-8 row-span-2";
            if (index === 1) spanClass = "col-span-12 md:col-span-4 lg:col-span-4";
            if (index === 2) spanClass = "col-span-12 md:col-span-4 lg:col-span-4";
            if (index === 5) spanClass = "col-span-12 md:col-span-12 lg:col-span-6";
            if (index === 6) spanClass = "col-span-12 md:col-span-12 lg:col-span-6";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(spanClass, "group")}
              >
                <Card className="flex flex-col h-full bg-card/95 border-border shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width={800}
                      height={500}
                    />
                    <div className="absolute top-3 right-3 flex flex-wrap gap-2 justify-end">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="modern">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="flex justify-between items-start mb-2 text-xs font-bold uppercase tracking-widest text-indigo-500/80">
                      {project.category}
                    </div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="grid grid-cols-2 gap-4 pt-4 border-t border-border/10">
                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent border-border text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </a>
                    </Button>
                    <Button variant="default" size="sm" asChild className="w-full font-bold bg-black dark:bg-white text-white dark:text-black">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Preview
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

