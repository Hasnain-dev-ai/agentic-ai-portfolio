"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Services", path: "/services" },
  { name: "Skills", path: "/skills" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="fixed left-0 right-0 z-40 mx-6 top-20">
      <div className="container mx-auto">
<div className="hidden md:flex justify-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card/80 backdrop-blur-md rounded-full px-6 py-2 shadow-md flex space-x-1"
          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.div
                  className={cn(
                    "relative px-4 py-2 rounded-full text-xs font-medium transition-colors",
                    pathname === item.path ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {/* Active item indicator */}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator" // Unique layoutId for the animation
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }} // Adjusted spring animation
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  )
}