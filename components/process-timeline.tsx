import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    step: "01",
    title: "Cotton Sourcing",
    description: "Premium long-staple cotton selected and graded for spinning.",
  },
  {
    step: "02",
    title: "Spinning & Dyeing",
    description: "Yarn spun in-house and rope-dyed for deep, fast indigo shades.",
  },
  {
    step: "03",
    title: "Weaving",
    description: "Air-jet and projectile looms weave precise, consistent denim.",
  },
  {
    step: "04",
    title: "Finishing",
    description: "Sanforizing, mercerizing, and coating to your chosen finish.",
  },
  {
    step: "05",
    title: "Inspection & Dispatch",
    description: "4-point inspection, roll packing, and global export dispatch.",
  },
]

export function ProcessTimeline() {
  return (
    <section id="process" className="relative overflow-hidden bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="absolute inset-0">
        <img
          src="/factory.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Manufacturing Process"
          title="From raw cotton to finished roll"
          description="Full transparency across every stage of production, all under one integrated facility."
          className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/75"
        />

        <ol className="mt-16 grid gap-8 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.step} className="relative">
              <div className="flex items-center gap-3 md:block">
                <span className="font-heading text-3xl font-extrabold text-accent">
                  {s.step}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-primary-foreground/20 md:absolute md:right-0 md:top-4 md:block md:w-[calc(100%-3rem)]" />
                )}
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
