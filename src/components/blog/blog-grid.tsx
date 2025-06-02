"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
const blogPosts = [
  {
    id: 1,
    title: "Building Performant Next.js Applications",
    excerpt: "Learn how to optimize your Next.js applications for better performance and user experience.",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Next.js",
    image: "/placeholder.svg?height=300&width=500",
    icon: "🚀",
  },
  {
    id: 2,
    title: "TypeScript Best Practices in 2025",
    excerpt: "Discover the latest TypeScript patterns and practices that will make your code more maintainable.",
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "TypeScript",
    image: "/placeholder.svg?height=300&width=500",
    icon: "📘",
  },
  {
    id: 3,
    title: "Integrating Sanity.io with Next.js",
    excerpt: "A comprehensive guide to setting up and using Sanity.io as a headless CMS with Next.js.",
    date: "March 5, 2025",
    readTime: "10 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=500",
    icon: "🔌",
  },
  {
    id: 4,
    title: "Python for Web Developers",
    excerpt: "How Python can enhance your web development workflow and when to use it.",
    date: "February 28, 2025",
    readTime: "7 min read",
    category: "Python",
    image: "/placeholder.svg?height=300&width=500",
    icon: "🐍",
  },
  {
    id: 5,
    title: "Designing Better User Interfaces",
    excerpt: "Principles and practices for creating intuitive and beautiful user interfaces.",
    date: "February 20, 2025",
    readTime: "9 min read",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=500",
    icon: "🎨",
  },
  {
    id: 6,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends that will shape the future of web development.",
    date: "February 15, 2025",
    readTime: "11 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=500",
    icon: "🔮",
  },
]

export default function BlogGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="w-full py-12 md:py-24 relative z-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(post.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur-sm">
                <div className="aspect-video w-full overflow-hidden relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    fill
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      <span className="mr-1">{hoveredCard === post.id ? "✨" : post.icon}</span>
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="relative">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <p className="text-muted-foreground">{post.excerpt}</p>

                    {/* Hidden content that slides down on hover */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-border"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredCard === post.id ? "auto" : 0,
                        opacity: hoveredCard === post.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm">
                        In this article, we&apos;ll explore advanced techniques and best practices for working with{" "}
                        {post.category}. You&apos;ll learn practical tips that you can apply to your projects immediately.
                      </p>
                    </motion.div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

