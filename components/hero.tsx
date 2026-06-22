import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src="/denim-hero.png"
          alt="Rolls of premium indigo denim fabric in a textile factory"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted by 600+ apparel brands worldwide
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Premium Denim Fabric Wholesale Supplier
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Source high-quality denim directly from our manufacturing facilities.
            Consistent quality, factory-direct pricing, and flexible MOQs for brands,
            wholesalers, and garment producers across the globe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              nativeButton={false}
              render={<a href="#catalog" />}
            >
              Browse Fabrics
            </Button>
            <Button
              size="lg"
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { value: "25+", label: "Years in textiles" },
              { value: "40+", label: "Countries shipped" },
              { value: "120+", label: "Fabric variants" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-3xl font-extrabold">{stat.value}</dt>
                <dd className="mt-1 text-sm text-primary-foreground/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-2xl">
            <img
              src="/denim-hero.png"
              alt="Close-up of premium denim fabric weave"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-xl border border-border bg-card p-4 text-card-foreground shadow-xl">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Quality assured
            </p>
            <p className="mt-1 font-heading text-lg font-bold">
              4-point inspection on every roll
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
