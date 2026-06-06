'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import Container from '@/components/Container';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';

import { useApp } from '@/lib/AppProvider';

export default function Hero() {
  const { t } = useApp();

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-24"
    >
      <div className="absolute inset-0 -z-20 bg-[#f8f6ff] dark:bg-ink" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-site-gradient opacity-40 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[url('/images/hero-pattern.webp')] bg-[length:560px_auto] bg-center opacity-[0.035] dark:opacity-[0.08]" />

      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <Reveal delay={0.08}>
            <h1 className="mt-7 text-balance text-[42px] font-light leading-[1] tracking-[-0.03em] text-ink dark:text-white sm:text-[56px] lg:text-[66px]">
              {t.hero.titleStart}{" "}
              <span className="gradient-text font-bold">
                {t.hero.titleGradient}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-9 max-w-3xl text-base leading-7 text-black/65 dark:text-[#9EA9B4] sm:text-lg">
              {t.hero.subtitle}
            </p>
          </Reveal>
          <Reveal
            delay={0.24}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
       
           <Button href="#contact" variant="gradient">
              {t.hero.secondary}
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.32} className="relative mx-auto xl:mt-[94px] mt-14 max-w-6xl">
          <div className="absolute -inset-6 rounded-[42px] bg-site-gradient opacity-30 blur-3xl" />
          <ImageFrame
            src="/images/hero-dashboard-wide.webp"
            alt={t.hero.titleGradient}
            priority
            className="relative rounded-[34px]"
            imageClassName="rounded-[26px]"
            sizes="(max-width: 1280px) 92vw, 1152px"
          />
        </Reveal>

      </Container>
    </section>
  );
}
