"use client";

import Link from "next/link";
import Button from "@/components/Button";
import BookCallButton from "@/components/BookCallButton";
export default function HowItWorksCta() {
  return (
    <section className="w-full bg-[#0B0B10] px-4 py-10 md:px-8">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[18px] bg-[#0B0B10] px-5 py-[70px] text-center md:py-[82px]">
        {/* Base Pattern Background */}
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.webp')] bg-cover bg-center bg-no-repeat opacity-[0.1]" />

        {/* Soft Dark Overlay - lighter than before */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,16,0.82)_0%,rgba(11,11,16,0.28)_48%,rgba(11,11,16,0.78)_100%)]" />

        {/* Main Purple/Pink Figma Glow */}
        <div className="absolute inset-x-0 bottom-[-90px] h-[260px] bg-[radial-gradient(ellipse_at_center,rgba(255,63,197,0.42)_0%,rgba(102,64,255,0.34)_38%,rgba(255,81,38,0.16)_62%,rgba(11,11,16,0)_100%)] blur-[42px]" />

        {/* Extra Center Purple Light */}
        <div className="absolute left-1/2 bottom-[-40px] h-[190px] w-[620px] -translate-x-1/2 rounded-full bg-[#6640FF]/30 blur-[70px]" />

        {/* Top Side Darkness Like Figma */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,rgba(11,11,16,0.08)_34%,rgba(11,11,16,0.72)_100%)]" />

        {/* Gradient Border */}
        <div className="pointer-events-none absolute inset-0 rounded-[18px] p-[1.5px] [background:linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04),rgba(255,255,255,0.16))]">
          <div className="h-full w-full rounded-[16.5px] bg-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-[650px] flex-col items-center">
          <h2 className="text-[30px] font-medium leading-tight tracking-[0.04em] text-white md:text-[42px]">
            Want to See How It Works?
          </h2>

          <p className="mt-5 max-w-[560px] text-[13px] font-normal leading-[1.7] text-white/55 md:text-[15px]">
            Book a free demo and see how Dubai Business Experience can help you
            manage your business setup clients more professionally.
          </p>

          <BookCallButton href="#contact" variant="gradient" className="mt-20">
            Book a Free Demo
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}
