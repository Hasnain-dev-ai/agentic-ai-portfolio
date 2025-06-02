"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutStory() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Journey</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The <span className="gradient-text">Path</span> I&apos;ve Taken
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">How It All Started</h3>
                <p className="text-muted-foreground mb-4">
                  My journey into the world of programming began when I was 15 years old. Fascinated by how websites
                  worked, I started learning HTML and CSS, creating simple websites for fun. This curiosity quickly
                  evolved into a passion as I discovered the power of JavaScript and began building interactive web
                  applications.
                </p>
                <p className="text-muted-foreground">
                  During college, I majored in Computer Science, where I gained a solid foundation in programming
                  principles, algorithms, and data structures. I was particularly drawn to web development and spent
                  countless hours outside of class working on personal projects and contributing to open-source.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Professional Growth</h3>
                <p className="text-muted-foreground mb-4">
                  After graduating, I joined a startup as a junior developer, where I was thrown into the deep end of
                  full-stack development. Working in a fast-paced environment taught me to adapt quickly, solve complex
                  problems, and collaborate effectively with cross-functional teams.
                </p>
                <p className="text-muted-foreground">
                  Over the years, I&apos;ve had the opportunity to work with various technologies and frameworks, from React
                  and Next.js to Python and Django. Each project has presented unique challenges and learning
                  opportunities, helping me grow as a developer. Today, I specialize in building performant, accessible,
                  and user-friendly web applications that solve real-world problems.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">My Philosophy</h3>
              <p className="text-muted-foreground mb-4">
                I believe that great software is not just about writing code; it&apos;s about solving problems and creating
                experiences that make people&apos;s lives better. I approach each project with a user-centered mindset,
                focusing on creating intuitive, accessible, and performant solutions.
              </p>
              <p className="text-muted-foreground">
                Continuous learning is at the core of my professional ethos. The tech landscape is constantly evolving,
                and I&apos;m committed to staying at the forefront by exploring new technologies, attending conferences, and
                contributing to the developer community. I&apos;m particularly passionate about mentoring junior developers
                and sharing knowledge through blog posts and open-source contributions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

