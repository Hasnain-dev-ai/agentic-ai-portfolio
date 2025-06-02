"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a CMS or API
const getCaseStudyContent = (slug: string) => {
  // Mock data for demonstration
  return {
    overview:
      "The client, a fashion retailer with an existing e-commerce platform, was experiencing high bounce rates and low conversion. They approached me to redesign their user experience and optimize performance to increase sales.",
    challenge:
      "The main challenges included a complex checkout process, slow page load times (especially on mobile), and a confusing navigation structure. The site was built on an outdated tech stack that made updates difficult and slow.",
    approach: [
      {
        title: "Research & Analysis",
        description:
          "Conducted user interviews, analyzed heatmaps and user flows to identify pain points in the existing experience.",
      },
      {
        title: "Technology Selection",
        description:
          "Recommended migrating to Next.js for improved performance and developer experience, with TypeScript for type safety.",
      },
      {
        title: "UX Redesign",
        description:
          "Simplified the checkout process from 5 steps to 2, redesigned product pages to highlight key information, and implemented a more intuitive navigation system.",
      },
      {
        title: "Performance Optimization",
        description:
          "Implemented image optimization, code splitting, and server-side rendering for critical paths to improve load times.",
      },
    ],
  }
}

export default function CaseStudyContent({ slug }: { slug: string }) {
  const content = getCaseStudyContent(slug)

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground">{content.overview}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground">{content.challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.approach.map((item, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

