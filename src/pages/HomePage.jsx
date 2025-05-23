import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import PartnersSection from "../components/PartnersSection";
import OpportunitiesBanner from '../components/OpportunitiesBanner';
import DevnexOpportunities from "../components/DevnexOpportunities";
import IconBoxSection from '../components/IconBoxSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <IconBoxSection />
      <AboutSection />
      <ServicesSection />
      <DevnexOpportunities />
      <StatsSection />
      <OpportunitiesBanner />
      <PartnersSection />
    </div>
  );
};

export default HomePage;