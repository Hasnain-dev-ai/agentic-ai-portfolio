"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Users, Code, Lightbulb, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    description: "How I improved conversion rates by 35% through UX redesign and performance optimization",
    image: "/placeholder",
    tags: ["UX/UI", "Performance", "Next.js", "TypeScript"],
    metrics: [
      { icon: <BarChart className="h-4 w-4" />, label: "35% Conversion Increase" },
      { icon: <Users className="h-4 w-4" />, label: "50k Monthly Users" },
      { icon: <Clock className="h-4 w-4" />, label: "3 Month Timeline" },
    ],
    slug: "ecommerce-platform-redesign",
  },
  {
    id: 2,
    title: "AI-Powered Content Management System",
    description: "Building a custom CMS with AI capabilities for a media company",
    image: "/placeholder",
    tags: ["AI/ML", "Python", "React", "Sanity.io"],
    metrics: [
      { icon: <Clock className="h-4 w-4" />, label: "60% Time Saved" },
      { icon: <CheckCircle className="h-4 w-4" />, label: "99.9% Uptime" },
      { icon: <Code className="h-4 w-4" />, label: "15k Lines of Code" },
    ],
    slug: "ai-powered-cms",
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    description: "Creating a scalable analytics solution for processing millions of data points",
    image: "/placeholder",
    tags: ["Data Visualization", "WebSockets", "AWS", "D3.js"],
    metrics: [
      { icon: <Lightbulb className="h-4 w-4" />, label: "5M+ Data Points" },
      { icon: <Clock className="h-4 w-4" />, label: "<100ms Response Time" },
      { icon: <Users className="h-4 w-4" />, label: "200+ Daily Users" },
    ],
    slug: "real-time-analytics-dashboard",
  },
]

export default function CaseStudiesList() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-card border-border shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src="/images/example.jpg"
                      alt="Description"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="flex flex-col p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="3d-grey">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl">{study.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{study.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="rounded-full bg-muted p-1.5">{metric.icon}</div>
                            <span className="text-sm font-medium">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 mt-6">
                      <Link href={`/case-studies/${study.slug}`}>
                        <Button variant="default" className="font-bold">
                          Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

