import Image from "next/image"
import { CalendarCheck, HeartHandshake, PersonStanding } from "lucide-react"

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Book your intro session",
    body: "One-on-one with a certified instructor before you ever join a group class.",
  },
  {
    icon: HeartHandshake,
    title: "Meet your instructor",
    body: "We learn your body, your goals, and any old injuries so class feels safe from rep one.",
  },
  {
    icon: PersonStanding,
    title: "Join your first class, confidently",
    body: "Walk in already knowing the machine, the moves, and a friendly face in the room.",
  },
]

export function StartHereSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div className="order-2 flex flex-col gap-8 lg:order-1">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              New here?
            </span>
            <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
              Start here.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-pretty text-muted-foreground">
              No Pilates experience needed — most of our members had never
              touched a reformer before their intro session.
            </p>
          </div>

          <ol className="flex flex-col gap-6">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent">
                  <step.icon className="size-5 text-accent-foreground" />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <p className="text-sm font-semibold tracking-wide text-primary">
                    Step {index + 1}
                  </p>
                  <h3 className="font-medium text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-border/60">
            <Image
              src="/images/intro-session.png"
              alt="An instructor gently guiding a first-time client through a movement on the reformer"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
