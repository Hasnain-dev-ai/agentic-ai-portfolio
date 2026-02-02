"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { cn } from "@/lib/utils"

const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 95, icon: "🟨", color: "from-yellow-400 to-amber-500" },
      { name: "TypeScript", level: 90, icon: "🔷", color: "from-blue-400 to-blue-600" },
      { name: "Python", level: 85, icon: "🐍", color: "from-blue-500 to-yellow-500" },
      { name: "HTML5", level: 95, icon: "🌐", color: "from-orange-400 to-red-500" },
      { name: "CSS3", level: 90, icon: "🎨", color: "from-blue-400 to-indigo-500" },
      { name: "SQL", level: 80, icon: "🗃️", color: "from-slate-400 to-slate-600" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Technologies",
    skills: [
      { name: "React", level: 95, icon: "⚛️", color: "from-blue-400 to-cyan-400" },
      { name: "Next.js", level: 90, icon: "▲", color: "from-zinc-200 to-zinc-500" },
      { name: "Tailwind CSS", level: 90, icon: "🌊", color: "from-cyan-400 to-blue-500" },
      { name: "Framer Motion", level: 85, icon: "🎭", color: "from-purple-400 to-pink-400" },
      { name: "Redux", level: 80, icon: "🔄", color: "from-purple-500 to-indigo-500" },
      { name: "Vue.js", level: 75, icon: "🟢", color: "from-green-400 to-emerald-500" },
    ],
  },
  {
    id: "backend",
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", level: 90, icon: "🟩", color: "from-green-500 to-emerald-600" },
      { name: "Express", level: 85, icon: "🚂", color: "from-zinc-400 to-zinc-600" },
      { name: "Django", level: 80, icon: "🎸", color: "from-green-700 to-green-900" },
      { name: "Flask", level: 75, icon: "🧪", color: "from-slate-400 to-slate-500" },
      { name: "GraphQL", level: 70, icon: "⬢", color: "from-pink-500 to-purple-600" },
      { name: "REST APIs", level: 90, icon: "🔌", color: "from-blue-400 to-indigo-500" },
    ],
  },
  {
    id: "databases",
    title: "Databases & CMS",
    skills: [
      { name: "MongoDB", level: 85, icon: "🍃", color: "from-green-400 to-green-600" },
      { name: "PostgreSQL", level: 80, icon: "🐘", color: "from-blue-500 to-indigo-600" },
      { name: "MySQL", level: 75, icon: "🐬", color: "from-blue-400 to-blue-500" },
      { name: "Sanity.io", level: 90, icon: "📝", color: "from-red-400 to-orange-500" },
      { name: "Firebase", level: 85, icon: "🔥", color: "from-yellow-400 to-orange-500" },
      { name: "Supabase", level: 75, icon: "⚡", color: "from-emerald-400 to-emerald-600" },
    ],
  },
]

export default function SkillsShowcase() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="w-full py-12 md:py-24 bg-transparent">
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
              <Card className="h-full border-border bg-card shadow-md">
                <CardHeader className="border-b border-border">
                  <CardTitle className="flex items-center justify-between text-lg font-bold">
                    {category.title}
                    <Badge variant="modern">
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
                              className={cn(
                                "h-full rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] bg-gradient-to-r relative",
                                skill.color || "from-purple-500 via-blue-500 to-cyan-500"
                              )}
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

