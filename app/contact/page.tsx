import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company, telHref } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <article>
      <PageHero title="Contact" />
      <section className="section">
        <div className="wrap split even">
          <div style={{ textAlign: "center" }}>
            <h2 className="sec-title">Email Us</h2>
            <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
            <h2 className="sec-title" style={{ marginTop: 32 }}>Find Us</h2>
            <p>
              {company.address[0]}<br />
              {company.address[1]}<br />
              {company.address[2]}
            </p>
            <p style={{ marginTop: 12 }}><a className="cat-link" href={company.map} target="_blank" rel="noreferrer">Open in maps</a></p>
            <h2 className="sec-title" style={{ marginTop: 32 }}>Call Us</h2>
            {company.phones.map((phone) => (
              <p key={phone}><a href={telHref(phone)}>{phone}</a></p>
            ))}
          </div>
          <iframe
            title="Bavasons Square on Google Maps"
            src="https://www.google.com/maps?q=Bavasons+Square+Kaloor+Kadavanthra+Road+Kochi&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", minHeight: 440, border: 0 }}
          />
        </div>
      </section>
    </article>
  );
}
