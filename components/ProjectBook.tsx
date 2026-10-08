"use client";

import Link from "next/link";
import { useState } from "react";
import { completed, src } from "@/lib/content";
import { Pic, SIZES } from "@/components/Pic";

const filters = ["All", "Kakkanad", "Edapally", "Older Kochi"] as const;
type Filter = (typeof filters)[number];

function bucket(place: string): Exclude<Filter, "All"> {
  if (place === "Kakkanad") return "Kakkanad";
  if (place === "Edapally") return "Edapally";
  return "Older Kochi";
}

export function ProjectBook() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = completed.filter((item) => filter === "All" || bucket(item.place) === filter);

  return (
    <section id="finished" className="section wrap">
      <header className="folio-bar">
        <div>
          <p className="kicker">Completed</p>
          <h2>The finished book.</h2>
          <p className="lede" style={{ marginTop: 14 }}>{completed.length} buildings handed over across Kochi since the 1980s.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter by area">
          {filters.map((name) => (
            <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>
              {name}
            </button>
          ))}
        </div>
      </header>
      <div className="folio-grid">
        {items.map((item) => {
          const body = (
            <>
              <figure>
                <Pic alt={item.name} src={item.image} sizes={SIZES.third} />
              </figure>
              <div className="cap">
                <b>{item.name}</b>
                <span>{item.place}</span>
              </div>
            </>
          );
          return item.href ? (
            <Link key={item.name} href={item.href} className="folio-tile" data-rise>{body}</Link>
          ) : (
            <article key={item.name} className="folio-tile" data-rise>{body}</article>
          );
        })}
      </div>
    </section>
  );
}
