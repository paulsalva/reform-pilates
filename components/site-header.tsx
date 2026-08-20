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
import { Logo } from "@/components/logo"

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
    <header className="sticky top-0 z-40 border-b border-header-foreground/10 bg-[var(--header)] text-[var(--header-foreground)] shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center">
          <Logo height={30} />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--header-foreground)]/70 transition-colors hover:text-[var(--header-foreground)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ComingSoonButton
            label="Book Your Intro Session"
            className="bg-gold text-gold-foreground shadow-sm hover:bg-gold/90"
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <Button
            variant="ghost"
            size="icon"
            className="text-[var(--header-foreground)] hover:bg-black/5 md:hidden"
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
                className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
                onClick={() => setOpen(false)}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
