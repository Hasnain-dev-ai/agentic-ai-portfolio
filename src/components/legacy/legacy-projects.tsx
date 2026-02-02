"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LegacyProjectCard from "./legacy-project-card"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

interface LegacyProject {
    id: string
    title: string
    description: string
    year: string
    era: string
    tags: string[]
    legacy_insight: string
    image: string
}

export default function LegacyProjectsGrid({ projects }: { projects: LegacyProject[] }) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const cards = containerRef.current.querySelectorAll(".group")

        // Abstract GSAP animation for the grid entry
        gsap.fromTo(cards,
            {
                filter: "blur(10px)",
                opacity: 0,
                scale: 0.9
            },
            {
                filter: "blur(0px)",
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        )
    }, [projects])

    return (
        <section ref={containerRef} className="width-full py-16">
            <div className="bento-grid-12">
                {projects.map((project, index) => {
                    let spanClass = "col-span-12 md:col-span-6 lg:col-span-4" // Default
                    if (index === 0) spanClass = "col-span-12 md:col-span-12 lg:col-span-8"
                    if (index === 1) spanClass = "col-span-12 md:col-span-6 lg:col-span-4"
                    if (index === 2) spanClass = "col-span-12 md:col-span-6 lg:col-span-12"

                    return (
                        <div key={project.id} className={spanClass}>
                            <LegacyProjectCard project={project} index={index} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
