"use client";

import { Certificate } from "@/data/certificate";
import Image from "next/image";
import { ImagePlus, Sparkles } from "lucide-react";


export function CertificateCard({
  certificate,
}: {
  certificate: Certificate;
}) {
  const [name, org, year, certificateImage] = certificate;
  return (
    <article className="group overflow-hidden border border-border bg-card">
      <div className="relative aspect-[4/3] bg-secondary">
        {certificateImage ? (
          <Image
            width={400}
            height={300}
            priority
            quality={100}
            src={certificateImage}
            alt={`${name} certificate`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <ImagePlus size={22} />
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              Certificate image
            </p>
          </div>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 border-t border-border p-4">
        <div>
          <h3 className="text-sm font-medium leading-5">{name}</h3>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            {org}
          </p>
        </div>
        <span className="font-mono text-[10px] text-primary">
          {year} <Sparkles className="ml-1 inline" size={11} />
        </span>
      </div>
    </article>
  );
}
