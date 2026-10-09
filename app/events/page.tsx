import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Pic, SIZES } from "@/components/Pic";
import { eventPhotos } from "@/lib/content";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <article>
      <PageHero
        title={<>CELEBRATING 25 YEARS OF<br />BUILDING HOMES</>}
        note="Silver jubilee celebrations of Bavasons Constructions Pvt Ltd, held at Taj Gateway Hotel, Kochi, Kerala."
      />
      <section className="section">
        <div className="wrap shot-grid">
          {eventPhotos.map((shot, i) => (
            <figure key={shot.src} className={i % 7 === 0 ? "wide" : undefined} style={{ margin: 0 }} data-rise>
              <Pic src={shot.src} alt={shot.alt} sizes={SIZES.third} priority={i === 0} />
            </figure>
          ))}
        </div>
      </section>
    </article>
  );
}
