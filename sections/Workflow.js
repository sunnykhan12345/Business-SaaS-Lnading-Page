'use client';

import Container from '@/components/Container';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import SectionBadge from '@/components/SectionBadge';
import { useApp } from '@/lib/AppProvider';

export default function Workflow() {
  const { t } = useApp();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionBadge>{t.workflow.badge}</SectionBadge>
            <h2 className="mt-6 text-balance text-3xl font-light leading-tight tracking-[-0.03em] text-ink dark:text-white sm:text-5xl">
              {t.workflow.title}
            </h2>
            <div className="mt-8 grid gap-4">
              {t.workflow.steps.map((step, index) => (
                <div key={step} className="relative flex items-center gap-4 rounded-3xl border border-black/10 bg-white/75 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-site-gradient text-sm font-bold text-white">{index + 1}</span>
                  <p className="font-semibold text-ink dark:text-white">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageFrame src="/images/solution-overview.webp" alt={t.workflow.title} imageClassName="object-cover" sizes="(max-width: 1024px) 92vw, 720px" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
