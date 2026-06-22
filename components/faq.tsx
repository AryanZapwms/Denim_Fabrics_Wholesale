import { SectionHeading } from "@/components/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "Standard MOQ starts at 500 meters per color for in-stock fabrics. For custom developments we typically require 1,000 meters per color, though we offer flexible MOQs for sampling and trial orders.",
  },
  {
    q: "Can I order samples before placing a bulk order?",
    a: "Yes. We provide swatch cards and sample yardage for evaluation. Sample fees are credited toward your first bulk order once confirmed.",
  },
  {
    q: "Which countries do you ship to?",
    a: "We export to over 40 countries across North America, Europe, the Middle East, and Asia. We handle door-to-door logistics and all export documentation.",
  },
  {
    q: "What are your typical lead times?",
    a: "In-stock fabrics ship within 1–2 weeks. Custom developments generally take 3–6 weeks depending on weight, finish, and quantity.",
  },
  {
    q: "Do you offer custom weights, washes, and finishes?",
    a: "Absolutely. As a vertically integrated mill we can tailor composition, weight, stretch, coating, and finishing to your exact specification.",
  },
  {
    q: "What certifications do your fabrics carry?",
    a: "Our fabrics are available with OEKO-TEX Standard 100, GOTS (organic lines), ISO 9001 manufacturing, and BCI cotton sourcing on request.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers for buyers"
          description="Everything you need to know before requesting a quote. Still unsure? Message us on WhatsApp."
        />

        <div className="mt-12 rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-4">
          <Accordion defaultValue={["item-0"]}>
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`} className="px-3">
                <AccordionTrigger className="py-4 font-heading text-base font-bold text-card-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
