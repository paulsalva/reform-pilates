"use client"

import { useEffect, useState } from "react"

import { ComingSoonButton } from "@/components/coming-soon-button"

export function MobileCtaBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const heroActions = document.getElementById("hero-actions")

    if (!heroActions) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(heroActions)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 p-3 backdrop-blur-md transition-[opacity,transform] duration-300 md:hidden ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <ComingSoonButton
        label="Book Your Intro Session"
        size="lg"
        tabIndex={isVisible ? 0 : -1}
        className="h-12 w-full rounded-full bg-plum-gradient text-base text-primary-foreground shadow-lg hover:opacity-90 dark:bg-none dark:bg-primary"
      />
    </div>
  )
}
