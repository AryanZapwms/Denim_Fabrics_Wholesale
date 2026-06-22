import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const fabrics = [
  {
    name: "Indigo Selvedge 14oz",
    image: "/catalog-selvedge.png",
    composition: "100% Cotton",
    tags: ["Selvedge", "Raw", "Heavyweight"],
    moq: "500 m",
    price: "$6.80 / m",
  },
  {
    name: "Chambray Lightweight 6oz",
    image: "/catalog-lightweight.png",
    composition: "98% Cotton · 2% Spandex",
    tags: ["Shirting", "Soft", "Breathable"],
    moq: "800 m",
    price: "$4.20 / m",
  },
  {
    name: "Coated Black Stretch 11oz",
    image: "/catalog-black.png",
    composition: "94% Cotton · 6% Elastane",
    tags: ["Coated", "Stretch", "Fashion"],
    moq: "600 m",
    price: "$7.40 / m",
  },
]

export function Catalog() {
  return (
    <section id="catalog" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Featured Catalog"
            title="Ready-to-ship fabric lines"
            description="A snapshot of in-stock denim available for immediate sampling and bulk orders."
            className="max-w-xl"
          />
          <Button
            variant="outline"
            className="shrink-0 bg-background"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Request full catalog
          </Button>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {fabrics.map((fabric) => (
            <article
              key={fabric.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={fabric.image || "/placeholder.svg"}
                  alt={`${fabric.name} denim roll`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-bold text-card-foreground">
                  {fabric.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{fabric.composition}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {fabric.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">MOQ</p>
                    <p className="font-heading text-sm font-bold text-card-foreground">
                      {fabric.moq}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="font-heading text-lg font-extrabold text-accent">
                      {fabric.price}
                    </p>
                  </div>
                </div>

                <Button
                  className="mt-5 w-full"
                  nativeButton={false}
                  render={<a href="#contact" />}
                >
                  Get Quote
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
