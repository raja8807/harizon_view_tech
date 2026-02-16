import ContactScreen from "@/components/screens/contact/contact";
import React from "react";

import Head from "next/head";
import { CONATCT_DETAILS } from "@/constants/constants";

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact HarizonViewTech",
    "url": "https://harizonviewtech.in/contact",
    "description": "Get in touch with HarizonViewTech for strategic IT outsourcing and ODC consultation.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "HarizonViewTech",

      "email": `${CONATCT_DETAILS.email}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${CONATCT_DETAILS.addressData.streetAddress}`,
        "addressLocality": `${CONATCT_DETAILS.addressData.city}`,
        "addressRegion": `${CONATCT_DETAILS.addressData.state}`,
        "postalCode": `${CONATCT_DETAILS.addressData.zipCode}`,
        "addressCountry": `${CONATCT_DETAILS.addressData.country}`
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | HarizonViewTech - IT Outsourcing Consultation</title>
        <meta name="description" content="Contact HarizonViewTech for expert consultation on MNC project enablement, ODC setup, and strategic IT outsourcing." />
        <link rel="canonical" href="https://harizonviewtech.in/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact HarizonViewTech | IT Outsourcing Consultation" />
        <meta property="og:description" content="Get in touch with our experts to discuss your global IT outsourcing needs." />
        <meta property="og:url" content="https://harizonviewtech.in/contact" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <ContactScreen />
    </>
  );
};

export default ContactPage;
