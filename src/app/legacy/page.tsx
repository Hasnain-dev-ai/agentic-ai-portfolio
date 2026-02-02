import { Metadata } from "next"
import LegacyProjectsGrid from "@/components/legacy/legacy-projects"
import legacyData from "@/../data/legacy_data.json"
import Link from "next/link"
import { ArrowLeft, Sparkles, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Legacy Archive | Hasnain Ahmed",
    description: "Exploring the foundations of the pre-AI era. A collection of manual craftsmanship and early digital experiments.",
}

export default function LegacyPage() {
    return (
        <main className="flex flex-col items-center w-full min-h-screen relative py-20 px-4 sm:px-6 lg:px-8">
            {/* Background with unique tint */}
            <div className="fixed inset-0 w-full h-full -z-50 bg-page-base-gradient pointer-events-none opacity-50" />
            <div className="fixed inset-0 w-full h-full -z-40 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none" />

            <div className="container max-w-6xl mx-auto space-y-20">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center space-y-6">
                    <Link href="/projects" className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-indigo-400 transition-colors">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Modern Projects
                    </Link>

                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-widest uppercase">
                            <Sparkles className="w-3 h-3" />
                            The Foundation Era
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                            Legacy <span className="vibrant-text">Archive</span>
                        </h1>
                        <p className="max-w-[700px] text-lg text-muted-foreground leading-relaxed">
                            Before the rapid evolution of Agentic AI in 2026, we built the web with manual precision.
                            This gallery preserves the tools, apps, and experiments that paved the way for the intelligent era.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2 p-3 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-sm">
                            <Cpu className="w-5 h-5 text-indigo-500" />
                            <div className="text-left">
                                <p className="text-[10px] uppercase tracking-tighter text-muted-foreground font-bold leading-none">Status</p>
                                <p className="text-sm font-semibold">Archived / Stable</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Narrative / Era Switch Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">The Pre-AI <span className="vibrant-text">Era</span></h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                In 2021-2024, our work was defined by manual state management, hand-drawn vector assets, and deterministic logic. We spent nights optimizing rendering cycles and debugging CSS floats.
                            </p>
                            <p>
                                While these methods may seem dated in today&apos;s AI-first landscape, they taught us the core principles of user experience and performance that define my current agentic workflows.
                            </p>
                        </div>
                        <Button variant="outline" className="premium-3d-button !bg-indigo-600 !text-white border-none px-8">
                            View Case Studies
                        </Button>
                    </div>
                    <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden glass-card-3d border-indigo-500/20">
                        <div className="absolute inset-0 bg-indigo-500/10 flex items-center justify-center">
                            <div className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto animate-pulse">
                                    <History size={32} className="text-indigo-400" />
                                </div>
                                <p className="text-xs font-mono text-indigo-300">SYSTEM_LOG: LEGACY_MODULE_LOADED...</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Grid */}
                <LegacyProjectsGrid projects={legacyData} />

                {/* Era Transition Footer */}
                <div className="p-12 rounded-[2.5rem] bg-indigo-600/5 border border-indigo-500/20 text-center space-y-6 overflow-hidden relative">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

                    <h3 className="text-3xl font-bold tracking-tight relative z-10">Ready for the <span className="vibrant-text">Future</span>?</h3>
                    <p className="max-w-[600px] mx-auto text-muted-foreground relative z-10 leading-relaxed">
                        We&apos;ve come a long way since these legacy foundations. Explore how I&apos;m leveraging AI agents and modern frameworks to build the next generation of web applications today.
                    </p>
                    <div className="relative z-10 pt-4">
                        <Button asChild size="lg" className="premium-3d-button px-10">
                            <Link href="/projects">
                                Return to 2026 Projects
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

function History({ size, className }: { size?: number, className?: string }) {
    return (
        <svg
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M12 7v5l4 2" />
        </svg>
    )
}
