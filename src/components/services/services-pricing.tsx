"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for small projects and simple websites",
    price: "$1,500+",
    features: [
      "Custom design",
      "Responsive development",
      "Basic SEO setup",
      "Contact form",
      "2 rounds of revisions",
      "2 weeks delivery",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "Ideal for businesses needing advanced functionality",
    price: "$3,500+",
    features: [
      "Everything in Basic",
      "E-commerce functionality",
      "CMS integration",
      "User authentication",
      "Performance optimization",
      "4 rounds of revisions",
      "4 weeks delivery",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For complex applications with custom requirements",
    price: "Custom",
    features: [
      "Everything in Professional",
      "Custom backend development",
      "Third-party API integration",
      "Advanced security features",
      "Comprehensive testing",
      "Unlimited revisions",
      "Custom timeline",
    ],
    highlighted: false,
    cta: "Contact Me",
  },
]

export default function ServicesPricing() {
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
          <h2 className="text-3xl font-bold">Transparent Pricing</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Flexible options to suit projects of any size. All plans include ongoing support and maintenance options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <Card
                className={`flex flex-col h-full ${
                  plan.highlighted ? "border-purple-500 shadow-lg shadow-purple-500/10" : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button
                      className={`w-full ${
                        plan.highlighted ? "bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" : ""
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Need something specific?{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Contact me
            </Link>{" "}
            for a custom quote.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

