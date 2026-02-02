"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"

export default function DimensionPortalToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative h-[42px] w-[42px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-0 shadow-[0_4px_15px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.6)] transition-all border border-white/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full">
        {/* Portal ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isDark
              ? "0 0 15px 2px rgba(129, 140, 248, 0.5), inset 0 0 15px 2px rgba(129, 140, 248, 0.5)"
              : "0 0 15px 2px rgba(255, 204, 0, 0.5), inset 0 0 15px 2px rgba(255, 204, 0, 0.5)",
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Portal effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="absolute h-full w-full rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 dark:from-indigo-600 dark:to-purple-700"
            initial={false}
            animate={{
              scale: isDark ? [1, 0.1] : [0.1, 1],
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Particles */}
          <AnimatePresence>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * 30 * (Math.random() > 0.5 ? 1 : -1),
                  y: Math.random() * 30 * (Math.random() > 0.5 ? 1 : -1),
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8 + Math.random() * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: Math.random() * 0.5,
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </AnimatePresence>

          {/* Icons */}
          <div className="relative z-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="h-7 w-7 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: 30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="h-7 w-7 text-yellow-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sparkles */}
          <AnimatePresence>
            {isDark && (
              <motion.div className="absolute" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Sparkles className="h-10 w-10 text-indigo-300 opacity-50" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.button>
  )
}

