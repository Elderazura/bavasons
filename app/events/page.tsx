import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ShotGrid } from "@/components/ShotGrid";
import { eventPhotos } from "@/lib/content";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <article>
      <PageHero
        kicker="Events"
        title="Twenty-five years of building homes."
        lede="The silver jubilee of Bavasons Constructions, held at Taj Gateway Hotel, Kochi."
        image={{ src: eventPhotos[0].src, alt: eventPhotos[0].alt }}
      />
      <section className="section tight wrap">
        <ShotGrid shots={eventPhotos.slice(1)} />
      </section>
    </article>
  );
}
