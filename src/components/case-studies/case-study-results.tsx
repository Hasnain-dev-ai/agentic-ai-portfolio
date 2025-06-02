"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Clock, TrendingUp, Users } from "lucide-react"

// This would typically come from a CMS or API
const getCaseStudyResults = (slug: string) => {
  // Mock data for demonstration
  return {
    summary:
      "The redesigned e-commerce platform launched after 3 months of development and immediately showed significant improvements in key metrics.",
    metrics: [
      {
        title: "Conversion Rate",
        value: "+35%",
        icon: <TrendingUp className="h-6 w-6" />,
        description: "Increase in conversion rate from visit to purchase",
      },
      {
        title: "Page Load Time",
        value: "-60%",
        icon: <Clock className="h-6 w-6" />,
        description: "Reduction in average page load time",
      },
      {
        title: "Mobile Users",
        value: "+42%",
        icon: <Users className="h-6 w-6" />,
        description: "Increase in mobile user engagement",
      },
      {
        title: "Revenue",
        value: "+28%",
        icon: <BarChart className="h-6 w-6" />,
        description: "Increase in monthly revenue",
      },
    ],
  }
}

export default function CaseStudyResults({ slug }: { slug: string }) {
  const results = getCaseStudyResults(slug)

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Results & Impact</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{results.summary}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {results.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">{metric.icon}</div>
                    <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
                    <h4 className="font-medium mb-2">{metric.title}</h4>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

