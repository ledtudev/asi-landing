'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

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
    // Hiển thị widget sau 2 giây
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Ẩn tooltip sau 5 giây
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    // Pulsing effect mỗi 8 giây
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

  const handleClick = () => {
    router.push('/zalo');
  };

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
      <div className="relative">
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-8 -left-8 w-6 h-6 bg-yellow-400 rounded-full opacity-80"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -top-12 -right-4 w-4 h-4 bg-green-400 rounded-full opacity-70"
        />

        {/* Main Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="relative w-20 h-20 cursor-pointer bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 group border-2 border-white/20"
          aria-label="Chat với chúng tôi qua Zalo"
        >
          {/* Pulsing Ring Effect */}
          <motion.div
            animate={{
              scale: isPulsing ? [1, 1.2, 1] : 1,
              opacity: isPulsing ? [0.7, 0, 0.7] : 0,
            }}
            transition={{ duration: 2 }}
            className="absolute inset-0 rounded-2xl border-2 border-blue-400"
          />

          {/* Shine Effect */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"
          />

          <MessageCircle className="w-8 h-8 text-white drop-shadow-lg" />

          {/* Online Status Dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
          />
        </motion.button>

        {/* Notification Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 8,
            delay: 1,
          }}
          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
          className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-white text-xs font-bold"
          >
            1
          </motion.span>
        </motion.div>

        {/* Animated Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="absolute right-24 top-1/2 transform -translate-y-1/2"
            >
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-4 shadow-2xl border border-white/20">
                <div className="text-white font-semibold text-sm">
                  💬 Chat ngay với chúng tôi!
                </div>
                <div className="text-white/90 text-xs mt-1">
                  Nhấn để quét mã Zalo
                </div>

                {/* Close Button */}
                <button
                  onClick={handleCloseTooltip}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <X className="w-3 h-3 text-blue-500" />
                </button>

                {/* Tail */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-blue-500 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs font-medium text-blue-600 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full border border-blue-100"
          >
            👋 Chào bạn!
          </motion.span>
        </motion.div>
      </div>

      {/* Background Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 -inset-4 bg-blue-400/30 rounded-3xl blur-xl -z-10"
      />
    </motion.div>
  );
}
