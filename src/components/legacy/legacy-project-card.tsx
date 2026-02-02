"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { History, Lightbulb, Clock } from "lucide-react"
import Image from "next/image"

interface LegacyProject {
  id: string
  title: string
  description: string
  year: string
  era: string
  tags: string[]
  legacy_insight: string
  image: string
}

export default function LegacyProjectCard({ project, index }: { project: LegacyProject, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
      className="group"
    >
      <Card className="flex flex-col h-full glass-card-3d bg-card/40 border-border/20 shadow-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-700">
        <div className="relative aspect-video w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opactiy-60 group-hover:opacity-40 transition-opacity duration-700" />
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 sepia-[0.3] group-hover:sepia-0"
            width={800}
            height={500}
          />
          <div className="absolute top-4 left-4 z-20">
            <Badge className="vibrant-badge-glass-3d flex items-center gap-1.5 border-amber-500/30 text-amber-600 dark:text-amber-400">
              <Clock className="w-3 h-3" />
              {project.year}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-6 z-20">
            <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-lg group-hover:translate-x-1 transition-transform duration-500">
              {project.title}
            </h3>
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
            <History className="w-3 h-3" />
            {project.era}
          </div>
          <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-secondary/30 text-[10px] py-0 px-2 border-none">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 italic text-xs text-indigo-300/80 leading-relaxed relative">
            <Lightbulb className="absolute -top-2 -right-2 w-5 h-5 text-amber-500/40" />
            &quot;{project.legacy_insight}&quot;
          </div>
        </CardContent>

        <CardFooter className="pt-4 border-t border-white/5">
          <Button variant="outline" className="w-full premium-3d-button !bg-none !border-indigo-500/30 hover:!border-indigo-500/60 transition-all font-bold">
            Explore Foundation
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
