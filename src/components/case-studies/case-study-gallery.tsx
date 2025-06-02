"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// This would typically come from a CMS or API
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCaseStudyGallery = (slug: string) => {
  // Mock data for demonstration


  return [
    {
      title: "Homepage Redesign",
      description: "The new homepage focuses on showcasing featured products and promotions.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Product Page",
      description: "Redesigned product pages with clear CTAs and improved product information.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Checkout Process",
      description: "Simplified checkout process reduced from 5 steps to just 2.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Mobile Experience",
      description: "Fully responsive design optimized for mobile users.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]
}

export default function CaseStudyGallery({ slug }: { slug: string }) {
  const gallery = getCaseStudyGallery(slug)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = () => {
    if (activeImage === null) return
    setActiveImage((activeImage + 1) % gallery.length)
  }

  const prevImage = () => {
    if (activeImage === null) return
    setActiveImage((activeImage - 1 + gallery.length) % gallery.length)
  }

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Project Gallery</h2>
          <p className="text-muted-foreground mt-2">Visual documentation of the design and development process</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="overflow-hidden cursor-pointer"
                onClick={() => {
                  setActiveImage(index)
                  setLightboxOpen(true)
                }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Simple Lightbox */}
        {lightboxOpen && activeImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <Image
              src={gallery[activeImage].image || "/placeholder.svg"}
              alt={gallery[activeImage].title}
              className="w-full rounded-lg"
              width={800}
              height={600}
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 bg-background/80 p-2 rounded-full"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <h3 className="font-medium">{gallery[activeImage].title}</h3>
              <p className="text-sm opacity-80">{gallery[activeImage].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

