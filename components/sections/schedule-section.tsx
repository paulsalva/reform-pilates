import { Clock, Lock } from "lucide-react"

import { ComingSoonButton } from "@/components/coming-soon-button"
import { Reveal } from "@/components/reveal"

const MOCK_ROWS = [
  { time: "6:00 AM", class: "Reformer Flow", instructor: "Maria" },
  { time: "9:00 AM", class: "Mat Pilates", instructor: "Elena" },
  { time: "12:15 PM", class: "TRX & Strength", instructor: "Jade" },
  { time: "5:30 PM", class: "Reformer Flow", instructor: "Maria" },
  { time: "6:45 PM", class: "Pilates + Cycle", instructor: "Elena" },
]

export function ScheduleSection() {
  return (
    <section className="border-y border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal className="mb-10 flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            This week at the studio
          </span>
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Live schedule &amp; booking
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
            Real-time class booking is launching soon. Here&apos;s a preview
            of a typical Tuesday.
          </p>
        </Reveal>

        <Reveal delay={150} className="relative overflow-hidden rounded-2xl ring-1 ring-border/60">
          <div className="divide-y divide-border/60 bg-card">
            {MOCK_ROWS.map((row) => (
              <div
                key={row.time}
                className="flex items-center justify-between gap-4 px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <Clock className="size-4 shrink-0 text-primary" />
                  <span className="w-20 shrink-0 text-sm font-medium text-card-foreground">
                    {row.time}
                  </span>
                </div>
                <span className="flex-1 text-sm text-card-foreground">
                  {row.class}
                </span>
                <span className="text-sm text-muted-foreground">
                  {row.instructor}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/75 px-6 text-center backdrop-blur-sm">
            <div className="flex size-11 items-center justify-center rounded-full bg-accent">
              <Lock className="size-5 text-accent-foreground" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-serif text-lg text-foreground">
                Online booking launching soon
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-pretty text-muted-foreground">
                Call or text the studio to reserve your spot in the meantime.
              </p>
            </div>
            <ComingSoonButton
              label="Get Notified at Launch"
              variant="outline"
              className="rounded-full border-border bg-background"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
