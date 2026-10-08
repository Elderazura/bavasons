import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShotGrid } from "@/components/ShotGrid";
import { studioShots } from "@/lib/content";

export const metadata: Metadata = { title: "Design Studio" };

export default function StudioPage() {
  return (
    <article>
      <PageHero
        kicker="Design studio"
        title="Interiors, cut to the house."
        lede="Drawn for the apartment or the villa rather than dropped in afterwards. On Aura, the kitchen is complimentary."
        aside={<div className="actions"><Link className="btn" href="/aura">See Aura</Link></div>}
        image={{ src: studioShots[0].src, alt: studioShots[0].alt }}
      />
      <section className="section tight wrap">
        <ShotGrid shots={studioShots.slice(1)} />
      </section>
    </article>
  );
}
