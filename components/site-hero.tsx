"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { animate, stagger, createTimeline } from "animejs"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="currentColor" className={className} aria-hidden>
      <path d="M20.18 35.89V20.42h5.18l.78-6.01h-5.96v-3.84c0-1.74.48-2.92 2.98-2.92h3.18V3.27A43.3 43.3 0 0 0 21.8 3c-4.6 0-7.75 2.8-7.75 7.95v4.46H8.86v6.01h5.19v15.47h6.13Z" />
    </svg>
  )
}

export default function SiteHero() {
  const innerRef = useRef<HTMLDivElement>(null)
  const textColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const inner = innerRef.current
    const textCol = textColRef.current
    if (!inner || !textCol) return

    // Logos flottants
    const floatingEls = inner.querySelectorAll<HTMLElement>("[data-float]")
    floatingEls.forEach((el) => {
      const delay = +(el.dataset.floatDelay ?? 0)
      const dur = +(el.dataset.floatDur ?? 5000)
      const range = +(el.dataset.floatRange ?? 14)
      animate(el, { translateY: [-range / 2, range / 2], ease: "inOut(2)", duration: dur, delay, loop: true, alternate: true })
      animate(el, { rotate: [-3, 3], ease: "inOut(2)", duration: dur * 1.4, delay: delay + 400, loop: true, alternate: true })
    })

    // Texte hero — entrée séquentielle
    const label = textCol.querySelector<HTMLElement>("[data-hero-label]")
    const heading = textCol.querySelector<HTMLElement>("[data-hero-h1]")
    const para = textCol.querySelector<HTMLElement>("[data-hero-p]")
    const buttons = textCol.querySelector<HTMLElement>("[data-hero-buttons]")

    if (label) { label.style.opacity = "0"; label.style.transform = "translateY(12px)" }
    if (heading) {
      const raw = heading.textContent ?? ""
      heading.innerHTML = raw.split(" ").map((w) =>
        `<span style="display:inline-block;opacity:0;transform:translateY(22px)">${w}</span>`
      ).join(" ")
    }
    if (para) { para.style.opacity = "0"; para.style.transform = "translateY(10px)" }
    if (buttons) { buttons.style.opacity = "0"; buttons.style.transform = "translateY(10px)" }

    const tl = createTimeline({ defaults: { ease: "out(3)", duration: 500 } })
    if (label) tl.add(label, { opacity: 1, translateY: 0, duration: 400 }, 200)
    if (heading) tl.add(heading.querySelectorAll("span"), { opacity: 1, translateY: 0, delay: stagger(40) }, 400)
    if (para) tl.add(para, { opacity: 1, translateY: 0 }, "-=100")
    if (buttons) tl.add(buttons, { opacity: 1, translateY: 0 }, "-=300")
    tl.play()
  }, [])

  return (
    <section className="light-section border-b border-border">
      <div
        ref={innerRef}
        className="min-h-[calc(100vh-4rem)] pt-28 pb-20 max-w-5xl mx-auto px-6 flex items-center relative overflow-hidden"
      >
        {/* Logos flottants arrière-plan */}
        <div data-float data-float-delay="0" data-float-dur="6000" data-float-range="18"
          aria-hidden className="pointer-events-none absolute top-16 right-[-20px] md:right-10 opacity-[0.07] select-none">
          <Image src="/meta-logo.png" alt="" width={200} height={200} className="object-contain" />
        </div>

        <div data-float data-float-delay="800" data-float-dur="7500" data-float-range="12"
          aria-hidden className="pointer-events-none absolute bottom-20 right-4 md:right-16 opacity-[0.06] select-none text-[#D97706]"
          style={{ width: 130, height: 130 }}>
          <FacebookIcon className="w-full h-full" />
        </div>

        <div data-float data-float-delay="1600" data-float-dur="5200" data-float-range="10"
          aria-hidden className="pointer-events-none absolute bottom-32 left-[-10px] opacity-[0.05] select-none">
          <Image src="/meta-logo.png" alt="" width={90} height={90} className="object-contain" />
        </div>

        <div data-float data-float-delay="2400" data-float-dur="8200" data-float-range="20"
          aria-hidden className="pointer-events-none absolute top-10 left-[-40px] opacity-[0.04] select-none text-[#D97706]"
          style={{ width: 160, height: 160 }}>
          <FacebookIcon className="w-full h-full" />
        </div>

        {/* Contenu */}
        <div className="grid md:grid-cols-[1fr_420px] gap-14 items-center w-full relative z-10">

          <div ref={textColRef} className="flex flex-col gap-6">
            <p data-hero-label className="font-mono text-xs text-primary tracking-widest uppercase">
              Expert Facebook Ads · Cotonou, Bénin
            </p>

            <h1 data-hero-h1 className="font-display text-[48px] md:text-[60px] leading-[1.1] tracking-tight text-foreground font-bold">
              5 ans à aider les entreprises à vendre plus.
            </h1>

            <p data-hero-p className="text-lg text-muted-foreground max-w-[480px] leading-relaxed">
              Consultant marketing et expert Facebook Ads. Je construis des campagnes
              qui rapportent — pas des tableaux de bord qui impressionnent.
            </p>

            <div data-hero-buttons className="flex flex-wrap gap-3 pt-2">
              <Link
                href="https://calendly.com/onedigital-agency/appel-strategique"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "h-12 px-8 text-base font-semibold")}
              >
                Réserver un appel gratuit
              </Link>
              <Link
                href="#services"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8 text-base")}
              >
                Voir les services
              </Link>
            </div>
          </div>

          {/* Photo circulaire */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-primary/15" />
              <div className="absolute -inset-2 rounded-full border border-primary/30" />
              <div className="relative w-[360px] h-[360px] rounded-full overflow-hidden border-2 border-primary/50">
                <Image
                  src="https://lionelhortis.com/wp-content/uploads/2023/08/photo-daccueil-de-mon-site--997x1024.jpg"
                  alt="Lionel Hortis — Consultant Facebook Ads"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
