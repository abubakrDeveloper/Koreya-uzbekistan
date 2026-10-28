'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { 
  History, 
  Target, 
  Award, 
  ShieldCheck, 
  HandHeart, 
  Scale, 
  Eye, 
  CheckCircle, 
  Building, 
  Users2,
  FileCheck,
  MapPin
} from 'lucide-react';

export default function AboutView() {
  const { t, openModal } = useApp();

  const valueIcons = [
    <Eye key="1" className="w-5 h-5 text-[#16A7C8]" />,
    <CheckCircle key="2" className="w-5 h-5 text-[#16A7C8]" />,
    <ShieldCheck key="3" className="w-5 h-5 text-[#16A7C8]" />,
    <HandHeart key="4" className="w-5 h-5 text-[#16A7C8]" />,
    <Scale key="5" className="w-5 h-5 text-[#16A7C8]" />,
    <Award key="6" className="w-5 h-5 text-[#16A7C8]" />,
  ];

  const memorandums = [
    { title: 'Gwangju Metropolitan City Administration', note: 'Foreign Resident Integration & Community Safety Support Agreement' },
    { title: 'Chonnam National University & Honam University', note: 'Academic Assistance, Tuition Guidance & Student Visa Liaison' },
    { title: 'Gwangsan Police Station Foreign Affairs Division', note: 'Crime Prevention, Legal Literacy & Labor Security Partnership' },
    { title: 'Embassy of the Republic of Uzbekistan in Seoul', note: 'Consular Assistance, Mobile Passport Desks & Civic Registration' },
    { title: 'Korea Support Center for Foreign Workers (Gwangju)', note: 'Labor Law Protection, Wage Mediation & Industrial Accident Relief' },
    { title: 'Gwangju Chamber of Commerce and Industry', note: 'B2B Trade Matchmaking, Export Facilitation & Business Directory' },
  ];

  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Page Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A4DA5] dark:text-[#38bdf8] uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Institutional Profile</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#092B5C] dark:text-white">
          {t.about.heroTitle}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.about.heroSubtitle}
        </p>
      </section>

      {/* History and Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <History className="w-4 h-4 text-[#0A4DA5] dark:text-[#38bdf8]" />
            <span>Founded in August 2021 · Gwangju City</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#092B5C] dark:text-white">
            {t.about.historyTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {t.about.historyP1}
          </p>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {t.about.historyP2}
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#0A4DA5]" />
              <span>Headquartered in Gwangju, Korea</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Users2 className="w-4 h-4 text-[#0A4DA5]" />
              <span>750 Verified Members</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5 aspect-[4/3] bg-slate-800">
            <Image
              src="/images/about_community.jpg"
              alt="Uzbek Association in Korea General Assembly in Gwangju"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-xs text-white font-medium">
              <span>Gwangju Uzbekistan Community Association Meeting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Box */}
      <section className="bg-gradient-to-br from-[#092B5C] to-[#0A4DA5] text-white rounded-xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5dd5f7] tracking-wider uppercase">
            <Target className="w-4 h-4" />
            <span>{t.about.missionTitle}</span>
          </div>
          <p className="text-lg sm:text-xl font-medium leading-relaxed text-slate-100">
            &quot;{t.about.missionP}&quot;
          </p>
        </div>
      </section>

      {/* 6 Core Values Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#092B5C] dark:text-white">
            {t.about.valuesTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.about.valuesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.about.values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E8F7FA] dark:bg-[#00313d] flex items-center justify-center">
                {valueIcons[idx] || <ShieldCheck className="w-5 h-5 text-[#16A7C8]" />}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#092B5C] dark:text-white">
            {t.about.structureTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.about.structureSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.departments.map((dept, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-5 space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#0A4DA5] dark:text-[#38bdf8]">
                  DEPT 0{idx + 1}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {dept.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {dept.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
                Gwangju Secretariat
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 14 Official Bilateral Memorandums */}
      <section className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 sm:p-8 space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A4DA5] dark:text-[#38bdf8] mb-1">
            <FileCheck className="w-4 h-4" />
            <span>Official Memorandums of Understanding (MOU)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#092B5C] dark:text-white">
            {t.about.partnersTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            {t.about.partnersSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {memorandums.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-slate-50 dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] space-y-1.5"
            >
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono">MOU #{idx + 1}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Active</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Rasmiy ro‘yxatdan o‘tgan jamoat tashkiloti sifatida memorandumlar asosida faoliyat yuritamiz.
          </p>
          <button
            onClick={() => openModal('membership')}
            className="px-5 py-2.5 bg-[#092B5C] hover:bg-[#0A4DA5] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            {t.hero.secondaryCta}
          </button>
        </div>
      </section>
    </div>
  );
}
