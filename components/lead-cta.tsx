"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react"

export function LeadCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-xl">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
            <div>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Get a fabric quote within 24 hours
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/75">
                Tell us what you&apos;re building. Our team will recommend the right
                denim, send swatches, and price your order—factory direct.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Free swatch card with your quote",
                  "Dedicated sourcing specialist",
                  "Transparent pricing & lead times",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                nativeButton={false}
                render={
                  <a
                    href="https://wa.me/10000000000"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>

            <div className="rounded-2xl bg-card p-6 text-card-foreground sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 font-heading text-xl font-bold">
                    Request received
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks! Our sourcing team will reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" id="name" placeholder="Jane Cooper" required />
                    <Field label="Company" id="company" placeholder="Your brand" required />
                  </div>
                  <Field
                    label="Work email"
                    id="email"
                    type="email"
                    placeholder="jane@brand.com"
                    required
                  />
                  <Field
                    label="Estimated quantity"
                    id="quantity"
                    placeholder="e.g. 2,000 meters"
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      What do you need?
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Fabric type, weight, wash, deadline…"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    Get My Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
      />
    </div>
  )
}
