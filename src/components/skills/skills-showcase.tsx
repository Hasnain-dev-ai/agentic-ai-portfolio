"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "SQL", level: 80, icon: "🗃️" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Technologies",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "Tailwind CSS", level: 90, icon: "🌊" },
      { name: "Framer Motion", level: 85, icon: "🎭" },
      { name: "Redux", level: 80, icon: "🔄" },
      { name: "Vue.js", level: 75, icon: "🟢" },
    ],
  },
  {
    id: "backend",
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", level: 90, icon: "🟩" },
      { name: "Express", level: 85, icon: "🚂" },
      { name: "Django", level: 80, icon: "🎸" },
      { name: "Flask", level: 75, icon: "🧪" },
      { name: "GraphQL", level: 70, icon: "⬢" },
      { name: "REST APIs", level: 90, icon: "🔌" },
    ],
  },
  {
    id: "databases",
    title: "Databases & CMS",
    skills: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "MySQL", level: 75, icon: "🐬" },
      { name: "Sanity.io", level: 90, icon: "📝" },
      { name: "Firebase", level: 85, icon: "🔥" },
      { name: "Supabase", level: 75, icon: "⚡" },
    ],
  },
]

export default function SkillsShowcase() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="bg-muted/50">
                  <CardTitle className="flex items-center justify-between">
                    {category.title}
                    <Badge variant="outline" className="text-xs">
                      {category.skills.length} skills
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span
                                className="mr-2 text-xl transition-transform duration-300"
                                style={{
                                  transform:
                                    hoveredSkill === skill.name ? "scale(1.2) rotate(10deg)" : "scale(1) rotate(0deg)",
                                }}
                              >
                                {skill.icon}
                              </span>
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 relative"
                            >
                              {hoveredSkill === skill.name && (
                                <motion.div
                                  className="absolute top-0 left-0 right-0 bottom-0 bg-white"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 0.3 }}
                                  exit={{ opacity: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                  }}
                                />
                              )}
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

