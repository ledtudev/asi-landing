'use client';

import { motion } from 'framer-motion';

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
      {/* background lines */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-white to-gray-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] opacity-50"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Điều gì đang{' '}
          <span className="text-indigo-600">giết chết chuyển đổi</span> của bạn?
        </h2>
        <p className="text-gray-600 mt-3">
          Cùng khám phá nguyên nhân khiến khách hàng không ra quyết định.
        </p>

        <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-gray-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] bg-white relative z-10">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`flex items-center justify-between px-6 py-4 ${
                i !== items.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <span className="text-gray-700">{t}</span>
              <span className="text-gray-300">×</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
