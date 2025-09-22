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
  const [perView, setPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 768) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(DATA.length / perView)),
    [perView],
  );

  // Autoplay
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
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Khách hàng nói gì
          </h2>
          <p className="text-gray-600">
            Những phản hồi thực từ doanh nghiệp sử dụng ASI
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${translatePercent}%` }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.7 }}
              style={{ width: `${(DATA.length * 100) / perView}%` }}
            >
              {DATA.map((t, i) => (
                <motion.div
                  key={i}
                  className="basis-full md:basis-1/2 lg:basis-1/3 shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
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
                    <p className="text-gray-700 leading-relaxed mb-6">
                      “{t.content}”
                    </p>
                    <div className="flex items-center space-x-4 mt-auto">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl shadow">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
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

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
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
            <div className="flex gap-3">
              <button
                onClick={() =>
                  setPage((p) => (p - 1 + totalPages) % totalPages)
                }
                className="px-3 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                Trước
              </button>
              <button
                onClick={() => setPage((p) => (p + 1) % totalPages)}
                className="px-3 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50"
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
