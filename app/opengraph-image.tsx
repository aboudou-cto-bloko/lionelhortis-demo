import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Lionel Hortis — Consultant Facebook Ads"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage() {
  // Geist Regular est livré avec @vercel/og — pas de fetch réseau
  const geist = await readFile(
    join(
      process.cwd(),
      "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"
    )
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0C0C0E",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Geist, sans-serif",
        }}
      >
        {/* Grille pointillée subtile */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            display: "flex",
          }}
        />

        {/* Glow ambre bas-gauche */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -80,
            width: 600,
            height: 400,
            borderRadius: "50%",
            background: "rgba(245,158,11,0.18)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Glow ambre haut-droite */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: 180,
            width: 360,
            height: 260,
            borderRadius: "50%",
            background: "rgba(245,158,11,0.07)",
            filter: "blur(60px)",
            display: "flex",
          }}
        />

        {/* Contenu */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 80px",
            position: "relative",
          }}
        >
          {/* Colonne texte */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              maxWidth: 620,
            }}
          >
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{ width: 32, height: 2, background: "#F59E0B", display: "flex" }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  color: "#F59E0B",
                  textTransform: "uppercase",
                }}
              >
                Consultant Facebook Ads
              </span>
            </div>

            {/* Nom */}
            <div
              style={{
                fontSize: 76,
                fontWeight: 700,
                lineHeight: 1.0,
                color: "#F4F4F5",
                letterSpacing: "-0.03em",
              }}
            >
              Lionel Hortis
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: 22,
                fontWeight: 400,
                color: "#52525B",
                lineHeight: 1.5,
              }}
            >
              Stratégie · Acquisition · Performance
            </div>

            {/* Séparateur */}
            <div
              style={{
                width: 64,
                height: 1,
                background: "#27272A",
                display: "flex",
              }}
            />

            {/* Badges */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.3)",
                  borderRadius: 8,
                  padding: "8px 18px",
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#F59E0B",
                    display: "flex",
                  }}
                />
                <span style={{ fontSize: 14, fontWeight: 400, color: "#F59E0B" }}>
                  4× Certifié Meta
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 8,
                  padding: "8px 18px",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 400, color: "#52525B" }}>
                  📍 Cotonou, Bénin
                </span>
              </div>
            </div>
          </div>

          {/* Photo circulaire */}
          <div
            style={{
              display: "flex",
              position: "relative",
              flexShrink: 0,
              marginRight: 16,
            }}
          >
            {/* Anneau extérieur */}
            <div
              style={{
                position: "absolute",
                inset: -18,
                borderRadius: "50%",
                border: "1px solid rgba(245,158,11,0.12)",
                display: "flex",
              }}
            />
            {/* Anneau intérieur */}
            <div
              style={{
                position: "absolute",
                inset: -7,
                borderRadius: "50%",
                border: "1px solid rgba(245,158,11,0.28)",
                display: "flex",
              }}
            />
            {/* Photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lionelhortis.com/wp-content/uploads/2023/08/photo-daccueil-de-mon-site--997x1024.jpg"
              width={290}
              height={290}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                border: "2px solid rgba(245,158,11,0.45)",
              }}
            />
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 22,
            right: 80,
            fontSize: 13,
            fontWeight: 400,
            color: "#3F3F46",
            letterSpacing: "0.06em",
          }}
        >
          lionelhortis.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geist, style: "normal", weight: 400 },
      ],
    }
  )
}
