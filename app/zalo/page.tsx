'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  ScanLine,
  Zap,
  MessageCircle,
  Smartphone,
  Monitor,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ZaloQRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Desktop Layout - Hiển thị trên màn hình lớn */}
      <div className="hidden lg:flex w-full max-w-7xl items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl"
        >
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-all duration-300 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl border border-slate-200/60 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Quay lại Trang chủ</span>
          </Link>

          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center gap-4 mb-6"
              >
                <div className="p-4 bg-gradient-to-r from-[#FF9616] to-[#1677FF] rounded-3xl shadow-2xl">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <Monitor className="w-8 h-8 text-blue-500" />
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#FF9616] to-[#1677FF] bg-clip-text text-transparent mb-4 leading-tight">
                Kết Nối Zalo
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Quét mã QR bằng điện thoại để trò chuyện trực tiếp với đội ngũ
                hỗ trợ của chúng tôi
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {[
                {
                  text: 'Phản hồi 5 phút',
                  icon: CheckCircle2,
                  color: 'text-green-500',
                },
                {
                  text: 'Hỗ trợ 24/7',
                  icon: MessageCircle,
                  color: 'text-blue-500',
                },
                {
                  text: 'Bảo mật tuyệt đối',
                  icon: CheckCircle2,
                  color: 'text-purple-500',
                },
                {
                  text: 'Giải đáp tận tình',
                  icon: CheckCircle2,
                  color: 'text-orange-500',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-white/50"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="font-medium text-slate-700">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Phone Number */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-white/60"
            >
              <div className="p-2 bg-green-100 rounded-lg">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Liên hệ trực tiếp</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#FF9616] to-[#1677FF] bg-clip-text text-transparent">
                  0973 448 052
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - QR Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-md"
        >
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/60 p-8">
            {/* Scan Instruction */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <ScanLine className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-semibold bg-gradient-to-r from-[#FF9616] to-[#1677FF] bg-clip-text text-transparent">
                Quét mã QR bằng Zalo
              </span>
            </div>

            {/* QR Container */}
            <div className="relative mb-6 flex justify-center">
              <div className="relative w-72 h-72 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-inner border-2 border-blue-100/50">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/zalo_qr.png"
                    alt="Zalo QR Code"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </div>

                {/* Animated Scan Line */}
                <motion.div
                  animate={{ y: [0, 288, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full shadow-lg"
                />

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-400 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-400 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-400 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-400 rounded-br-lg" />
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3 text-center">
              {[
                {
                  text: '1. Mở ứng dụng Zalo trên điện thoại',
                  icon: Smartphone,
                },
                { text: "2. Chọn tính năng 'Quét mã QR'", icon: ScanLine },
                { text: '3. Hướng camera vào mã bên trên', icon: CheckCircle2 },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-3 text-slate-600 bg-slate-50/50 rounded-lg p-3"
                >
                  <step.icon className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">{step.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout - Hiển thị trên màn hình nhỏ */}
      <div className="flex lg:hidden w-full max-w-md flex-col items-center">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="self-start mb-6"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-all duration-300 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-slate-200/60"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Trang chủ</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="p-3 bg-gradient-to-r from-[#FF9616] to-[#1677FF] rounded-2xl shadow-lg">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF9616] to-[#1677FF] bg-clip-text text-transparent mb-3">
            Kết Nối Zalo
          </h1>
          <p className="text-slate-600 leading-relaxed">
            Quét mã QR để trò chuyện với hỗ trợ viên
          </p>
        </motion.div>

        {/* QR Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full mb-6"
        >
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-white/60 p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ScanLine className="w-5 h-5 text-blue-500" />
              <span className="font-semibold bg-gradient-to-r from-[#FF9616] to-[#1677FF] bg-clip-text text-transparent">
                Quét mã QR
              </span>
            </div>

            {/* QR Container */}
            <div className="relative mb-4 flex justify-center">
              <div className="relative w-56 h-56 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-inner border-2 border-blue-100/50">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/zalo_qr.png"
                    alt="Zalo QR Code"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <motion.div
                  animate={{ y: [0, 224, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"
                />
              </div>
            </div>

            {/* Mobile Steps */}
            <div className="space-y-2">
              {['Mở Zalo → Quét mã', 'Kết nối ngay lập tức', 'Hỗ trợ 24/7'].map(
                (step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>{step}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Phone Number Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/60 mb-4">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-slate-500">Liên hệ trực tiếp</p>
                <p className="text-lg font-bold bg-gradient-to-r from-[#FF9616] to-[#1677FF] bg-clip-text text-transparent">
                  0973 448 052
                </p>
              </div>
            </div>
          </div>

          {/* Features Mobile */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { text: 'Nhanh chóng', color: 'from-green-500 to-blue-500' },
              { text: 'Bảo mật', color: 'from-purple-500 to-pink-500' },
              { text: '24/7', color: 'from-orange-500 to-red-500' },
              { text: 'Tận tâm', color: 'from-blue-500 to-green-500' },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${feature.color} text-white text-xs font-medium py-2 px-3 rounded-lg text-center`}
              >
                {feature.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-15" />
      </div>
    </main>
  );
}
