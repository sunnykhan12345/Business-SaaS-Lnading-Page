"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { useApp } from "@/lib/AppProvider";
import { languages } from "@/lib/translations";

export default function Navbar() {
  const { t, locale, setLocale, theme, setTheme } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sectionIds = t.nav.links.map((link) => link.href.replace("#", ""));
      let current = "#home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 160 && rect.bottom >= 160) {
            current = `#${id}`;
          }
        }
      });

      setActiveHref(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [t.nav.links]);

  const handleNavClick = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    setActiveHref(href);
    setOpen(false);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-6">
      <Container>
        <nav
          className={`flex items-center justify-between rounded-[60px] px-4 py-3 transition-all duration-500 ease-out sm:px-5 ${
            scrolled
              ? "border border-white/10 bg-[#15121c]/55 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
              : "border border-white/5 bg-[#15121c]/35 shadow-none backdrop-blur-md"
          }`}
        >
          <Link
            href="#home"
            onClick={(event) => handleNavClick(event, "#home")}
            className="px-3 text-2xl font-light tracking-wide gradient-text sm:px-5 xl:text-[44px]"
          >
            {t.nav.logo}
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            {t.nav.links.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`group flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.14)]"
                      : "text-white/72 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Image
                    src={link.icon}
                    alt=""
                    width={18}
                    height={18}
                    className={
                      isActive
                        ? "opacity-90"
                        : "opacity-75 invert transition group-hover:opacity-100"
                    }
                  />
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center rounded-full bg-white/6 p-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => setLocale(language.code)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    locale === language.code
                      ? "bg-white text-black shadow-sm"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {language.label}
                </button>
              ))}
            </div>

            <Button href="#contact" variant="gradient">
              {t.nav.bookDemo}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/10 lg:hidden"
          >
            <Image
              src="/icons/menu.svg"
              alt=""
              width={22}
              height={22}
              className="invert"
            />
          </button>
        </nav>

        {open && (
          <div className="mt-3 rounded-[28px] border border-white/10 bg-[#15121c]/90 p-3 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl lg:hidden">
            <div className="grid gap-2">
              {t.nav.links.map((link) => {
                const isActive = activeHref === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-white text-black"
                        : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Image
                      src={link.icon}
                      alt=""
                      width={18}
                      height={18}
                      className={isActive ? "" : "invert"}
                    />
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-white/10 pt-3">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => setLocale(language.code)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    locale === language.code
                      ? "bg-white text-black"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  {language.name}
                </button>
              ))}

              {/* <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white"
              >
                {isDark ? t.nav.lightMode : t.nav.darkMode}
              </button> */}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
