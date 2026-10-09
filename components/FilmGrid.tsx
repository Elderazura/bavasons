import { Pic } from "@/components/Pic";

export type Film = { src: string; alt: string; href: string; title?: string; note?: string };

/** The original video gallery: rounded thumbnails that open the film on Vimeo. */
export function FilmGrid({ films, of3, captions }: { films: Film[]; of3?: boolean; captions?: boolean }) {
  return (
    <div className={`tile-grid${of3 ? " of-3" : ""}`}>
      {films.map((film) => (
        <a
          key={film.href}
          className={`tile${of3 ? " wide" : ""}`}
          href={film.href}
          target="_blank"
          rel="noreferrer"
          data-rise
        >
          <Pic src={film.src} alt={film.alt} sizes="(max-width: 600px) 50vw, (max-width: 991px) 33vw, 25vw" />
          <span className="play" aria-hidden="true"><span /></span>
          {captions && film.title ? (
            <figcaption>
              <b>{film.title}</b>
              {film.note}
            </figcaption>
          ) : null}
        </a>
      ))}
    </div>
  );
}
