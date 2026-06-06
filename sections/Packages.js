'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import SectionBadge from '@/components/SectionBadge';
import { useApp } from '@/lib/AppProvider';

export default function Packages() {
  const { t } = useApp();

  return (
    <section id="packages" className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[520px] bg-site-gradient opacity-10 blur-3xl" />
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionBadge>{t.packages.badge}</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-light leading-tight tracking-[-0.03em] text-ink dark:text-white sm:text-5xl">
            {t.packages.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-black/60 dark:text-white/60">{t.packages.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.packages.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.04}>
              <article className="relative h-full overflow-hidden rounded-[30px] border border-black/10 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                {index === 1 && <div className="absolute inset-x-0 top-0 h-1 bg-site-gradient" />}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-ink dark:text-white">{plan.name}</h3>
                  <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/60 dark:bg-white/10 dark:text-white/60">{plan.price}</span>
                </div>
                <div className="my-6 h-px bg-black/10 dark:bg-white/10" />
                <div className="grid gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-black/65 dark:text-white/65">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-site-gradient">
                        <Image src="/icons/check.svg" alt="" width={14} height={14} className="invert" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18} className="mt-12 overflow-hidden rounded-[34px] border border-black/10 bg-white/75 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-semibold text-ink dark:text-white">{t.workflow.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.workflow.steps.map((step, index) => (
                  <span key={step} className="rounded-full border border-black/10 bg-black/[0.035] px-4 py-2 text-sm font-medium text-black/65 dark:border-white/10 dark:bg-white/[0.055] dark:text-white/65">
                    {index + 1}. {step}
                  </span>
                ))}
              </div>
            </div>
            <Button href="#contact" variant="gradient">{t.common.bookDemo}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
