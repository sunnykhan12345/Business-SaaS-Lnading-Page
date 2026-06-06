"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { useApp } from "@/lib/AppProvider";
import { languages } from "@/lib/translations";

export default function Navbar() {
  const { t, locale, setLocale, theme, setTheme } = useApp();
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-6">
      <Container>
        <nav className="flex items-center justify-between rounded-[60px] bg-white/80 px-4 py-3 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-ink/75">
          <a
            href="#home"
            className="px-3 text-2xl xl:text-[44px] font-light tracking-wide gradient-text sm:px-5"
          >
            {t.nav.logo}
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2.5 rounded-full px-4 py-2 text-base font-normal text-black/70 transition hover:bg-white hover:text-ink dark:text-white/70 dark:hover:bg-white dark:hover:text-ink"
              >
                <Image
                  src={link.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="opacity-70 dark:invert group-hover:dark:invert-0"
                />
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center rounded-full bg-black/5 p-1 dark:bg-white/5">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => setLocale(language.code)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition ${locale === language.code ? "bg-white text-ink shadow-sm dark:bg-white dark:text-ink" : "text-black/60 dark:text-white/60"}`}
                >
                  {language.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? t.nav.lightMode : t.nav.darkMode}
              className="grid h-11 w-11 place-items-center rounded-full bg-black/5 transition hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <Image
                src={isDark ? "/icons/sun.svg" : "/icons/moon.svg"}
                alt=""
                width={20}
                height={20}
                className="dark:invert"
              />
            </button>
            <Button href="#contact" variant="gradient">
              {t.nav.bookDemo}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5 dark:bg-white/5 lg:hidden"
          >
            <Image
              src="/icons/menu.svg"
              alt=""
              width={22}
              height={22}
              className="dark:invert"
            />
          </button>
        </nav>

        {open && (
          <div className="mt-3 rounded-[28px] border border-black/10 bg-white/95 p-3 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-ink/95 lg:hidden">
            <div className="grid gap-2">
              {t.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-ink transition hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
                >
                  <Image
                    src={link.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="dark:invert"
                  />
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-black/10 pt-3 dark:border-white/10">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => setLocale(language.code)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${locale === language.code ? "bg-ink text-white dark:bg-white dark:text-ink" : "bg-black/5 text-black/60 dark:bg-white/5 dark:text-white/60"}`}
                >
                  {language.name}
                </button>
              ))}
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full bg-black/5 px-4 py-2 text-xs font-semibold text-ink dark:bg-white/5 dark:text-white"
              >
                {isDark ? t.nav.lightMode : t.nav.darkMode}
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
