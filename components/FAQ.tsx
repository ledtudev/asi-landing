import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Tôi có cần kiến thức kỹ thuật để sử dụng SmartSelly AI không?',
      answer:
        'Hoàn toàn không! SmartSelly AI được thiết kế để dễ sử dụng, không cần kiến thức lập trình. Chúng tôi cung cấp hướng dẫn chi tiết và hỗ trợ 24/7.',
    },
    {
      question: 'Thời gian triển khai AI cho doanh nghiệp là bao lâu?',
      answer:
        'Thông thường chỉ mất 5-7 ngày để triển khai hoàn chỉnh. Với gói cơ bản, bạn có thể bắt đầu sử dụng ngay trong vòng 24 giờ.',
    },
    {
      question: 'Chi phí sử dụng có minh bạch không?',
      answer:
        'Tất cả chi phí đều minh bạch, không phát sinh. Bạn chỉ trả đúng số tiền đã thỏa thuận trong hợp đồng. Chúng tôi cung cấp báo cáo chi tiết hàng tháng.',
    },
    {
      question: 'Dữ liệu khách hàng có được bảo mật không?',
      answer:
        'Chúng tôi tuân thủ nghiêm ngặt các tiêu chuẩn bảo mật quốc tế. Dữ liệu được mã hóa và lưu trữ an toàn. Chúng tôi có chứng nhận ISO 27001 về bảo mật thông tin.',
    },
    {
      question: 'Có thể tùy chỉnh AI theo nhu cầu riêng không?',
      answer:
        'Có! Chúng tôi cung cấp gói Custom để phát triển AI phù hợp với quy trình và nhu cầu đặc thù của từng doanh nghiệp.',
    },
    {
      question: 'Hỗ trợ khách hàng như thế nào?',
      answer:
        'Chúng tôi cung cấp hỗ trợ 24/7 qua nhiều kênh: hotline, email, chat trực tiếp. Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn mọi lúc.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Câu hỏi thường gặp
          </h2>
          <p className="text-xl text-gray-600">
            Giải đáp những thắc mắc phổ biến về SmartSelly AI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
