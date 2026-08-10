"use client";

import Image from "next/image";

export function PhotoCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm animate-fade-up md:ml-auto">
      <div className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border bg-secondary">
          <Image
            width={400}
            height={500}
            priority
            quality={100}
            src="/Images/profile.jpg"
            alt="Heng Liza profile picture"
            className="h-full w-full object-cover"
          />
      </div>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        Computer science and Engineering student
      </p>
    </div>
  );
}
