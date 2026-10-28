'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { 
  MapPin, 
  Phone, 
  Printer, 
  Clock, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  Building2, 
  Compass,
  PhoneCall,
  Share2
} from 'lucide-react';

export default function ContactView() {
  const { t, openModal, showToast } = useApp();
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    showToast(`${label} ${t.common.copied}`);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Page Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A4DA5] dark:text-[#38bdf8] uppercase tracking-wider">
          <MapPin className="w-4 h-4" />
          <span>Official Contacts & Secretariat</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#092B5C] dark:text-white">
          {t.contact.heroTitle}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.contact.heroSubtitle}
        </p>
      </section>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Official Coordinates & Direct Helplines */}
        <div className="lg:col-span-7 space-y-6">
          {/* Official Address Card */}
          <div className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 shadow-xs space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#0A4DA5] dark:text-[#38bdf8] uppercase">
                  {t.contact.addressTitle}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {t.contact.addressValue}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300 font-mono">
                  {t.contact.addressSub}
                </p>
              </div>
              <button
                onClick={() => handleCopy(t.contact.addressSub, 'Manzil')}
                className="p-2.5 rounded-lg border border-[#D9E2EC] dark:border-[#1e3352] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                title={t.common.copyNumber}
              >
                {copiedText === t.contact.addressSub ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
              <Compass className="w-4 h-4 text-[#16A7C8] shrink-0 mt-0.5" />
              <span><strong>{t.contact.directions}:</strong> {t.contact.directionsDesc}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <Clock className="w-4 h-4 text-[#16A7C8] shrink-0" />
              <span><strong>{t.contact.hoursTitle}:</strong> {t.contact.hoursValue}</span>
            </div>
          </div>

          {/* General Telephone & Fax */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-5 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-semibold">{t.contact.generalPhoneTitle}</span>
                <Phone className="w-4 h-4 text-[#0A4DA5]" />
              </div>
              <div className="text-xl font-bold font-mono text-[#092B5C] dark:text-white">
                {t.contact.generalPhoneValue}
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`tel:${t.contact.generalPhoneValue.replace(/-/g, '')}`}
                  className="px-3 py-1 bg-[#092B5C] hover:bg-[#0A4DA5] text-white text-xs font-semibold rounded"
                >
                  {t.common.callNow}
                </a>
                <button
                  onClick={() => handleCopy(t.contact.generalPhoneValue, 'Telefon')}
                  className="p-1 rounded text-slate-400 hover:text-slate-600"
                  title="Copy"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-5 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-semibold">Rasmiy Faks (Fax)</span>
                <Printer className="w-4 h-4 text-[#0A4DA5]" />
              </div>
              <div className="text-xl font-bold font-mono text-[#092B5C] dark:text-white">
                {t.contact.faxValue}
              </div>
              <p className="text-xs text-slate-400 pt-1">
                24/7 hujjatlar qabuli
              </p>
            </div>
          </div>

          {/* Language-Specific Direct Support Phones */}
          <div className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 shadow-xs space-y-5">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {t.contact.langPhonesTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Mutaxassislarimiz bilan ona tilingizda to‘g‘ridan-to‘g‘ri bog‘laning
              </p>
            </div>

            {/* Uzbek Phone Group */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {t.contact.uzbekPhoneLabel}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.contact.uzbekPhones.map((ph, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[11px] text-slate-500 block">Operator {idx + 1}</span>
                      <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">{ph}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleCopy(ph, 'Telefon')}
                        className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500"
                        title={t.common.copyNumber}
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={`tel:${ph.replace(/-/g, '')}`}
                        className="px-2.5 py-1 text-xs font-bold bg-[#16A7C8] text-[#001b22] rounded hover:bg-[#5dd5f7]"
                      >
                        {t.common.callNow}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Russian & Korean Phone Group */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {t.contact.ruKoPhoneLabel}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.contact.ruKoPhones.map((ph, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[11px] text-slate-500 block">RU / KO Desk</span>
                      <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">{ph}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleCopy(ph, 'Telefon')}
                        className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500"
                        title={t.common.copyNumber}
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={`tel:${ph.replace(/-/g, '')}`}
                        className="px-2.5 py-1 text-xs font-bold bg-[#16A7C8] text-[#001b22] rounded hover:bg-[#5dd5f7]"
                      >
                        {t.common.callNow}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Map Card & Social Media Links */}
        <div className="lg:col-span-5 space-y-6">
          {/* Visual Interactive Map / Location Preview */}
          <div className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] overflow-hidden shadow-xs">
            {/* Map Canvas Representation */}
            <div className="h-56 bg-slate-100 dark:bg-slate-800 relative flex items-center justify-center p-4 overflow-hidden">
              {/* Stylized Map Grid Lines */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#092b5c_1px,transparent_1px),linear-gradient(to_bottom,#092b5c_1px,transparent_1px)] [background-size:24px_24px]" />
              
              <div className="relative z-10 text-center space-y-2 p-4 bg-white/95 dark:bg-[#071324]/95 rounded-xl shadow-lg border border-[#D9E2EC] dark:border-[#1e3352] max-w-xs">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#092B5C] text-[#16A7C8] flex items-center justify-center shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  Gwangju Metropolitan City
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                  광주광역시 광산구 산정동 914-16, 1층
                </p>
                <a
                  href="https://map.naver.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0A4DA5] dark:text-[#38bdf8] hover:underline"
                >
                  <span>Naver Map or KakaoMap da ko‘rish</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-[#071324] border-t border-[#D9E2EC] dark:border-[#1e3352] text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <p><strong>Gwangju Songjeong Station</strong> dan 12 daqiqa</p>
              <p>Avtobus yo‘nalishlari: Songjeong 19, Cheomdan 20, Bongseon 37</p>
            </div>
          </div>

          {/* Official Social Media Channels */}
          <div className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 shadow-xs space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {t.contact.socialTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.contact.socialSubtitle}
              </p>
            </div>

            <div className="space-y-2.5">
              {/* Telegram Uzbek */}
              <a
                href="https://t.me/koruzuyushma"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between p-3 rounded-lg bg-blue-50/60 dark:bg-[#092B5C]/30 border border-blue-200/60 dark:border-blue-900/40 hover:bg-blue-100/60 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#229ED9] text-white flex items-center justify-center font-bold text-xs">
                    TG
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      {t.contact.telegramUz}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">t.me/koruzuyushma</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>

              {/* Telegram Russian */}
              <a
                href="https://t.me/auzkr"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between p-3 rounded-lg bg-blue-50/60 dark:bg-[#092B5C]/30 border border-blue-200/60 dark:border-blue-900/40 hover:bg-blue-100/60 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#229ED9] text-white flex items-center justify-center font-bold text-xs">
                    TG
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      {t.contact.telegramRu}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">t.me/auzkr</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/koruzuyushma"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between p-3 rounded-lg bg-pink-50/60 dark:bg-pink-950/20 border border-pink-200/60 dark:border-pink-900/40 hover:bg-pink-100/60 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center font-bold text-xs">
                    IG
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      {t.contact.instagram}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">@koruzuyushma</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-[#D9E2EC] dark:border-[#1e3352] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs">
                    FB
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      {t.contact.facebook}
                    </span>
                    <span className="text-[11px] text-slate-500">Official Facebook Page</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Inquiry Direct Button */}
          <div className="p-6 bg-gradient-to-r from-[#092B5C] to-[#0A4DA5] text-white rounded-xl shadow-md space-y-3">
            <h4 className="text-sm font-bold tracking-tight">
              {t.contact.quickInquiryTitle}
            </h4>
            <p className="text-xs text-slate-200 leading-relaxed">
              {t.contact.quickInquiryDesc}
            </p>
            <button
              onClick={() => openModal('other')}
              className="w-full py-2.5 px-4 text-xs font-bold text-[#092B5C] bg-[#16A7C8] hover:bg-[#5dd5f7] rounded-lg transition-colors shadow-xs"
            >
              {t.common.applyNow}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
