import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShotGrid } from "@/components/ShotGrid";
import { media, src, villaStills } from "@/lib/content";
import { Pic, SIZES } from "@/components/Pic";

export const metadata: Metadata = {
  title: "Villas",
  description: "Villa Exotica at Nettoor, and earlier Bavasons villas in Kochi.",
};

export default function VillasPage() {
  return (
    <article>
      <PageHero
        kicker="Villas"
        title="Villa Exotica, and the houses before it."
        lede="Three furnished 4 BHK villas at Nettoor, completed and ready to occupy, with a few units left."
        aside={
          <>
            <ul className="facts"><li className="hot">Ready to occupy</li><li>4 BHK</li><li>Nettoor</li></ul>
            <div className="actions">
              <Link className="btn red" href="/villa-exotica">Walk through Exotica</Link>
            </div>
          </>
        }
      />
      <section className="wrap">
        <Link href="/villa-exotica" className="tile lead" data-rise style={{ minHeight: 620 }}>
          <Pic alt="Villa Exotica entrance gate" src={media.heroPoster} sizes={SIZES.wrap} priority />
          <div className="tile-copy">
            <span className="num">Now selling · Nettoor</span>
            <h3>Villa Exotica</h3>
            <p>Furnished, with a BenQ and Polk home theatre already in.</p>
          </div>
        </Link>
      </section>
      <section className="section wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Earlier houses</p>
            <h2>Villas the house has built.</h2>
          </div>
        </div>
        <ShotGrid shots={villaStills.slice(1)} />
      </section>
    </article>
  );
}
