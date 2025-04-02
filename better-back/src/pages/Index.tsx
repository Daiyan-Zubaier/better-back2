
import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Index;