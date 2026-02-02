import type { Metadata } from "next"
import Hero from "@/components/home/hero"
import FeaturedProjects from "@/components/home/featured-projects"
import Skills from "@/components/home/skills"
import Testimonials from "@/components/home/testimonials"
import ContactCTA from "@/components/home/contact-cta"
export const metadata: Metadata = {
  title: "Portfolio | Web & Agentic AI Developer",
  description: "Web & Agentic AI Developer Developer specializing in TypeScript, Next.js, Python and Sanity.io",
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full relative">
      <div className="bg-page-home" />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}

