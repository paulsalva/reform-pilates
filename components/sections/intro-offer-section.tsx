import { Check } from "lucide-react"

import { ComingSoonButton } from "@/components/coming-soon-button"
import { Reveal } from "@/components/reveal"

const INCLUDED = [
  "3 reformer classes, any level",
  "One free 1:1 fit consultation",
  "Grip socks included",
  "Valid for 21 days",
]

export function IntroOfferSection() {
  return (
    <section id="offer" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal className="overflow-hidden rounded-3xl bg-hero-gradient px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-mauve uppercase">
              New client offer
            </span>
            <h2 className="font-serif text-3xl text-balance text-white sm:text-4xl">
              3 classes for{" "}
              <span className="italic text-gradient-gold">$69</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-pretty text-white/70">
              The easiest way to know if Reform is right for you — no
              long-term commitment required.
            </p>

            <ul className="flex flex-col gap-2 pt-2 text-left sm:grid sm:grid-cols-2 sm:gap-3">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/85"
                >
                  <Check className="size-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <ComingSoonButton
              label="Claim Your Intro Offer"
              size="lg"
              detail="Intro offer checkout is launching soon. Call or text the studio and we'll set up your 3-class package personally."
              className="mt-2 h-12 rounded-full bg-gold px-7 text-base text-gold-foreground shadow-lg shadow-black/20 hover:bg-gold/90"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
