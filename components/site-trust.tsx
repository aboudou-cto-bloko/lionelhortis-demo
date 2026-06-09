import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const certifications = [
  {
    name: "Media Planning Professional",
    img: "https://lionelhortis.com/wp-content/uploads/2023/04/media-planning-professional-150x150.png",
  },
  {
    name: "Digital Marketing Associate",
    img: "https://lionelhortis.com/wp-content/uploads/2023/04/digital_assocaite_-removebg-preview-150x150.png",
  },
  {
    name: "Media Buying Professional",
    img: "https://lionelhortis.com/wp-content/uploads/2023/04/media_buying-removebg-preview-150x150.png",
  },
  {
    name: "Creative Professional",
    img: "https://lionelhortis.com/wp-content/uploads/2023/04/creative-removebg-preview-150x150.png",
  },
]

export default function SiteTrust() {
  return (
    <section className="border-y border-border py-5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest shrink-0">
            Certifié Meta
          </p>
          <Separator orientation="vertical" className="hidden sm:block h-6 bg-border" />
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center gap-2 group">
                <Image
                  src={cert.img}
                  alt={cert.name}
                  width={32}
                  height={32}
                  className="opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden lg:block">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
