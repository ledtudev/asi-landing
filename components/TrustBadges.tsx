import { motion, Variants } from 'framer-motion';
import {
  Database,
  Layers,
  RefreshCw,
  ShieldCheck,
  Sliders,
} from 'lucide-react';

const badges = [
  {
    icon: ShieldCheck,
    title: 'Bảo mật',
    text: 'Sao lưu & an toàn dữ liệu theo tiêu chuẩn quốc tế.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    icon: Layers,
    title: 'Đa nền tảng',
    text: 'Dễ dàng tích hợp với hệ thống và công cụ bạn đang dùng.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
  },
  {
    icon: RefreshCw,
    title: 'Liên tục',
    text: 'Cập nhật & nâng cấp tính năng tự động, miễn phí.',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    icon: Database,
    title: '24/7',
    text: 'Hệ thống hoạt động ổn định, hỗ trợ khách hàng mọi lúc.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    icon: Sliders,
    title: 'Tùy chỉnh',
    text: 'Thiết kế giải pháp theo nhu cầu riêng của từng doanh nghiệp.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.1,
    },
  }),
};

export default function TrustBadges() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Tại sao chọn ASI?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chúng tôi không chỉ cung cấp công cụ, mà còn mang lại giá trị thực
            sự giúp doanh nghiệp bạn tăng trưởng bền vững.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.6 }}
              className={`relative flex flex-col items-center text-center p-6 rounded-2xl border ${badge.border} ${badge.bg} transition-all duration-300 hover:shadow-xl hover:scale-101 hover:border-transparent`}
            >
              <div
                className={`absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full ${badge.bg} border-4 ${badge.border}`}
              >
                <badge.icon className={`w-6 h-6 ${badge.color}`} />
              </div>
              <p
                className={`mt-8 font-poppins font-bold text-2xl ${badge.color}`}
              >
                {badge.title}
              </p>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                {badge.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
