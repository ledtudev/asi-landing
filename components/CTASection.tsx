import { useConsultation } from '@/contexts/ConsultationContext';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';

export default function CTASection() {
  const { openConsultation } = useConsultation();

  const benefits = [
    'Triển khai trong 24 giờ',
    'Hỗ trợ 24/7 miễn phí',
    'Bảo hành trọn đời',
    'Tăng doanh thu 40%',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Sẵn sàng chuyển đổi doanh nghiệp?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Tham gia cùng 500+ doanh nghiệp đang sử dụng AI để tăng trưởng vượt
            trội
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                openConsultation(
                  'Bắt đầu ngay',
                  'Để lại thông tin để chúng tôi tư vấn giải pháp AI phù hợp nhất cho doanh nghiệp của bạn',
                )
              }
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg text-lg shadow-2xl hover:shadow-3xl transition-all duration-200 flex items-center space-x-2 group"
            >
              <span>Bắt đầu miễn phí</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                openConsultation(
                  'Tư vấn chuyên sâu',
                  'Đặt lịch tư vấn 1-1 với chuyên gia AI của chúng tôi',
                )
              }
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center space-x-2"
            >
              <Clock className="w-5 h-5" />
              <span>Tư vấn chuyên sâu</span>
            </motion.button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200"
          >
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">500+ doanh nghiệp tin dùng</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">99.9% khách hàng hài lòng</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Hỗ trợ 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
