'use client';

import Container from '@/components/Container';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import SectionBadge from '@/components/SectionBadge';
import { useApp } from '@/lib/AppProvider';

export default function Solution() {
  const { t } = useApp();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-x-0 top-24 -z-10 h-96 bg-site-gradient opacity-10 blur-3xl" />
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionBadge>{t.solution.badge}</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-light leading-tight tracking-[-0.03em] text-ink dark:text-white sm:text-5xl">
            {t.solution.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-black/60 dark:text-white/60">{t.solution.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.solution.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.04} className={index === 3 ? 'xl:col-span-1' : ''}>
              <article className="group h-full overflow-hidden rounded-[30px] border border-black/10 bg-white/75 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-white/[0.04]">
                <div className="overflow-hidden rounded-3xl bg-black/5 dark:bg-white/5">
                  <ImageFrame src={card.image} alt={card.title} className="border-0 bg-transparent p-0 shadow-none" imageClassName="h-52 object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-2 pt-5">
                  <h3 className="text-xl font-semibold text-ink dark:text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60 dark:text-white/60">{card.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
