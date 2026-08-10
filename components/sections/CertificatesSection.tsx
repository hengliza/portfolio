"use client";

import { certificates } from "@/data/certificate";
import { CertificateCard } from "../cards/CertificateCards";
import { CertificateImages, CertificateUploadHandler } from "@/data/certificate";

export function CertificatesSection({
  images,
  onUpload,
}: {
  images: CertificateImages;
  onUpload: CertificateUploadHandler;
}) {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32"
    >
      <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="section-kicker">04 — Certificates & milestones</p>
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
            Upload your certificate images here so your achievements are easy to
            see and remember.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate[0]}
              certificate={certificate}
              image={images[certificate[0]]}
              onUpload={onUpload}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
