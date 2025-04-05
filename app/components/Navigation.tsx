'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              オフィスツネ
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              ホーム
            </Link>
            <Link href="/cases" className="text-gray-800 hover:text-gray-600">
              事例紹介
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600">
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-800 hover:text-gray-600">
                ホーム
              </Link>
              <Link href="/cases" className="text-gray-800 hover:text-gray-600">
                事例紹介
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600">
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 