"use client";

import { useState } from "react";
import { src } from "@/lib/content";
import { ShotGrid, type Shot } from "@/components/ShotGrid";
import { Pic, SIZES } from "@/components/Pic";

const tabs = ["Outside", "Inside", "Renders", "Plans"] as const;
type Tab = (typeof tabs)[number];

export function WalkBook({ outside, inside, drawn, plans }: { outside: Shot[]; inside: Shot[]; drawn: Shot[]; plans: Shot[] }) {
  const [tab, setTab] = useState<Tab>("Outside");
  const items = tab === "Outside" ? outside : tab === "Inside" ? inside : tab === "Renders" ? drawn : plans;
  const lead = items[0];
  const rest = items.slice(1);
  const plansOn = tab === "Plans";

  return (
    <section className="section tight wrap" id="walk" aria-label="Walk through the house">
      <header className="walk-bar">
        <h2>Walk through</h2>
        <div className="filters" role="tablist" aria-label="House views">
          {tabs.map((name) => (
            <button key={name} type="button" role="tab" aria-selected={tab === name} onClick={() => setTab(name)}>
              {name}
            </button>
          ))}
        </div>
      </header>
      {lead ? (
        <figure className={plansOn ? "walk-plate is-plan" : "walk-plate"} key={tab}>
          <Pic alt={lead.alt} src={lead.src} sizes={SIZES.wrap} quality={90} />
        </figure>
      ) : null}
      {rest.length ? <ShotGrid shots={rest} plans={plansOn} /> : null}
    </section>
  );
}
