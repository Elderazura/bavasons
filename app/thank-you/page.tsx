import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Thank you" };

export default function ThanksPage() {
  return (
    <article className="page">
      <div className="wrap" style={{ textAlign: "center" }}>
        <h1 className="sec-title" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>Thank you! Your submission has been received.</h1>
        <div className="hr-gold" />
        <p className="lede" style={{ maxWidth: "52ch", margin: "0 auto 28px" }}>
          Your note is saved in this browser only, until the form is connected to the office inbox.
        </p>
        <p className="actions" style={{ justifyContent: "center" }}>
          <Link className="btn" href="/">Back home</Link>
          <Link className="btn light" href="/projects">See the projects</Link>
        </p>
      </div>
    </article>
  );
}
