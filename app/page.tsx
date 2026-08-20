import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { HeroSection } from "@/components/sections/hero-section"
import { StartHereSection } from "@/components/sections/start-here-section"
import { TrustSection } from "@/components/sections/trust-section"
import { ClassesSection } from "@/components/sections/classes-section"
import { IntroOfferSection } from "@/components/sections/intro-offer-section"
import { ScheduleSection } from "@/components/sections/schedule-section"
import { DifferenceSection } from "@/components/sections/difference-section"
import { TeamSection } from "@/components/sections/team-section"
import { FaqSection } from "@/components/sections/faq-section"
import { LocationSection } from "@/components/sections/location-section"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <StartHereSection />
        <TrustSection />
        <ClassesSection />
        <IntroOfferSection />
        <ScheduleSection />
        <DifferenceSection />
        <TeamSection />
        <FaqSection />
        <LocationSection />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
