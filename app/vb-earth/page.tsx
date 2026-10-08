import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ShotGrid } from "@/components/ShotGrid";
import { earthLandmarks, earthPhotos, earthPlans, earthSpecs } from "@/lib/content";

export const metadata: Metadata = { title: "VB Earth" };

export default function EarthPage() {
  return (
    <article>
      <PageHero
        kicker="Thuthiyoor, Kakkanad"
        title="VB Earth"
        lede="Ready-to-move apartments on Mariyamman Kovil Road, Thuthiyoor. Phase 1."
        aside={
          <>
            <ul className="facts"><li className="hot">Ready to move</li><li>Phase 1</li><li>Kakkanad</li></ul>
            <div className="actions">
              <Link className="btn red" href="/customer-enquiry-form">Enquire</Link>
            </div>
          </>
        }
        image={{ src: earthPhotos[0].src, alt: earthPhotos[0].alt }}
      />
      <section className="section tight wrap">
        <ShotGrid shots={earthPhotos.slice(1)} />
      </section>
      <section className="section band">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Plans</p>
              <h2>Floor plans.</h2>
            </div>
          </div>
          <ShotGrid shots={earthPlans} plans />
        </div>
      </section>
      <section className="section wrap split">
        <div>
          <p className="kicker">Specifications</p>
          <h2>What is in the flat.</h2>
          <table className="ledger" style={{ marginTop: 24 }}>
            <tbody>
              {earthSpecs.map((spec) => (
                <tr key={spec}><td>{spec}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p className="kicker">Location</p>
          <h2>Nearest landmarks.</h2>
          <table className="ledger" style={{ marginTop: 24 }}>
            <tbody>
              {earthLandmarks.map(([place, distance]) => (
                <tr key={place}><td>{place}</td><td>{distance}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
