import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { ShotGrid } from "@/components/ShotGrid";
import { auraLandmarks, auraPhotos, company, media, src, telHref } from "@/lib/content";

export const metadata: Metadata = { title: "VB Aura" };

export default function AuraPage() {
  return (
    <article>
      <PageHero
        kicker="Kakkanad"
        title="VB Aura"
        lede="3 BHK apartments at Kakkanad, from 49 to 63 lakh, with contemporary interiors and a complimentary modular kitchen."
        aside={
          <>
            <ul className="facts"><li className="hot">Ready to occupy</li><li>3 BHK</li><li>49–63 lakh</li></ul>
            <div className="actions">
              <a className="btn red" href="#enquire">Enquire</a>
              <a className="btn ghost" href={src(media.auraBrochure)} target="_blank" rel="noreferrer">Brochure</a>
            </div>
          </>
        }
        image={{ src: auraPhotos[0].src, alt: auraPhotos[0].alt }}
      />
      <section className="section tight wrap">
        <ShotGrid shots={auraPhotos.slice(1)} />
      </section>
      <section className="section band">
        <div className="wrap split">
          <div>
            <p className="kicker">Location</p>
            <h2>Nearest landmarks.</h2>
            <table className="ledger">
              <tbody>
                {auraLandmarks.map(([place, distance]) => (
                  <tr key={place}><td>{place}</td><td>{distance}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div id="enquire">
            <p className="kicker">Enquire</p>
            <h2>Which flat?</h2>
            <div className="phone-row" style={{ margin: "20px 0 24px" }}>
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
