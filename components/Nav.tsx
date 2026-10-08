"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { company, media, nav, src, telHref } from "@/lib/content";

function Brand({ onClick, light }: { onClick?: () => void; light?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Bavasons Homes" onClick={onClick}>
      {light ? (
        <img className="brand-logo light" style={{ display: "block" }} src={src(media.logoWhite)} alt="" />
      ) : (
        <>
          <img className="brand-logo dark" src={src(media.logo)} alt="" />
          <img className="brand-logo light" src={src(media.logoWhite)} alt="" />
        </>
      )}
    </Link>
  );
}

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    setOpen(false);
    const dark = document.querySelector("[data-nav-dark]");
    if (!dark) {
      setClear(false);
      return;
    }
    const update = () => setClear(window.scrollY < 48);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [path]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className={`nav${clear && !open ? " is-clear" : ""}`}>
        <div className="nav-in wrap">
          <Brand />
          <nav className="nav-links" aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
            <Link className="btn sm" href="/customer-enquiry-form">Enquire</Link>
          </nav>
          <button className="menu-btn" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="site-menu">
            <i aria-hidden="true" /> Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="drawer-head">
              <Brand light onClick={() => setOpen(false)} />
              <button className="drawer-close" type="button" onClick={() => setOpen(false)}>Close</button>
            </div>
            <nav className="drawer-links" aria-label="Menu">
              {[{ href: "/", label: "Home" }, ...nav].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                    <span>0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="drawer-foot">
              <Link className="btn ghost light" href="/customer-enquiry-form" onClick={() => setOpen(false)}>Enquire</Link>
              <span>{company.address.join(", ")}</span>
              <a href={telHref(company.phones[0])}>{company.phones[0]}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
