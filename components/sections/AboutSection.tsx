"use client";

import { GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="border-y border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[.7fr_1.3fr] md:px-8 md:py-32">
        <p className="section-kicker">01 — About me</p>
        <div>
          <div className="mb-8 flex items-center gap-3 text-primary">
            <GraduationCap size={25} strokeWidth={1.5} />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              Bachelor of Computer Science and Engineering
            </span>
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
            Learning the fundamentals, one{" "}
            <span className="font-serif font-normal italic text-primary">
              project
            </span>{" "}
            at a time.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground">
            I&apos;m interested in the space between ideas and experiences
            understanding how things work, why they matter, and how they can be
            better. With expertise in modern
            JavaScript frameworks, backend systems, and UI design systems, I
            blend technical capabilities with design aesthetics to deliver
            end-to-end digital products.
          </p>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-y-6 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            <span>University student</span>
            <span>Available for internships</span>
          </div>
        </div>
      </div>
    </section>
  );
}
