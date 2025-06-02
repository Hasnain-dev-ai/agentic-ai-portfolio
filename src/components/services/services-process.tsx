"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Lightbulb, Code, CheckCircle, ArrowRight } from "lucide-react"

const processSteps = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "1. Consultation",
    description:
      "We begin with a thorough discussion of your project requirements, goals, and vision to ensure we're aligned from the start.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "2. Planning & Design",
    description:
      "Based on our consultation, I create a detailed project plan including architecture, design mockups, and technical specifications.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "3. Development",
    description:
      "I build your solution using modern technologies and best practices, with regular updates and opportunities for feedback.",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "4. Testing & Launch",
    description:
      "Comprehensive testing ensures your project works flawlessly across all devices and browsers before we launch it to the world.",
  },
]

export default function ServicesProcess() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">My Development Process</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A structured approach to ensure your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process connector line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-muted hidden md:block" />

          <div className="space-y-12 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Step icon */}
                  <div className="relative z-10">
                    <div className="rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1">
                      <div className="rounded-full bg-background p-4">{step.icon}</div>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 h-8 w-8 flex justify-center md:hidden">
                        <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Step content */}
                  <Card className={`flex-1 ${index % 2 === 1 ? "md:order-first" : ""}`}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

