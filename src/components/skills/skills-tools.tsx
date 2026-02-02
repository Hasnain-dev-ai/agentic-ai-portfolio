"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { cn } from "@/lib/utils"

const tools = [
  {
    name: "VS Code",
    icon: "💻",
    category: "Development",
    description: "My primary code editor with custom extensions and settings for optimal workflow.",
  },
  {
    name: "Git & GitHub",
    icon: "🔄",
    category: "Version Control",
    description: "For version control, collaboration, and project management.",
  },
  {
    name: "Figma",
    icon: "🎨",
    category: "Design",
    description: "For UI/UX design, prototyping, and collaboration with designers.",
  },
  {
    name: "Docker",
    icon: "🐳",
    category: "DevOps",
    description: "For containerization and consistent development environments.",
  },
  {
    name: "Webpack",
    icon: "📦",
    category: "Build Tools",
    description: "For bundling and optimizing web applications.",
  },
  {
    name: "Jest",
    icon: "🧪",
    category: "Testing",
    description: "For unit and integration testing of JavaScript applications.",
  },
  {
    name: "Cypress",
    icon: "🔍",
    category: "Testing",
    description: "For end-to-end testing of web applications.",
  },
  {
    name: "Postman",
    icon: "📬",
    category: "API Development",
    description: "For API testing and documentation.",
  },
  {
    name: "AWS",
    icon: "☁️",
    category: "Cloud",
    description: "For hosting, serverless functions, and cloud services.",
  },
  {
    name: "Vercel",
    icon: "▲",
    category: "Deployment",
    description: "For deploying and hosting web applications.",
  },
  {
    name: "Notion",
    icon: "📝",
    category: "Productivity",
    description: "For note-taking, documentation, and project management.",
  },
  {
    name: "Slack",
    icon: "💬",
    category: "Communication",
    description: "For team communication and collaboration.",
  },
]

export default function SkillsTools() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)



  const filteredTools = activeCategory ? tools.filter((tool) => tool.category === activeCategory) : tools

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="modern-badge px-4 py-1.5 rounded-full mb-4">Tools & Software</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Development <span className="bg-clip-text text-transparent bg-[image:var(--gradient-text-rich)]">Toolkit</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            The tools, software, and platforms I use to streamline my development workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "filter-tab whitespace-nowrap",
              activeCategory === null && "active"
            )}
          >
            All
          </button>
          {["Frontend", "Backend", "Languages", "Frameworks", "Tools", "Design"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "filter-tab whitespace-nowrap",
                activeCategory === category && "active"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredTool(tool.name)}
              onHoverEnd={() => setHoveredTool(null)}
            >
              <Card className="h-full overflow-hidden border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <motion.div
                    animate={{
                      rotate: hoveredTool === tool.name ? [0, 10, -10, 0] : 0,
                      scale: hoveredTool === tool.name ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mb-4"
                  >
                    {tool.icon}
                  </motion.div>
                  <h3 className="font-bold mb-1">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{tool.category}</p>
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredTool === tool.name ? "auto" : 0,
                      opacity: hoveredTool === tool.name ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-muted-foreground overflow-hidden"
                  >
                    {tool.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

