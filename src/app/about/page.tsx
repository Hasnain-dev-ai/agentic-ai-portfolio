import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import AboutStory from "@/components/about/about-story"
import AboutExperience from "@/components/about/about-experience"
import AboutEducation from "@/components/about/about-education"
import ResumeDownload from "@/components/about/resume-download"
import Particles from "../hasnain-ahmed/particlesLogo/particles"
export const metadata: Metadata = {
  title: "About Me | Developer Portfolio",
  description: "Learn more about my background, experience, and journey as a developer.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <AboutHero />
      <AboutStory />
      <AboutExperience />
      <AboutEducation />
      <ResumeDownload />
      <Particles/>
    </main>
  )
}

