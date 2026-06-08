"use client";

import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import { useApp } from "@/lib/AppProvider";

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

          <p className="mt-5 text-base leading-7 text-black/60 dark:text-white/60">
            {t.packages.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.packages.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.04}>
              <article className="relative h-full overflow-hidden rounded-[30px] border border-black/10 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                {index === 1 && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-site-gradient" />
                )}

                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-ink dark:text-white">
                    {plan.name}
                  </h3>

                  <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-black/60 dark:bg-white/10 dark:text-white/60">
                    {plan.price}
                  </span>
                </div>

                <div className="my-6 h-px bg-black/10 dark:bg-white/10" />

                <div className="grid gap-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-black/65 dark:text-white/65"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-site-gradient">
                        <Image
                          src="/icons/check.svg"
                          alt=""
                          width={14}
                          height={14}
                          className="invert"
                        />
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18} className="mt-12">
          <div className="figma-work-card relative overflow-hidden rounded-[18px] px-5 py-[52px] text-center sm:px-8">
            <div className="relative z-10 mx-auto max-w-[620px]">
              <h3 className="text-balance text-[28px] font-light leading-[1] tracking-[-0.03em] text-white sm:text-[32px]">
                {t.workflow.title}
              </h3>

              <p className="mx-auto mt-5 max-w-[520px] text-[13px] leading-[1.25] text-white/45">
                {t.workflow.subtitle}
              </p>

              <div className="mt-8 flex justify-center">
                <Button href="#contact" variant="gradient">
                  {t.common.bookDemo}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
