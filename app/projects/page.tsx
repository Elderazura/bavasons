import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Pic, SIZES } from "@/components/Pic";
import { completed, media, projectStills } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

const categories = [
  { title: "Villas", href: "/villas", image: projectStills[0].src },
  { title: "Apartments", href: "/apartments", image: projectStills[1].src },
  { title: "Commercial Spaces", href: "/commercial-projects", image: media.office },
];

export default function ProjectsPage() {
  return (
    <article>
      <PageHero title="PROJECTS" />

      <section className="section">
        <div className="wrap cat-grid">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} data-rise>
              <Pic src={cat.image} alt={cat.title} sizes={SIZES.third} />
              <span className="cat-link">{cat.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <h2 className="sec-title">Projects completed over the years</h2>
          <div className="name-grid">
            {completed.map((item) => (
              <span key={item.name}>{item.name}, {item.place}</span>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
