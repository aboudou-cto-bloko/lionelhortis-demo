"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { animate } from "animejs"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function SiteCta() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    card.style.opacity = "0"
    card.style.transform = "translateY(40px)"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        animate(card, { opacity: 1, translateY: 0, duration: 700, ease: "out(3)" })
        observer.unobserve(card)
      },
      { threshold: 0.2 }
    )

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto px-6">
      <div
        ref={cardRef}
        className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 sm:p-12 md:p-20 text-center"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(245,158,11,0.1), transparent)",
          }}
        />

        <div className="relative flex flex-col items-center gap-6 max-w-lg mx-auto">
          <p className="text-[11px] font-mono text-primary tracking-widest uppercase">
            Prêt à démarrer ?
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.15]">
            Parlons de tes campagnes.
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Un appel de 30 minutes. Gratuit. Je t&apos;explique ce qui bloque
            et ce qui est possible. Tu décides ensuite.
          </p>

          <Link
            href="https://calendly.com/onedigital-agency/appel-strategique"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 px-6 sm:px-10 text-sm sm:text-base font-semibold w-full sm:w-auto"
            )}
          >
            Réserver mon appel gratuit →
          </Link>

          <p className="text-xs text-muted-foreground">
            Disponibilité limitée · Réponse sous 24h · Sans engagement
          </p>
        </div>
      </div>
    </section>
  )
}
