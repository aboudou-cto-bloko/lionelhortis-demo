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

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300",
        scrolled
          ? "bg-[#0C0C0E]/90 backdrop-blur-md border-b border-[#27272A]"
          : "bg-white/80 backdrop-blur-sm border-b border-black/8"
      )}
    >
      <nav className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center">
          <Image
            src="https://lionelhortis.com/wp-content/uploads/2023/02/Noir_et_Orange_Simple_Internet_Logo-removebg-preview-e1691769999943.png"
            alt="Lionel Hortis"
            width={140}
            height={48}
            className="h-10 w-auto transition-all duration-300"
            style={{
              filter: scrolled
                ? "brightness(0) invert(1) sepia(1) saturate(3)"
                : "none",
            }}
            priority
          />
        </Link>

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

        <Link
          href="https://calendly.com/onedigital-agency/appel-strategique"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}
        >
          Prendre RDV
        </Link>
      </nav>
    </header>
  )
}
