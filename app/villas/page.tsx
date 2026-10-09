import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Pic, SIZES } from "@/components/Pic";
import { media, villaStills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Villas",
  description: "Villa Exotica at Nettoor, and earlier Bavasons villas in Kochi.",
};

export default function VillasPage() {
  return (
    <article>
      <PageHero title="VILLAS" note="Presently all Villa projects have been SOLD OUT." />

      <section className="section">
        <div className="wrap split even">
          <Link className="zoom" href="/villa-exotica" style={{ display: "block" }}>
            <Pic src={media.villaEx} alt="Villa Exotica, Nettoor" sizes={SIZES.half} priority />
          </Link>
          <div>
            <h2>Villa Exotica</h2>
            <div className="hr-gold left" />
            <p className="actions" style={{ marginTop: 18 }}>
              <Link className="btn" href="/villa-exotica">Know More</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="shot-grid">
            {villaStills.slice(1).map((shot) => (
              <figure key={shot.src} style={{ margin: 0 }} data-rise>
                <Pic src={shot.src} alt={shot.alt} sizes={SIZES.third} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
