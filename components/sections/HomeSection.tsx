"use client";

import { PhotoCard } from "../cards/PhotoCard";
import { ArrowDown } from "lucide-react";

export function HomeSection() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-5 pb-20 pt-32 md:grid-cols-[1.1fr_.9fr] md:px-8 md:pt-24"
    >
      <div className="animate-fade-up">
        <h1 className="max-w-2xl text-balance text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.08em]">
          Design with{" "}
          <span className="font-serif font-normal italic text-primary">
            curiosity,
          </span>{" "}
          build with{" "}
          <span className="font-serif font-normal italic text-primary">
            purpose.
          </span>
        </h1>
        <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground">
          Hi, I&apos;m Liza. I&apos;m 4th year student of Computer Science and
          Engineering at ACLEDA University. I&apos;m passionate about creating
          meaningful digital experiences and turning my knowledge into practical
          solutions.
        </p>
        <a
          href="#about"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-background transition-transform hover:-translate-y-1"
        >
          Get to know me <ArrowDown size={14} />
        </a>
      </div>
      <PhotoCard />
    </section>
  );
}
