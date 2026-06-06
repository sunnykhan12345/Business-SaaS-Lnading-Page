'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import SectionBadge from '@/components/SectionBadge';
import { useApp } from '@/lib/AppProvider';

export default function Problem() {
  const { t } = useApp();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="text-center mb-8">
          <SectionBadge>{t.problem.badge}</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-light leading-tight tracking-[-0.03em] text-ink dark:text-white sm:text-5xl">
            {t.problem.title}
          </h2>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div>
              <p className="max-w-2xl text-base leading-7 text-black/60 dark:text-white/60">
                {t.problem.subtitle}
              </p>
              <div className="mt-8 grid gap-3">
                {t.problem.pains.map((pain, index) => (
                  <div
                    key={pain}
                    className="flex gap-3 rounded-[12px] border border-black/10 bg-white/70 p-4 text-sm font-medium text-ink shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0005 5L5.00049 19M5.00049 5L19.0005 19"
                        stroke="#E7000B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span className='text-base whitespace-nowrap'>{pain}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageFrame
              src="/images/problem-workflow.webp"
              alt={t.problem.title}
              className="mx-auto max-w-[560px]"
              imageClassName="max-h-[660px] object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
