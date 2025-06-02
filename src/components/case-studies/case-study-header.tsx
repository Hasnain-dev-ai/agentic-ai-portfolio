"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

// This would typically come from a CMS or API
const getCaseStudyData = (slug: string) => {
  // Mock data for demonstration
  return {
    title: "E-Commerce Platform Redesign",
    description: "How I improved conversion rates by 35% through UX redesign and performance optimization",
    image: "/placeholder.svg?height=600&width=1200",
    date: "March 2025",
    duration: "3 months",
    client: "Fashion Retailer Inc.",
    tags: ["UX/UI", "Performance", "Next.js", "TypeScript"],
  }
}

export default function CaseStudyHeader({ slug }: { slug: string }) {
  const caseStudy = getCaseStudyData(slug)

  return (
    <section className="w-full py-12 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${caseStudy.image})` }} />

      <div className="container px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {caseStudy.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-background/80 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
          >
            {caseStudy.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-6"
          >
            {caseStudy.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{caseStudy.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{caseStudy.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{caseStudy.client}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

