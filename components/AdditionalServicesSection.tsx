'use client';

import { motion } from 'framer-motion';
import { Zap, BarChart2, Cloud } from 'lucide-react';

export default function SaaSServicesSection() {
  const services = [
    {
      icon: Zap,
      title: 'Tối ưu quy trình doanh nghiệp',
      description:
        'Tự động hóa các quy trình nội bộ, giảm thời gian xử lý và tăng hiệu quả vận hành.',
      gradient: 'from-orange-400 to-orange-600',
    },
    {
      icon: BarChart2,
      title: 'Báo cáo & phân tích thông minh',
      description:
        'Dashboard trực quan, số liệu cập nhật thời gian thực, giúp ra quyết định nhanh và chính xác hơn.',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: Cloud,
      title: 'Tích hợp linh hoạt',
      description:
        'Kết nối dễ dàng với các phần mềm và công cụ hiện có, hỗ trợ đa nền tảng và mở rộng khi cần.',
      gradient: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Dịch vụ SaaS nâng cao cho doanh nghiệp
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Các giải pháp SaaS giúp tự động hóa quy trình, phân tích dữ liệu
            thông minh và tích hợp linh hoạt, giúp doanh nghiệp vận hành hiệu
            quả mà không cần đội ngũ kỹ thuật lớn.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                y: -6,
                rotate: 1.5,
                boxShadow: '0px 20px 40px rgba(0,0,0,0.12)',
              }}
              className="relative bg-white rounded-2xl p-8 overflow-hidden cursor-pointer"
            >
              {/* Gradient Glow Overlay */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
              ></div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-tr ${service.gradient} text-white shadow-lg`}
              >
                <service.icon className="w-8 h-8" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
