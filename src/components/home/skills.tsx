"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Wrench, Palette } from "lucide-react"

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "Django", level: 85 },
      { name: "Flask", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Webpack", level: 80 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Jest", level: 85 },
      { name: "Cypress", level: 80 },
    ],
  },
  {
    id: "others",
    label: "Others",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      { name: "UI/UX Design", level: 80 },
      { name: "Figma", level: 85 },
      { name: "SEO", level: 75 },
      { name: "Sanity.io", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "Performance Optimization", level: 85 },
      { name: "Accessibility", level: 80 },
      { name: "Technical Writing", level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block rounded-lg bg-background px-3 py-1 text-sm"
          >
            My Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Professional <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[700px] text-muted-foreground md:text-xl"
          >
            A comprehensive overview of my technical skills and expertise.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {category.icon}
                      {category.label} Skills
                    </CardTitle>
                    <CardDescription>
                      My proficiency in various {category.label.toLowerCase()} technologies and tools.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

