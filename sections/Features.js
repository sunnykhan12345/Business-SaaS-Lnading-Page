
"use client";

import Container from "@/components/Container";
import ImageFrame from "@/components/ImageFrame";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import { useApp } from "@/lib/AppProvider";

export default function Features() {
  const { t } = useApp();
  const rows = t.features.rows || [];

  return (
    <section
      id="features"
      className="relative bg-[#F8F6FF] py-16 dark:bg-[#0B0B10] sm:py-24"
    >
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <SectionBadge>{t.features.badge}</SectionBadge>

          <h2 className="mt-6 text-balance text-3xl font-light leading-tight tracking-[-0.03em] text-ink dark:text-white sm:text-5xl xl:mt-9">
            {t.features.title}
          </h2>

          {t.features.subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/60 dark:text-white/50">
              {t.features.subtitle}
            </p>
          )}
        </Reveal>
      </Container>

      {/* Sticky stacked cards area */}
      <div className="relative mx-auto mt-16 max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div
          className="relative h-auto lg:h-[var(--stack-height)]"
          style={{
            "--stack-height": `calc(${rows.length} * 88vh + 720px)`,
          }}
        >
          {rows.map((row, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={row.title}
                className="feature-pinned-card sticky grid min-h-[560px] items-center gap-8 overflow-hidden rounded-[34px] border border-black/10 bg-white/95 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#0B0B10] lg:grid-cols-2 lg:p-10"
                style={{
                  top: `${100 + index * 18}px`,
                  zIndex: index + 1,
                  transform: `scale(${1 - index * 0.015})`,
                }}
              >
                {/* Card Background */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(133.46deg,rgba(255,255,255,0.95)_2.22%,rgba(255,255,255,0.48)_32.11%,rgba(255,255,255,0)_100%)] dark:bg-[linear-gradient(133.46deg,rgba(255,255,255,0.132)_2.22%,rgba(255,255,255,0)_32.11%)]" />

                {/* Inner Border */}
                <div className="pointer-events-none absolute inset-0 rounded-[34px] border border-black/[0.04] dark:border-white/[0.096]" />

                {/* Figma stacked border lines */}
                <div className="pointer-events-none absolute left-0 right-0 top-[-118px] hidden h-[120px] rounded-t-[34px] border border-white/10 dark:block" />
                <div className="pointer-events-none absolute left-5 right-5 top-[-88px] hidden h-[90px] rounded-t-[30px] border border-white/10 dark:block" />
                <div className="pointer-events-none absolute left-10 right-10 top-[-58px] hidden h-[60px] rounded-t-[26px] border border-white/10 dark:block" />

                {/* Image */}
                <div className={`relative z-10 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-[26px] bg-black/[0.04] p-2 dark:bg-white/[0.04]">
                    <ImageFrame
                      src={row.image}
                      alt={row.title}
                      className="p-0"
                      imageClassName="h-[300px] w-full object-cover sm:h-[380px] lg:h-[430px]"
                      sizes="(max-width: 1024px) 92vw, 620px"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-1 lg:p-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink dark:text-white sm:text-[30px]">
                    {row.title}
                  </h3>

                  <div className="mt-7 grid gap-4">
                    {row.bullets?.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex min-h-[54px] items-center rounded-[42px] bg-black/[0.045] px-6 py-3 text-base font-light text-black/70 dark:bg-white/[0.055] dark:text-white/75 sm:text-lg"
                      >
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {row.para && (
                    <p className="mt-7 max-w-xl text-sm leading-7 text-black/55 dark:text-white/50 sm:text-base">
                      {row.para}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
