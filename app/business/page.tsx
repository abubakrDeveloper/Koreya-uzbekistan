'use client';

import React, { useEffect } from 'react';
import { AppProvider, useApp } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import BusinessView from '@/components/BusinessView';
import Footer from '@/components/Footer';
import ApplicationModal from '@/components/ApplicationModal';

function BusinessPageContent() {
  const { setActiveTab } = useApp();
  useEffect(() => {
    setActiveTab('business');
  }, [setActiveTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] dark:bg-[#071324] text-[#172B45] dark:text-[#f0f4f8] transition-colors">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <BusinessView />
      </main>
      <Footer />
      <ApplicationModal />
    </div>
  );
}

export default function BusinessPage() {
  return (
    <AppProvider>
      <BusinessPageContent />
    </AppProvider>
  );
}
