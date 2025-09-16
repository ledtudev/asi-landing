'use client';

import Link from 'next/link';

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
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
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
              href="#why"
              className="hover:text-gray-900 transition-colors font-medium"
            >
              Tại sao?
            </Link>
            <Link
              href="#pricing"
              className="hover:text-gray-900 transition-colors font-medium"
            >
              Bảng giá
            </Link>
            <Link
              href="#services"
              className="hover:text-gray-900 transition-colors font-medium"
            >
              Dịch vụ bổ sung
            </Link>
          </div>

          {/* Call-to-action button */}
          <button className="hidden md:block rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2 font-semibold text-white shadow-lg hover:opacity-90 transition-all duration-200 hover:shadow-xl">
            Nhận tư vấn
          </button>

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
