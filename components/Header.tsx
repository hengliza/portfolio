"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

type HeaderProps = {
  menuOpen: boolean;
  darkMode: boolean;
  onMenuToggle: () => void;
  onThemeToggle: () => void;
  onCloseMenu: () => void;
};

export function Header({
  menuOpen,
  darkMode,
  onMenuToggle,
  onThemeToggle,
  onCloseMenu,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/Images/profile.jpg"
            alt="Heng Liza profile picture"
            width={40}
            height={40}
            className="w-[40px] h-[40px] rounded-full object-cover"
            loading="eager"
          />
          <a
            href="#home"
            className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
          >
            Heng Liza
          </a>
        </div>
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground sm:block"
          >
            Say hello <ArrowUpRight className="ml-1 inline" size={12} />
          </a>
        </div>
        <button
          className="md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={onMenuToggle}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="flex flex-col gap-5 border-t border-border bg-background px-5 py-6 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onCloseMenu}
              className="font-mono text-xs uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
