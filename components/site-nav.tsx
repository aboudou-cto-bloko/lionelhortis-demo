"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "À propos" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
]

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="19" y2="6" />
      <line x1="3" y1="11" x2="19" y2="11" />
      <line x1="3" y1="16" x2="19" y2="16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="4" x2="18" y2="18" />
      <line x1="18" y1="4" x2="4" y2="18" />
    </svg>
  )
}

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Bloquer le scroll body quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const dark = scrolled || open

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300",
          dark
            ? "bg-[#0C0C0E]/90 backdrop-blur-md border-b border-[#27272A]"
            : "bg-white/80 backdrop-blur-sm border-b border-black/8"
        )}
      >
        <nav className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="https://lionelhortis.com/wp-content/uploads/2023/02/Noir_et_Orange_Simple_Internet_Logo-removebg-preview-e1691769999943.png"
              alt="Lionel Hortis"
              width={140}
              height={48}
              className="h-9 w-auto transition-all duration-300"
              style={{
                filter: dark ? "brightness(0) invert(1) sepia(1) saturate(3)" : "none",
              }}
              priority
            />
          </Link>

          {/* Liens desktop */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm transition-colors",
                  scrolled
                    ? "text-[#71717A] hover:text-[#F4F4F5]"
                    : "text-[#52525B] hover:text-[#18181B]"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA desktop */}
          <Link
            href="https://calendly.com/onedigital-agency/appel-strategique"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}
          >
            Prendre RDV
          </Link>

          {/* Bouton hamburger mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-1.5 rounded-md transition-colors"
            style={{ color: dark ? "#F4F4F5" : "#18181B" }}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </nav>
      </header>

      {/* Overlay menu mobile */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-40 bg-[#0C0C0E]/97 backdrop-blur-md transition-all duration-200",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full px-6 py-8">
          {/* Liens */}
          <div className="flex flex-col">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-5 border-b border-[#1a1a1a] text-[#999] hover:text-[#F4F4F5] transition-colors text-lg font-medium"
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA mobile */}
          <div className="mt-8">
            <Link
              href="https://calendly.com/onedigital-agency/appel-strategique"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full justify-center h-12 text-base font-semibold"
              )}
            >
              Réserver un appel gratuit
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
