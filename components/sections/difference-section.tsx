import Image from "next/image"
import { Award, Gauge, Sparkle, Users } from "lucide-react"

const PILLARS = [
  {
    icon: Users,
    title: "Small class sizes",
    body: "Capped at 8 clients per reformer class, so every cue is personal.",
  },
  {
    icon: Award,
    title: "Certified instructors",
    body: "Every teacher completes 500+ hours of comprehensive Pilates training.",
  },
  {
    icon: Sparkle,
    title: "Modern reformers",
    body: "German-engineered equipment, serviced monthly, replaced every 3 years.",
  },
  {
    icon: Gauge,
    title: "All levels, one room",
    body: "Every class is modifiable in real time — beginners and regulars train together.",
  },
]

export function DifferenceSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-border/60">
            <Image
              src="/images/studio-interior.png"
              alt="A row of reformer machines in a warm, sunlit boutique Pilates studio"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                The Reform difference
              </span>
              <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
                Built to be your studio, not just a class.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="flex flex-col gap-2">
                  <pillar.icon className="size-5 text-primary" />
                  <h3 className="font-medium text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
