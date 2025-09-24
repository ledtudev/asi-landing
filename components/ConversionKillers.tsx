'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const items = [
  'Mất khách vì phản hồi chậm',
  'Không theo dõi được hội thoại & data khách hàng',
  'Tốn nhiều nhân sự cho việc trả lời inbox',
  'Chốt đơn thủ công, dễ sai sót',
  'Không có báo cáo để tối ưu bán hàng',
];

export default function ConversionKillers() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Điều gì đang{' '}
          <span className="bg-gradient-to-r from-[#7a6158] to-[#1677FF] bg-clip-text text-transparent">
            giết chết chuyển đổi
          </span>{' '}
          của bạn?
        </h2>
        <p className="text-gray-600 mt-3">
          Cùng khám phá nguyên nhân khiến khách hàng không ra quyết định.
        </p>

        <div className="relative mt-10 mx-auto max-w-3xl rounded-2xl overflow-visible">
          <div className="relative border border-gray-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] bg-gradient-to-br from-[#eff5f8] via-white to-[#eff5f8] backdrop-blur-sm overflow-hidden rounded-2xl z-10">
            {items.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between px-6 py-4 ${
                  i !== items.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">{t}</span>
                </div>
                <X className="text-gray-300 w-5 h-5 cursor-pointer" />
              </motion.div>
            ))}
          </div>

          {/* <div
            className="absolute -inset-x-12 -bottom-12 pointer-events-none z-0"
            style={{ overflow: 'visible' }}
          >
            <svg
              viewBox="0 0 601 401"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
            >
              <rect
                x="0"
                y="0"
                width="601"
                height="401"
                fill="rgba(0,0,0,0.05)"
              />
              <line x1="0" y1="0" x2="601" y2="401" stroke="rgba(0,0,0,0.1)" />
              <line x1="0" y1="401" x2="601" y2="0" stroke="rgba(0,0,0,0.1)" />
            </svg>
          </div> */}
        </div>
      </div>
    </section>
  );
}
