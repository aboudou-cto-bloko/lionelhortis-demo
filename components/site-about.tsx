"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { animate, stagger } from "animejs"

const certs = [
  {
    domain: "Media Planning",
    level: "Professional",
    img: "https://lionelhortis.com/wp-content/uploads/2023/04/media-planning-professional-150x150.png",
  },
  {
    domain: "Digital Marketing",
    level: "Associate",
    img: "https://lionelhortis.com/wp-content/uploads/2023/04/digital_assocaite_-removebg-preview-150x150.png",
  },
  {
    domain: "Media Buying",
    level: "Professional",
    img: "https://lionelhortis.com/wp-content/uploads/2023/04/media_buying-removebg-preview-150x150.png",
  },
  {
    domain: "Creative",
    level: "Professional",
    img: "https://lionelhortis.com/wp-content/uploads/2023/04/creative-removebg-preview-150x150.png",
  },
]

export default function SiteAbout() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)

  // H2 — mots qui arrivent un par un
  useEffect(() => {
    const h2 = headingRef.current
    if (!h2) return

    const rawText = h2.textContent ?? ""
    h2.innerHTML = rawText
      .split(" ")
      .map((word) => `<span style="display:inline-block">${word}</span>`)
      .join(" ")

    // Pré-positionner avant observation
    const spans = Array.from(h2.querySelectorAll<HTMLElement>("span"))
    spans.forEach((s) => {
      s.style.opacity = "0"
      s.style.transform = "translateY(18px)"
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        animate(spans, {
          opacity: 1,
          translateY: 0,
          delay: stagger(38),
          duration: 480,
          ease: "out(3)",
        })
        observer.unobserve(h2)
      },
      { threshold: 0.4 }
    )

    observer.observe(h2)
    return () => observer.disconnect()
  }, [])

  // Paragraphes — spotlight : s'allument quand dans la zone de lecture
  useEffect(() => {
    const container = storyRef.current
    if (!container) return

    const paragraphs = Array.from(container.querySelectorAll<HTMLElement>("[data-story-p]"))

    paragraphs.forEach((p) => {
      p.style.opacity = "0.25"
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target as HTMLElement, {
              opacity: 1,
              translateY: 0,
              duration: 500,
              ease: "out(3)",
            })
          } else {
            animate(entry.target as HTMLElement, {
              opacity: 0.25,
              duration: 700,
              ease: "in(2)",
            })
          }
        })
      },
      { threshold: 0.6, rootMargin: "-8% 0px -12% 0px" }
    )

    // Pré-positionner puis observer
    paragraphs.forEach((p) => {
      p.style.transform = "translateY(10px)"
      observer.observe(p)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-16 md:py-24 max-w-5xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-mono text-primary tracking-widest uppercase">
            À propos
          </p>

          <h2
            ref={headingRef}
            className="font-display text-[28px] sm:text-4xl md:text-[44px] font-bold text-foreground leading-[1.15]"
          >
            Je ne suis pas une agence. Je suis la personne qui gère tes campagnes.
          </h2>

          <div ref={storyRef} className="flex flex-col gap-4">
            <p data-story-p className="text-muted-foreground leading-relaxed">
              Depuis 5 ans, j&apos;aide des entreprises de toutes tailles à vendre plus grâce
              aux médias sociaux. Mon obsession : construire des stratégies qui fonctionnent
              dans la durée, pas des pics de performance ponctuels.
            </p>
            <p data-story-p className="text-muted-foreground leading-relaxed">
              Basé à Cotonou, je travaille avec des PME et startups qui veulent une
              acquisition payante sérieuse — avec quelqu&apos;un qui comprend leur marché.
            </p>
            <p data-story-p className="text-muted-foreground leading-relaxed">
              Chaque euro dépensé en publicité est une décision. Je m&apos;assure
              que ces décisions soient fondées sur des données, pas des intuitions.
            </p>
          </div>
        </div>

        {/* Badges certifications Meta */}
        <div className="grid grid-cols-2 gap-3">
          {certs.map((c) => (
            <div
              key={c.domain}
              className="bg-card border border-border rounded-xl p-5 flex flex-col items-start gap-3 hover:border-primary/40 transition-colors"
            >
              <Image
                src={c.img}
                alt={`Meta ${c.domain} ${c.level}`}
                width={56}
                height={56}
                className="object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-foreground leading-snug">
                  {c.domain}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{c.level}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
