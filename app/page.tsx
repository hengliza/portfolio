'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import type { ProjectTab } from '@/data/projects'
import { HomeSection } from '@/components/sections/HomeSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectSection'
import { CertificatesSection } from '@/components/sections/CertificatesSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Page() {
  const [activeTab, setActiveTab] = useState<ProjectTab>('Website')
  const [menuOpen, setMenuOpen] = useState(false)
  const [photo, setPhoto] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [certificateImages, setCertificateImages] = useState<Record<string, string>>({})

  function toggleTheme() { const nextMode = !darkMode; setDarkMode(nextMode); document.documentElement.classList.toggle('dark', nextMode) }
  function handlePhoto(event: React.ChangeEvent<HTMLInputElement>) { const file = event.target.files?.[0]; if (file) setPhoto(URL.createObjectURL(file)) }
  function handleCertificate(event: React.ChangeEvent<HTMLInputElement>, name: string) { const file = event.target.files?.[0]; if (file) setCertificateImages((current) => ({ ...current, [name]: URL.createObjectURL(file) })) }

  return <main className="min-h-screen bg-background text-foreground"><Header menuOpen={menuOpen} darkMode={darkMode} onMenuToggle={() => setMenuOpen((open) => !open)} onThemeToggle={toggleTheme} onCloseMenu={() => setMenuOpen(false)} /><HomeSection photo={photo} onPhotoUpload={handlePhoto} /><AboutSection /><SkillsSection /><ProjectsSection activeTab={activeTab} onTabChange={setActiveTab} /><CertificatesSection images={certificateImages} onUpload={handleCertificate} /><ContactSection /></main>
}
