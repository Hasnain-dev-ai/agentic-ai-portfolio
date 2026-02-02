"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "TechInnovate",
    period: "2021 - Present",
    description:
      "Lead developer for multiple client projects, specializing in Next.js, TypeScript, and Python. Implemented CI/CD pipelines and mentored junior developers.",
    technologies: ["Next.js", "TypeScript", "Python", "AWS", "Docker"],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "WebSolutions Inc.",
    period: "2018 - 2021",
    description:
      "Developed and maintained various web applications for clients across different industries. Collaborated with designers and product managers to deliver high-quality solutions.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "DigitalCraft",
    period: "2016 - 2018",
    description:
      "Created responsive and interactive user interfaces for web applications. Worked closely with the design team to implement pixel-perfect designs.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap"],
  },
]

export default function AboutExperience() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="vibrant-badge-glass-3d">Work Experience</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Professional <span className="vibrant-text">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{experience.role}</h3>
                      <p className="text-muted-foreground">
                        {experience.company} | {experience.period}
                      </p>
                      <p className="mt-4">{experience.description}</p>
                    </div>
                    <div className="md:text-right">
                      <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="default" className="shadow-md">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
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

