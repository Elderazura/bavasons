import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FilmGrid } from "@/components/FilmGrid";
import { HeroVideo } from "@/components/HeroVideo";
import { Pic, SIZES } from "@/components/Pic";
import { company, exoticaPlans, filmGallery, media, src, telHref, video } from "@/lib/content";

export const metadata: Metadata = {
  title: "Villa Exotica",
  description: "4 BHK villas at Nettoor, Kochi. Completed and ready to occupy.",
};

export default function VillaExoticaPage() {
  return (
    <article>
      <HeroVideo
        desktop={video.exoticaDesktop}
        desktopPoster={video.exoticaDesktopPoster}
        mobile={video.exoticaMobile}
        mobilePoster={video.exoticaMobilePoster}
      >
        <h1>Luxe Living</h1>
        <p className="sub">Completed &amp; Ready to Occupy Luxury Villas</p>
      </HeroVideo>

      <section className="section">
        <div className="wrap split even">
          <div>
            <h2>Luxe Living</h2>
            <div className="hr-gold left" />
            <p>
              From top-notch, palatial design to plush interiors and furnishing, we have ensured all that you need to do is, well, turn the key and move into your own piece of heaven on Earth. It&rsquo;s a complete package. Welcome drinks included! Each of the three Exotica villas comes with haute, tasteful decor, which includes furniture sets, cabinets, premium bedding, home theatre (Benq &amp; Polk), and more. Thumb through the pages for a quick glance at what&rsquo;s in offer. We are sure you would love them.
            </p>
            <p>Contemporary add-ons such as gazebos, rooftop decks &amp; powder rooms</p>
            <p className="actions" style={{ marginTop: 18 }}>
              <a className="btn" href={src(media.exoticaBrochure)} target="_blank" rel="noreferrer">Download Brochure</a>
              <a className="btn flat" href="#enquire" style={{ background: "transparent", border: "1px solid currentColor", color: "inherit" }}>Make an enquiry</a>
            </p>
          </div>
          <figure className="zoom" style={{ margin: 0 }}>
            <Pic src={media.exterior} alt="Villa Exotica, Nettoor" sizes={SIZES.half} priority quality={90} />
          </figure>
        </div>
      </section>

      <section className="band-light">
        <div className="wrap">
          <h2 className="sec-title">Gallery</h2>
          <FilmGrid films={filmGallery} />
        </div>
      </section>

      <section className="section tight">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <h2>Top-notch design and allurin aesthetics</h2>
          <p className="actions" style={{ justifyContent: "flex-end" }}>
            <a className="btn flat" href={src(media.exoticaBrochure)} target="_blank" rel="noreferrer" style={{ background: "#000", borderColor: "#000" }}>Download Brochure</a>
          </p>
        </div>
      </section>

      <section className="panes" aria-label="Interior and exterior views">
        <Link className="pane" href="/gallery">
          <Pic src={media.exoticaSpec} alt="Villa Exotica interiors" sizes={SIZES.half} />
          <div className="pane-copy">
            <h2>Interior<br />Views</h2>
            <span className="btn sm">Photo Gallery</span>
          </div>
        </Link>
        <Link className="pane" href="/gallery">
          <Pic src={media.exoticaCard} alt="Villa Exotica exteriors" sizes={SIZES.half} />
          <div className="pane-copy">
            <h2>Exterior<br />Views</h2>
            <span className="btn sm">Photo Gallery</span>
          </div>
        </Link>
      </section>

      <section className="section band-black">
        <div className="wrap doc-links">
          <div className="doc-card" data-rise>
            <Pic src={exoticaPlans[0].src} alt="Villa Exotica floor plan" sizes={SIZES.half} />
            <a className="btn outline" href={src(exoticaPlans[0].src)} target="_blank" rel="noreferrer">View floor plans</a>
          </div>
          <div className="doc-card" data-rise>
            <Pic src={media.exoticaSpec} alt="Villa Exotica specification sheet" sizes={SIZES.half} />
            <a className="btn outline" href={src(media.exoticaSpec)} target="_blank" rel="noreferrer">View Specification</a>
          </div>
        </div>
      </section>

      <section className="section band-slate">
        <div className="wrap split">
          <div>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 24 }}>The Location</h3>
            <p className="coords">9° 55&#39; 52.4388&#39;&#39; N, 76° 16&#39; 2.2908&#39;&#39; E</p>
            <h2 style={{ marginTop: 18 }}>Peacefully away<br />but not afar &mdash;<br />from the city&rsquo;s buzz</h2>
            <p style={{ maxWidth: "46ch", marginTop: 16, color: "rgba(255,255,255,0.8)" }}>
              The Villa Exotica project boasts an enviable location: well connected to the city, but disconnected from its hustle and bustle. Located near the bypass in Nettoor, you get to live in tranquil surroundings without compromising on quick access to the city centre.
            </p>
          </div>
          <figure style={{ margin: 0 }}>
            <img src={src(media.exoticaMap)} alt="Villa Exotica location map, Nettoor" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="section" id="enquire">
        <div className="wrap split even">
          <div>
            <h2>Make an enquiry</h2>
            <div className="hr-gold left" />
            <div className="phone-row">
              {company.villaPhones.map((phone) => (
                <a key={phone} href={telHref(phone)}>{phone}</a>
              ))}
            </div>
          </div>
          <EnquiryForm
            fields={[
              { name: "name", label: "Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "message", label: "Message", type: "textarea", full: true },
            ]}
          />
        </div>
      </section>
    </article>
  );
}
