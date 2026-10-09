import Link from "next/link";
import { FilmGrid } from "@/components/FilmGrid";
import { HeroVideo } from "@/components/HeroVideo";
import { Pic, SIZES } from "@/components/Pic";
import { StandSlider } from "@/components/StandSlider";
import { completed, filmGallery, latestProjects, media, src, video } from "@/lib/content";

export function HomeView() {
  return (
    <>
      <HeroVideo
        desktop={video.heroDesktop}
        desktopPoster={video.heroDesktopPoster}
        mobile={video.heroMobile}
        mobilePoster={video.heroMobilePoster}
      >
        <h1>Villa Exotica</h1>
        <p className="sub">Luxe Living</p>
        <Link className="btn outline" href="/villa-exotica">Know More</Link>
      </HeroVideo>

      <section className="band-light">
        <div className="wrap">
          <div className="red-card" data-rise>
            <h2>Villa Exotica</h2>
            <h4>4BHK Villas at Nettoor, Kochi</h4>
            <p>Completed and Ready to Occupy. Only few more units left.</p>
            <div className="actions">
              <Link className="btn" href="/villa-exotica">Read more</Link>
              <a className="btn" href={src(media.exoticaBrochure)} target="_blank" rel="noreferrer">Download Brochure</a>
              <Link className="btn" href="/gallery">Gallery</Link>
            </div>
          </div>
          <FilmGrid films={filmGallery} />
        </div>
      </section>

      <StandSlider />

      <section className="section">
        <div className="wrap">
          <h2 className="sec-title">Latest Projects</h2>
          <div className="lp-grid">
            {latestProjects.map((item) => (
              <Link key={item.name} className="lp-item" href={item.href} data-rise>
                <Pic src={item.image} alt={item.name} sizes={SIZES.quarter} />
                <div className="title-lp">{item.name}</div>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28 }}>
            <Link className="btn light" href="/projects">More Projects</Link>
          </p>
        </div>
      </section>

      <section className="doors" aria-label="What we build">
        <Link className="door" href="/apartments" data-rise>
          <Pic src={completed[11].image} alt="Bavasons apartments" sizes={SIZES.half} />
          <div className="door-copy">
            <p className="eyebrow">Projects</p>
            <h3>Apartments</h3>
            <span className="more">Read more</span>
          </div>
        </Link>
        <Link className="door" href="/villas" data-rise>
          <Pic src={media.exoticaWide} alt="Bavasons villas" sizes={SIZES.half} />
          <div className="door-copy">
            <p className="eyebrow">Projects</p>
            <h3>Villas</h3>
            <span className="more">Read more</span>
          </div>
        </Link>
      </section>
    </>
  );
}
