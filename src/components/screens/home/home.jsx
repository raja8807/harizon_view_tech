import React from "react";
import BannerSection from "./sections/banner/banner";
import AboutSection from "./sections/about/about";
import ServicesSection from "./sections/services/services";
import ProjectDomains from "./sections/project_domains/project_domains";
import ToolsTraining from "./sections/tools_training/tools_training";
import LanguageSupport from "./sections/languages/languages";
import ExperienceScale from "./sections/experience/experience";
import ClientConfidentiality from "./sections/confidentiality/confidentiality";
import Commitment from "./sections/commitment/commitment";
import RoleGrowth from "./sections/role_growth/role_growth";

export default function Home() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <ProjectDomains />
      <ToolsTraining />
      <LanguageSupport />
      <ExperienceScale />
      <ClientConfidentiality />
      <Commitment />
      <RoleGrowth />
    </>
  );
}
