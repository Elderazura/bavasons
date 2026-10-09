import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Pic, SIZES } from "@/components/Pic";
import { commercialClients, media } from "@/lib/content";

export const metadata: Metadata = { title: "Commercial Projects" };

const shots = [
  { src: media.office, alt: "Bavasons commercial interior" },
  { src: media.office2, alt: "Bavasons commercial interior" },
  { src: media.office11, alt: "Bavasons commercial interior" },
  { src: media.office12, alt: "Bavasons commercial interior" },
];

export default function CommercialPage() {
  return (
    <article>
      <PageHero title="Commercial Projects" note="Commercial spaces available for sale and rent in various parts of the city." />

      <section className="section">
        <div className="wrap shot-grid">
          {shots.map((shot, i) => (
            <figure key={shot.src} className={i === 0 ? "wide" : undefined} style={{ margin: 0 }} data-rise>
              <Pic src={shot.src} alt={shot.alt} sizes={SIZES.third} priority={i === 0} />
            </figure>
          ))}
        </div>
      </section>

      <section className="section band-light">
        <div className="wrap">
          <h2 className="sec-title">Existing Commercial Clients</h2>
          <ul className="spec-list" style={{ maxWidth: 760, margin: "0 auto" }}>
            {commercialClients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
