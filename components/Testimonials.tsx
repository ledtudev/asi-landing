/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const DATA = [
  {
    name: 'Nguyễn Văn A',
    company: 'CEO, Công ty ABC',
    content:
      'SmartSelly AI đã giúp chúng tôi tăng 40% doanh thu chỉ sau 3 tháng. Hệ thống chatbot tự động xử lý 90% yêu cầu khách hàng.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'Trần Thị B',
    company: 'Giám đốc Marketing, XYZ Corp',
    content:
      'Từ khi sử dụng AI Marketing, chúng tôi tiết kiệm được 60% thời gian tạo content và tăng engagement lên 3 lần.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Lê Văn C',
    company: 'Founder, Startup DEF',
    content:
      'AI của SmartSelly đã thay đổi hoàn toàn cách chúng tôi quản lý khách hàng. Hiệu quả và tiết kiệm chi phí đáng kể.',
    rating: 5,
    avatar: '👨‍🚀',
  },
  {
    name: 'Phạm D',
    company: 'Head of Growth, EFG',
    content:
      'Triển khai nhanh, hỗ trợ nhiệt tình. Conversion từ chat tăng rõ rệt trong tháng đầu.',
    rating: 5,
    avatar: '🧑‍💼',
  },
  {
    name: 'Vũ E',
    company: 'COO, Retail HIJ',
    content:
      'Tích hợp mượt, dữ liệu báo cáo rõ ràng. Đội sales tiết kiệm rất nhiều thời gian.',
    rating: 5,
    avatar: '👩‍💼',
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(DATA.length / 3)), []);

  // Autoplay chỉ cho tablet/desktop
  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % totalPages), 5000);
    return () => clearInterval(id);
  }, [totalPages]);

  const translatePercent = useMemo(
    () => (page * 100) / totalPages,
    [page, totalPages],
  );

  return (
    <section
      id="customer"
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Khách hàng nói gì
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Những phản hồi thực từ doanh nghiệp sử dụng ASI
          </p>
        </motion.div>

        {/* Mobile: Vertical Slider - chỉ hiển thị 1 slide, cuộn dọc */}
        <div className="md:hidden">
          <div className="h-[400px] overflow-y-auto snap-y snap-mandatory space-y-4">
            {DATA.map((t, i) => (
              <motion.div
                key={i}
                className="h-full snap-start flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-end text-blue-200">
                    <Quote className="w-6 h-6" />
                  </div>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm mb-5">
                    "{t.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl shadow">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-600">{t.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {DATA.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === Math.floor(page) ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tablet/Desktop: Horizontal slider */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden rounded-xl lg:rounded-2xl">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${translatePercent}%` }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.7 }}
              style={{ width: `${(DATA.length * 100) / 3}%` }}
            >
              {DATA.map((t, i) => (
                <motion.div
                  key={i}
                  className="basis-1/3 lg:basis-1/3 shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-white border border-gray-200 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-end text-blue-200">
                      <Quote className="w-8 h-8" />
                    </div>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base mb-6">
                      "{t.content}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl shadow">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-base">
                          {t.name}
                        </div>
                        <div className="text-sm text-gray-600">{t.company}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controls chỉ hiển thị trên tablet/desktop */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === page
                      ? 'w-8 bg-blue-600'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3 cursor-pointer">
              <button
                onClick={() =>
                  setPage((p) => (p - 1 + totalPages) % totalPages)
                }
                className="px-4 py-2 cursor-pointer text-sm rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                Trước
              </button>
              <button
                onClick={() => setPage((p) => (p + 1) % totalPages)}
                className="px-4 py-2 cursor-pointer text-sm rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                Sau
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
