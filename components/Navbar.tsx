'use client';

import Link from 'next/link';
import Logo from './Logo';

interface NavbarProps {
  onMobileMenuToggle: () => void;
}

export default function Navbar({ onMobileMenuToggle }: NavbarProps) {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        {/* Main navbar container */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold text-gray-900 tracking-wide">
              ASI
            </span>
          </Link>

          {/* Navigation menu (desktop only) */}
          <div className="hidden md:flex space-x-8 text-gray-600">
            <Link
              href="#solutions"
              className="hover:text-gray-900 transition-colors font-medium"
            >
              Giải pháp
            </Link>
            <Link
              href="#customer"
              className="hover:text-gray-900 transition-colors font-medium"
            >
              Khách hàng
            </Link>
            <Link
              href="#about"
              className="hover:text-gray-900 transition-colors font-medium"
            >
              Về chúng tôi
            </Link>
            <Link
              href="#faq"
              className="hover:text-gray-900 transition-colors font-medium"
            >
              Hỏi đáp
            </Link>
          </div>

          {/* Call-to-action button */}
          <Link
            href="#booking"
            className="hidden md:block rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2 font-semibold text-white shadow-lg transition-colors duration-200 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Nhận tư vấn
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
