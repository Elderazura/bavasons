import Image, { type ImageProps } from "next/image";
import dims from "@/lib/dims.json";

type Dims = Record<string, { w: number; h: number }>;
const map = dims as Dims;

export const SIZES = {
  full: "100vw",
  wrap: "(max-width: 1400px) 100vw, 1400px",
  half: "(max-width: 760px) 100vw, 50vw",
  third: "(max-width: 600px) 50vw, (max-width: 1100px) 50vw, 33vw",
  quarter: "(max-width: 600px) 50vw, 25vw",
};

type Props = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  src: string;
  alt: string;
  sizes?: string;
};

/** Responsive image: serves AVIF/WebP at the viewer's width via next/image, with intrinsic dimensions from the media index. */
export function Pic({ src, alt, sizes = SIZES.half, quality = 85, ...rest }: Props) {
  const d = map[src];
  if (!d) {
    // Not in the index (SVG or unknown): fall back to a plain tag so nothing breaks.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={encodeURI(src)} alt={alt} loading={rest.priority ? undefined : "lazy"} className={rest.className} style={rest.style} />;
  }
  return <Image src={src} alt={alt} width={d.w} height={d.h} sizes={sizes} quality={quality} {...rest} />;
}
