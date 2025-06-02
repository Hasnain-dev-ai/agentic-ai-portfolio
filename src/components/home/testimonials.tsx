"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    content:
      "Working with this developer was an absolute pleasure. They delivered a high-quality website that exceeded our expectations. Their attention to detail and technical expertise are impressive.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    content:
      "The developer's ability to translate our vision into a functional and beautiful website was remarkable. They were responsive, professional, and delivered on time.",
    author: "Michael Chen",
    role: "Marketing Director, InnovateCorp",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    content:
      "I was impressed by the developer's technical skills and creativity. They suggested solutions we hadn't even considered and implemented them flawlessly.",
    author: "Emily Rodriguez",
    role: "Product Manager, DesignHub",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    content:
      "The developer's expertise in both frontend and backend technologies made our project a success. They were able to handle complex requirements with ease.",
    author: "David Kim",
    role: "CTO, FutureTech",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            What Clients <span className="gradient-text">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[700px] text-muted-foreground md:text-xl"
          >
            Feedback from clients I've had the pleasure of working with.
          </motion.p>
        </div>

        <div className="mt-12 relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-8">
                  <Card className="bg-card/50 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                      <p className="text-lg md:text-xl italic">"{testimonial.content}"</p>
                    </CardContent>
                    <CardFooter className="flex items-center space-x-4 pt-4 pb-6">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

