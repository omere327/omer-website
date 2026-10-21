import { SENSVIZ, SITE_URL, faqs, socials } from "@/lib/content";

/**
 * JSON-LD for the home page, describing only what the page shows: the site, the profile page, Omer as a
 * Person, SensViz as the Organization he co-founded and works for, and the visible FAQ.
 * Structured data makes the page eligible to be understood; it does not guarantee any search feature.
 */
export function StructuredData() {
  const person = `${SITE_URL}/#person`;
  const org = `${SENSVIZ.url}/#organization`;

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Omer Ejaz",
      inLanguage: "en",
      publisher: { "@id": person },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "Omer Ejaz, co-founder and CEO of SensViz",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": person },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": person,
      name: "Omer Ejaz",
      alternateName: ["Mohammed Omer Ejaz", "Mohammad Omer Ejaz"],
      url: SITE_URL,
      image: `${SITE_URL}/omer-ejaz.webp`,
      jobTitle: "Co-founder and CEO",
      worksFor: { "@id": org },
      description:
        "Mohammed Omer Ejaz is the co-founder and CEO of SensViz, a custom AI development and software company with offices in London and Lahore.",
      homeLocation: { "@type": "Place", name: "Lahore, Pakistan" },
      knowsAbout: [
        "Brand strategy",
        "Product strategy",
        "Go-to-market strategy",
        "AI product development",
        "Agentic AI",
        "Generative AI",
        "Computer vision",
        "Custom software development",
      ],
      sameAs: socials.map((s) => s.href),
    },
    {
      "@type": "Organization",
      "@id": org,
      name: SENSVIZ.name,
      url: SENSVIZ.url,
      logo: `${SITE_URL}/brands/sensviz-icon.png`,
      description: SENSVIZ.description,
      founder: { "@id": person },
      address: SENSVIZ.offices.map((o) => ({
        "@type": "PostalAddress",
        streetAddress: o.street,
        addressLocality: o.city,
        ...("region" in o ? { addressRegion: o.region } : {}),
        postalCode: o.postcode,
        addressCountry: o.country,
      })),
      knowsAbout: [
        "Custom AI development",
        "Agentic AI development",
        "Generative AI and LLM solutions",
        "AI automation",
        "Computer vision",
        "Data and analytics",
        "Web and mobile app development",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      url: `${SITE_URL}/#faq`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        "@id": `${SITE_URL}/#${f.id}`,
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // The data is static and built here, so it is safe to inline. "<" is escaped so no string can close the tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
