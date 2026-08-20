"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ComingSoonButton } from "@/components/coming-soon-button"

const NAV_LINKS = [
  { href: "#classes", label: "Classes" },
  { href: "#offer", label: "Intro Offer" },
  { href: "#team", label: "Instructors" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit" },
]

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-baseline gap-1.5">
          <span className="font-serif text-lg font-medium tracking-tight text-foreground">
            Reform
          </span>
          <span className="text-[0.65rem] font-medium tracking-[0.28em] text-primary uppercase">
            Pilates
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ComingSoonButton
            label="Book Your Intro Session"
            className="bg-plum-gradient text-primary-foreground shadow-sm hover:opacity-90 dark:bg-none dark:bg-primary dark:text-primary-foreground"
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader>
              <SheetTitle className="font-serif text-lg">Reform Pilates</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<a href={link.href} />}
                  nativeButton={false}
                >
                  <span className="block rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted">
                    {link.label}
                  </span>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <ComingSoonButton
                label="Book Your Intro Session"
                className="w-full bg-plum-gradient text-primary-foreground dark:bg-none dark:bg-primary"
                onClick={() => setOpen(false)}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
