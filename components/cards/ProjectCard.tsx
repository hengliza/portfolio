"use client";

import { Project } from "@/data/projects";
import { BookOpen } from "lucide-react";
import Image from "next/image";

export function ProjectCard({
  project,
  tab,
  index,
}: {
  project: Project;
  tab: string;
  index: number;
}) {
  const [
    number,
    title,
    type,
    year,
    link,
    projectSourceLink,
    icon,
    projectPicture,
  ] = project;
  return (
    <article className="group border border-border bg-background transition-transform duration-300 hover:-translate-y-2">
      <div
        className={`project-art project-tone-${index} group relative overflow-hidden bg-cover`}
        style={{
          backgroundImage: `url(${projectPicture})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">
          {number} / {tab}
        </span>

        {/* Project info */}

        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary-foreground/70">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Live Demo ↗
            </a>
          </span>
          <button>
            <a
              href={projectSourceLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={30}
                height={30}
                src={icon}
                alt={`${title} icon`}
                className="text-primary-foreground/80 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
              />
            </a>
          </button>
        </div>
      </div>
      <div className="flex items-end justify-between p-5">
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{type}</p>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          {year}
        </span>
      </div>
    </article>
  );
}
