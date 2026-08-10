"use client";

type IconProps = {
  className?: string
  size?: number
  strokeWidth?: number
}

function Check({ className, size = 24, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12.5 9.5 17 19 7.5" />
    </svg>
  )
}

export function SkillRow({ skill, index }: { skill: string; index: number }) {
  return (
    <div className="flex items-center gap-4 border-b border-border py-5 text-base">
      <span className="font-mono text-[10px] text-primary">0{index + 1}</span>
      {skill}
      <Check size={14} className="ml-auto text-muted-foreground" />
    </div>
  );
}
