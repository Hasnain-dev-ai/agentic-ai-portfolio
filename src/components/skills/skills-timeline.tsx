"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timelineItems = [
  {
    year: "2023-2025",
    title: "Advanced Full-Stack Development",
    description: "Mastered Next.js, TypeScript, and Python for building complex web applications.",
    skills: ["Next.js", "TypeScript", "Python", "Sanity.io", "AWS"],
    color: "from-purple-500 to-blue-500",
  },
  {
    year: "2021-2023",
    title: "Frontend Specialization",
    description: "Focused on modern frontend frameworks and responsive design techniques.",
    skills: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2019-2021",
    title: "Backend Development",
    description: "Developed server-side applications and RESTful APIs.",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    color: "from-cyan-500 to-green-500",
  },
  {
    year: "2016-2019",
    title: "Web Fundamentals",
    description: "Built a strong foundation in web development fundamentals.",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    color: "from-green-500 to-yellow-500",
  },
]

export default function SkillsTimeline() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="vibrant-badge-glass-3d">Skill Evolution</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Learning <span className="vibrant-text">Journey</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            How my skills have evolved over time, from web fundamentals to advanced development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-muted" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--gradient-primary)] z-10 shadow-[0_4px_0_rgba(0,0,0,0.2),0_8px_15px_rgba(0,0,0,0.1)] border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white shadow-inner" />
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-10 md:pl-0`}>
                    <Card className="overflow-hidden">
                      <CardHeader className={`bg-gradient-to-r ${item.color} text-white`}>
                        <CardTitle className="flex items-center justify-between">
                          <span>{item.title}</span>
                          <Badge variant="modern" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            {item.year}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <Badge key={skill} variant="modern">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

