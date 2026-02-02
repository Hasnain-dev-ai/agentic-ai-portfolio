import type { Metadata } from "next"
import SkillsHeader from "@/components/skills/skills-header"
import SkillsShowcase from "@/components/skills/skills-showcase"
import SkillsTimeline from "@/components/skills/skills-timeline"
import SkillsTools from "@/components/skills/skills-tools"

export const metadata: Metadata = {
  title: "Skills | Developer Portfolio",
  description: "Explore my technical skills and expertise in web development, programming, and design.",
}

export default function SkillsPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen relative page-skills">
      <div className="fixed inset-0 w-full h-full -z-50 bg-page-skills pointer-events-none" />
      <SkillsHeader />
      <SkillsShowcase />
      <SkillsTimeline />
      <SkillsTools />
    </main>
  )
}

