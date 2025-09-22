'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed left-0 top-0 h-full w-72 bg-white shadow-2xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">ASI</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6 space-y-1">
                <Link
                  href="#solutions"
                  onClick={onClose}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Giải pháp
                </Link>
                <Link
                  href="#customer"
                  onClick={onClose}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Khách hàng
                </Link>
                <Link
                  href="#about"
                  onClick={onClose}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Về chúng tôi
                </Link>
                <Link
                  href="#faq"
                  onClick={onClose}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  Hỏi đáp
                </Link>

                {/* CTA */}
                <div className="pt-6">
                  <Link
                    href="#booking"
                    onClick={onClose}
                    className="block w-full text-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    Nhận tư vấn
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  © 2024 ASI. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
