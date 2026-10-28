'use client';

import React, { useEffect } from 'react';
import { AppProvider, useApp } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import SupportView from '@/components/SupportView';
import Footer from '@/components/Footer';
import ApplicationModal from '@/components/ApplicationModal';

function SupportPageContent() {
  const { setActiveTab } = useApp();
  useEffect(() => {
    setActiveTab('support');
  }, [setActiveTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] dark:bg-[#071324] text-[#172B45] dark:text-[#f0f4f8] transition-colors">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SupportView />
      </main>
      <Footer />
      <ApplicationModal />
    </div>
  );
}

export default function SupportPage() {
  return (
    <AppProvider>
      <SupportPageContent />
    </AppProvider>
  );
}
