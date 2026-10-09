import type { Metadata } from "next";
import Link from "next/link";
import { FilmGrid } from "@/components/FilmGrid";
import { Pic, SIZES } from "@/components/Pic";
import { completed, houseFilms, media } from "@/lib/content";

export const metadata: Metadata = { title: "About Bavasons" };

const build = [
  { icon: media.iconApartments, title: "Apartments", text: "We offer completed apartments across major areas in Kerala.", href: "/apartments" },
  { icon: media.iconVillas, title: "Villas", text: "We offer completed premium villas in Kerala.", href: "/villas" },
  { icon: media.iconCommercial, title: "Commercial Spaces", text: "Commercial spaces available for sale and rent in various parts of the city.", href: "/commercial-projects" },
];

export default function AboutPage() {
  return (
    <article>
      <section className="photo-hero">
        <Pic src={media.office} alt="The Bavasons Homes office at Bavasons Square" sizes={SIZES.full} priority quality={90} />
        <div className="veil" />
        <div className="inner wrap">
          <h1>Bavasons Homes</h1>
          <p>
            Bavasons Homes is an independent company that took root from Bavasons Constructions (P) Ltd, founded by V.M. Fazal Ali and V.M. Liaquat Ali in the 1980s. Bavasons is a diversified and unique group with a strong corporate culture. At Bavasons, we believe in making life better every day for as many people as possible while overcoming umpteen challenges faced in today&rsquo;s fast-changing and dynamic world. In a metro city like Kochi, where trusted builders are in demand, Bavasons takes the lead by delivering simple, elegant and value-based homes that are affordable and quality assured. With a strong financial backing and a group of experienced employees, our commitments are held strong and performance is unwavering even during global economic instabilities. The parent firm Bavasons Constructions (P) LTD was dissolved in 2018, and Rizwan Fazal V.B. of the family launched a fresh, new entity under the banner of Bavasons Homes, as the name is something Mr. Rizwan Fazal grew up hearing &mdash; hence the name.
          </p>
          <p>
            While it continues to carry forward the legacy and goodwill created by Bavasons Constructions (P) LTD, the new venture&rsquo;s leadership has adopted a state-of-the-art business model and already made a mark in the commercial and residential landscape.
          </p>
        </div>
      </section>

      <section className="wrap">
        <div className="duo">
          <div className="duo-copy">
            <p className="role">Founder</p>
            <h2>Fazal Ali</h2>
            <div className="rule" />
            <p>
              Fazal Ali is an Engineering Graduate from National Institute of Technology, Calicut. Instrumental in instituting the Prof. K.M. Bahuddeen award for the Best Engineering Teacher of Kerala, which carries a citation, and the Prof. P.M. Jussay award for the best outgoing Engineering student of NIT Calicut, and scholarships for most needy engineering students.
            </p>
            <p>
              A Rotarian, Freemason, associated with numerous clubs like Yacht Club, Lotus Club, Rama Varma Club, YMCA, Regional Sports Centre and charter member of RECCA club. He has widely travelled around the world and attended numerous conferences, seminars &amp; exhibitions connected to construction industries.
            </p>
            <p>National vice president and state chairman of Builders Association of India (BAI).</p>
            <p>Member, Academic advisory council of Albertian Institute of Science and Technology (AISAT).</p>
            <p>
              Had the unique opportunity to call on the President of India &ndash; His Excellency Shri Pranab Mukherjee with family and be the guest at Rashtrapati Bhavan for a week in 2015, and also had the unique privilege to attend the Ifthar party hosted by His Excellency at Rashtrapati Bhavan 2017.
            </p>
          </div>
          <figure className="duo-media zoom">
            <Pic src={media.fazal} alt="Fazal Ali calling on President Pranab Mukherjee at Rashtrapati Bhavan, 2015" sizes={SIZES.half} />
          </figure>
        </div>

        <div className="duo flip">
          <figure className="duo-media zoom">
            <Pic src={media.iftar} alt="Rizwan Fazal at the Ifthar hosted at Rashtrapati Bhavan, 2017" sizes={SIZES.half} />
          </figure>
          <div className="duo-copy">
            <p className="role">Director</p>
            <h2>Rizwan Fazal</h2>
            <div className="rule" />
            <p>
              When family-run Bavasons Constructions Pvt Ltd was dissolved, Young Turk Rizwan Fazal decided to launch a fresh, new offshoot venture that would retain the legacy and goodwill created by the parent firm. The ace civil engineer, with laurels from Glasgow, chose to name his company &lsquo;Bavasons Homes&rsquo; as a tribute to the business group&rsquo;s founder and his grandfather, the late Moideen Bava.
            </p>
            <p>
              Moideen Bava was an extraordinary business visionary who had a prominent presence in sectors such as ice-making, matchbox, tobacco and seafood. He was also a well-known philanthropist, who was engaged in social activities as a Free Mason, Rotary stalwart and president of Kerala&rsquo;s Small-scale Industries Association.
            </p>
            <p>Not just in name, Bavasons Homes has incorporated the business philosophy and principles that Bava enshrined through his excellence.</p>
            <p>The company&rsquo;s core vision is simple: Be brilliant at the basics.</p>
            <p>
              Bavasons Homes believes it is vital to understand the requirements of its clients, maintaining clear channels of communication and offering 100 per cent transparency. Bavasons Homes is already on the path to establish a niche in the industry by maintaining a solid track-record in reliable, cost-effective and on-time execution of projects that involve world-class technical sophistication.
            </p>
            <p>Last but certainly not the least, Bavasons Homes steadfastly upholds its &lsquo;Go Green&rsquo; philosophy by adhering to sustainable construction guidelines.</p>
          </div>
        </div>
      </section>

      <section className="triple">
        <div className="wrap triple-grid">
          {build.map((item) => (
            <Link key={item.title} href={item.href} data-rise>
              <img src={item.icon} alt="" width={72} height={72} loading="lazy" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="sec-title">Projects completed over the years</h2>
          <div className="name-grid">
            {completed.map((item) => (
              <span key={item.name}>{item.name}, {item.place}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <h2 className="sec-title">Media</h2>
          <FilmGrid films={houseFilms} of3 captions />
        </div>
      </section>

      <section className="doors" aria-label="What we build">
        <Link className="door" href="/apartments" data-rise>
          <Pic src={completed[11].image} alt="Bavasons apartments" sizes={SIZES.half} />
          <div className="door-copy">
            <p className="eyebrow">Projects</p>
            <h3>Apartments</h3>
            <span className="more">Read more</span>
          </div>
        </Link>
        <Link className="door" href="/villas" data-rise>
          <Pic src={media.exoticaWide} alt="Bavasons villas" sizes={SIZES.half} />
          <div className="door-copy">
            <p className="eyebrow">Projects</p>
            <h3>Villas</h3>
            <span className="more">Read more</span>
          </div>
        </Link>
      </section>
    </article>
  );
}
