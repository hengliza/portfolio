"use client";

import { MoveUpRight } from "lucide-react";
import { pageCopy } from "../../data/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <p className="section-kicker text-primary-foreground/70">
          05 — Contact
        </p>
        <div className="mt-8 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-balance text-5xl font-semibold leading-[.92] tracking-[-0.06em] md:text-7xl">
            Have an opportunity or a good{" "}
            <em className="font-serif font-normal">question?</em>
          </h2>
          <a
            href={`mailto:${pageCopy.email}`}
            className="flex shrink-0 items-center gap-3 border-b border-primary-foreground pb-2 font-mono text-xs uppercase tracking-[0.16em]"
          >
            {pageCopy.email} <MoveUpRight size={15} />
          </a>
        </div>
        <div className="mt-24 flex justify-between border-t border-primary-foreground/25 pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground/70">
          <span>© {pageCopy.year}Heng Liza</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </section>
  );
}
