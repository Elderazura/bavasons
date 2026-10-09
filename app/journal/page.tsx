import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Pic, SIZES } from "@/components/Pic";
import { journal } from "@/lib/content";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <article>
      <PageHero title="JOURNAL" note="Directors with presidents, governors, and the people who have sat with this family for years." />
      <section className="section">
        <div className="wrap shot-grid">
          {journal.map((entry, i) => (
            <figure key={entry.title} className={i % 7 === 0 ? "wide" : undefined} style={{ margin: 0 }} data-rise>
              <Pic src={entry.image} alt={entry.title} sizes={SIZES.third} priority={i === 0} />
              <figcaption><b>{entry.title}</b><span>{entry.text}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>
    </article>
  );
}
