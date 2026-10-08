import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ShotGrid } from "@/components/ShotGrid";
import { exoticaExterior, exoticaInterior, galleryPage, media } from "@/lib/content";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <article>
      <PageHero
        kicker="Gallery"
        title="Still frames."
        lede="Villa Exotica outside and in, then the office and the people."
        image={{ src: galleryPage[0].src, alt: galleryPage[0].alt }}
      />
      <section className="section tight wrap">
        <div className="section-head"><div><p className="kicker">Exotica</p><h2>Outside.</h2></div></div>
        <ShotGrid shots={exoticaExterior} />
      </section>
      <section className="section tight wrap">
        <div className="section-head"><div><p className="kicker">Exotica</p><h2>Inside.</h2></div></div>
        <ShotGrid shots={exoticaInterior} />
      </section>
      <section className="section tight wrap">
        <div className="section-head"><div><p className="kicker">The house</p><h2>The office and the people.</h2></div></div>
        <ShotGrid
          shots={[
            { src: media.onam, alt: "Onam at the office", label: "Onam" },
            { src: media.faces, alt: "Bavasons team", label: "Team" },
            { src: media.staff, alt: "Site workers", label: "Crew" },
            { src: media.office, alt: "Office interior", label: "Office" },
            { src: media.square, alt: "Bavasons Square", label: "The square" },
          ]}
        />
      </section>
    </article>
  );
}
