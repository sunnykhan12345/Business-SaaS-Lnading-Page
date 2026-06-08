"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import Features from "@/sections/Features";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import HowItWorksCta from "./HowItWorksCta";
import SolutionSection from "./SolutionSection";
import BusinessManagementSection from "./BusinessManagementSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <BusinessManagementSection />
        <Features />
        <SolutionSection />
        <HowItWorksCta />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
