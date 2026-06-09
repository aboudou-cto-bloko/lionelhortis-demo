import SiteNav from "@/components/site-nav"
import SiteHero from "@/components/site-hero"
import SiteTrust from "@/components/site-trust"
import SiteAbout from "@/components/site-about"
import SiteServices from "@/components/site-services"
import SiteGuide from "@/components/site-guide"
import SiteProcess from "@/components/site-process"
import SiteCta from "@/components/site-cta"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="overflow-x-hidden">
        <SiteHero />
        <SiteTrust />
        <SiteAbout />
        <SiteServices />
        <SiteGuide />
        <SiteProcess />
        <SiteCta />
      </main>
      <SiteFooter />
    </>
  )
}
