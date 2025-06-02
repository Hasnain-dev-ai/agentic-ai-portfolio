"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle } from "lucide-react"

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-md mx-auto"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Stay Updated
          </CardTitle>
          <CardDescription>
            Subscribe to my newsletter for the latest articles, tutorials, and project updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center space-y-2 py-2 text-center"
            >
              <CheckCircle className="h-8 w-8 text-green-500" />
              <p className="font-medium">Thanks for subscribing!</p>
              <p className="text-sm text-muted-foreground">You will receive updates straight to your inbox.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                type="email"
                placeholder="hasnainzahoor@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
              >
                {isSubmitting ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

