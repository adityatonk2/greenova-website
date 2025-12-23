export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Greenova Manufacturing Hub",
    alternateName: "Greenova EV Seller",
    url: "https://greenova-website.vercel.app",
    logo: "https://greenova-website.vercel.app/greenova-logo.png",
    description: "Leading electric two-wheeler manufacturer and dealer in Uttar Pradesh, India. Premium EV scooters with 1000W-1200W motors.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "W7HV+4F6, Chandrapal Kheri",
      addressLocality: "Chandrapal Kheri",
      addressRegion: "Uttar Pradesh",
      postalCode: "247342",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-80-77660863",
      contactType: "Sales",
      email: "greenova95@gmail.com",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    sameAs: [
      // Add social media links when available
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://greenova-website.vercel.app",
    name: "Greenova EV Seller",
    image: "https://greenova-website.vercel.app/greenova-logo.png",
    description: "Premium electric two-wheeler manufacturer and dealer in Chandrapal Kheri, Uttar Pradesh.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "W7HV+4F6, Chandrapal Kheri",
      addressLocality: "Chandrapal Kheri",
      addressRegion: "Uttar Pradesh",
      postalCode: "247342",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.935200",
      longitude: "77.293404",
    },
    url: "https://greenova-website.vercel.app",
    telephone: "+91-80-77660863",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Greenova EV Seller",
    url: "https://greenova-website.vercel.app",
    description: "Premium electric two-wheeler manufacturer and dealer in Uttar Pradesh, India.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://greenova-website.vercel.app/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Greenova Electric Two-Wheeler Scooters",
    description: "Premium electric two-wheeler scooters with 1000W-1200W motors, available in multiple models including SL Model, SI Model, BMW Model, OLA Model, Vespa 3, and more.",
    brand: {
      "@type": "Brand",
      name: "Greenova",
    },
    category: "Electric Vehicles",
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      priceValidUntil: "2025-12-31",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}

