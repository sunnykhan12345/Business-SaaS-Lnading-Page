// 'use client';

// import Image from 'next/image';
// import Button from '@/components/Button';
// import Container from '@/components/Container';
// import ImageFrame from '@/components/ImageFrame';
// import Reveal from '@/components/Reveal';

// import { useApp } from '@/lib/AppProvider';

// export default function Hero() {
//   const { t } = useApp();

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-24"
//     >
//       <div className="absolute inset-0 -z-20 bg-[#f8f6ff] dark:bg-ink" />
//       <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-site-gradient opacity-40 blur-3xl" />
//       <div className="absolute inset-0 -z-10 bg-[url('/images/hero-pattern.webp')] bg-[length:560px_auto] bg-center opacity-[0.035] dark:opacity-[0.08]" />

//       <Container>
//         <div className="mx-auto max-w-5xl text-center">
//           <Reveal delay={0.08}>
//             <h1 className="mt-7 text-balance text-[42px] font-light leading-[1] tracking-[-0.03em] text-ink dark:text-white sm:text-[56px] lg:text-[66px]">
//               {t.hero.titleStart}{" "}
//               <span className="gradient-text font-bold">
//                 {t.hero.titleGradient}
//               </span>
//             </h1>
//           </Reveal>
//           <Reveal delay={0.16}>
//             <p className="mx-auto mt-9 max-w-3xl text-base leading-7 text-black/65 dark:text-[#9EA9B4] sm:text-lg">
//               {t.hero.subtitle}
//             </p>
//           </Reveal>
//           <Reveal
//             delay={0.24}
//             className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
//           >

//            <Button href="#contact" variant="gradient">
//               {t.hero.secondary}
//             </Button>
//           </Reveal>
//         </div>

//         <Reveal delay={0.32} className="relative mx-auto xl:mt-[94px] mt-14 max-w-6xl">
//           <div className="absolute -inset-6 rounded-[42px] bg-site-gradient opacity-30 blur-3xl" />
//           <ImageFrame
//             src="/images/hero-dashboard-wide.webp"
//             alt={t.hero.titleGradient}
//             priority
//             className="relative rounded-[34px]"
//             imageClassName="rounded-[26px]"
//             sizes="(max-width: 1280px) 92vw, 1152px"
//           />
//         </Reveal>

//       </Container>
//     </section>
//   );
// }
"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import ImageFrame from "@/components/ImageFrame";
import Reveal from "@/components/Reveal";
import { useApp } from "@/lib/AppProvider";

export default function Hero() {
  const { t } = useApp();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#08070d] pb-28 pt-28 sm:pt-32 lg:pb-36"
    >
      {/* Pattern background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/images/patterns.png')",
        }}
      />

      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_35%,rgba(135,58,255,0.38),rgba(255,89,36,0.16)_38%,rgba(8,7,13,0.90)_78%)]" /> */}

      {/* Dark readability overlay */}
      <div className="absolute inset-0 z-[2] bg-black/30" />

      {/* Smooth bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[100px] bg-gradient-to-b from-transparent via-[#08070d]/80 to-[#08070d]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[1010px] text-center">
          <Reveal delay={0.08}>
            <h1 className="mx-auto text-balance text-[42px] font-light leading-[1.04] tracking-[-0.045em] text-white sm:text-[58px] lg:text-[70px] xl:text-[78px]">
              {t.hero.titleStart}{" "}
              <span className="gradient-text font-bold">
                {t.hero.titleGradient}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-[760px] text-[15px] leading-[1.75] text-white/62 sm:text-[17px]">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal
            delay={0.24}
            className="mt-8 flex items-center justify-center"
          >
            <Button href="#contact" variant="gradient">
              {t.hero.secondary}
            </Button>
          </Reveal>
        </div>

        <Reveal
          delay={0.32}
          className="relative mx-auto mt-16 max-w-[1200px] sm:mt-20 lg:mt-[92px]"
        >
          <div className="absolute -inset-x-10 -inset-y-8 rounded-[42px] bg-[#8B2CFF]/30 blur-[55px]" />

          <div className="relative overflow-hidden rounded-t-[34px]">
            <ImageFrame
              src="/images/hero-dashboard-wide.webp"
              alt={t.hero.titleGradient}
              priority
              className="relative rounded-[34px]"
              imageClassName="rounded-[34px]"
              sizes="(max-width: 1280px) 92vw, 1200px"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
