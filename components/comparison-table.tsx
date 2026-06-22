import { SectionHeading } from "@/components/section-heading"
import { Check } from "lucide-react"

const columns = ["Stretch", "Rigid", "Slub", "Sustainable"]

const rows = [
  { label: "Weight range", values: ["8–12 oz", "11–16 oz", "9–13 oz", "10–14 oz"] },
  { label: "Composition", values: ["Cotton + Elastane", "100% Cotton", "Cotton blend", "Organic / Recycled"] },
  { label: "Stretch recovery", values: ["High", "None", "Low", "Medium"] },
  { label: "Best for", values: ["Skinny & slim fits", "Raw & rigid jeans", "Vintage looks", "Eco collections"] },
  { label: "MOQ (per color)", values: ["500 m", "500 m", "600 m", "600 m"] },
  { label: "Lead time", values: ["3–4 weeks", "3–4 weeks", "4–5 weeks", "4–6 weeks"] },
]

const certs = ["OEKO-TEX", "GOTS Option", "ISO 9001", "BCI Cotton"]

export function ComparisonTable() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Fabric Comparison"
          title="Find the right denim, faster"
          description="Compare core specifications side by side to shortlist the fabric family that fits your collection."
        />

        <div className="mt-14 overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-4 text-sm font-semibold">Specification</th>
                {columns.map((col) => (
                  <th key={col} className="p-4 font-heading text-sm font-bold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.label}
                  className={idx % 2 === 0 ? "bg-card" : "bg-secondary"}
                >
                  <th className="p-4 text-sm font-semibold text-foreground">
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={i} className="p-4 text-sm text-muted-foreground">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {certs.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              <Check className="h-4 w-4 text-accent" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
