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
  const triggered = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return
        triggered.current = true

        const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-card]"))

        // Pré-positionner les cartes avant d'animer — évite toute syntaxe { from, to }
        cards.forEach((card, i) => {
          card.style.opacity = "0"
          card.style.transform = `translateY(70px) translateX(${DEAL_ANGLES[i] * 3}px) rotate(${DEAL_ANGLES[i]}deg) scale(0.86)`
        })

        // Animer vers l'état final — valeurs scalaires uniquement, ease: (pas easing:)
        cards.forEach((card, i) => {
          animate(card, {
            opacity: 1,
            translateY: 0,
            translateX: 0,
            rotate: 0,
            scale: 1,
            delay: i * 110,
            ease: spring({ stiffness: 260, damping: 18, mass: 1 }),
          })
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 max-w-5xl mx-auto px-6">
      <div className="flex flex-col gap-12">

        <div className="border-b border-border pb-8 flex flex-col gap-3">
          <p className="text-[11px] font-mono text-primary tracking-widest uppercase">
            Services
          </p>
          <h2 className="font-display text-4xl md:text-[44px] font-bold text-foreground">
            Comment je peux t&apos;aider
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <Card
              key={s.label}
              data-card
              className="flex flex-col justify-between min-h-[260px] hover:ring-primary/30 transition-shadow"
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
              <CardContent className="pt-0">
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
