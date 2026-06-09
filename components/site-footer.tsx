import Link from "next/link"

const social = [
  { label: "Facebook", href: "https://web.facebook.com/nelprodconsultig3" },
  { label: "Twitter", href: "https://twitter.com/Lionelagb" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lionel-hortis-bradley-175415203/" },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-sm text-muted-foreground">© 2026 Lionel Hortis</p>

        <div className="flex items-center gap-5">
          {social.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  )
}
