'use client';

import React, { useState } from 'react';
import { useApp, TabType } from '@/context/AppContext';
import { Language } from '@/lib/translations';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  PhoneCall, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme, activeTab, setActiveTab, t, openModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { key: TabType; label: string }[] = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'support', label: t.nav.support },
    { key: 'business', label: t.nav.business },
    { key: 'contact', label: t.nav.contact },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'ko', label: '한국어' },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#ffffff]/95 dark:bg-[#071324]/95 backdrop-blur-md border-b border-[#D9E2EC] dark:border-[#1e3352] transition-colors">
      {/* Top emergency announcement ticker strip */}
      <div className="bg-[#092B5C] dark:bg-[#040e1c] text-white py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#16A7C8] text-[#001b22] font-semibold text-[11px] shrink-0">
              <PhoneCall className="w-3 h-3" />
              HOTLINE
            </span>
            <span className="truncate">{t.hero.hotlineBanner}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-slate-300">
            <span>광주광역시 (Gwangju)</span>
            <span>·</span>
            <span>062-531-6131</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar: Strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        {/* Zone 1: Brand title wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#092B5C] to-[#0A4DA5] flex items-center justify-center text-white shadow-sm ring-1 ring-white/20">
            <ShieldCheck className="w-6 h-6 text-[#16A7C8]" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#092B5C] dark:text-white whitespace-nowrap leading-tight group-hover:text-[#0A4DA5] dark:group-hover:text-[#38bdf8] transition-colors">
              {lang === 'ko' ? '재한 우즈베키스탄 협회' : lang === 'ru' ? 'Ассоциация узбекистанцев' : lang === 'uz' ? 'O‘zbekistonliklar Uyushmasi' : 'Uzbek Association in Korea'}
            </span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
              {lang === 'ko' ? 'KOREA UZBEK COMMUNITY' : lang === 'uz' ? 'Koreyadagi rasmiy jamoat portali' : 'Official Portal in Republic of Korea'}
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`whitespace-nowrap transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#0A4DA5] dark:text-[#38bdf8] font-semibold'
                    : 'text-[#172B45] dark:text-slate-300 hover:text-[#0A4DA5] dark:hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A4DA5] dark:bg-[#38bdf8] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Controls & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher Segmented Control */}
          <div className="flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-[#0d1e38] border border-[#D9E2EC] dark:border-[#1e3352]">
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 hidden xl:block" />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  lang === l.code
                    ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title={l.label}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button with visual label/pill */}
          <button
            onClick={toggleTheme}
            aria-label={t.common.toggleTheme}
            title={theme === 'dark' ? "Yorug' rejimga o'tish (Light mode)" : "Qorong'u rejimga o'tish (Dark mode)"}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#D9E2EC] dark:border-[#1c385e] bg-slate-50 dark:bg-[#0b1f3b] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#163b6b] transition-all cursor-pointer shadow-xs"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
                <span className="text-[11px] font-semibold text-amber-300 hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-[#092B5C]" />
                <span className="text-[11px] font-semibold text-[#092B5C] hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => openModal('legal')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#092B5C] hover:bg-[#0A4DA5] dark:bg-[#0A4DA5] dark:hover:bg-[#155fc7] rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            {t.nav.getHelp}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-[#D9E2EC] dark:border-[#1e3352] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#071324] border-b border-[#D9E2EC] dark:border-[#1e3352] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors text-left ${
                    isActive
                      ? 'bg-blue-50 dark:bg-[#092B5C]/40 text-[#0A4DA5] dark:text-[#38bdf8]'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#0A4DA5] dark:bg-[#38bdf8]" />}
                </button>
              );
            })}

            <div className="pt-3 mt-1 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <div className="flex items-center justify-between px-2 text-xs text-slate-600 dark:text-slate-300">
                <span className="font-medium">Mavzu / Тема (Theme):</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D9E2EC] dark:border-[#1c385e] bg-slate-100 dark:bg-[#0b1f3b] text-xs font-semibold"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Light (Yorug‘)</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-[#092B5C]" />
                      <span>Dark (Qorong‘u)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between px-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{t.common.switchLang}</span>
                <div className="flex items-center gap-1">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`px-2.5 py-1 text-xs font-bold rounded-md ${
                        lang === l.code
                          ? 'bg-[#092B5C] text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal('legal');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#092B5C] text-white font-semibold rounded-lg text-sm shadow-xs"
              >
                <PhoneCall className="w-4 h-4" />
                {t.nav.getHelp}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
