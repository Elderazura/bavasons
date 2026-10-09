import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <article>
      <PageHero title="Privacy Policy" />
      <section className="section narrow prose">
        <p className="lede">
          At Bavasons Homes, one of our main priorities is the privacy of our visitors. This policy describes the information the site collects and how it is used. It covers online activity on this website only.
        </p>
        <h2>Consent</h2>
        <p>By using the website, you consent to this policy and its terms.</p>
        <h2>Information we collect</h2>
        <p>
          If you write to us, we receive your name, email, phone number, and whatever you put in the message. The customer profile form also asks for address, occupation, age, and household size. Usage statistics such as pages viewed, browser, and screen size may be gathered to improve the site. Personal information is not disclosed without permission, except where the law requires it.
        </p>
        <h2>How it is used</h2>
        <p>
          To operate the site, understand how it is used, develop new pages, reply to enquiries, and send updates to people who asked for them. It is also used to find and prevent fraud.
        </p>
        <h2>Log files</h2>
        <p>
          Hosting logs record IP address, browser type, ISP, date and time, and referring pages. These are not tied to a name. They help administer the site and read broad trends.
        </p>
        <h2>Cookies</h2>
        <p>
          Cookies remember preferences and pages visited so the site can load in a way that fits the browser. Embedded videos or maps behave as if you had visited that other site, and may set their own cookies.
        </p>
        <h2>Advertising and third parties</h2>
        <p>
          Third-party ad servers, if used, receive an IP address and measure their own campaigns. Bavasons Homes does not control those cookies. Their policies apply on their own services.
        </p>
        <p>Questions: info@bavasons.in · +91 80860 78391</p>
      </section>
    </article>
  );
}
