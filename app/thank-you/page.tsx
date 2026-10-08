import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Thank you" };

export default function ThanksPage() {
  return (
    <article className="page wrap">
      <p className="kicker">Received</p>
      <h1>Thank you for writing.</h1>
      <p className="lede">Your note is saved in this browser only, until the form is connected to the office inbox.</p>
      <div className="actions">
        <Link className="btn" href="/">Back home</Link>
        <Link className="btn ghost" href="/projects">See the projects</Link>
      </div>
    </article>
  );
}
