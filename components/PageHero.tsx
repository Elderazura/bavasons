import type { ReactNode } from "react";
import { src } from "@/lib/content";
import { Pic, SIZES } from "@/components/Pic";

type Props = {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
  image?: { src: string; alt: string; caption?: string };
  tall?: boolean;
};

export function PageHero({ kicker, title, lede, aside, image, tall }: Props) {
  return (
    <>
      <section className="masthead">
        <div className="wrap masthead-grid">
          <div>
            <p className="kicker">{kicker}</p>
            <h1>{title}</h1>
            {lede ? <p className="lede">{lede}</p> : null}
          </div>
          {aside ? <div className="masthead-aside">{aside}</div> : null}
        </div>
      </section>
      {image ? (
        <figure className={`plate wrap${tall ? " tall" : ""}`}>
          <Pic alt={image.alt} src={image.src} sizes={SIZES.wrap} priority quality={90} />
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      ) : null}
    </>
  );
}
