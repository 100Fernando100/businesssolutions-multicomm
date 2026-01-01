'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [language, setLanguage] = useState('EN');

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-teal-600">multicomm</span>
            <span className="text-gray-900">.ai</span>
          </Link>

          {/* Language Selector & CTA */}
          <div className="flex items-center gap-4">
            {/* Language Buttons */}
            <div className="flex items-center gap-1 border border-gray-300 rounded-lg p-1">
              <button className="w-8 h-8 flex items-center justify-center rounded">
                🌐
              </button>
              {['EN', 'ES', 'FR'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === lang
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Activate Now Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Activate Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}