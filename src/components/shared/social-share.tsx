"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Facebook, Link2, Check } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface SocialShareProps {
  title: string
  url: string
  description?: string
}

export default function SocialShare({ title, url, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = description ? encodeURIComponent(description) : ""

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}%20${encodedDescription}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedDescription}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)

      // Use the toast component instead of alert
      toast({
        title: "Link copied",
        description: "Link has been copied to clipboard",
      })

      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy the URL manually",
        variant: "destructive",
      })
    }
  }

  const openShareWindow = (url: string) => {
    // Open a smaller window for sharing
    window.open(
      url,
      "share-dialog",
      "width=600,height=400,location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1",
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap items-center gap-2"
    >
      <span className="text-sm text-muted-foreground mr-2">Share:</span>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full"
        onClick={() => openShareWindow(shareLinks.twitter)}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full"
        onClick={() => openShareWindow(shareLinks.linkedin)}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full"
        onClick={() => openShareWindow(shareLinks.facebook)}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </Button>

      <Button variant="outline" size="sm" className="rounded-full" onClick={copyToClipboard} aria-label="Copy link">
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </Button>
    </motion.div>
  )
}