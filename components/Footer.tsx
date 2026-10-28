'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, Phone, MapPin, Printer, ExternalLink, Globe } from 'lucide-react';

export default function Footer() {
  const { t, setActiveTab, lang, setLang } = useApp();

  return (
    <footer className="mt-20 border-t border-[#D9E2EC] dark:border-[#1e3352] bg-white dark:bg-[#071324] text-slate-700 dark:text-slate-300 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#092B5C] to-[#0A4DA5] flex items-center justify-center text-white shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#16A7C8]" />
              </div>
              <span className="text-base font-bold text-[#092B5C] dark:text-white tracking-tight">
                {t.common.orgName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              {t.common.orgSubtitle}. {t.footer.motto}.
            </p>

            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0A4DA5] shrink-0" />
                <span>광주광역시 광산구 산정동 914-16, 1층 (우: 62391)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0A4DA5] shrink-0" />
                <span>Tel: 062-531-6131 · Fax: 062-531-6130</span>
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('home')}
                  className="hover:text-[#0A4DA5] dark:hover:text-white transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className="hover:text-[#0A4DA5] dark:hover:text-white transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('support')}
                  className="hover:text-[#0A4DA5] dark:hover:text-white transition-colors"
                >
                  {t.nav.support}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('business')}
                  className="hover:text-[#0A4DA5] dark:hover:text-white transition-colors"
                >
                  {t.nav.business}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="hover:text-[#0A4DA5] dark:hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Hotlines & Social */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer.supportLines}
            </h4>
            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <p>
                <strong className="text-slate-900 dark:text-slate-200">UZ:</strong> 010-8495-0027, 010-2989-8641
              </p>
              <p>
                <strong className="text-slate-900 dark:text-slate-200">RU / KO:</strong> 010-8239-1141
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <a
                href="https://t.me/koruzuyushma"
                target="_blank"
                rel="noreferrer noopener"
                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 inline-flex items-center gap-1 font-medium transition-colors"
              >
                <span>Telegram UZ</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://t.me/auzkr"
                target="_blank"
                rel="noreferrer noopener"
                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 inline-flex items-center gap-1 font-medium transition-colors"
              >
                <span>Telegram RU</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://instagram.com/koruzuyushma"
                target="_blank"
                rel="noreferrer noopener"
                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 inline-flex items-center gap-1 font-medium transition-colors"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Civic Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2021 – 2025 {t.common.orgName}. {t.footer.allRightsReserved}</p>
          <p className="text-center sm:text-right">{t.footer.legalNote}</p>
        </div>
      </div>
    </footer>
  );
}
