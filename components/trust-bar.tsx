import { BadgeCheck, DollarSign, Globe, Layers3, SearchCheck } from "lucide-react"

const items = [
  { icon: BadgeCheck, label: "Export Quality" },
  { icon: DollarSign, label: "Factory Direct Pricing" },
  { icon: Layers3, label: "Flexible MOQ" },
  { icon: Globe, label: "Worldwide Shipping" },
  { icon: SearchCheck, label: "Quality Inspection" },
]

export function TrustBar() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-8 sm:px-6 md:grid-cols-5 lg:px-8">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-2 px-2 text-center md:flex-row md:justify-center md:gap-3 md:text-left"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <item.icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
