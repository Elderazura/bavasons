import Link from "next/link";
import { completed, src } from "@/lib/content";
import { Pic, SIZES } from "@/components/Pic";

const peekNames = ["VB Park", "VB Royal", "VB Earth", "VB Hive", "VB Crest"];

export function CityPeek() {
  const peek = peekNames
    .map((name) => completed.find((item) => item.name === name))
    .filter((item): item is (typeof completed)[number] => Boolean(item));
  const [lead, ...rest] = peek;

  return (
    <section className="section dark">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Completed</p>
            <h2>{completed.length} buildings, one city.</h2>
          </div>
          <Link className="text-link" href="/projects">See the whole book</Link>
        </div>
        <div className="live-grid">
          <article className="tile lead" data-rise>
            <Pic alt={lead.name} src={lead.image} sizes="(max-width: 900px) 100vw, 66vw" />
            <div className="tile-copy">
              <span className="num">Completed · {lead.place}</span>
              <h3>{lead.name}</h3>
            </div>
          </article>
          <div className="live-side">
            {rest.slice(0, 2).map((item) => (
              <article key={item.name} className="tile" data-rise>
                <Pic alt={item.name} src={item.image} sizes={SIZES.third} />
                <div className="tile-copy">
                  <span className="num">{item.place}</span>
                  <h3>{item.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
