import HomeScreen from "@/components/screens/home/home";

import Head from "next/head";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HarizonViewTech",
    "url": "https://harizonviewtech.in/",
    "logo": "https://harizonviewtech.in/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/harizonviewtech",
      "https://twitter.com/harizonviewtech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      // "telephone": "+1-555-019-2834",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <Head>
        <title>HarizonViewTech | MNC Project Enablement & Global IT Outsourcing</title>
        <meta name="description" content="HarizonViewTech provides strategic IT outsourcing, ODC setup, and vendor management solutions for global MNCs. Empower your business with top-tier tech talent." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://harizonviewtech.in/" />

        {/* Open Graph */}
        <meta property="og:title" content="HarizonViewTech | MNC Project Enablement & Global IT Outsourcing" />
        <meta property="og:description" content="Strategic IT outsourcing and project enablement for global enterprises. We build high-performance dedicated teams." />
        <meta property="og:url" content="https://harizonviewtech.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HarizonViewTech" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HarizonViewTech | Premium IT Outsourcing Solutions" />
        <meta name="twitter:description" content="Scale your engineering capabilities with HarizonViewTech's managed ODC and staff augmentation services." />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <HomeScreen />
    </>
  );
};

export default Home;
