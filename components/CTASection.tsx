'use client';

import { useConsultation } from '@/contexts/ConsultationContext';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  const { openConsultation } = useConsultation();

  const benefits = [
    'Triển khai nhanh, không cần hạ tầng phức tạp',
    'Bảo mật & sao lưu tự động',
    'Cập nhật & nâng cấp liên tục',
    'Tiết kiệm chi phí vận hành',
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background decor */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/80 to-blue-800/80"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Nâng cấp bán hàng với <br /> AI Chatbot thông minh
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
        >
          Tự động hoá tư vấn, chốt đơn và chăm sóc khách hàng – đơn giản, nhanh
          chóng và tiết kiệm chi phí.
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors duration-300"
            >
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">
                {benefit}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 cursor-pointer"
        >
          <motion.button
            onHoverStart={() =>
              openConsultation(
                'Bắt đầu ngay',
                'Để lại thông tin để chúng tôi tư vấn giải pháp AI Chatbot phù hợp nhất cho doanh nghiệp của bạn',
              )
            }
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Link href="/zalo">
              <span>Dùng thử miễn phí</span>
            </Link>
            <ArrowRight className="w-5 h-5 cursor-pointer transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>

          <Link
            href="#booking"
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Clock className="w-5 h-5" />
            <span>Đặt lịch tư vấn</span>
          </Link>
        </motion.div>

        {/* Trust indicators - Startup style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-blue-200 text-sm"
        >
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5" />
            Giải pháp chatbot thế hệ mới
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>Cam kết hỗ trợ tận tâm</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>Đội ngũ cải tiến liên tục</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
