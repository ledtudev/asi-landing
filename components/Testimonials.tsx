import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
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
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hàng nghìn doanh nghiệp đã tin tưởng và đạt được kết quả vượt trội
            với SmartSelly AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-blue-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
