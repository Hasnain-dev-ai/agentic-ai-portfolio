"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Define a type for the content prop for better type safety
type ApproachItem = {
  title: string;
  description: string;
};

type CaseStudyContentProps = {
  content: {
    overview: string;
    challenge: string;
    approach: ApproachItem[];
  };
};

// This component now accepts the `content` object directly.
// The `slug` prop and the `getCaseStudyContent` function have been removed.
export default function CaseStudyContent({ content }: CaseStudyContentProps) {
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