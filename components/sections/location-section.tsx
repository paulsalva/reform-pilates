import { AtSign, Clock, MapPin, Phone } from "lucide-react"

import { ComingSoonButton } from "@/components/coming-soon-button"
import { Reveal } from "@/components/reveal"

export function LocationSection() {
  return (
    <section id="visit" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-plum-gradient text-primary-foreground sm:aspect-[16/9] lg:aspect-auto">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
            <MapPin className="relative size-8 text-gold" />
            <p className="relative font-serif text-lg text-white">
              6301 75th St, Kenosha, WI
            </p>
            <p className="relative text-sm text-white/70">
              Map &amp; directions available at launch
            </p>
          </Reveal>

          <Reveal delay={150} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Visit the studio
              </span>
              <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
                Come see the space.
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <MapPin className="size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    6301 75th St, Suite 4, Kenosha, WI 53142
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Street parking &amp; a small studio lot
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Mon–Fri: 6:00 AM – 7:30 PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sat: 8:00 AM – 1:00 PM · Sun: Closed
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    (262) 555-0148
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Call or text to book while online booking is in progress
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <AtSign className="size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    @reformpilates.kenosha
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Follow for class updates and studio news
                  </p>
                </div>
              </div>
            </div>

            <ComingSoonButton
              label="Book Your Intro Session"
              size="lg"
              className="h-12 w-fit rounded-full bg-plum-gradient px-6 text-base text-primary-foreground shadow-sm hover:opacity-90 dark:bg-none dark:bg-primary"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
