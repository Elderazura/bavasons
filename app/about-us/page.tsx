import type { Metadata } from "next";
import Link from "next/link";
import { CityPeek } from "@/components/CompletedBook";
import { PageHero } from "@/components/PageHero";
import { media, src } from "@/lib/content";
import { Pic, SIZES } from "@/components/Pic";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <article>
      <PageHero
        kicker="About Bavasons"
        title="A name Kochi grew up hearing."
        lede="Bavasons Homes took root from Bavasons Constructions, founded by V.M. Fazal Ali and V.M. Liaquat Ali in the 1980s. The parent firm closed in 2018. Rizwan Fazal V.B. started again under the name he grew up with."
        image={{ src: media.square, alt: "Bavasons Square, Kaloor-Kadavanthra Road", caption: "Bavasons Square, Kaloor-Kadavanthra Road, Kochi" }}
      />

      <section className="section">
        <div className="wrap statement">
          <p className="kicker">The brief</p>
          <div>
            <p className="big" data-rise>
              In a city that asks for trusted builders, the work is simple, elegant, and priced so a home stays within reach, with the financial backing and the crew to hold a promise when the economy does not.
            </p>
            <p className="lede">
              The new company keeps the goodwill of the old one, and a sharper model. It already has a mark in both commercial and residential Kochi. Hear the client, keep the channel clear, offer full transparency, deliver on time, and hold a go-green brief in the construction itself.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="person">
          <figure className="photo p32" data-rise>
            <Pic alt="Fazal Ali calling on President Pranab Mukherjee at Rashtrapati Bhavan, 2015" src={media.fazal} sizes={SIZES.half} />
            <figcaption>Rashtrapati Bhavan, 2015</figcaption>
          </figure>
          <div>
            <p className="kicker">Founder</p>
            <h2>Fazal Ali</h2>
            <p>
              Engineering graduate of the National Institute of Technology, Calicut. He instituted the Prof. K.M. Bahuddeen award for the best engineering teacher in Kerala, and the Prof. P.M. Jussay award for the best outgoing engineering student at NIT Calicut, along with scholarships for students who need them most.
            </p>
            <p>
              Rotarian, Freemason, and a member of the Yacht Club, Lotus Club, Rama Varma Club, YMCA, Regional Sports Centre, and a charter member of RECCA. National vice president and state chairman of the Builders Association of India. Member of the academic advisory council of Albertian Institute of Science and Technology.
            </p>
            <p>
              In 2015 he and his family were guests at Rashtrapati Bhavan for a week, calling on President Pranab Mukherjee. In 2017 he attended the Iftar hosted there.
            </p>
          </div>
        </div>

        <div className="person flip">
          <figure className="photo p11" data-rise>
            <Pic alt="Iftar at Rashtrapati Bhavan, 2017" src={media.iftar} sizes={SIZES.half} />
            <figcaption>Iftar at Rashtrapati Bhavan, 2017</figcaption>
          </figure>
          <div>
            <p className="kicker">Director</p>
            <h2>Rizwan Fazal</h2>
            <p>
              When the family firm closed, Rizwan Fazal, a civil engineer with a degree from Glasgow, started Bavasons Homes as a tribute to his grandfather, the late Moideen Bava.
            </p>
            <p>
              Moideen Bava built across ice-making, matchboxes, tobacco, and seafood, and spent as much of his life in public work: Freemason, Rotary stalwart, president of Kerala’s Small-scale Industries Association.
            </p>
            <p>Not just in name. The house still runs on Bava’s line: understand the brief, keep the books open, finish on time.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">The office</p>
              <h2>People who stay.</h2>
              <p className="lede">Onam at the square. The team in one room. The crew on site.</p>
            </div>
            <Link className="text-link" href="/gallery">Gallery</Link>
          </div>
          <div className="collage">
            <figure className="c1" data-rise><Pic alt="Onam celebration at the Bavasons office" src={media.onam} sizes="(max-width: 760px) 100vw, 60vw" /><figcaption>Onam ’23</figcaption></figure>
            <figure className="c2" data-rise><Pic alt="Bavasons office interior" src={media.office} /><figcaption>The square</figcaption></figure>
            <figure className="c3" data-rise><Pic alt="The Bavasons team" src={media.faces} /><figcaption>The team</figcaption></figure>
            <figure className="c4" data-rise><Pic alt="Workers at a Bavasons site" src={media.staff} /><figcaption>The crew</figcaption></figure>
            <figure className="c5" data-rise><Pic alt="Bavasons office" src={media.office2} /><figcaption>Office</figcaption></figure>
          </div>
        </div>
      </section>

      <CityPeek />
    </article>
  );
}
