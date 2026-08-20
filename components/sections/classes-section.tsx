import {
  Activity,
  Bike,
  Dumbbell,
  User,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

const CLASSES = [
  {
    icon: Activity,
    title: "Reformer Flow",
    level: "All levels",
    body: "Our signature class. Spring-based resistance for full-body strength, control, and length — no impact on the joints.",
  },
  {
    icon: User,
    title: "Mat Pilates",
    level: "Beginner friendly",
    body: "Classical mat sequencing focused on core, breath, and postural alignment. A gentle place to start.",
  },
  {
    icon: Dumbbell,
    title: "TRX & Strength",
    level: "Intermediate",
    body: "Suspension training layered with Pilates principles for a sweatier, strength-forward session.",
  },
  {
    icon: Bike,
    title: "Pilates + Cycle",
    level: "All levels",
    body: "A fusion class pairing a cardio cycle segment with a cool-down reformer flow.",
  },
]

export function ClassesSection() {
  return (
    <section id="classes" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal className="mb-10 flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Find your class
          </span>
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Every body, every level.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
            From your very first reformer session to your hundredth, there is
            a class built for exactly where you are.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {CLASSES.map((item, index) => {
            const treatments = ["bg-card card-lines", "bg-plum-gradient text-primary-foreground", "card-lilac card-diagonal", "bg-card card-lines"]
            const treatment = treatments[index]

            return (
            <Reveal key={item.title} delay={index * 100}>
              <Card className={`h-full border-border/60 ${treatment} shadow-none transition-shadow hover:shadow-md`}>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <item.icon className="size-5" />
                    </div>
                    <span className="text-xs font-medium tracking-wide text-current/65 uppercase">
                      {item.level}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-current">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-current/70">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
