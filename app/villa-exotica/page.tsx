import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { WalkBook } from "@/components/WalkBook";
import { company, exoticaExterior, exoticaInterior, exoticaPlans, exoticaRenders, media, src, telHref } from "@/lib/content";
import { Pic, SIZES } from "@/components/Pic";

export const metadata: Metadata = {
  title: "Villa Exotica",
  description: "4 BHK villas at Nettoor, Kochi. Completed and ready to occupy.",
};

export default function VillaExoticaPage() {
  return (
    <article>
      <PageHero
        kicker="Nettoor, Kochi"
        title="Villa Exotica"
        lede="Three 4 BHK villas, completed and furnished. A few units left."
        aside={
          <>
            <ul className="facts">
              <li className="hot">Ready to occupy</li>
              <li>4 BHK</li>
              <li>Furnished</li>
              <li>Home theatre</li>
            </ul>
            <div className="actions">
              <a className="btn red" href="#enquire">Enquire</a>
              <a className="btn ghost" href={src(media.exoticaBrochure)} target="_blank" rel="noreferrer">Brochure</a>
            </div>
          </>
        }
        image={{ src: media.exterior, alt: "Villa Exotica, Nettoor" }}
      />

      <section className="section tight">
        <div className="wrap split">
          <div>
            <p className="kicker">Turn the key</p>
            <h2>Everything is already in.</h2>
          </div>
          <div className="prose">
            <p className="lede">
              Each villa comes furnished: furniture, cabinets, premium bedding, and a BenQ and Polk home theatre. Gazebos, rooftop decks, and powder rooms come with the house.
            </p>
            <p>Peacefully away, but not afar. Near the bypass in Nettoor: connected to the city, quiet enough to forget the traffic.</p>
          </div>
        </div>
      </section>

      <WalkBook outside={exoticaExterior} inside={exoticaInterior} drawn={exoticaRenders} plans={exoticaPlans} />

      <section className="section wrap">
        <div className="map-block">
          <div className="map-art">
            <Pic alt="Villa Exotica location map, Nettoor" src={media.exoticaMap} />
          </div>
          <div className="map-copy">
            <p className="kicker">Location</p>
            <h2>Nettoor, by the bypass.</h2>
            <p>Connected to the city, quiet enough to forget the traffic. Minutes from the NH bypass, schools, and the hospitals on the Kakkanad side.</p>
            <p className="coords">9° 55' 52.4" N · 76° 16' 2.3" E</p>
            <div className="actions" style={{ marginTop: 20 }}>
              <a className="btn ghost" href="https://maps.google.com/?q=Villa+Exotica+Bavasons+Nettoor+Kochi" target="_blank" rel="noreferrer">Open in maps</a>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Specifications</p>
            <h2>What the house is made of.</h2>
          </div>
        </div>
        <figure className="spec-sheet">
          <Pic alt="Villa Exotica specifications" src={media.exoticaSpec} sizes={SIZES.wrap} quality={90} />
        </figure>
      </section>

      <section className="section" id="enquire">
        <div className="wrap split">
          <div>
            <p className="kicker">Enquire</p>
            <h2>Ask about a villa.</h2>
            <p className="lede" style={{ margin: "18px 0 28px" }}>Tell us which villa you want to see. We will come back with what is still available.</p>
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
