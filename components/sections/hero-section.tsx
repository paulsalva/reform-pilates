import Image from "next/image"
import { Star } from "lucide-react"

import { ComingSoonButton } from "@/components/coming-soon-button"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

export function HeroSection() {
  return (
    <section id="top" className="bg-hero-gradient text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:pt-20 lg:pb-24">
        <Reveal className="flex flex-col gap-6">
          <h1 className="font-serif text-4xl leading-[1.08] text-balance text-white sm:text-5xl">
            Pilates is the foundation.{" "}
            <span className="italic text-gradient-gold">Movement</span> is the
            method.
          </h1>

          <p className="max-w-md text-base leading-relaxed text-pretty text-white/70">
            Reformer Pilates, mat flow, TRX, and strength-based movement in an
            elevated studio in Kenosha, WI — built for every body, especially
            yours, on day one.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ComingSoonButton
              label="Book Your Intro Session"
              size="lg"
              className="h-12 rounded-full bg-gold px-6 text-base text-gold-foreground shadow-lg shadow-black/20 hover:bg-gold/90"
            />
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10"
              render={<a href="#classes" />}
              nativeButton={false}
            >
              See Class Types
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-white/70">
              4.9 rating · 180+ Kenosha clients
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mt-10 lg:mt-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src="/images/hero-reformer.png"
              alt="A woman mid-movement on a Pilates reformer machine in a warm, softly lit boutique studio"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-card px-4 py-3 shadow-xl ring-1 ring-border/60 sm:block">
            <p className="font-serif text-sm text-card-foreground">
              &ldquo;I&apos;d never done Pilates.{" "}
              <span className="italic">Now I can&apos;t miss a week.</span>&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
