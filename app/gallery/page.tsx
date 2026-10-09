import type { Metadata } from "next";
import { FilmGrid } from "@/components/FilmGrid";
import { PageHero } from "@/components/PageHero";
import { Pic, SIZES } from "@/components/Pic";
import { exoticaExterior, exoticaInterior, filmGallery, houseFilms, media } from "@/lib/content";

export const metadata: Metadata = { title: "Gallery" };

const house = [
  { src: media.onam, alt: "Onam at the Bavasons office", label: "Onam" },
  { src: media.faces, alt: "The Bavasons team", label: "Team" },
  { src: media.staff, alt: "Workers on a Bavasons site", label: "Crew" },
  { src: media.office, alt: "Office interior", label: "Office" },
  { src: media.square, alt: "Bavasons Square", label: "The square" },
];

export default function GalleryPage() {
  return (
    <article>
      <PageHero title="Media" />

      <section className="band-light">
        <div className="wrap">
          <h2 className="sec-title">Videos</h2>
          <FilmGrid films={filmGallery} />
          <div style={{ marginTop: 24 }}>
            <FilmGrid films={houseFilms} of3 captions />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="sec-title">Villa Exotica &mdash; outside</h2>
          <div className="shot-grid">
            {exoticaExterior.map((shot, i) => (
              <figure key={shot.src} className={i % 7 === 0 ? "wide" : undefined} style={{ margin: 0 }} data-rise>
                <Pic src={shot.src} alt={shot.alt} sizes={SIZES.third} />
                {shot.label ? <figcaption><b>{shot.label}</b></figcaption> : null}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <h2 className="sec-title">Villa Exotica &mdash; inside</h2>
          <div className="shot-grid">
            {exoticaInterior.map((shot, i) => (
              <figure key={shot.src} className={i % 7 === 0 ? "wide" : undefined} style={{ margin: 0 }} data-rise>
                <Pic src={shot.src} alt={shot.alt} sizes={SIZES.third} />
                {shot.label ? <figcaption><b>{shot.label}</b></figcaption> : null}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <h2 className="sec-title">The house</h2>
          <div className="shot-grid">
            {house.map((shot, i) => (
              <figure key={shot.src} className={i === 0 ? "wide" : undefined} style={{ margin: 0 }} data-rise>
                <Pic src={shot.src} alt={shot.alt} sizes={SIZES.third} />
                <figcaption><b>{shot.label}</b></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
