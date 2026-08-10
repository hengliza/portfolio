"use client";

import { projects, ProjectTab } from "@/data/projects";
import { ProjectCard } from "../cards/ProjectCard";


export function ProjectsSection({
  activeTab,
  onTabChange,
}: {
  activeTab: ProjectTab;
  onTabChange: (tab: ProjectTab) => void;
}) {
  return (
    <section id="projects" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">03 — Learning projects</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Small ideas,{" "}
              <span className="font-serif font-normal italic text-primary">
                real practice.
              </span>
            </h2>
          </div>
          <div
            className="flex border-b border-border"
            role="tablist"
            aria-label="Project type"
          >
            {(Object.keys(projects) as ProjectTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                role="tab"
                aria-selected={activeTab === tab}
                className={`px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${activeTab === tab ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {projects[activeTab].map((project, index) => (
            <ProjectCard
              key={project[1]}
              project={project}
              tab={activeTab}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
