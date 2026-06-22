import { Layers, Mail, MapPin, Phone } from "lucide-react"

const columns = [
  {
    title: "Fabrics",
    links: ["Stretch Denim", "Rigid Denim", "Slub Denim", "Sustainable Denim"],
  },
  {
    title: "Company",
    links: ["About Us", "Manufacturing", "Certifications", "Sustainability"],
  },
  {
    title: "Resources",
    links: ["Fabric Catalog", "MOQ & Pricing", "Shipping", "FAQ"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground text-primary">
                <Layers className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-extrabold tracking-tight">
                Indigo Mills
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Premium denim fabric manufacturer and wholesale supplier delivering
              export-quality textiles to brands worldwide since 1999.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                Plot 14, Textile Export Zone, Surat, India
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                +1 (000) 000-0000
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                sales@indigomills.example
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Indigo Mills. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Export Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
