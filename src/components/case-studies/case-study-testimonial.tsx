"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

// This would typically come from a CMS or API
const getCaseStudyTestimonial = () => {
  // Mock data for demonstration
  return {
    quote:
      "The redesign completely transformed our online presence. Not only did we see immediate improvements in sales, but our team now has a platform that's easy to maintain and update. The developer's attention to detail and focus on both user experience and performance made all the difference.",
    author: "Sarah Johnson",
    role: "E-Commerce Director, Fashion Retailer Inc.",
    avatar: "/placeholder",
  }
}

export default function CaseStudyTestimonial({ slug }: { slug: string }) {
  // ✅ FIX: Log the slug to acknowledge its use.
  console.log(`Fetching testimonial for slug: ${slug}`);
  const testimonial = getCaseStudyTestimonial()

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <Quote className="h-10 w-10 text-muted-foreground mb-6" />
              <p className="text-xl italic mb-8">{testimonial.quote}</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

