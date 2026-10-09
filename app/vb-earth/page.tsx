import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Pic, SIZES } from "@/components/Pic";
import { earthLandmarks, earthPhotos, earthPlans, earthSpecs } from "@/lib/content";

export const metadata: Metadata = { title: "VB Earth" };

export default function EarthPage() {
  return (
    <article>
      <PageHero title="VB EARTH" note="Ready to Move Apartments. Contact us to know more details." />

      <section className="section">
        <div className="wrap shot-grid">
          {earthPhotos.map((shot, i) => (
            <figure key={shot.src} className={i === 0 ? "wide" : undefined} style={{ margin: 0 }} data-rise>
              <Pic src={shot.src} alt={shot.alt} sizes={SIZES.third} priority={i === 0} />
              {shot.label ? <figcaption><b>{shot.label}</b></figcaption> : null}
            </figure>
          ))}
        </div>
      </section>

      <section className="section band-light">
        <div className="wrap">
          <h2 className="sec-title">Specifications</h2>
          <ul className="spec-list">
            {earthSpecs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split even">
          <div>
            <h2>Location</h2>
            <div className="hr-gold left" />
            <p>VB Earth Phase 1<br />Mariyamman Kovil Road, Thuthiyoor, Kakkanad</p>
          </div>
          <div>
            <h2>Nearest Landmarks</h2>
            <div className="hr-gold left" />
            <table className="ledger">
              <tbody>
                {earthLandmarks.map(([place, distance]) => (
                  <tr key={place}><td>{place}</td><td>{distance}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <h2 className="sec-title">Floor Plans</h2>
          <div className="shot-grid plans">
            {earthPlans.map((plan) => (
              <figure key={plan.src} style={{ margin: 0 }} data-rise>
                <Pic src={plan.src} alt={plan.alt} sizes={SIZES.third} quality={90} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
