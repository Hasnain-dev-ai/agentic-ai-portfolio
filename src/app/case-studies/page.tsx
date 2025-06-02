import type { Metadata } from "next"
import CaseStudiesHeader from "@/components/case-studies/case-studies-header"
import CaseStudiesList from "@/components/case-studies/case-studies-list"

export const metadata: Metadata = {
  title: "Case Studies | Developer Portfolio",
  description: "In-depth analysis of selected projects with detailed problem-solving approaches and outcomes.",
}

export default function CaseStudiesPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <CaseStudiesHeader />
      <CaseStudiesList />
    </main>
  )
}

