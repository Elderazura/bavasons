import type { ReactNode } from "react";

/** The original page masthead: a right-aligned title with a short rule beneath it. */
export function PageHero({
  kicker,
  title,
  note,
  children,
}: {
  kicker?: string;
  title: ReactNode;
  note?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-heading">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h1>{title}</h1>
      <div className="divider" />
      {note ? <p>{note}</p> : null}
      {children}
    </section>
  );
}
