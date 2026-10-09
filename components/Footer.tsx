import { EnquiryForm } from "@/components/EnquiryForm";
import { company, companyBlurb, media, src, telHref } from "@/lib/content";

export function Footer() {
  return (
    <footer>
      <section className="contact-strip on-dark" aria-label="Contact Bavasons Homes">
        <div className="wrap inner">
          <address>
            <strong>BAVASONS SQUARE</strong>
            <strong>KALOOR – KADAVANTHRA ROAD,</strong>
            <span>{company.address[2]}</span>
            <br />
            {company.phones.slice(0, 3).map((phone, i) => (
              <span key={phone}>
                {i > 0 ? " | " : ""}
                <a href={telHref(phone)}>{phone}</a>
              </span>
            ))}
            <br />
            <a className="mail" href={`mailto:${company.email}`}>{company.email}</a>
          </address>
          <EnquiryForm
            compact
            fields={[
              { name: "name", label: "Name", placeholder: "Name" },
              { name: "email", label: "Email", type: "email", placeholder: "Email" },
              { name: "message", label: "Message", type: "textarea", full: true, placeholder: "Message" },
            ]}
          />
        </div>
      </section>

      <section className="company">
        <div className="wrap company-grid">
          <img className="company-logo" src={src(media.logoWhite)} alt="Bavasons Homes" loading="lazy" />
          <p>{companyBlurb}</p>
          <img className="company-bai" src={src(media.bai)} alt="Builders' Association of India" loading="lazy" />
        </div>
      </section>

      <div className="credit">Design &amp; Developed by Azura Creative Studio LLP</div>
    </footer>
  );
}
