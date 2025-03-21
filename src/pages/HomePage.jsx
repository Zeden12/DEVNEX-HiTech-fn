import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import PartnersSection from "../components/PartnersSection";
import OpportunitiesBanner from '../components/OpportunitiesBanner';
import DevnexOpportunities from "../components/DevnexOpportunities";

const HomePage = () => {
  return (
    <div>
      <div id="hero">
        <HeroSection />
      </div>
        <AboutSection />
      <div id="services">
        <ServicesSection />
      </div>
      <DevnexOpportunities />
      <StatsSection />
      <OpportunitiesBanner />
      <PartnersSection />
    </div>
  );
};

export default HomePage;