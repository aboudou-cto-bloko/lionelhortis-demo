"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { animate, spring } from "animejs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    label: "Gestion de campagnes",
    description:
      "Tu délègues. Je gère comme si c'était mon budget. Stratégie, création, optimisation continue et reporting clair chaque mois.",
    cta: "Discutons-en →",
    href: "https://calendly.com/onedigital-agency/appel-strategique",
  },
  {
    label: "Consulting",
    description:
      "30 minutes gratuites pour auditer ton compte et repartir avec un plan d'action précis. Pas de pitch — un diagnostic honnête.",
    cta: "Consultation gratuite →",
    href: "https://calendly.com/onedigital-agency/appel-strategique",
  },
  {
    label: "Guide Facebook Ads",
    description:
      "Le guide complet pour lancer des campagnes rentables : stratégie, structure, ciblage, créas. Téléchargement gratuit.",
    cta: "Télécharger le guide →",
    href: "https://lionelhortis.systeme.io/guide",
  },
]

const DEAL_ANGLES = [-9, -2, 6]

export default function SiteServices() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-card]"))

    // Pré-positionner les cartes avant d'animer
    cards.forEach((card, i) => {
      card.style.opacity = "0"
      card.style.transform = `translateY(60px) translateX(${DEAL_ANGLES[i] * 2}px) rotate(${DEAL_ANGLES[i]}deg) scale(0.88)`
    })

    // Chaque carte déclenche individuellement au scroll — adapté mobile (cartes empilées)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const card = entry.target as HTMLElement
          const i = cards.indexOf(card)
          animate(card, {
            opacity: 1,
            translateY: 0,
            translateX: 0,
            rotate: 0,
            scale: 1,
            delay: i * 60,
            ease: spring({ stiffness: 260, damping: 18, mass: 1 }),
          })
          observer.unobserve(card)
        })
      },
      { threshold: 0.2 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-24 max-w-5xl mx-auto px-6">
      <div className="flex flex-col gap-10 md:gap-12">

        <div className="border-b border-border pb-6 md:pb-8 flex flex-col gap-3">
          <p className="text-[11px] font-mono text-primary tracking-widest uppercase">
            Services
          </p>
          <h2 className="font-display text-3xl md:text-[44px] font-bold text-foreground">
            Comment je peux t&apos;aider
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <Card
              key={s.label}
              data-card
              className="flex flex-col justify-between hover:ring-primary/30 transition-shadow"
            >
              <div>
                <CardHeader>
                  <CardTitle className="text-base font-semibold text-foreground">
                    {s.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </CardDescription>
                </CardContent>
              </div>
              <CardContent className="pt-0 pb-6">
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {s.cta}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
