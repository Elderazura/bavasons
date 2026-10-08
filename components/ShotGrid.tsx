import { Pic } from "@/components/Pic";

export type Shot = { src: string; alt: string; label?: string; note?: string };

const COLS = 3;
const pattern = [2, 1, 1, 1, 1, 1, 2];
const sizesFor = ["", "(max-width: 600px) 50vw, (max-width: 900px) 50vw, 33vw", "(max-width: 600px) 100vw, 66vw", "100vw"];

/** Assign column spans so every row of a 3-column grid fills, and a lone last tile becomes a full-width plate. */
function spans(count: number) {
  const out: number[] = [];
  let col = 0;
  for (let i = 0; i < count; i++) {
    let span = pattern[i % pattern.length];
    if (col + span > COLS) span = COLS - col;
    out.push(span);
    col = (col + span) % COLS;
  }
  if (count > 1 && col !== 0) out[count - 1] += COLS - col;
  return out;
}

export function ShotGrid({ shots, plans, plain }: { shots: Shot[]; plans?: boolean; plain?: boolean }) {
  const layout = plain || plans ? shots.map(() => 1) : spans(shots.length);
  return (
    <div className={`shot-grid${plans ? " plans" : ""}`}>
      {shots.map((shot, i) => (
        <figure
          key={`${shot.src}-${i}`}
          className={layout[i] === 3 ? "full" : layout[i] === 2 ? "wide" : undefined}
          data-rise
        >
          <Pic src={shot.src} alt={shot.alt} sizes={sizesFor[layout[i]]} quality={plans ? 90 : 85} />
          {shot.label ? (
            <figcaption>
              <b>{shot.label}</b>
              {shot.note ? <span>{shot.note}</span> : null}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
