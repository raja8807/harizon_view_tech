import React, { useState } from "react";
import BannerSection from "./sections/banner/banner";
import AboutSection from "./sections/about/about";
import ServicesSection from "./sections/services/services";

export default function Simulator() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
