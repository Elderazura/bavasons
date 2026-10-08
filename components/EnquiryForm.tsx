"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: string;
  full?: boolean;
};

export function EnquiryForm({ fields, intro }: { fields: Field[]; intro?: string }) {
  const router = useRouter();
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (!name || !email || !phone) {
      setError("Name, email, and phone are required.");
      return;
    }
    const payload = Object.fromEntries(data.entries());
    sessionStorage.setItem("bavasons-enquiry", JSON.stringify(payload));
    router.push("/thank-you");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {intro ? <p className="lede" style={{ marginBottom: 8 }}>{intro}</p> : null}
      <div className="form-grid">
        {fields.map((field) => (
          <label key={field.name} className={field.full ? "full" : undefined}>
            {field.label}
            {field.type === "textarea" ? (
              <textarea name={field.name} required={field.name === "message"} />
            ) : field.type === "select" ? (
              <select name={field.name} defaultValue="3 BHK">
                <option>2 BHK</option>
                <option>3 BHK</option>
              </select>
            ) : (
              <input name={field.name} type={field.type || "text"} required={["name", "email", "phone"].includes(field.name)} />
            )}
          </label>
        ))}
      </div>
      {error ? <p role="alert">{error}</p> : null}
      <button className="btn red" type="submit">Send enquiry <span className="arrow">→</span></button>
      <p className="note">Saved in this browser for now. Office delivery will go through Resend once it is connected.</p>
    </form>
  );
}
