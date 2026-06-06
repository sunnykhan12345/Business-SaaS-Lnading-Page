'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Problem from '@/sections/Problem';
import Solution from '@/sections/Solution';
import Features from '@/sections/Features';
import Workflow from '@/sections/Workflow';
import Packages from '@/sections/Packages';
import FAQ from '@/sections/FAQ';
import Contact from '@/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Workflow />
        <Packages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
