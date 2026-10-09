"use client";

import Link from "next/link";
import { useState } from "react";
import { Pic, SIZES } from "@/components/Pic";
import { apartments } from "@/lib/content";

const tabs = ["All", "Ready to Move", "Completed"] as const;
type Tab = (typeof tabs)[number];

const readyToMove = new Set(["VB Aura", "VB Earth"]);

/** The original Apartments page filtered its grid with these three tabs. */
export function ApartmentBook() {
  const [tab, setTab] = useState<Tab>("All");
  const items = apartments.filter((a) =>
    tab === "All" ? true : tab === "Ready to Move" ? readyToMove.has(a.name) : !readyToMove.has(a.name)
  );

  return (
    <>
      <div className="tabs" role="group" aria-label="Filter apartments">
        {tabs.map((name) => (
          <button key={name} type="button" aria-pressed={tab === name} onClick={() => setTab(name)}>
            {name}
          </button>
        ))}
      </div>
      <div className="shot-grid">
        {items.map((item, i) => {
          const body = (
            <>
              <Pic src={item.image} alt={item.name} sizes={SIZES.third} />
              <figcaption><b>{item.name}</b><span>{item.area}</span></figcaption>
            </>
          );
          const cls = i % 7 === 0 ? "wide" : undefined;
          return item.href ? (
            <Link key={item.name} href={item.href} className={cls} data-rise>
              <figure style={{ margin: 0 }}>{body}</figure>
            </Link>
          ) : (
            <figure key={item.name} className={cls} style={{ margin: 0 }} data-rise>{body}</figure>
          );
        })}
      </div>
    </>
  );
}
