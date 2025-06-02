"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function SkipToContent() {
  const [focused, setFocused] = useState(false)

  return (
    <Button
      className={`fixed top-4 left-4 z-[100] transition-transform ${focused ? "translate-y-0" : "-translate-y-20"}`}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onClick={() => {
        const mainContent = document.querySelector("main")
        if (mainContent) {
          mainContent.tabIndex = -1
          mainContent.focus()
          setTimeout(() => {
            mainContent.removeAttribute("tabindex")
          }, 1000)
        }
      }}
    >
      Skip to content
    </Button>
  )
}

