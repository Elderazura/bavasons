import type { Metadata } from "next";
import Link from "next/link";
import { Pic, SIZES } from "@/components/Pic";
import { media, studioShots } from "@/lib/content";

export const metadata: Metadata = { title: "Designer Interiors" };

const points = [
  { title: "Contemporary Design", text: "Interiors tailor made for you." },
  { title: "Kitchen", text: "Optional Modular kitchen. German style Kitchen." },
  { title: "Commercial", text: "Executed by Trained technicians." },
];

export default function StudioPage() {
  return (
    <article>
      <section className="photo-hero center short">
        <Pic src={media.studioHero} alt="A Bavasons designed interior" sizes={SIZES.full} priority quality={90} />
        <div className="veil" />
        <div className="inner wrap">
          <h1>Interior Design Studio</h1>
          <p>Interiors tailor made for you</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap triple-grid" style={{ color: "inherit" }}>
          {points.map((p) => (
            <div key={p.title} data-rise>
              <h3 style={{ color: "var(--link-red)", fontFamily: "var(--display)", fontSize: 24 }}>{p.title}</h3>
              <p style={{ color: "inherit" }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="shot-grid">
            {studioShots.map((shot, i) => (
              <figure key={shot.src} className={i % 7 === 0 ? "wide" : undefined} style={{ margin: 0 }} data-rise>
                <Pic src={shot.src} alt={shot.alt} sizes={SIZES.third} />
              </figure>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28 }}>
            <Link className="btn light" href="/aura">See Aura</Link>
          </p>
        </div>
      </section>
    </article>
  );
}
