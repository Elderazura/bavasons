"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Pic } from "@/components/Pic";
import { standSlides } from "@/lib/content";

/** The original "From where we stand" slider on the home page. */
export function StandSlider() {
  const [i, setI] = useState(0);
  const count = standSlides.length;
  const go = useCallback((n: number) => setI((prev) => (prev + n + count) % count), [count]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section className="stand" aria-label="From where we stand">
      <div className="stand-frame">
        <div className="stand-slide">
          {standSlides.map((slide, n) => (
            <div key={slide.src} hidden={n !== i}>
              <Pic src={slide.src} alt={slide.alt} sizes="(max-width: 991px) 100vw, 940px" />
            </div>
          ))}
          <div className="stand-copy">
            <h2>From where we stand</h2>
            <p><Link className="btn outline" href="/about-us">About Bavasons</Link></p>
          </div>
        </div>
        <button className="stand-arrow prev" type="button" onClick={() => go(-1)} aria-label="Previous slide">‹</button>
        <button className="stand-arrow next" type="button" onClick={() => go(1)} aria-label="Next slide">›</button>
      </div>
      <div className="stand-dots">
        {standSlides.map((slide, n) => (
          <button
            key={slide.src}
            type="button"
            aria-current={n === i}
            aria-label={`Slide ${n + 1}`}
            onClick={() => setI(n)}
          />
        ))}
      </div>
    </section>
  );
}
