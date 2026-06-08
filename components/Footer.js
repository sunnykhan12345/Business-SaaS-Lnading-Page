"use client";

import Container from "@/components/Container";
import { useApp } from "@/lib/AppProvider";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
} from "@/public/icons/icon";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: <InstagramIcon />,
  },
  {
    name: "Facebook",
    href: "#",
    icon: <FacebookIcon />,
  },
  {
    name: "TikTok",
    href: "#",
    icon: <TikTokIcon />,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <LinkedInIcon />,
  },
];

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-[#17171C] bg-white/60 py-8 dark:border-white/10 dark:bg-black/20">
      <Container>
        <div className="flex items-center justify-between border-b border-black/10 pb-7 dark:border-white/10">
          <Link
            href="#home"
            className="px-3 text-2xl xl:text-[44px] font-light tracking-wide gradient-text sm:px-5"
          >
            {t.nav.logo}
          </Link>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className="flex h-12 w-12  items-center justify-center rounded-full border border-[#202025] bg-black/5 text-black/60 transition hover:bg-black/10 hover:text-black dark:border-white/10 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15 dark:hover:text-white"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <p className="pt-5 text-center text-base text-black/60 dark:text-white/70">
          © copyright {new Date().getFullYear()} saas.com | All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}
