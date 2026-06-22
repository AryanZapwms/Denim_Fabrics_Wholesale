import { SectionHeading } from "@/components/section-heading"
import { Briefcase, Package, Scissors, ShoppingBag, Shirt, Store } from "lucide-react"

const industries = [
  { icon: Shirt, name: "Apparel Brands", note: "Jeans, jackets & shirts" },
  { icon: Scissors, name: "Garment Manufacturers", note: "Cut-make-trim units" },
  { icon: ShoppingBag, name: "Private Label", note: "Retailer own-brands" },
  { icon: Store, name: "Fashion Wholesalers", note: "Bulk distribution" },
  { icon: Briefcase, name: "Workwear Producers", note: "Durable uniforms" },
  { icon: Package, name: "Online D2C Labels", note: "Made-to-order lines" },
]

export function Industries() {
  return (
    <section id="industries" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted across the denim supply chain"
          description="From emerging D2C labels to large-scale garment factories, we supply the right fabric at the right volume."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <ind.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-card-foreground">
                  {ind.name}
                </h3>
                <p className="text-sm text-muted-foreground">{ind.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
