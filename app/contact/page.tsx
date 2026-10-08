import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { company, telHref } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <article>
      <PageHero
        kicker="Contact"
        title="Write, or come to the square."
        lede="A short note is enough. If a project is already on your mind, the customer profile form asks the fuller set of questions."
      />
      <section className="section tight wrap split">
        <div className="contact-card">
          <div>
            <h3>Visit</h3>
            <p>{company.address[0]}</p>
            <p>{company.address[1]}</p>
            <p>{company.address[2]}</p>
            <p><a className="text-link" href={company.map} target="_blank" rel="noreferrer">Open in maps</a></p>
          </div>
          <div>
            <h3>Call</h3>
            {company.phones.map((phone) => (
              <p key={phone}><a href={telHref(phone)}>{phone}</a></p>
            ))}
          </div>
          <div>
            <h3>Write</h3>
            <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
          </div>
          <div>
            <h3>Customer profile</h3>
            <p><Link className="text-link" href="/customer-enquiry-form">The longer form</Link></p>
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
      </section>
    </article>
  );
}
