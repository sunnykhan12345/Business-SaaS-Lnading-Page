'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import SectionBadge from '@/components/SectionBadge';
import { useApp } from '@/lib/AppProvider';

export default function Features() {
  const { t } = useApp();

  return (
    <section id="features" className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionBadge>{t.features.badge}</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-light leading-tight tracking-[-0.03em] text-ink dark:text-white sm:text-5xl">
            {t.features.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-black/60 dark:text-white/60">{t.features.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6">
          {t.features.rows.map((row, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={row.title} delay={0.04 * index}>
                <article className="grid items-center gap-6 rounded-[34px] border border-black/10 bg-white/75 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.04] lg:grid-cols-2 lg:p-6">
                  <div className={`${reverse ? 'lg:order-2' : ''}`}>
                    <ImageFrame src={row.image} alt={row.title} className="p-2" imageClassName="max-h-[420px] object-cover" sizes="(max-width: 1024px) 92vw, 560px" />
                  </div>
                  <div className="p-2 lg:p-8">
                    <SectionBadge>{String(index + 1).padStart(2, '0')}</SectionBadge>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-ink dark:text-white sm:text-4xl">{row.title}</h3>
                    <div className="mt-6 grid gap-3">
                      {row.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-3 rounded-2xl bg-black/[0.035] px-4 py-3 text-sm font-medium text-black/70 dark:bg-white/[0.055] dark:text-white/70">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-site-gradient">
                            <Image src="/icons/check.svg" alt="" width={15} height={15} className="invert" />
                          </span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
