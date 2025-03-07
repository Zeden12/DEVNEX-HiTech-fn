// src/pages/HomePage.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import PartnersSection from "../components/PartnersSection";
import OpportunitiesSection from "../components/OpportunitiesSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <PartnersSection/>
      <OpportunitiesSection/>
    </div>
  );
};

export default HomePage;
