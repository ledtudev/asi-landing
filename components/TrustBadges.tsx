import { motion } from 'framer-motion';
import { Award, Clock, Shield, Users } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Users,
      number: '500+',
      text: 'Doanh nghiệp tin dùng',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Award,
      number: '99.9%',
      text: 'Tỷ lệ hài lòng',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Shield,
      number: '24/7',
      text: 'Hỗ trợ khách hàng',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      number: '5 phút',
      text: 'Triển khai nhanh',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Được tin tưởng bởi hàng nghìn doanh nghiệp
          </h3>
          <p className="text-gray-600">
            Tham gia cùng cộng đồng doanh nghiệp đang sử dụng AI để tăng trưởng
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${badge.bgColor} rounded-xl p-6 text-center`}
            >
              <div className="flex justify-center mb-3">
                <div
                  className={`w-12 h-12 ${badge.bgColor} rounded-full flex items-center justify-center`}
                >
                  <badge.icon className={`w-6 h-6 ${badge.color}`} />
                </div>
              </div>
              <div className={`text-2xl font-bold ${badge.color} mb-1`}>
                {badge.number}
              </div>
              <div className="text-sm text-gray-600">{badge.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
