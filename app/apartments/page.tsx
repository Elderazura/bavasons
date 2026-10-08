import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { apartments, src } from "@/lib/content";
import { Pic, SIZES } from "@/components/Pic";

export const metadata: Metadata = { title: "Apartments" };

export default function ApartmentsPage() {
  return (
    <article>
      <PageHero
        kicker="Apartments"
        title="Completed apartments across Kochi."
        lede="Ready homes in Kakkanad, Edapally, Kaloor, Palarivattom, and the older neighbourhoods the firm has built in for decades."
        aside={
          <div className="actions">
            <Link className="btn" href="/aura">VB Aura, now selling</Link>
            <Link className="btn ghost" href="/vb-earth">VB Earth</Link>
          </div>
        }
        image={{ src: apartments[2].image, alt: apartments[2].name, caption: `${apartments[2].name}, ${apartments[2].area}` }}
      />
      <section className="section wrap">
        <div className="folio-grid">
          {apartments.map((item) => {
            const body = (
              <>
                <figure><Pic alt={item.name} src={item.image} sizes={SIZES.third} /></figure>
                <div className="cap"><b>{item.name}</b><span>{item.area}</span></div>
              </>
            );
            return item.href ? (
              <Link key={item.name} href={item.href} className="folio-tile" data-rise>{body}</Link>
            ) : (
              <article key={item.name} className="folio-tile" data-rise>{body}</article>
            );
          })}
        </div>
      </section>
    </article>
  );
}
