"use client";

import './globals.css';
import Header from '../components/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>

        {/* Page Transitions */}
        <AnimatePresence mode="wait">
          <motion.main
            key={children?.toString()}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="flex-grow flex items-center justify-center container mx-auto p-4 md:p-8 pt-20"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}
