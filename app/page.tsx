import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Categories } from "@/components/categories"
import { Catalog } from "@/components/catalog"
import { WhyChooseUs } from "@/components/why-choose-us"
import { VideoShowcase } from "@/components/video-showcase"
import { ProcessTimeline } from "@/components/process-timeline"
import { Industries } from "@/components/industries"
import { ComparisonTable } from "@/components/comparison-table"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { LeadCta } from "@/components/lead-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <Catalog />
        <WhyChooseUs />
        <VideoShowcase />
        <ProcessTimeline />
        <Industries />
        <ComparisonTable />
        <Testimonials />
        <Faq />
        <LeadCta />
      </main>
      <SiteFooter />
    </div>
  )
}