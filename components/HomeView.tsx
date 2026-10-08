"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { company, exoticaInterior, featured, media, src, telHref } from "@/lib/content";
import { Pic, SIZES } from "@/components/Pic";

const doors = [
  { href: "/apartments", title: "Apartments", text: "Completed homes in Kakkanad, Edapally, Kaloor and the older neighbourhoods.", image: "/media/5ed768718f46fea7d6ae58a6_VB-Park.jpeg" },
  { href: "/villas", title: "Villas", text: "Villa Exotica at Nettoor, furnished and ready to occupy, and the houses before it.", image: media.heroPoster },
  { href: "/commercial-projects", title: "Commercial", text: "Offices and retail for sale and rent across the city.", image: media.office2 },
];

const principles = [
  { title: "Clear communication", text: "One contact, straight answers, and the books kept open from the first meeting to the handover." },
  { title: "On-time execution", text: "Our own crews and the financial backing to keep a promise when the economy does not." },
  { title: "A go-green brief", text: "Grass joints, natural light and cross ventilation drawn into the house, not added as a slogan." },
];

export function HomeView() {
  const [active, setActive] = useState(0);
  const video = useRef<HTMLVideoElement>(null);

  return (
    <>
      <section className="hero" data-nav-dark>
        <div className="hero-media">
          <Pic alt="" src={media.heroPoster} sizes={SIZES.full} priority quality={90} />
          <video
            ref={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src={src(media.heroVideo)}
            onPlaying={() => video.current?.classList.add("is-ready")}
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-copy wrap">
          <div>
            <p className="eyebrow">Kochi · Building since the 1980s</p>
            <h1>
              <span className="line"><span>Homes with a</span></span>
              <span className="line"><span><em>four-decade</em> memory.</span></span>
            </h1>
          </div>
          <div className="hero-side">
            <p>More than 2,000 homes delivered across Kochi. Simple, elegant, and priced with the city in mind.</p>
            <div className="actions">
              <Link className="btn red" href="/villa-exotica">Villa Exotica <span className="arrow">→</span></Link>
              <Link className="btn ghost" href="/projects">All projects</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">Scroll</div>
      </section>

      <section className="wrap stats" aria-label="At a glance">
        <p className="stats-lead"><em>Legacy built on trust.</em> A family name Kochi has read on its buildings for forty years.</p>
        <div className="stat"><b>40</b><span>Years of building</span></div>
        <div className="stat"><b>2,000<sup>+</sup></b><span>Homes delivered</span></div>
        <div className="stat"><b>1.2M</b><span>Square feet built</span></div>
      </section>

      <section className="section">
        <div className="wrap statement">
          <p className="kicker">The house</p>
          <div>
            <p className="big" data-rise>
              Bavasons Homes carries the name of Moideen Bava, and the practice Fazal Ali and Liaquat Ali built from the 1980s. <em>Be brilliant at the basics</em> is still the whole brief.
            </p>
            <Link className="text-link" href="/about-us">About the family</Link>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div className="feature">
            <div className="feature-photo zoom" data-rise>
              <Pic alt="Open teak gate at Villa Exotica, Nettoor" src={media.heroPoster} sizes="(max-width: 760px) 100vw, 60vw" />
              <span className="feature-tag">Now selling</span>
            </div>
            <div className="feature-copy">
              <p className="kicker">Nettoor</p>
              <h2>Villa Exotica</h2>
              <p>Three 4 BHK villas, completed and ready to occupy. Furniture, cabinets, premium bedding and a BenQ and Polk home theatre are already in. Turn the key.</p>
              <div className="spec-row">
                <span><b>4 BHK</b></span>
                <span><b>Furnished</b></span>
                <span><b>Ready</b> to occupy</span>
                <span><b>Near</b> the bypass</span>
              </div>
              <div className="actions">
                <Link className="btn" href="/villa-exotica">Walk through <span className="arrow">→</span></Link>
                <a className="btn ghost" href={src(media.exoticaBrochure)} target="_blank" rel="noreferrer">Brochure</a>
              </div>
            </div>
          </div>
          <div className="feature-strip">
            {exoticaInterior.slice(0, 3).map((shot) => (
              <figure key={shot.src} className="zoom" data-rise>
                <Pic alt={shot.alt} src={shot.src} sizes={SIZES.third} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Projects</p>
              <h2>Latest work.</h2>
            </div>
            <Link className="text-link" href="/projects">All projects</Link>
          </div>
          <div className="work-layout">
            <div className="index" role="list">
              {featured.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`index-row${i === active ? " is-on" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="num">0{i + 1}</span>
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.place}</small>
                  </span>
                  <span className="tag">{item.note}</span>
                  <span className="go" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
            <figure className="preview" aria-hidden="true">
              {featured.map((item, i) => (
                <Pic key={item.name} alt="" className={i === active ? "is-on" : undefined} src={item.image} sizes="(max-width: 900px) 40vw, 45vw" />
              ))}
              <figcaption>{featured[active].name} · {featured[active].place}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">What we build</p>
              <h2>Three kinds of address.</h2>
            </div>
          </div>
          <div className="doors">
            {doors.map((door, i) => (
              <Link key={door.href} href={door.href} className="door" data-rise>
                <Pic alt="" src={door.image} sizes="(max-width: 760px) 80vw, 33vw" />
                <div className="door-copy">
                  <span className="num">0{i + 1}</span>
                  <h3>{door.title}</h3>
                  <p>{door.text}</p>
                  <span className="text-link">Explore</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap principles">
          <div>
            <p className="kicker">From where we stand</p>
            <h2>Be brilliant <em>at the basics.</em></h2>
            <p className="lede">The new company keeps the goodwill of the old one and a sharper model: hear the client, keep the channel clear, deliver on time.</p>
          </div>
          <ol className="principle-list">
            {principles.map((item, i) => (
              <li key={item.title} data-rise>
                <span className="num">0{i + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Inside Exotica</p>
              <h2>Light, teak, grass joints.</h2>
            </div>
            <Link className="text-link" href="/gallery">Gallery</Link>
          </div>
          <div className="collage">
            {[
              { src: media.exterior, alt: "Villa Exotica exterior", label: "Exterior", c: "c1" },
              { src: exoticaInterior[4].src, alt: exoticaInterior[4].alt, label: "Hall", c: "c2" },
              { src: exoticaInterior[5].src, alt: exoticaInterior[5].alt, label: "Dining", c: "c3" },
              { src: "/media/63eb237a14690604c898054e_IMG-20220315-WA0099-gigapixel-low_res-scale-4_00x.webp", alt: "Villa garden", label: "Garden", c: "c4" },
              { src: exoticaInterior[1].src, alt: exoticaInterior[1].alt, label: "Lounge", c: "c5" },
            ].map((shot) => (
              <figure key={shot.src} className={shot.c} data-rise>
                <Pic alt={shot.alt} src={shot.src} sizes="(max-width: 760px) 100vw, 60vw" />
                <figcaption>{shot.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap cta">
        <div>
          <p className="kicker">Talk to us</p>
          <h2>Write, or come to the square.</h2>
          <div className="actions">
            <Link className="btn red" href="/customer-enquiry-form">Start an enquiry</Link>
            <Link className="btn ghost" href="/contact">Contact</Link>
          </div>
        </div>
        <div className="cta-meta">
          <dl>
            <div>
              <dt>Visit</dt>
              <dd>{company.address[0]}<br />{company.address[1]}<br />{company.address[2]}</dd>
            </div>
            <div>
              <dt>Call</dt>
              <dd>
                <a href={telHref(company.phones[0])}>{company.phones[0]}</a><br />
                <a href={telHref(company.phones[2])}>{company.phones[2]}</a><br />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
