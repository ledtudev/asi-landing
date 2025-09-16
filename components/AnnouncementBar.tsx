'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  // Auto-hide the announcement after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="relative z-40 w-full bg-black text-white text-center py-3 text-sm font-medium"
        >
          <div className="flex items-center justify-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-black text-xs font-bold">
              MỚI
            </span>
            <span>Thiết lập quy trình AI tùy chỉnh chỉ trong 5 phút</span>
          </div>

          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
