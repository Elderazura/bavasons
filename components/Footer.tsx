import Link from "next/link";
import { company, media, src, telHref } from "@/lib/content";

const projects = [
  { href: "/villa-exotica", label: "Villa Exotica" },
  { href: "/aura", label: "VB Aura" },
  { href: "/vb-earth", label: "VB Earth" },
  { href: "/apartments", label: "Apartments" },
  { href: "/villas", label: "Villas" },
  { href: "/commercial-projects", label: "Commercial" },
];

const house = [
  { href: "/about-us", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/gallery", label: "Gallery" },
  { href: "/designer-interiors", label: "Design studio" },
  { href: "/events", label: "Events" },
  { href: "/privacy-policy-page", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="Bavasons Homes" style={{ marginBottom: 22 }}>
              <img className="footer-logo" src={src(media.logoWhite)} alt="Bavasons Homes" />
            </Link>
            <p>{company.tagline}. Four decades of building in Kochi, and more than 2,000 homes handed over.</p>
            <Link className="btn ghost light" href="/customer-enquiry-form">Start an enquiry</Link>
          </div>
          <div className="footer-col">
            <h3>Visit</h3>
            <p>{company.address[0]}<br />{company.address[1]}<br />{company.address[2]}</p>
            <a href={company.map} target="_blank" rel="noreferrer">Open in maps</a>
          </div>
          <div className="footer-col">
            <h3>Call</h3>
            {company.phones.map((phone) => (
              <a key={phone} href={telHref(phone)}>{phone}</a>
            ))}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
          <div className="footer-col">
            <h3>Projects</h3>
            {projects.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h3>The house</h3>
            {house.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div className="wordmark" aria-hidden="true">Bavasons Homes</div>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Bavasons Homes, Kochi</span>
          <span>RERA details on request</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
