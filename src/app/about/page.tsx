import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import AboutStory from "@/components/about/about-story"
import AboutExperience from "@/components/about/about-experience"
import AboutEducation from "@/components/about/about-education"
import Certifications from "@/components/about/certifications"
import ResumeDownload from "@/components/about/resume-download"
export const metadata: Metadata = {
  title: "About Me | Developer Portfolio",
  description: "Learn more about my background, experience, and journey as a developer.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full relative page-about">
      <div className="bg-page-about" />
      <AboutHero />
      <AboutStory />
      <AboutExperience />
      <AboutEducation />
      <Certifications />
      <ResumeDownload />
    </main>
  )
}

