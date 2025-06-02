import type { Metadata } from "next"
import ProjectsGrid from "@/components/projects/projects-grid"
import ProjectsHeader from "@/components/projects/projects-header"

export const metadata: Metadata = {
  title: "Projects | Developer Portfolio",
  description: "Explore my projects showcasing my skills in TypeScript, Next.js, Python, and more.",
}

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <ProjectsHeader />
      <ProjectsGrid />
    </main>
  )
}

