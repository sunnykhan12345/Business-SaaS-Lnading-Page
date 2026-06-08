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
        <Reveal className="mx-auto  text-center">
          <SectionBadge>{t.faq.badge}</SectionBadge>
          <h2 className="whitespace-pre-line mt-6 xl:mt-9 text-balance text-3xl font-normal leading-[1.2] sm:leading-[1.15]  tracking-[-0.03em] text-ink dark:text-white sm:text-5xl">
            {t.faq.title}
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-6xl gap-5">
          {t.faq.items.map((item, index) => {
            const open = active === index;
            return (
              <Reveal key={item.q} delay={index * 0.03}>
                <button
                  type="button"
                  onClick={() => setActive(open ? -1 : index)}
                  className="w-full rounded-[16px] border border-black/10 bg-white/75 p-4 text-left shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07] rtl:text-right"
                >
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex gap-5 items-center">
                      <span className="text-[32px] font-normal text-[#50565D]">
                        0{index + 1}
                      </span>
                      <span className="text-lg font-normal text-ink dark:text-white">
                        {item.q}
                      </span>
                    </div>
                    <span className="shrink-0  text-xl text-ink dark:text-white">
                      {open ? "−" : "+"}
                    </span>
                  </div>
                  {open && (
                    <p className="mt-4 text-sm leading-6 text-black/60 dark:text-white/60">
                      {item.a}
                    </p>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
