"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// This would typically come from a CMS or API
const getNextProject = (currentSlug: string) => {
  // ✅ FIX 1: Log the slug to acknowledge its use.
  console.log(`Fetching next project after slug: ${currentSlug}`);

  // Mock data for demonstration
  return {
    title: "AI-Powered Content Management System",
    description: "Building a custom CMS with AI capabilities for a media company",
    slug: "ai-powered-cms",
  };
};

// ✅ FIX 2: Changed prop name from `slug` to `currentSlug` for consistency.
export default function CaseStudyNextProject({ currentSlug }: { currentSlug: string }) {
  const nextProject = getNextProject(currentSlug);

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Next Case Study</h2>
          <h3 className="text-3xl font-bold mb-2">{nextProject.title}</h3>
          <p className="text-muted-foreground mb-6">{nextProject.description}</p>
          <Link href={`/case-studies/${nextProject.slug}`}>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
              View Next Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}