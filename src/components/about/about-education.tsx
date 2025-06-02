"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2014 - 2016",
    description:
      "Specialized in Web Technologies and Artificial Intelligence. Thesis on 'Optimizing React Applications for Performance'.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    period: "2010 - 2014",
    description: "Graduated with honors. Participated in various hackathons and coding competitions.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    id: 3,
    degree: "Certifications",
    institution: "Various",
    period: "2016 - Present",
    description: "AWS Certified Developer, Google Cloud Professional Developer, MongoDB Certified Developer.",
    icon: <Award className="h-6 w-6" />,
  },
]

export default function AboutEducation() {
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
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Education & Certifications</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-muted p-3">{item.icon}</div>
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <p className="text-muted-foreground mb-4">
                      {item.institution} | {item.period}
                    </p>
                    <p>{item.description}</p>
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

