import { useConsultation } from '@/contexts/ConsultationContext';
import { motion } from 'framer-motion';
import { Headphones, MessageCircle, Star, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function WhyUsSection() {
  const { openConsultation } = useConsultation();
  const features = [
    {
      icon: Headphones,
      title: 'Tự động chăm sóc khách hàng 24/7',
      description: 'AI chatbot hoạt động liên tục, không ngừng nghỉ',
    },
    {
      icon: Wrench,
      title: 'Tự động lên đơn - không bỏ sót khách tiềm năng',
      description: 'Tự động tạo đơn hàng từ cuộc trò chuyện',
    },
    {
      icon: MessageCircle,
      title:
        'Phản hồi bình luận theo ngữ cảnh, tăng tương tác và tỷ lệ chốt đơn',
      description: 'Hiểu ngữ cảnh và phản hồi phù hợp',
    },
    {
      icon: Star,
      title: 'Hiểu hành trình mua sắm & kích hoạt upsale đúng thời điểm',
      description: 'Tối ưu hóa cơ hội bán hàng',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                Tại sao là chúng tôi
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Sản phẩm của chúng tôi là nền tảng AI Chatbot đa kênh, tích hợp
                tất cả các nền tảng nhắn tin phổ biến như Facebook, Zalo,
                Website, Instagram... vào một giao diện quản lý duy nhất.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Không chỉ giúp doanh nghiệp tiết kiệm nhân sự, sản phẩm còn tăng
                trưởng doanh thu vượt trội nhờ khả năng cá nhân hóa và tự động
                hóa toàn diện trong chăm sóc khách hàng & bán hàng.
              </p>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer  bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              <Link href="#booking">Đặt lịch tư vấn ngay</Link>
            </motion.button>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
