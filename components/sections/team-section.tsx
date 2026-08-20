import Image from "next/image"

const TEAM = [
  {
    name: "Maria Ionescu",
    role: "Studio Director & Lead Instructor",
    bio: "500-hour certified. Specializes in beginner onboarding and postnatal Pilates.",
    image: "/images/instructor-maria.png",
  },
  {
    name: "Elena Voss",
    role: "Senior Instructor",
    bio: "Former dancer turned Pilates teacher of 12 years. Leads our Mat and Cycle fusion classes.",
    image: "/images/instructor-elena.png",
  },
  {
    name: "Jade Coleman",
    role: "TRX & Strength Instructor",
    bio: "Certified personal trainer blending strength training with Pilates control.",
    image: "/images/instructor-jade.png",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="border-y border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Meet your instructors
          </span>
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Taught by people who remember being new.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-border/60">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-lg text-foreground">
                  {member.name}
                </h3>
                <p className="text-xs font-medium tracking-wide text-primary uppercase">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
