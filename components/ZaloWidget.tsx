'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type ZaloWidgetProps = {
  className?: string;
  showOnMobile?: boolean;
};

export default function ZaloWidget({
  className = '',
  showOnMobile = false,
}: ZaloWidgetProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    const tooltipTimer = setTimeout(() => setShowTooltip(false), 5000);
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearInterval(pulseInterval);
    };
  }, []);

  const handleClick = () => router.push('/zalo');
  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed bottom-6 right-6 z-50 cursor-pointer ${
        showOnMobile ? '' : 'hidden lg:block'
      } ${className}`}
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing Button */}
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center border-2 border-blue-300/50"
        >
          {/* Pulsing ring */}
          <motion.div
            animate={{
              scale: isPulsing ? [1, 1.2, 1] : 1,
              opacity: isPulsing ? [0.5, 0, 0.5] : 0,
            }}
            transition={{ duration: 2 }}
            className="absolute inset-0 rounded-full border-2 border-blue-400"
          />
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.button>

        {/* Online dot */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border border-white"
        />

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.3 }}
              className="absolute -left-40 top-1/2 transform -translate-y-1/2"
            >
              <div className="relative bg-white rounded-lg p-2 shadow-md border border-gray-200 w-36">
                <div className="text-gray-800 font-medium text-sm">
                  💬 Chat ngay với chúng tôi!
                </div>
                <div className="text-gray-500 text-xs mt-1">
                  Nhấn để quét mã Zalo
                </div>

                <button
                  onClick={handleCloseTooltip}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <X className="w-3 h-3 text-gray-700" />
                </button>

                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-6 border-l-white border-t-3 border-b-3 border-t-transparent border-b-transparent"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
