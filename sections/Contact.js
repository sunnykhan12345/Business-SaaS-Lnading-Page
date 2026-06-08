'use client';

import Button from '@/components/Button';
import Container from '@/components/Container';
import ImageFrame from '@/components/ImageFrame';
import Reveal from '@/components/Reveal';
import SectionBadge from '@/components/SectionBadge';
import { useApp } from '@/lib/AppProvider';

export default function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className="pb-16 pt-8 sm:pb-24">
      <Container>
        <div className="">
          <div className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-site-gradient opacity-10 blur-3xl" />
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <ImageFrame
                src="/images/contact-support.webp"
                alt={t.contact.title}
                imageClassName="max-h-[560px] object-cover"
                sizes="(max-width: 1024px) 92vw, 540px"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-2 lg:p-6">
                <SectionBadge>{t.contact.badge}</SectionBadge>
                <h2 className="figma-heading-gradient mt-6 text-balance text-3xl font-normal leading-[1] tracking-[-0.03em] sm:text-[48px]">
                  {t.contact.title}
                </h2>
          
                <form
                  className="mt-10 grid gap-3"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input
                    aria-label={t.contact.fields.name}
                    placeholder={t.contact.fields.name}
                    className="form-field"
                  />
                  <input
                    aria-label={t.contact.fields.email}
                    placeholder={t.contact.fields.email}
                    type="email"
                    className="form-field"
                  />
                  <textarea
                    aria-label={t.contact.fields.message}
                    placeholder={t.contact.fields.message}
                    rows={5}
                    className="form-field resize-none"
                  />
                  <div className="pt-2">
                    <Button href="#home" variant="gradient">
                      {t.contact.button}
                    </Button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
