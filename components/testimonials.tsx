import { SectionHeading } from "@/components/section-heading"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Shade consistency across reorders has been flawless. Indigo Mills is now our default denim source for every seasonal drop.",
    name: "Marcus Lindqvist",
    role: "Head of Sourcing, NORDLY Denim",
    initials: "ML",
  },
  {
    quote:
      "Their sampling speed cut our development cycle in half. We moved from concept to bulk in under five weeks.",
    name: "Priya Nair",
    role: "Production Lead, Atelier 22",
    initials: "PN",
  },
  {
    quote:
      "Factory-direct pricing with genuinely export-grade quality. Logistics were handled end to end without a single delay.",
    name: "Daniel Okafor",
    role: "Founder, Cardinal Workwear",
    initials: "DO",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Brands that build on our denim"
          description="We measure success by the long-term partnerships we keep across continents."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
