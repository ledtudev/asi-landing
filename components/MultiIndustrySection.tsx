import { useConsultation } from '@/contexts/ConsultationContext';
import { motion } from 'framer-motion';
import { Globe, Plane, ShoppingBag, Utensils } from 'lucide-react';

export default function MultiIndustrySection() {
  const { openConsultation } = useConsultation();
  const industries = [
    {
      icon: ShoppingBag,
      title: 'Bán lẻ',
      description: 'Tự động tư vấn size, màu, giá, chốt đơn',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Utensils,
      title: 'F&B',
      description: 'Tư vấn món, khuyến mãi, lên đơn giao hàng',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      icon: Plane,
      title: 'Du lịch',
      description: 'Gợi ý lịch trình, book vé – khách sạn tự động',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Globe,
      title: 'Dịch vụ',
      description: 'Tư vấn, đặt lịch, nhắc hẹn, upsell thông minh',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Wave */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Ứng dụng đa ngành
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Tự động tư vấn sản phẩm, trả lời inbox, chốt đơn, báo cáo hiệu suất.
            Phù hợp cho thời trang, F&B, giáo dục, du lịch... Không cần code.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              openConsultation(
                'Ứng dụng đa ngành',
                'Tìm hiểu cách AI có thể áp dụng cho ngành nghề của bạn',
              )
            }
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-4 rounded-lg text-xl shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            Đăng ký ngay
          </motion.button>
        </motion.div>

        {/* Industry Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.01 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.2 }}
                className={`w-20 h-20 ${industry.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
              >
                <industry.icon className={`w-10 h-10 ${industry.iconColor}`} />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {industry.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
