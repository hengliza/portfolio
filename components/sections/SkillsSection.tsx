"use client";

import { SkillRow } from "../cards/SkillRow";

export const skills = [
  "HTML & CSS",
  "Tailwind CSS",
  "JavaScript & TypeScript",
  "React / Next.js",
  "Spring Boot",
  "Django",
  "PostgreSQL & MySQL",
  "RESTful APIs",
  "UI/UX design",
  "Git & GitHub",
  "Problem solving",
  "Time management",
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32"
    >
      <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
        <p className="section-kicker">02 — Skills I&apos;m building</p>
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Progress over{" "}
            <span className="font-serif font-normal italic text-primary">
              perfection.
            </span>
          </h2>
          <div className="mt-12 grid border-t border-border sm:grid-cols-2">
            {skills.map((skill, index) => (
              <SkillRow key={skill} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
