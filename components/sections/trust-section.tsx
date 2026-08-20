import { Star } from "lucide-react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

const REVIEWS = [
  {
    name: "Alyssa R.",
    tag: "Member since 2023",
    quote:
      "I was so nervous walking in as a total beginner. My instructor spent the whole intro session making sure I understood the machine. Now it's the best hour of my week.",
  },
  {
    name: "Priya M.",
    tag: "Member since 2022",
    quote:
      "The class sizes are small enough that someone always catches your form. I've tried three other studios in the area — none felt this personal.",
  },
  {
    name: "Deb H.",
    tag: "Member since 2024",
    quote:
      "I'm 58 and was worried Pilates would be too intense. It's challenging in the best way, and every instructor modifies for my knees without missing a beat.",
  },
]

export function TrustSection() {
  return (
    <section className="border-y border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
          </div>
          <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
            4.9 out of 5, from 180+ reviews
          </h2>
          <p className="text-sm text-muted-foreground">
            Kenosha&apos;s most-loved reformer studio
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {REVIEWS.map((review, index) => {
            const frames = ["card-lines", "card-lilac card-diagonal", "bg-plum-gradient"]

            return (
            <Reveal key={review.name} delay={index * 100}>
              <Card className={`h-full gap-0 border-border/60 bg-card p-2 shadow-none sm:p-2.5 ${frames[index]}`}>
                <CardContent className="flex px-1.5 pt-1 pb-3 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </CardContent>
                <div className="flex flex-1 flex-col gap-4 rounded-2xl bg-card p-4 ring-1 ring-border/50">
                  <p className="text-sm leading-relaxed text-pretty text-card-foreground">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm font-medium text-card-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{review.tag}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
