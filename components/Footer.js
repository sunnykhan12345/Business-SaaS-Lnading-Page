'use client';

import Container from '@/components/Container';
import { useApp } from '@/lib/AppProvider';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-black/10 bg-white/60 py-8 dark:border-white/10 dark:bg-black/20">
      <Container className="flex flex-col gap-4 text-sm text-black/60 dark:text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-2xl font-light text-ink dark:text-white">{t.nav.logo}</p>
          <p className="mt-2 max-w-xl">{t.footer.text}</p>
        </div>
        <p>© {new Date().getFullYear()} {t.footer.rights}</p>
      </Container>
    </footer>
  );
}
