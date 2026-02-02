"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Layout, Smartphone, Zap, Search } from "lucide-react"

const services = [
  {
    icon: <Layout className="h-10 w-10" />,
    title: "Frontend Development",
    description:
      "Modern, responsive interfaces built with React, Next.js, and TypeScript that provide exceptional user experiences across all devices.",
    features: ["Responsive Design", "Interactive UIs", "Performance Optimization", "Accessibility Compliance"],
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Backend Development",
    description:
      "Robust server-side solutions using Node.js, Python, and modern databases to power your applications with reliable performance.",
    features: ["API Development", "Database Design", "Authentication Systems", "Cloud Integration"],
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Full-Stack Development",
    description:
      "End-to-end development services that combine frontend and backend expertise to deliver complete web applications.",
    features: ["Seamless Integration", "Consistent Architecture", "Efficient Workflows", "Comprehensive Testing"],
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Responsive Web Apps",
    description:
      "Web applications that work flawlessly across desktop, tablet, and mobile devices with a focus on performance.",
    features: [
      "Mobile-First Design",
      "Cross-Browser Compatibility",
      "Touch-Friendly Interfaces",
      "Offline Capabilities",
    ],
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Performance Optimization",
    description:
      "Improve the speed and efficiency of your existing web applications to enhance user experience and SEO rankings.",
    features: ["Load Time Reduction", "Code Optimization", "Asset Compression", "Caching Strategies"],
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "SEO & Analytics",
    description:
      "Enhance your web presence with SEO-friendly development practices and integrated analytics solutions.",
    features: ["SEO Best Practices", "Performance Metrics", "User Behavior Tracking", "Conversion Optimization"],
  },
]

export default function ServicesList() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border-border shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="rounded-full bg-black dark:bg-white text-white dark:text-black p-4 w-fit mb-4 flex items-center justify-center shadow-lg">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

