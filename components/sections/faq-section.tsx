import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    question: "What should I wear to my first class?",
    answer:
      "Form-fitting clothing (leggings or bike shorts + a fitted top) and grip socks — no shoes on the reformer. We sell grip socks at the front desk if you forget yours.",
  },
  {
    question: "I've never done Pilates. Will I be lost?",
    answer:
      "No — every new client starts with a private intro session where an instructor walks you through the reformer one-on-one before you ever join a group class.",
  },
  {
    question: "Is Pilates actually a good workout?",
    answer:
      "Yes. Reformer Pilates builds real strength, mobility, and core control using spring-based resistance — low impact, but far from low intensity.",
  },
  {
    question: "How much does membership cost?",
    answer:
      "Packages and unlimited memberships will be listed here once our full pricing page launches. For now, call or text the studio and we'll walk you through current rates.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "We ask for 12 hours notice to cancel or change a class reservation. Full policy details will be available when online booking launches.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mb-8 flex flex-col gap-3 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Good to know
          </span>
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <Accordion multiple={false}>
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="font-serif text-base text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed text-pretty text-muted-foreground">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
