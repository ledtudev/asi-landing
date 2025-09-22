import { motion } from 'framer-motion';
import { Luggage, MessageSquare, Monitor, Plane } from 'lucide-react';

export default function IndustryApplicationsSection() {
  const industries = [
    {
      icon: Monitor,
      title: 'Bán lẻ',
      description: 'Tự động tư vấn size, màu, giá, chốt đơn',
    },
    {
      icon: MessageSquare,
      title: 'F&B',
      description: 'Tư vấn món, khuyến mãi, lên đơn giao hàng',
    },
    {
      icon: Luggage,
      title: 'Du lịch',
      description: 'Gợi ý lịch trình, book vé – khách sạn tự động',
    },
    {
      icon: Plane,
      title: 'Dịch vụ',
      description: 'Tư vấn, đặt lịch, nhắc hẹn, upsell thông minh',
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#002C6C] mb-4">
          Ứng dụng đa ngành
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Tự động tư vấn sản phẩm, trả lời inbox, chốt đơn, báo cáo hiệu suất.
          Phù hợp cho thời trang, F&B, giáo dục, du lịch... Không cần code.
        </p>

        {/* Industries grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#E6F3FB] rounded-full flex items-center justify-center mx-auto mb-6">
                <industry.icon className="w-8 h-8 text-[#0070C9]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#002C6C] mb-3">
                {industry.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
