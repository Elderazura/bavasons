"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { company, media, nav, src, telHref } from "@/lib/content";

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="nav">
        <div className="nav-in">
          <Link href="/" className="brand" aria-label="Bavasons Homes">
            <img src={src(media.logo)} alt="Bavasons Homes" width={1402} height={599} />
          </Link>
          <button className="menu-btn" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="site-menu" aria-label="Open menu">
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <i aria-hidden="true" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button className="drawer-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
            <nav aria-label="Primary">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="drawer-foot">
              <div>{company.address.join(", ")}</div>
              <div><a href={telHref(company.phones[0])}>{company.phones[0]}</a></div>
              <div><a href={`mailto:${company.email}`}>{company.email}</a></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a className="call-fab" href={telHref(company.phones[2])}>Call us</a>
    </>
  );
}
