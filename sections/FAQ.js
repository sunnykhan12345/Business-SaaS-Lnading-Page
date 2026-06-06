'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionBadge from '@/components/SectionBadge';
import { useApp } from '@/lib/AppProvider';

export default function FAQ() {
  const { t } = useApp();
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionBadge>{t.faq.badge}</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-light leading-tight tracking-[-0.03em] text-ink dark:text-white sm:text-5xl">
            {t.faq.title}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-3">
          {t.faq.items.map((item, index) => {
            const open = active === index;
            return (
              <Reveal key={item.q} delay={index * 0.03}>
                <button
                  type="button"
                  onClick={() => setActive(open ? -1 : index)}
                  className="w-full rounded-3xl border border-black/10 bg-white/75 p-5 text-left shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07] rtl:text-right"
                >
                  <div className="flex items-center justify-between gap-5">
                    <span className="text-base font-semibold text-ink dark:text-white">{item.q}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black/5 text-xl text-ink dark:bg-white/10 dark:text-white">{open ? '−' : '+'}</span>
                  </div>
                  {open && <p className="mt-4 text-sm leading-6 text-black/60 dark:text-white/60">{item.a}</p>}
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
