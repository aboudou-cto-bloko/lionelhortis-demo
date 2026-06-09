"use client"

import { useEffect, useRef } from "react"
import { animate, spring } from "animejs"

const steps = [
  {
    n: "01",
    title: "Appel découverte",
    desc: "30 min gratuit. J'analyse ta situation et on identifie ensemble les opportunités.",
  },
  {
    n: "02",
    title: "Audit & stratégie",
    desc: "Diagnostic complet de ton compte publicitaire. Un plan d'action sur mesure.",
  },
  {
    n: "03",
    title: "Lancement",
    desc: "Setup complet des campagnes — tracking, créas, audiences. Opérationnel en 7 jours.",
  },
  {
    n: "04",
    title: "Suivi continu",
    desc: "Reporting mensuel clair. Ajustements réguliers pour maximiser les résultats.",
  },
]

export default function SiteProcess() {
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = stepsRef.current
    if (!container) return

    const items = Array.from(container.querySelectorAll<HTMLElement>("[data-step]"))

    // État initial — atténué et décalé vers le bas
    items.forEach((el) => {
      el.style.opacity = "0.2"
      el.style.transform = "translateY(12px)"
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement

            // Numéro — spring pop
            const num = el.querySelector<HTMLElement>("[data-step-num]")
            if (num) {
              num.style.transform = "scale(0.6)"
              num.style.opacity = "0"
              animate(num, {
                opacity: 1,
                scale: 1,
                ease: spring({ stiffness: 400, damping: 20, mass: 1 }),
              })
            }

            // Bloc entier
            animate(el, {
              opacity: 1,
              translateY: 0,
              duration: 460,
              ease: "out(3)",
            })
          } else {
            animate(entry.target as HTMLElement, {
              opacity: 0.2,
              duration: 600,
              ease: "in(2)",
            })
          }
        })
      },
      { threshold: 0.5, rootMargin: "-5% 0px -10% 0px" }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="py-24 bg-card/40 border-y border-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">

        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-mono text-primary tracking-widest uppercase">
            Process
          </p>
          <h2 className="font-display text-4xl md:text-[44px] font-bold text-foreground">
            Comment ça se passe
          </h2>
        </div>

        <div ref={stepsRef} className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.n}
              data-step
              className="flex flex-col gap-4"
            >
              <span
                data-step-num
                className="font-mono text-4xl font-bold text-primary leading-none"
              >
                {step.n}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
