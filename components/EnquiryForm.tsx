"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: string;
  full?: boolean;
  placeholder?: string;
};

export function EnquiryForm({
  fields,
  intro,
  compact,
}: {
  fields: Field[];
  intro?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (!name || !email || (fields.some((f) => f.name === "phone") && !phone)) {
      setError("Please fill in your name, email and phone.");
      return;
    }
    sessionStorage.setItem("bavasons-enquiry", JSON.stringify(Object.fromEntries(data.entries())));
    router.push("/thank-you");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {intro ? <p className="lede">{intro}</p> : null}
      <div className="form-grid">
        {fields.map((field) => (
          <label key={field.name} className={field.full ? "full" : undefined}>
            {compact ? <span className="sr-only" style={{ position: "absolute", left: "-9999px" }}>{field.label}</span> : field.label}
            {field.type === "textarea" ? (
              <textarea name={field.name} placeholder={field.placeholder} required={field.name === "message" && !compact} />
            ) : field.type === "select" ? (
              <select name={field.name} defaultValue="3 BHK">
                <option>2 BHK</option>
                <option>3 BHK</option>
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type || "text"}
                placeholder={field.placeholder}
                required={["name", "email", "phone"].includes(field.name)}
              />
            )}
          </label>
        ))}
      </div>
      {error ? <p role="alert">{error}</p> : null}
      <button className="btn" type="submit">Submit</button>
      <p className="note">Saved in this browser for now. Office delivery will go through Resend once it is connected.</p>
    </form>
  );
}
