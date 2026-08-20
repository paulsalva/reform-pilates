import { ComingSoonButton } from "@/components/coming-soon-button"

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 p-3 backdrop-blur-md md:hidden">
      <ComingSoonButton
        label="Book Your Intro Session"
        size="lg"
        className="h-12 w-full rounded-full bg-plum-gradient text-base text-primary-foreground shadow-lg hover:opacity-90 dark:bg-none dark:bg-primary"
      />
    </div>
  )
}
