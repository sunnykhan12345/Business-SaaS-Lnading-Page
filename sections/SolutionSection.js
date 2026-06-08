"use client";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { useApp } from "@/lib/AppProvider";

export default function SolutionSection() {
  const { t } = useApp();

  const steps = [
    {
      step: t.solution.steps.one.step,
      title: t.solution.steps.one.title,
      description: t.solution.steps.one.description,
    },
    {
      step: t.solution.steps.two.step,
      title: t.solution.steps.two.title,
      description: t.solution.steps.two.description,
    },
    {
      step: t.solution.steps.three.step,
      title: t.solution.steps.three.title,
      description: t.solution.steps.three.description,
    },
    {
      step: t.solution.steps.four.step,
      title: t.solution.steps.four.title,
      description: t.solution.steps.four.description,
    },
    {
      step: t.solution.steps.five.step,
      title: t.solution.steps.five.title,
      description: t.solution.steps.five.description,
    },
    {
      step: t.solution.steps.six.step,
      title: t.solution.steps.six.title,
      description: t.solution.steps.six.description,
    },
  ];

  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#F8F6FF] py-16 dark:bg-[#0B0B10] sm:py-20 lg:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(102,64,255,0.12)_0%,rgba(255,63,197,0.06)_32%,rgba(248,246,255,0)_70%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_top,rgba(102,64,255,0.18)_0%,rgba(255,63,197,0.08)_32%,rgba(11,11,16,0)_70%)]" />

      <Container>
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <span className="inline-flex h-[26px] items-center justify-center rounded-full bg-black/[0.06] px-4 text-sm font-normal leading-none text-black/60 dark:bg-white/[0.08] dark:text-white/70">
              {t.solution.badge}
            </span>

            <h2 className="mx-auto mt-7 xl:mt-9 max-w-[860px] text-balance text-[32px] font-light leading-[1.16] tracking-[-0.03em] text-[#111111] dark:text-white sm:text-[42px] md:text-[48px] lg:text-[48px] whitespace-pre-line">
              {t.solution.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {steps.map((item, index) => (
            <Reveal key={item.title} delay={0.08 + index * 0.04}>
              <div className="solution-card group h-full min-h-[172px] rounded-[20px] p-6 transition duration-300 hover:-translate-y-1">
                <p className="text-base font-semibold leading-none text-black/65 dark:text-white/85">
                  {item.step}
                </p>

                <h3 className="mt-6 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[#111111] dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[310px] text-base font-light leading-[1.45] text-black/50 dark:text-[#ABAEB2]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
