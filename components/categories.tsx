import { SectionHeading } from "@/components/section-heading"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "Stretch Denim",
    image: "/fabric-stretch.png",
    description: "Elastane-blended denim with comfort recovery for fitted apparel.",
    weight: "8–12 oz",
  },
  {
    name: "Rigid Denim",
    image: "/fabric-rigid.png",
    description: "Classic 100% cotton non-stretch denim with crisp structure.",
    weight: "11–16 oz",
  },
  {
    name: "Slub Denim",
    image: "/fabric-slub.png",
    description: "Textured slub yarns delivering vintage, artisanal character.",
    weight: "9–13 oz",
  },
  {
    name: "Sustainable Denim",
    image: "/fabric-sustainable.png",
    description: "Organic & recycled cotton woven with low-impact processes.",
    weight: "10–14 oz",
  },
]

export function Categories() {
  return (
    <section id="categories" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Fabric Categories"
          title="Denim built for every collection"
          description="From performance stretch to heavyweight selvedge, explore our core fabric families—each available in multiple weights, washes, and finishes."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#catalog"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image || "/placeholder.svg"}
                  alt={`${cat.name} fabric swatch`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-card-foreground">
                    {cat.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <span className="mt-4 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {cat.weight}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
