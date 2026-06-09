import type { Metadata } from "next"
import { Poppins, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Lionel Hortis — Consultant Facebook Ads",
  description:
    "Consultant marketing et expert Facebook Ads à Cotonou, Bénin. 5 ans à aider les entreprises à vendre plus grâce aux réseaux sociaux.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`dark ${poppins.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
