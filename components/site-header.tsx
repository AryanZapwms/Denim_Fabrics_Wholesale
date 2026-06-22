"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, MessageCircle, X } from "lucide-react"

const navLinks = [
  { label: "Fabrics", href: "#categories" },
  { label: "Catalog", href: "#catalog" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <Image
            src="https://www.denimfabricswholesale.co.za/cdn/shop/files/denimfabrics-website.png?v=1692796842&width=435"
            alt="Denim Fabrics Wholesale"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            className="gap-2"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
          <Button nativeButton={false} render={<a href="#contact" />}>
            Get Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-2"
              nativeButton={false}
              render={<a href="#contact" onClick={() => setOpen(false)} />}
            >
              Get Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}