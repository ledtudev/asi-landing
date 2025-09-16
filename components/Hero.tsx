import { useConsultation } from '@/contexts/ConsultationContext';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, Shield, TrendingUp, Zap } from 'lucide-react';

export default function HeroSection() {
  const { openConsultation } = useConsultation();
  const achievements = [
    {
      icon: TrendingUp,
      title: 'Giảm 22% chi phí vận hành',
      description: 'Doanh nghiệp tiết kiệm trung bình 1,2 tỷ VNĐ/năm',
      color: 'text-gray-900', // chữ đậm sang hơn
      bgColor: 'bg-white', // nền trắng
      borderColor: 'border-gray-200', // viền xám nhạt
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
            className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6"
          >
            Chuyển đổi doanh nghiệp{' '}
            <span className="text-cyan-400">bằng Trí tuệ nhân tạo</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
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
              Đăng ký ngay
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
                {/* Sidebar */}
                <div className="w-64 bg-blue-900 text-white p-6">
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">S</span>
                      </div>
                      <span className="font-semibold">ASI</span>
                    </div>
                    <div className="text-xs text-blue-300 uppercase tracking-wider">
                      AI DASHBOARD
                    </div>
                  </div>

                  {/* AI Stats Box */}
                  <div className="bg-blue-500 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium">
                        AI đã xử lý 1,247 cuộc trò chuyện hôm nay
                      </span>
                    </div>
                  </div>

                  {/* Navigation Items */}
                  <div className="space-y-2">
                    <div className="text-blue-200 text-sm py-2">AI Chatbot</div>
                    <div className="text-blue-200 text-sm py-2">Phân tích</div>
                    <div className="text-blue-200 text-sm py-2">Báo cáo</div>
                    <div className="text-blue-200 text-sm py-2">Cài đặt</div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-8 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* AI Cards */}
                    <div className="bg-blue-50 rounded-lg p-6 h-32 border border-blue-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🤖</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          AI Chatbot
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        247 cuộc trò chuyện
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6 h-32 border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">📊</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          Phân tích
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">+15% doanh thu</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-6 h-32 border border-purple-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">📈</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          Báo cáo
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">12 báo cáo mới</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-6 h-32 border border-orange-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">⚡</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          Tự động hóa
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">89% hoàn thành</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-6 h-32 border border-red-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🎯</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          Mục tiêu
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">75% đạt được</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-6 h-32 border border-indigo-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🔧</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          Tích hợp
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">5 nền tảng</p>
                    </div>
                  </div>
                </div>
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

      {/* Zalo Widget */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
        whileHover={{ scale: 1.01, x: -1 }}
        className="fixed bottom-6 right-6 z-50 hidden lg:block"
      >
        <div className="relative">
          {/* Zalo Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              openConsultation(
                'Chat Zalo',
                'Kết nối với chúng tôi qua Zalo để được tư vấn trực tiếp',
              )
            }
            className="w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 group"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.button>

          {/* Notification Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white rounded-lg p-3 shadow-lg border border-gray-200 whitespace-nowrap"
          >
            <div className="text-sm font-medium text-gray-900">
              Chat với chúng tôi
            </div>
            <div className="text-xs text-gray-500">Hỗ trợ 24/7</div>
            {/* Arrow */}
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
}
