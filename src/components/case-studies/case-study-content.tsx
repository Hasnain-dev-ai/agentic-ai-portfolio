"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Define a type for the content prop for better type safety
type ApproachItem = {
  title: string;
  description: string;
};

type CaseStudyContentProps = {
  slug: string;
  content?: {
    overview: string;
    challenge: string;
    approach: ApproachItem[];
  };
};

const getCaseStudyContent = (slug: string) => {
  console.log(`Fetching content for slug: ${slug}`);
  return {
    overview: "This project involved a comprehensive redesign of the digital experience for a leading fashion retailer. Our primary goal was to modernize the aesthetic while significantly improving the functional utility of the platform.",
    challenge: "The legacy system was struggling with high bounce rates on mobile and a complicated checkout flow that led to significant cart abandonment. The brand identity was also feeling dated compared to competitors.",
    approach: [
      {
        title: "User Research",
        description: "Conducted deep-dive sessions with existing customers to identify pain points in the current journey."
      },
      {
        title: "UI Design",
        description: "Created a modern, clean, and high-performance design system focused on product imagery."
      }
    ]
  };
};

export default function CaseStudyContent({ slug, content: providedContent }: CaseStudyContentProps) {
  const content = providedContent || getCaseStudyContent(slug);
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
  );
}