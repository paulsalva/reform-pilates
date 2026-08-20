import { Logo } from "@/components/logo"

const NAV_LINKS = [
  { href: "#classes", label: "Classes" },
  { href: "#offer", label: "Intro Offer" },
  { href: "#team", label: "Instructors" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit" },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <a href="#top" className="flex items-center">
              <Logo height={26} />
            </a>
            <p className="text-xs text-muted-foreground">
              Kenosha, WI · Reformer Pilates, Mat, TRX &amp; Strength
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Reform Pilates. All rights reserved.</p>
          <p className="text-muted-foreground/80">
            Design prototype — booking, blog, and full site launching soon.
          </p>
        </div>
      </div>
    </footer>
  )
}
