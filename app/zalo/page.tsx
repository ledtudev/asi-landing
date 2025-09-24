'use client';

import Logo from '@/components/Logo';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, ScanLine } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ZaloQRPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-blue-50 p-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row items-center gap-3 mb-10 text-center"
      >
        <Logo className="w-16 h-16 md:w-20 md:h-20" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 max-w-lg">
          Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI
        </h1>
      </motion.div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 p-12 flex flex-col gap-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Trang chủ
          </Link>

          <div className="flex flex-1 flex-col justify-center gap-6">
            <div className="flex w-full items-center justify-center">
              <Image
                alt="support"
                width={1000}
                height={1000}
                src="/images/support.jpg"
                className="w-60 h-60 rounded-full object-cover"
              />
            </div>
            <h2 className="text-4xl font-bold text-blue-900 leading-snug">
              Bán hàng thông minh với AI
            </h2>
            <p className="text-lg text-blue-700">
              Hỗ trợ khách hàng 24/7, tối ưu tỉ lệ chốt đơn
            </p>
            <motion.a
              href="tel:0973448052"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-4 bg-blue-600 text-white px-8 py-3 rounded-2xl shadow-lg mt-4"
            >
              <Phone className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-90">Hotline</p>
                <p className="text-xl font-bold">0973 448 052</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Right QR */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex items-center justify-center p-12 bg-blue-100"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center gap-6 border border-blue-200">
            <ScanLine className="w-10 h-10 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-800">Liên hệ tư vấn</h3>
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl p-4 border-4 border-blue-400 overflow-hidden">
              <Image
                src="/images/zalo_qr.png"
                alt="QR liên hệ"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-blue-600 font-medium text-center">
              Quét mã để liên hệ nhanh chóng.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full max-w-md bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center gap-6">
        {/* Back button */}
        <Link
          href="/"
          className="self-start inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Trang chủ
        </Link>

        <h2 className="text-2xl font-bold text-blue-900 text-center">
          Bán hàng nhanh hơn, thông minh hơn
        </h2>
        <p className="text-blue-700 text-center text-base">
          Hỗ trợ khách hàng 24/7, tối ưu tỉ lệ chốt đơn.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-72 h-72 rounded-2xl p-4 border-4 border-blue-400 overflow-hidden shadow-lg"
        >
          <Image
            src="/images/zalo_qr.png"
            alt="QR liên hệ"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.a
          href="tel:0973448052"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 bg-blue-600 text-white px-6 py-4 w-full justify-center rounded-2xl shadow-lg"
        >
          <Phone className="w-5 h-5" />
          <span className="font-bold text-lg">Gọi tư vấn: 0973 448 052</span>
        </motion.a>
      </div>
    </main>
  );
}
