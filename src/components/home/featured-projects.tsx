"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
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
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered content generator using Python and OpenAI's GPT models",
    image: "/placeholder",
    tags: ["Python", "Flask", "OpenAI", "React"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Real-time Dashboard",
    description: "A real-time analytics dashboard with data visualization",
    image: "/placeholder",
    tags: ["Next.js", "TypeScript", "D3.js", "WebSockets"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="w-full px-6 py-12 md:py-24">
      <div className="w-full sm:px-2">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge
            variant="modern"
            className="px-4 py-1.5 rounded-full mb-4"
          >
            Featured Projects
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            My Recent <span className="vibrant-text">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[700px] text-muted-foreground md:text-xl"
          >
            Check out some of my latest projects showcasing my skills and expertise.
          </motion.p>
        </div>

        <div className="mt-12 bento-grid-12">
          {projects.map((project, index) => {
            // Bento Spanning for Featured (3 items)
            const spanClass = index === 0
              ? "col-span-12 lg:col-span-8"
              : "col-span-12 md:col-span-6 lg:col-span-4";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link href="/projects">
            <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black font-bold h-12 px-8 rounded-full shadow-xl hover:scale-105 transition-all">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

        </motion.div>
      </div>
    </section>
  )
}