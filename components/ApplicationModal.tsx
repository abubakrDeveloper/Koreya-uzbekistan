'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { X, CheckCircle2, ShieldCheck, Send, Phone, MapPin, User, FileText } from 'lucide-react';

export default function ApplicationModal() {
  const { isModalOpen, closeModal, modalCategory, t, showToast } = useApp();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState(modalCategory);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ id: string; name: string } | null>(null);

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
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
      setSubmittedData({ id: generatedId, name: name.trim() });
    }, 700);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setCity('');
    setMessage('');
    setSubmittedData(null);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-[#0d1e38] rounded-xl shadow-2xl border border-[#D9E2EC] dark:border-[#1e3352] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#092B5C] dark:bg-[#071324] px-6 py-4 flex items-center justify-between text-white border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0A4DA5] flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-[#16A7C8]" />
            </div>
            <div>
              <h3 className="font-bold text-base tracking-tight">{t.support.formTitle}</h3>
              <p className="text-xs text-slate-300">Gwangju · Koreyadagi O‘zbekistonliklar Uyushmasi</p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submittedData ? (
            <div className="py-8 px-4 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.common.success}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                {t.support.formFields.successMsg}
              </p>
              <div className="p-4 bg-slate-50 dark:bg-[#092B5C]/30 border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg max-w-xs mx-auto">
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                  {t.support.formFields.trackingIdText}
                </span>
                <span className="font-mono text-lg font-bold text-[#0A4DA5] dark:text-[#38bdf8]">
                  {submittedData.id}
                </span>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 bg-[#092B5C] hover:bg-[#0A4DA5] text-white font-medium text-sm rounded-lg transition-colors"
              >
                {t.common.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {t.support.formSubtitle}
              </p>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  {t.support.formFields.category}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
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
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    {t.support.formFields.name} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.support.formFields.namePlaceholder}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    {t.support.formFields.phone} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.support.formFields.phonePlaceholder}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  {t.support.formFields.city}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={t.support.formFields.cityPlaceholder}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  {t.support.formFields.message} *
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.support.formFields.messagePlaceholder}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-[#071324] border border-[#D9E2EC] dark:border-[#1e3352] rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A4DA5]"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {t.common.close}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#092B5C] hover:bg-[#0A4DA5] rounded-lg transition-colors shadow-xs disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? t.common.submitting : t.support.formFields.submitBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
