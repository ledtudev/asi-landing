import { motion } from 'framer-motion';
import { BookOpen, Bot, Heart, ShoppingCart, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const achievements = [
    {
      icon: Bot,
      title: 'Tự Động Lên Đơn',
      description: 'Chuyển hội thoại thành đơn hàng tức thì.',
      position: 'top-[15%] right-[65%] 2xl:right-[80%] 2xl:w-[430px] w-[350px]',
    },
    {
      icon: BookOpen,
      title: 'CSKH 24/7',
      description: 'AI phản hồi tức thời, tăng tỷ lệ giữ chân khách.',
      position: 'top-[35%] right-[65%] 2xl:right-[80%] 2xl:w-[430px] w-[350px]',
    },
    {
      icon: Heart,
      title: 'Phân Tích Cảm Xúc',
      description: 'Thấu hiểu tâm lý, phản hồi đúng "gu" khách hàng.',
      position: 'top-[20%] left-[65%] 2xl:left-[80%] 2xl:w-[430px] w-[350px]',
    },
    {
      icon: ShoppingCart,
      title: 'Chuyên Gia Sản Phẩm',
      description: 'Huấn luyện AI bằng chính kiến thức sản phẩm',
      position: 'top-[40%] left-[65%] 2xl:left-[80%] 2xl:w-[430px] w-[350px]',
    },
    {
      icon: Users,
      title: 'Tối Ưu Nhân Sự',
      description: 'Giảm workload, tinh gọn quy trình làm việc.',
      position: 'top-[60%] left-[65%] 2xl:left-[80%] 2xl:w-[430px] w-[350px]',
    },
  ];
  return (
    <section className="relative min-h-screen max-w-screen overflow-hidden pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 myGradient">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-[9vw]  leading-[1.15] sm:text-5xl sm:leading-tight md:text-7xl font-bold text-white mb-6 break-words"
          >
            Chuyển đổi doanh nghiệp{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              bằng Trí tuệ nhân tạo
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Giải pháp AI tổng thể giúp doanh nghiệp tăng trưởng doanh thu, nâng
            cao hiệu suất và tối ưu vận hành
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
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
             text-white font-semibold px-8 py-4 rounded-lg text-lg 
             shadow-xl hover:shadow-2xl transition-all duration-200  
             focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
            >
              <Link href="#booking">Đăng ký ngay</Link>
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
                  <span className="font-semibold text-gray-900">ASI AI</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <Image
                height={2000}
                width={2000}
                className="w-full h-full"
                alt="hero"
                src="/images/hero.png"
              />
            </div>

            {/* Achievement Labels */}
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.3 + index * 0.2,
                }}
                whileHover={{
                  boxShadow: '0 12px 30px rgba(0,0,0,0.11)',
                }}
                className={`absolute ${achievement.position} hidden lg:block`}
              >
                <div
                  className="rounded-xl p-4 border border-gray-200 shadow-md 
                       bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100">
                      <achievement.icon className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-sm text-left font-semibold text-black">
                        {achievement.title}
                      </div>
                      <div className="text-sm text-left text-gray-600">
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
