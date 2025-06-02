"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Dialog } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"

export default function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault()
      setIsOpen(true)
    }
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 rounded-full bg-muted text-muted-foreground hover:bg-accent transition"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Desktop button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center space-x-2 border rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent transition"
      >
        <Search className="h-4 w-4" />
        <span className="text-sm">Search...</span>
        <kbd className="ml-auto text-xs bg-muted px-1.5 py-0.5 rounded border">⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog as="div" className="relative z-[100]" open={isOpen} onClose={setIsOpen}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-md rounded-xl bg-background p-4 shadow-lg"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  ref={inputRef}
                  placeholder="Search..."
                  className="w-full border rounded-md p-2 text-sm focus:outline-none"
                />
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
