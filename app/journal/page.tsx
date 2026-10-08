import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ShotGrid } from "@/components/ShotGrid";
import { journal } from "@/lib/content";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <article>
      <PageHero
        kicker="Journal"
        title="The room beyond the site."
        lede="Directors with presidents, governors, and the people who have sat with this family for years."
        image={{ src: journal[0].image, alt: journal[0].title, caption: journal[0].text }}
      />
      <section className="section tight wrap">
        <ShotGrid shots={journal.slice(1).map((entry) => ({ src: entry.image, alt: entry.title, label: entry.title, note: entry.text }))} />
      </section>
    </article>
  );
}
