"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import SocialShare from "@/components/shared/social-share"

interface BlogPostProps {
  post: {
    title: string
    date: string
    readTime: string
    category: string
    content: string
    author: {
      name: string
      avatar: string
    }
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  // In a client component, we can access window
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <article className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Badge variant="secondary" className="mb-4">
          <Tag className="h-3 w-3 mr-1" />
          {post.category}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                <span className="mr-3">{post.date}</span>
                <Clock className="h-3 w-3 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <SocialShare title={post.title} url={currentUrl} description={`Check out this article: ${post.title}`} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 pt-8 border-t"
      >
        <SocialShare title={post.title} url={currentUrl} description={`Check out this article: ${post.title}`} />
      </motion.div>
    </article>
  )
}

