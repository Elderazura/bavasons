import type { Metadata } from "next";
import { ApartmentBook } from "@/components/ApartmentBook";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Apartments" };

export default function ApartmentsPage() {
  return (
    <article>
      <PageHero title="APARTMENTS" note="We offer completed apartments across major areas in Kerala." />
      <section className="section">
        <div className="wrap">
          <ApartmentBook />
        </div>
      </section>
    </article>
  );
}
