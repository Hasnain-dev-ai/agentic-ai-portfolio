"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. During our initial consultation, I'll provide a detailed timeline specific to your project.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, I offer various maintenance packages to keep your website or application running smoothly after launch. These can include regular updates, security patches, performance monitoring, and content updates.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, Python, and various database solutions. I'm also experienced with content management systems like Sanity.io and headless CMS architectures.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "Clear communication is essential for project success. I typically use a combination of regular video calls, email updates, and project management tools to ensure you're always informed about progress and have opportunities to provide feedback.",
  },
  {
    question: "Do you offer design services or just development?",
    answer:
      "While my primary focus is development, I can provide basic design services or work closely with your designer. For projects requiring complex design work, I can recommend trusted design partners or collaborate with your existing design team.",
  },
  {
    question: "What happens if I need changes after the project is complete?",
    answer:
      "I offer a revision period after project completion for minor adjustments. For more substantial changes or ongoing updates, we can discuss a maintenance plan or additional development work as needed.",
  },
]

export default function ServicesFAQ() {
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
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Answers to common questions about my services, process, and approach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

