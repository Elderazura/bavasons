"use client";

import { useEffect, useRef, useState } from "react";
import { src } from "@/lib/content";

type Props = {
  desktop: string;
  desktopPoster: string;
  mobile: string;
  mobilePoster: string;
  children: React.ReactNode;
};

/**
 * Full-height background film, as the original site opened.
 * Only one cut is ever fetched: the narrow phone encode below 768px, the wide one above.
 */
export function HeroVideo({ desktop, desktopPoster, mobile, mobilePoster, children }: Props) {
  const video = useRef<HTMLVideoElement>(null);
  const [cut, setCut] = useState<{ film: string; poster: string } | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    setCut(narrow ? { film: mobile, poster: mobilePoster } : { film: desktop, poster: desktopPoster });
  }, [desktop, desktopPoster, mobile, mobilePoster]);

  return (
    <section className="hero">
      <div className="hero-media">
        <picture>
          <source media="(max-width: 767px)" srcSet={src(mobilePoster)} />
          <img src={src(desktopPoster)} alt="" fetchPriority="high" />
        </picture>
        {cut ? (
          <video
            ref={video}
            className={ready ? "is-ready" : undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={src(cut.poster)}
            src={src(cut.film)}
            onPlaying={() => setReady(true)}
          />
        ) : null}
      </div>
      <div className="hero-shade" />
      <div className="hero-copy wrap">{children}</div>
    </section>
  );
}
