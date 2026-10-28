'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { 
  Briefcase, 
  Handshake, 
  Layers, 
  GraduationCap, 
  Calendar, 
  AlertTriangle, 
  Building2, 
  Phone, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  FileCheck2
} from 'lucide-react';

export default function BusinessView() {
  const { t, openModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredDirectory = t.business.directory.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Page Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A4DA5] dark:text-[#38bdf8] uppercase tracking-wider">
          <Briefcase className="w-4 h-4" />
          <span>Bilateral Commercial Network</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#092B5C] dark:text-white">
          {t.business.heroTitle}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.business.heroSubtitle}
        </p>
      </section>

      {/* Business Club Showcase Card with Generated Image */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0d1e38] rounded-2xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 sm:p-8 shadow-xs">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0A4DA5] dark:text-[#38bdf8]">
            <Handshake className="w-4 h-4" />
            <span>Koreya – O‘zbekiston Tadbirkorlik Hamkorligi</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#092B5C] dark:text-white">
            {t.business.clubTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.business.clubDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {t.business.features.map((feat, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-[#071324] border border-slate-200 dark:border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  {feat.title}
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => openModal('membership')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#092B5C] hover:bg-[#0A4DA5] text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
            >
              <span>{t.business.joinClubCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-800">
            <Image
              src="/images/business_b2b.jpg"
              alt="Uzbekistan-Korea B2B Roundtable & Business Forum"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-xs text-white font-medium">
              <span>Bilateral Uzbek-Korean B2B Roundtable</span>
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day Initial Plan Structured Roadmap */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0A4DA5] dark:text-[#38bdf8] uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>Structured Implementation Timeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#092B5C] dark:text-white">
            {t.business.roadmapTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.business.roadmapSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.business.roadmap.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 space-y-4 shadow-xs relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0A4DA5] dark:text-[#38bdf8] bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                    {step.phase}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {step.timeframe}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.desc}
                </p>

                <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800">
                  {step.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#16A7C8] mt-1.5 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
                Bosqich yakunida rasmiy hisobot
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accredited Business Catalog Directory */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#092B5C] dark:text-white">
              {t.business.catalogTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t.business.catalogSubtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-[#071324] rounded-lg border border-[#D9E2EC] dark:border-[#1e3352] overflow-x-auto self-start sm:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.business.catalogCategories.all}
            </button>
            <button
              onClick={() => setSelectedCategory('logistics')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'logistics'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.business.catalogCategories.logistics}
            </button>
            <button
              onClick={() => setSelectedCategory('gastronomy')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'gastronomy'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.business.catalogCategories.gastronomy}
            </button>
            <button
              onClick={() => setSelectedCategory('legal')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'legal'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.business.catalogCategories.legal}
            </button>
            <button
              onClick={() => setSelectedCategory('tech')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'tech'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.business.catalogCategories.tech}
            </button>
            <button
              onClick={() => setSelectedCategory('trade')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'trade'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.business.catalogCategories.trade}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDirectory.map((entry, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-[#0A4DA5] dark:text-[#38bdf8]">
                    {entry.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{entry.location}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {entry.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {entry.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1 font-mono">
                  <Phone className="w-3.5 h-3.5" />
                  {entry.contact}
                </span>
                <button
                  onClick={() => openModal('membership')}
                  className="font-semibold text-[#0A4DA5] dark:text-[#38bdf8] hover:underline"
                >
                  Hamkorlik
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mandatory Investment Disclaimer Banner */}
      <section className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-xl p-6 sm:p-8 space-y-2">
        <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>{t.business.disclaimerTitle}</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-900/80 dark:text-amber-200/90 leading-relaxed">
          {t.business.disclaimerText}
        </p>
      </section>
    </div>
  );
}
