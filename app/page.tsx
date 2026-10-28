'use client';

import React from 'react';
import { AppProvider, useApp } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import HomeView from '@/components/HomeView';
import AboutView from '@/components/AboutView';
import SupportView from '@/components/SupportView';
import BusinessView from '@/components/BusinessView';
import ContactView from '@/components/ContactView';
import Footer from '@/components/Footer';
import ApplicationModal from '@/components/ApplicationModal';
import { CheckCircle2 } from 'lucide-react';

function MainContent() {
  const { activeTab, toastMessage } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] dark:bg-[#071324] text-[#172B45] dark:text-[#f0f4f8] transition-colors">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'about' && <AboutView />}
        {activeTab === 'support' && <SupportView />}
        {activeTab === 'business' && <BusinessView />}
        {activeTab === 'contact' && <ContactView />}
      </main>

      <Footer />
      <ApplicationModal />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xl border border-slate-700 dark:border-slate-200 text-xs font-semibold animate-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#16A7C8] dark:text-[#0A4DA5] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
