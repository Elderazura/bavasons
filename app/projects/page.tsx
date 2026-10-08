import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProjectBook } from "@/components/ProjectBook";
import { featured, src } from "@/lib/content";
import { Pic, SIZES } from "@/components/Pic";

export const metadata: Metadata = { title: "Projects" };

const [lead, ...rest] = featured.slice(0, 3);

export default function ProjectsPage() {
  return (
    <article>
      <PageHero
        kicker="Projects"
        title="Live sites, and the finished book."
        lede="Three projects selling now, then every building the house has handed over since the 1980s."
        aside={
          <div className="actions">
            <a className="btn" href="#finished">Finished work</a>
            <Link className="btn ghost" href="/commercial-projects">Commercial</Link>
          </div>
        }
      />

      <section className="wrap" id="live" aria-label="Live sites">
        <div className="live-grid">
          <Link href={lead.href} className="tile lead" data-rise>
            <Pic alt={lead.name} src={lead.image} sizes="(max-width: 900px) 100vw, 66vw" priority />
            <div className="tile-copy">
              <span className="num">Now selling · {lead.place}</span>
              <h3>{lead.name}</h3>
              <p>{lead.note}</p>
              <ul className="facts"><li className="hot">Ready to occupy</li><li>4 BHK</li><li>Furnished</li></ul>
            </div>
          </Link>
          <div className="live-side">
            {rest.map((item) => (
              <Link key={item.name} href={item.href} className="tile" data-rise>
                <Pic alt={item.name} src={item.image} sizes={SIZES.third} />
                <div className="tile-copy">
                  <span className="num">{item.place}</span>
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProjectBook />
    </article>
  );
}
