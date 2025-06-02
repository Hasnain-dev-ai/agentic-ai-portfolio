"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, TypeScript, and Sanity.io",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "Sanity.io", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Web App",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered content generator using Python and OpenAI's GPT models",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Python", "Flask", "OpenAI", "React"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "AI",
  },
  {
    id: 3,
    title: "Real-time Dashboard",
    description: "A real-time analytics dashboard with data visualization",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "D3.js", "WebSockets"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Web App",
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "A cross-platform fitness tracking application",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "TypeScript", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Mobile App",
  },
  {
    id: 5,
    title: "Personal Blog",
    description: "A blog built with Next.js and Sanity.io for content management",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Sanity.io", "Tailwind CSS", "MDX"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Web App",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "A weather forecast application with location-based services",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "TypeScript", "Weather API", "Geolocation"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Web App",
  },
]

const categories = ["All", "Web App", "Mobile App", "AI", "UI/UX"]

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
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" : ""}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    width={500}
                    height={300}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

