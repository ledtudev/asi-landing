'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ZaloQRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center text-slate-600 hover:text-slate-900 transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Quay lại Trang chủ
        </Link>

        {/* Main Content */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Kết nối Zalo
          </h1>
          <p className="text-lg text-slate-600 max-w-md mx-auto">
            Mở ứng dụng Zalo và quét mã QR để bắt đầu trò chuyện với chúng tôi
          </p>
        </div>

        {/* QR Card */}
        <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/60 p-8 sm:p-12 max-w-md w-full">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-200 rounded-full blur-xl opacity-50"></div>

          {/* QR Container */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 relative w-64 h-64 p-4 bg-white rounded-2xl shadow-lg border-2 border-blue-100">
              <Image
                src="/logo/logo.png"
                alt="Zalo QR Code"
                fill
                className="object-contain p-2"
                priority
              />

              {/* Animated Scan Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 animate-pulse shadow-lg"></div>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center text-slate-600">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Mở Zalo → Quét mã</span>
              </div>

              <p className="text-sm text-slate-500 italic">
                Mã QR sẽ tự động làm mới sau mỗi 5 phút
              </p>
            </div>
          </div>
        </div>

        {/* Footer Tips */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-slate-500">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Kết nối nhanh chóng
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Bảo mật tuyệt đối
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
