import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SiteGuide() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-2xl bg-card border border-primary/30">

        {/* Fond ambre dégradé */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 0% 50%, rgba(245,158,11,0.12), transparent)",
          }}
        />

        <div className="relative grid md:grid-cols-[1fr_280px] gap-0 items-stretch">

          {/* Texte */}
          <div className="p-8 md:p-14 flex flex-col gap-5 md:gap-6 justify-center">
            <Badge variant="outline" className="w-fit border-primary/40 text-primary font-mono text-[10px] tracking-widest uppercase">
              Ressource gratuite
            </Badge>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-[1.2]">
              Le Guide Complet<br />
              de la Publicité Facebook
            </h2>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Stratégie, structure de comptes, ciblage, créas, budgets — tout
              ce qu'il faut pour lancer des campagnes rentables dès aujourd'hui.
              Rédigé depuis 5 ans de terrain.
            </p>

            <ul className="flex flex-col gap-2">
              {[
                "Comment structurer ton compte Ads",
                "Les audiences qui convertissent vraiment",
                "Budgets et enchères : la méthode",
                "Créas : formats et accroches qui marchent",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="https://lionelhortis.systeme.io/guide"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-fit h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold mt-1 justify-center"
              )}
            >
              Télécharger gratuitement →
            </Link>
          </div>

          {/* Couverture réelle du guide */}
          <div className="hidden md:flex items-center justify-center p-10 border-l border-border">
            <div className="relative">
              {/* Ombre portée */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-primary/20 blur-xl" />
              <Image
                src="https://lionelhortis.com/wp-content/uploads/2023/08/ebook-visuel-1024x1024.jpg"
                alt="Guide Complet de la Publicité Facebook — Lionel Hortis"
                width={220}
                height={220}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
