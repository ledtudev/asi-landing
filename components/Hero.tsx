import { useConsultation } from '@/contexts/ConsultationContext';
import { motion } from 'framer-motion';
import { Clock, Shield, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const { openConsultation } = useConsultation();
  const achievements = [
    {
      icon: TrendingUp,
      title: 'Giảm 22% chi phí vận hành',
      description: 'Doanh nghiệp tiết kiệm trung bình 1,2 tỷ VNĐ/năm',
      color: 'text-gray-900',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200',
      position: '-top-16 -left-20',
    },
    {
      icon: Zap,
      title: 'Hiệu suất tăng 18%',
      description: 'Đội ngũ xử lý thêm 500+ yêu cầu mỗi tháng',
      color: 'text-gray-900',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200',
      position: 'top-20 -right-28',
    },
    {
      icon: Clock,
      title: 'Rút ngắn 55% thời gian xử lý',
      description: 'Quy trình giảm từ 14 ngày xuống còn 6 ngày',
      color: 'text-gray-900',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200',
      position: 'bottom-16 -right-24',
    },
    {
      icon: Shield,
      title: '99.95% độ tin cậy',
      description: 'Downtime dưới 20 phút/năm',
      color: 'text-gray-900',
      bgColor: 'bg-white',
      borderColor: 'border-gray-200',
      position: 'top-1/2 -left-28',
    },
  ];

  return (
    <section className="relative min-h-screen pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 myGradient">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-[9vw] leading-[1.15] sm:text-5xl sm:leading-tight md:text-7xl font-bold text-white mb-6 break-words"
          >
            Chuyển đổi doanh nghiệp{' '}
            <span className="text-cyan-400">bằng Trí tuệ nhân tạo</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Sản phẩm của chúng tôi là bộ giải pháp AI tổng thể, bao gồm nhiều
            Module hỗ trợ doanh nghiệp từ bán hàng đến quản trị doanh nghiệp
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                openConsultation(
                  'Đăng ký ngay',
                  'Để lại thông tin để chúng tôi tư vấn giải pháp AI phù hợp nhất cho doanh nghiệp của bạn',
                )
              }
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              <Link href="#booking"> Đăng ký ngay</Link>
            </motion.button>
          </motion.div>

          {/* AI Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="relative max-w-6xl mx-auto "
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Dashboard Header */}
              <div className="bg-blue-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <span className="font-semibold text-gray-900">ASI AI</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex">
                {/* Image */}
                <Image
                  height={500}
                  width={500}
                  className="w-full h-full"
                  alt="hero"
                  src="/images/hero.png"
                />
              </div>
            </div>
            {/* Achievement Labels */}
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`absolute ${achievement.position} hidden lg:block`}
              >
                <div
                  className={`${achievement.bgColor} ${achievement.borderColor} rounded-2xl p-4 border-2 shadow-lg backdrop-blur-sm bg-white/80 hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 ${achievement.bgColor} rounded-xl flex items-center justify-center`}
                    >
                      <achievement.icon
                        className={`w-5 h-5 ${achievement.color}`}
                      />
                    </div>
                    <div>
                      <div className={`text-lg font-bold ${achievement.color}`}>
                        {achievement.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
}
