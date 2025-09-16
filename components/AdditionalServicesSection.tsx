import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Settings } from 'lucide-react';

export default function AdditionalServicesSection() {
  const services = [
    {
      icon: Rocket,
      title: 'Hạ tầng chạy AI cho người có kỹ năng',
      description:
        'Cung cấp môi trường và công cụ cần thiết để chạy và triển khai AI hiệu quả, dành cho đội ngũ đã có kiến thức về AI.',
      titleColor: 'text-orange-500',
    },
    {
      icon: GraduationCap,
      title: 'Đào tạo về AI & các ngành nghề liên quan',
      description:
        'Các khóa học thực tiễn giúp doanh nghiệp và cá nhân hiểu - áp dụng - làm chủ công nghệ AI vào công việc hàng ngày.',
      titleColor: 'text-blue-600',
    },
    {
      icon: Settings,
      title: 'Thiết kế giải pháp riêng theo ngành',
      description:
        'Phát triển hệ thống AI tùy chỉnh cho từng lĩnh vực cụ thể: bán lẻ, F&B, giáo dục, du lịch, dịch vụ...',
      titleColor: 'text-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Dịch vụ bổ sung
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Cung cấp hạ tầng, đào tạo và thiết kế giải pháp AI riêng cho từng
            doanh nghiệp - kể cả khi bạn chưa có đội kỹ thuật.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.005 }}
              className="bg-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300"
              >
                <service.icon className="w-8 h-8 text-blue-600" />
              </motion.div>

              <h3
                className={`text-xl font-bold mb-4 text-center group-hover:${service.titleColor} transition-colors duration-300`}
              >
                {service.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-center group-hover:text-gray-900 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
