import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShotGrid } from "@/components/ShotGrid";
import { commercialClients, media } from "@/lib/content";

export const metadata: Metadata = { title: "Commercial" };

export default function CommercialPage() {
  return (
    <article>
      <PageHero
        kicker="Commercial"
        title="Rooms the city already works in."
        lede="Commercial spaces for sale and rent across Kochi, and a short list of the clients already inside Bavasons buildings."
        aside={<div className="actions"><Link className="btn" href="/contact">Ask about a space</Link></div>}
        image={{ src: media.office, alt: "Bavasons commercial interior" }}
      />
      <section className="section tight wrap">
        <ShotGrid
          plain
          shots={[
            { src: media.office2, alt: "Office 2" },
            { src: "/media/5edfb1b5bf9a844a7d5761fe_office-3.jpg", alt: "Office 3" },
            { src: "/media/5edfb1b586548dbb5d562a9f_office-4.jpg", alt: "Office 4" },
          ]}
        />
      </section>
      <section className="section band">
        <div className="wrap split">
          <div>
            <p className="kicker">Clients</p>
            <h2>Already inside.</h2>
          </div>
          <ul className="client-list">
            {commercialClients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
