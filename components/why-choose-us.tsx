import { SectionHeading } from "@/components/section-heading"
import { Factory, Gauge, Headset, Leaf, Ruler, Truck } from "lucide-react"

const features = [
  {
    icon: Factory,
    title: "Vertically integrated mills",
    description:
      "We own spinning, dyeing, and weaving—giving you tighter quality control and better margins.",
  },
  {
    icon: Gauge,
    title: "Consistent batch quality",
    description:
      "Shade and shrinkage matched across every production run with documented lab dips.",
  },
  {
    icon: Ruler,
    title: "Custom development",
    description:
      "Tailor weight, stretch, wash, and finish to your exact spec with rapid sampling.",
  },
  {
    icon: Truck,
    title: "Reliable global logistics",
    description:
      "Door-to-door shipping with consolidated freight to 40+ countries and clear lead times.",
  },
  {
    icon: Leaf,
    title: "Responsible sourcing",
    description:
      "GOTS & OEKO-TEX certified options using organic, recycled, and low-water processes.",
  },
  {
    icon: Headset,
    title: "Dedicated account team",
    description:
      "A single point of contact from sampling to delivery—reachable on WhatsApp and email.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A supply partner built for serious volume"
          description="We combine manufacturing scale with the responsiveness of a boutique mill, so your collections ship on spec and on time."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
