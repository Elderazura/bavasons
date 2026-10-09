import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { Pic, SIZES } from "@/components/Pic";
import { auraLandmarks, auraPhotos, company, media, src, telHref } from "@/lib/content";

export const metadata: Metadata = { title: "Aura" };

export default function AuraPage() {
  return (
    <article>
      <PageHero kicker="Kakkanad" title="Aura" note="Ready to Move Apartments. Contact us to know more details." />

      <section className="section">
        <div className="wrap split even">
          <figure className="zoom" style={{ margin: 0 }}>
            <Pic src={auraPhotos[0].src} alt={auraPhotos[0].alt} sizes={SIZES.half} priority />
          </figure>
          <div>
            <h2>Offers</h2>
            <div className="hr-gold left" />
            <p>3 BHK apartments at Kakkanad, from 49 to 63 lakh, with contemporary interiors included.</p>
            <p><strong>Kitchen :</strong> Complimentary</p>
            <p className="actions" style={{ marginTop: 18 }}>
              <a className="btn" href={src(media.auraBrochure)} target="_blank" rel="noreferrer">Download Brochure</a>
              <a className="btn flat" href="#enquire" style={{ background: "transparent", border: "1px solid currentColor", color: "inherit" }}>Enquire</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <h2 className="sec-title">Specifications &amp; Floor Plans</h2>
          <div className="shot-grid">
            {auraPhotos.slice(1).map((shot, i) => (
              <figure key={shot.src} className={i % 7 === 0 ? "wide" : undefined} style={{ margin: 0 }} data-rise>
                <Pic src={shot.src} alt={shot.alt} sizes={SIZES.third} />
                {shot.label ? <figcaption><b>{shot.label}</b></figcaption> : null}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-light">
        <div className="wrap split even">
          <div>
            <h2>Location</h2>
            <div className="hr-gold left" />
            <table className="ledger">
              <tbody>
                {auraLandmarks.map(([place, distance]) => (
                  <tr key={place}><td>{place}</td><td>{distance}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div id="enquire">
            <h2>Make an enquiry</h2>
            <div className="hr-gold left" />
            <div className="phone-row" style={{ marginTop: 16 }}>
              {company.auraPhones.map((phone) => (
                <a key={phone} href={telHref(phone)}>{phone}</a>
              ))}
            </div>
            <EnquiryForm
              fields={[
                { name: "name", label: "Name" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "style", label: "Flat style", type: "select" },
                { name: "message", label: "Message", type: "textarea", full: true },
              ]}
            />
          </div>
        </div>
      </section>
    </article>
  );
}
