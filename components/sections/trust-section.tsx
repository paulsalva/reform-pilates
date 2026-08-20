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
            const treatments = ["bg-card card-lines", "card-lilac card-diagonal", "bg-plum-gradient text-primary-foreground"]

            return (
            <Reveal key={review.name} delay={index * 100}>
              <Card className={`h-full border-border/60 ${treatments[index]} shadow-none`}>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-pretty text-current/75">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-auto pt-2">
                    <p className="text-sm font-medium text-current">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{review.tag}</p>
                  </div>
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
