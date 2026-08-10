"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import type { ProjectTab } from "@/data/projects";
import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Page() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("Website");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header
        menuOpen={menuOpen}
        darkMode={darkMode}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onThemeToggle={toggleTheme}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection activeTab={activeTab} onTabChange={setActiveTab} />
      <CertificatesSection/>
      <ContactSection />
    </main>
  );
}
