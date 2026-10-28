'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { 
  FileCheck, 
  Scale, 
  Home, 
  Search, 
  ChevronDown, 
  CheckCircle2, 
  Phone, 
  User, 
  MapPin, 
  FileText, 
  Send,
  HelpCircle,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function SupportView() {
  const { t, openModal, showToast } = useApp();

  // FAQ state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // In-page form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('legal');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  // Filter FAQs
  const filteredFaqs = useMemo(() => {
    return t.support.faqs.filter((faq) => {
      const matchesCategory =
        selectedFaqCategory === 'all' || faq.category === selectedFaqCategory;
      const matchesQuery =
        !searchQuery.trim() ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [t.support.faqs, selectedFaqCategory, searchQuery]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      showToast('Iltimos, barcha majburiy maydonlarni to‘ldiring');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `UZKR-${Date.now().toString().slice(-6)}`;
      const newEntry = {
        id: generatedId,
        name: name.trim(),
        phone: phone.trim(),
        city: city.trim() || 'Gwangju',
        category,
        message: message.trim(),
        timestamp: new Date().toISOString(),
      };

      try {
        const stored = JSON.parse(localStorage.getItem('uzkr_inquiries') || '[]');
        stored.unshift(newEntry);
        localStorage.setItem('uzkr_inquiries', JSON.stringify(stored));
      } catch {
        // ignore
      }

      setIsSubmitting(false);
      setFormSuccess(generatedId);
      setName('');
      setPhone('');
      setCity('');
      setMessage('');
      showToast(t.support.formFields.successMsg);
    }, 600);
  };

  const getAreaIcon = (id: string) => {
    switch (id) {
      case 'living':
        return <Home className="w-5 h-5 text-[#16A7C8]" />;
      case 'docs':
        return <FileCheck className="w-5 h-5 text-[#16A7C8]" />;
      case 'legal':
      default:
        return <Scale className="w-5 h-5 text-[#16A7C8]" />;
    }
  };

  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Page Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A4DA5] dark:text-[#38bdf8] uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>Official Civic Services</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#092B5C] dark:text-white">
          {t.support.heroTitle}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.support.heroSubtitle}
        </p>
      </section>

      {/* Support Consultation Photo & Highlight Box */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0d1e38] rounded-2xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 sm:p-8 shadow-xs">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold text-[#0A4DA5] dark:text-[#38bdf8] uppercase tracking-wide">
            Konsullik va huquqiy yordam markazi
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-[#092B5C] dark:text-white">
            Janubiy Koreyadagi har bir hamyurtimiz uchun xavfsiz va qonuniy ko‘mak
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Bizning konsultantlarimiz va advokatlarimiz hujjatlarni apostil qilish, Koreyada haydovchilik guvohnomasini almashtirish, oylik maosh kechikishi holatlari va viza masalalarida har kuni amaliy maslahatlar berib boradilar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 dark:text-slate-200">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-[#071324] border border-slate-200 dark:border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#16A7C8] shrink-0" />
              <span>Apostil va notarial tasdiqlash</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-[#071324] border border-slate-200 dark:border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#16A7C8] shrink-0" />
              <span>Haydovchilik guvohnomasi almashtirish</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-[#071324] border border-slate-200 dark:border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#16A7C8] shrink-0" />
              <span>E-9 dan E-7-4 balli viza konvertatsiyasi</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-[#071324] border border-slate-200 dark:border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#16A7C8] shrink-0" />
              <span>Mehnat vazirligi (1350) da arizalar</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-800">
            <Image
              src="/images/support_consultation.jpg"
              alt="Official Consultation Desk for Uzbek Compatriots in Korea"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-xs text-white font-medium">
              <span>Rasmiy konsullik va yuridik qabul stoli</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Support Areas Detailed Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#092B5C] dark:text-white">
            {t.support.areasTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.support.areasSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.support.areas.map((area) => (
            <div
              key={area.id}
              className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 flex flex-col justify-between shadow-xs space-y-4 hover:border-[#0A4DA5] dark:hover:border-[#38bdf8] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F7FA] dark:bg-[#00313d] flex items-center justify-center">
                    {getAreaIcon(area.id)}
                  </div>
                  <span className="text-xs font-semibold text-[#0A4DA5] dark:text-[#38bdf8]">
                    {area.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {area.desc}
                </p>

                <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-slate-800">
                  {area.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#16A7C8] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => openModal(area.id)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#092B5C] hover:bg-[#0A4DA5] rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>{t.common.applyNow}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Application / User Feedback Form Section */}
      <section className="bg-white dark:bg-[#0d1e38] rounded-2xl border border-[#D9E2EC] dark:border-[#1e3352] p-6 sm:p-10 shadow-xs">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#092B5C] dark:text-white">
              {t.support.formTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {t.support.formSubtitle}
            </p>
          </div>

          {formSuccess ? (
            <div className="p-8 text-center bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.common.success}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t.support.formFields.successMsg}
              </p>
              <div className="inline-block p-3 bg-white dark:bg-[#071324] rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-500 block mb-0.5">
                  {t.support.formFields.trackingIdText}
                </span>
                <span className="font-mono text-base font-bold text-[#0A4DA5] dark:text-[#38bdf8]">
                  {formSuccess}
                </span>
              </div>
              <div>
                <button
                  onClick={() => setFormSuccess(null)}
                  className="px-5 py-2 bg-[#092B5C] text-white text-xs font-semibold rounded-lg hover:bg-[#0A4DA5] transition-colors"
                >
                  Yana boshqa murojaat yuborish
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.support.formFields.category}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
                >
                  <option value="legal">{t.support.formFields.categoryOptions.legal}</option>
                  <option value="docs">{t.support.formFields.categoryOptions.docs}</option>
                  <option value="living">{t.support.formFields.categoryOptions.living}</option>
                  <option value="membership">{t.support.formFields.categoryOptions.membership}</option>
                  <option value="other">{t.support.formFields.categoryOptions.other}</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.support.formFields.name} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.support.formFields.namePlaceholder}
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {t.support.formFields.phone} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.support.formFields.phonePlaceholder}
                      className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.support.formFields.city}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={t.support.formFields.cityPlaceholder}
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.support.formFields.message} *
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.support.formFields.messagePlaceholder}
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
                  />
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#092B5C] hover:bg-[#0A4DA5] rounded-lg transition-colors shadow-xs disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? t.common.submitting : t.support.formFields.submitBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Interactive Searchable FAQ Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#092B5C] dark:text-white">
            {t.support.faqTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.support.faqSubtitle}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.support.faqSearchPlaceholder}
              className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-white dark:bg-[#0d1e38] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-[#071324] rounded-lg border border-[#D9E2EC] dark:border-[#1e3352] overflow-x-auto">
            <button
              onClick={() => setSelectedFaqCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedFaqCategory === 'all'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.support.faqCategories.all}
            </button>
            <button
              onClick={() => setSelectedFaqCategory('visa')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedFaqCategory === 'visa'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.support.faqCategories.visa}
            </button>
            <button
              onClick={() => setSelectedFaqCategory('legal')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedFaqCategory === 'legal'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.support.faqCategories.legal}
            </button>
            <button
              onClick={() => setSelectedFaqCategory('docs')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedFaqCategory === 'docs'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.support.faqCategories.docs}
            </button>
            <button
              onClick={() => setSelectedFaqCategory('insurance')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedFaqCategory === 'insurance'
                  ? 'bg-white dark:bg-[#092B5C] text-[#092B5C] dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t.support.faqCategories.insurance}
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352]">
              <p className="text-sm text-slate-500">Hech qanday savol topilmadi. Boshqa so‘z bilan qidiring yoki to‘g‘ridan-to‘g‘ri murojaat qiling.</p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = expandedFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#0d1e38] rounded-xl border border-[#D9E2EC] dark:border-[#1e3352] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${
                        isOpen ? 'transform rotate-180 text-[#0A4DA5]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
