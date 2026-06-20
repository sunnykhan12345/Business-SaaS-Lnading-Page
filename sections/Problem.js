"use client";
import Container from "@/components/Container";
import ImageFrame from "@/components/ImageFrame";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import { useApp } from "@/lib/AppProvider";
export default function Problem() {
  const { t } = useApp();
  return (
    <section id="features" className="overflow-hidden py-14 sm:py-24">
      <Container>
        <div className="mb-8 text-center">
          <SectionBadge>{t.problem.badge}</SectionBadge>
          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-[32px] font-light leading-tight tracking-[-0.03em] text-ink dark:text-white sm:text-5xl">
            {t.problem.title}
          </h2>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="min-w-0">
              <p className="mx-auto max-w-2xl text-center text-base leading-7 text-black/60 dark:text-white/60 lg:mx-0 lg:text-left">
                {t.problem.subtitle}
              </p>
              <div className="mt-8 grid gap-3">
                {t.problem.pains?.map((pain) => (
                  <div
                    key={pain}
                    className="flex w-full min-w-0 items-start gap-3 rounded-[12px] border border-black/10 bg-white/70 p-4 text-sm font-medium text-ink shadow-sm dark:border-white/15 dark:bg-white/5 dark:text-white"
                  >
                    <svg
                      className="mt-0.5 h-6 w-6 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0005 5L5.00049 19M5.00049 5L19.0005 19"
                        stroke="#E7000B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="min-w-0 flex-1 text-sm leading-6 sm:text-base">
                      {pain}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ImageFrame
              src="/images/problem-workflow.webp"
              alt={t.problem.title}
              className="mx-auto w-full max-w-[560px]"
              imageClassName="max-h-[660px] w-full object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
