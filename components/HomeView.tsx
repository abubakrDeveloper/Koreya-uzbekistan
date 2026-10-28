'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { 
  Building2, 
  Users, 
  FileCheck2, 
  Calendar, 
  ArrowRight, 
  PhoneCall, 
  FileText, 
  Briefcase, 
  Globe2, 
  ChevronRight,
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

export default function HomeView() {
  const { t, setActiveTab, openModal, showToast } = useApp();
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopy = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    showToast(`${phone} ${t.common.copied}`);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const announcements = [
    {
      date: '2025.10.15',
      category: 'Visa & Immigration',
      title: 'E-7-4 balli tizimida yangi imtiyozlar va ariza topshirish tartibi',
      titleRu: 'Новые преференции и регламент подачи на балльную визу E-7-4 в 2025 году',
      titleEn: 'Updated 2025 Guidelines & Point Scoring for E-7-4 Skilled Worker Visa',
      titleKo: '2025년 숙련기능인력(E-7-4) 점수제 비자 신청 요건 및 가점 안내',
      location: 'Korea Ministry of Justice',
    },
    {
      date: '2025.09.28',
      category: 'Documentation',
      title: 'Haydovchilik guvohnomasini Koreya guvohnomasiga almashtirish jadvali',
      titleRu: 'График выездной консультации по обмену водительских удостоверений',
      titleEn: 'Schedule for Consular Authentication of Uzbek Driver\'s Licenses',
      titleKo: '우즈베키스탄 운전면허증 국내 면허 교환 출장 영사 인증 일정',
      location: 'Gwangju Office',
    },
    {
      date: '2025.09.01',
      category: 'Bilateral Forum',
      title: 'O‘zbekiston va Koreya tadbirkorlari 4-an’anaviy B2B forumi natijalari',
      titleRu: 'Итоги IV двустороннего делового B2B форума предпринимателей',
      titleEn: 'Outcomes of the 4th Uzbekistan-Korea Bilateral Business Forum',
      titleKo: '제4회 한-우즈베키스탄 비즈니스 B2B 포럼 개최 결과 보고',
      location: 'Seoul / Gwangju',
    },
  ];

  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#092B5C] via-[#092B5C] to-[#0A4DA5] text-white p-6 sm:p-10 lg:p-14 shadow-xl border border-white/10">
        {/* Subtle geometric pattern backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Typography */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed clean metadata kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#16A7C8] font-semibold tracking-wide">
              <span>{t.hero.badge}</span>
              <span aria-hidden="true">·</span>
              <span>Est. August 2021</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              {t.hero.title}{' '}
              <span className="text-[#5dd5f7] block sm:inline">{t.hero.titleHighlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              {t.hero.description}
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => openModal('legal')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-[#092B5C] bg-[#16A7C8] hover:bg-[#5dd5f7] rounded-lg shadow-md transition-all whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                {t.hero.primaryCta}
              </button>

              <button
                onClick={() => setActiveTab('support')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 rounded-lg border border-white/20 transition-all whitespace-nowrap backdrop-blur-xs"
              >
                <FileText className="w-4 h-4" />
                {t.hero.secondaryCta}
              </button>

              <button
                onClick={() => setActiveTab('business')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-all whitespace-nowrap"
              >
                <Briefcase className="w-4 h-4" />
                {t.hero.businessCta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro Trust Proof */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#16A7C8]" />
                100% Rasmiy notijorat tashkilot
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#16A7C8]" />
                Koreya va O‘zbekiston o‘rtasidagi rasmiy ko‘prik
              </span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Hero Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20 aspect-video lg:aspect-[4/3] bg-slate-800">
              <Image
                src="/images/hero_uzbek_korea.jpg"
                alt="Uzbek-Korean Community Gathering in Gwangju"
                fill
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092B5C]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs text-white/90 font-medium flex items-center justify-between">
                <span>Gwangju Uzbekistan Community Hall</span>
                <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded text-white">2021 – 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantitative Rigor: Statistics Strip */}
      <section className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
          {/* Stat 1 */}
          <div className="sm:px-4 first:pl-0 space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <Calendar className="w-4 h-4 text-[#0A4DA5] dark:text-[#38bdf8]" />
              <span>{t.stats.foundedTitle}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#092B5C] dark:text-white tabular-nums">
              {t.stats.foundedValue}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {t.stats.foundedDesc}
            </p>
          </div>

          {/* Stat 2 */}
          <div className="pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <Users className="w-4 h-4 text-[#0A4DA5] dark:text-[#38bdf8]" />
              <span>{t.stats.membersTitle}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#092B5C] dark:text-white tabular-nums">
              {t.stats.membersValue}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {t.stats.membersDesc}
            </p>
          </div>

          {/* Stat 3 */}
          <div className="pt-4 sm:pt-0 sm:px-4 space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <Globe2 className="w-4 h-4 text-[#0A4DA5] dark:text-[#38bdf8]" />
              <span>{t.stats.communityTitle}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#092B5C] dark:text-white tabular-nums">
              {t.stats.communityValue}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {t.stats.communityDesc}
            </p>
          </div>

          {/* Stat 4 */}
          <div className="pt-4 sm:pt-0 sm:px-4 last:pr-0 space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <FileCheck2 className="w-4 h-4 text-[#0A4DA5] dark:text-[#38bdf8]" />
              <span>{t.stats.memorandumsTitle}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#092B5C] dark:text-white tabular-nums">
              {t.stats.memorandumsValue}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {t.stats.memorandumsDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Core Directions Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#092B5C] dark:text-white">
              {t.directions.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              {t.directions.subtitle}
            </p>
          </div>
          <button
            onClick={() => setActiveTab('support')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A4DA5] dark:text-[#38bdf8] hover:underline whitespace-nowrap self-start md:self-auto"
          >
            <span>{t.common.learnMore}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.directions.items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 hover:border-[#0A4DA5] dark:hover:border-[#38bdf8] transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#0A4DA5] dark:text-[#38bdf8]">
                    {item.id === 'support' ? 'Adaptation' : item.id === 'legal' ? 'Legal & Docs' : item.id === 'culture' ? 'Unity' : 'Bilateral'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#16A7C8] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (item.id === 'business') {
                      setActiveTab('business');
                    } else if (item.id === 'legal' || item.id === 'support') {
                      setActiveTab('support');
                    } else {
                      setActiveTab('about');
                    }
                  }}
                  className="text-xs font-semibold text-[#092B5C] dark:text-[#38bdf8] hover:text-[#0A4DA5] inline-flex items-center gap-1.5"
                >
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => openModal(item.id === 'legal' ? 'legal' : item.id === 'support' ? 'living' : 'membership')}
                  className="px-3 py-1.5 text-xs font-medium text-white bg-[#092B5C] hover:bg-[#0A4DA5] rounded-md transition-colors"
                >
                  {t.common.applyNow}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Phone & Direct Assistance Callout */}
      <section className="bg-gradient-to-r from-slate-900 via-[#092B5C] to-slate-900 text-white rounded-xl p-6 sm:p-8 border border-white/10 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#5dd5f7]">
              <PhoneCall className="w-4 h-4" />
              <span>{t.common.emergencyHotline}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Koreyada huquqiy yoki konsullik shoshilinch yordami kerakmi?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Uyushma mutaxassislari haftaning barcha ish kunlarida bepul dastlabki konsultatsiya va yordam ko‘rsatadilar.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            {/* Phone Button 1 */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/10 border border-white/15 backdrop-blur-xs">
              <div>
                <span className="text-[11px] text-slate-300 block">O‘zbek tili (Uzbek):</span>
                <span className="font-mono text-base font-bold text-white tracking-wider">010-8495-0027</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopy('010-8495-0027')}
                  className="p-2 rounded bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
                  title={t.common.copyNumber}
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <a
                  href="tel:01084950027"
                  className="px-3 py-1.5 text-xs font-bold bg-[#16A7C8] hover:bg-[#5dd5f7] text-[#001b22] rounded transition-colors whitespace-nowrap"
                >
                  {t.common.callNow}
                </a>
              </div>
            </div>

            {/* Phone Button 2 */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/10 border border-white/15 backdrop-blur-xs">
              <div>
                <span className="text-[11px] text-slate-300 block">Русский / 한국어 (Ru/Ko):</span>
                <span className="font-mono text-base font-bold text-white tracking-wider">010-8239-1141</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopy('010-8239-1141')}
                  className="p-2 rounded bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
                  title={t.common.copyNumber}
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <a
                  href="tel:01082391141"
                  className="px-3 py-1.5 text-xs font-bold bg-[#16A7C8] hover:bg-[#5dd5f7] text-[#001b22] rounded transition-colors whitespace-nowrap"
                >
                  {t.common.callNow}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Bilateral Bulletins / Announcements */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#092B5C] dark:text-white">
            {t.common.officialNotice}
          </h2>
          <button
            onClick={() => setActiveTab('support')}
            className="text-xs font-semibold text-[#0A4DA5] dark:text-[#38bdf8] hover:underline"
          >
            {t.common.viewAll}
          </button>
        </div>

        <div className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] divide-y divide-[#D9E2EC] dark:divide-[#1e3352] overflow-hidden shadow-xs">
          {announcements.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer"
              onClick={() => setActiveTab('support')}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono">{item.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#0A4DA5] dark:text-[#38bdf8] font-medium">{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-[#0A4DA5] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="shrink-0 flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white">
                <span>{t.common.learnMore}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
