import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Customer profile" };

export default function EnquiryPage() {
  return (
    <article>
      <PageHero
        kicker="Customer profile"
        title="Tell us who the home is for."
        lede="Fill this in if a project is already on your mind. We are glad to help."
      />
      <section className="section tight narrow">
        <EnquiryForm
          fields={[
            { name: "name", label: "Name" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Contact number", type: "tel" },
            { name: "relation", label: "Father’s / husband’s name" },
            { name: "age", label: "Age" },
            { name: "occupants", label: "Number of occupants" },
            { name: "occupation", label: "Occupation" },
            { name: "cyber", label: "Cyber Park (yes / no)" },
            { name: "address", label: "Permanent address", full: true },
            { name: "pin", label: "Pincode" },
            { name: "present", label: "Present address", full: true },
            { name: "presentPin", label: "Present pincode" },
            { name: "message", label: "Project or note", type: "textarea", full: true },
          ]}
        />
      </section>
    </article>
  );
}
