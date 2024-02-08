import React from "react";
import HomeHeader from "../components/homepage/HomeHeader";
import Hero from "../components/homepage/Hero";
import Features from "../components/homepage/Features";
import Testimonials from "../components/homepage/Testimonials";
import Footer from "../components/homepage/Footer";
import CallToAction from "../components/homepage/CallToAction";

const Marketing = () => {
  return (
    <div className="bg-secondary min-h-screen h-full w-full">
      <div className="bg-primary dark:bg-slate-900 container mx-auto">
        <HomeHeader />
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Marketing;
