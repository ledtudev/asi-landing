import { useConsultation } from '@/contexts/ConsultationContext';
import { motion } from 'framer-motion';

export default function SolutionsSection() {
  const { openConsultation } = useConsultation();
  const solutions = [
    {
      title: 'AI Chatbot Thông Minh',
      highlighted: 'Thông Minh',
      description:
        'Tự động tư vấn sản phẩm, trả lời inbox, chốt đơn, báo cáo hiệu suất. Phù hợp cho thời trang, F&B, giáo dục, du lịch - không cần code.',
      features: [
        'Tạo chatbot trong vài phút',
        'Cá nhân hóa theo ngành hàng: thời trang, F&B, du lịch, giáo dục...',
        'Tự động tư vấn sản phẩm, trả lời inbox, chốt đơn, báo cáo hiệu suất.',
      ],
      icon: '🤖',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      imagePosition: 'left',
      laptopContent: 'chatbot',
    },
    {
      title: 'AI Quản lý Marketing & Fanpage',
      highlighted: 'Marketing & Fanpage',
      description:
        'Tạo content SEO, quảng cáo, minigame. Tự động phản hồi inbox/comment theo tone thương hiệu, gợi ý content theo mùa vụ và hành vi khách hàng.',
      features: [
        'Phản hồi bình luận/inbox có cảm xúc theo tone thương hiệu',
        'Tự viết bài chuẩn SEO, lên lịch đăng, tạo minigame',
        'Gợi ý kế hoạch content theo mùa vụ, insight khách hàng',
      ],
      icon: '📱',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      imagePosition: 'right',
      laptopContent: 'marketing',
    },
    {
      title: 'AI cho Giáo dục',
      highlighted: 'Giáo dục',
      description:
        'Phân tích bài giảng, tạo slide, quiz, chatbot học tập. Tự đăng lên hệ thống LMS, giảm 50% thời gian học tập và quản lý nội dung.',
      features: [
        'Tự chuyển video bài giảng thành khóa học hoàn chỉnh',
        'Tạo slide, quiz, chatbot học tập cá nhân hóa',
        'Tự đăng lên LMS và bản khoa học để đăng',
      ],
      icon: '🎓',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      imagePosition: 'left',
      laptopContent: 'education',
    },
    {
      title: 'AI Phân tích Quảng cáo cho Agency',
      highlighted: 'Quảng cáo cho Agency',
      description:
        'Kết nối tài khoản quảng cáo, đánh giá hiệu quả, đề xuất ngân sách và content phù hợp. Tự xuất báo cáo định kỳ theo format Agency chuyên nghiệp.',
      features: [
        'Kết nối tài khoản quảng cáo, phân tích hiệu suất tự động',
        'Gợi ý loại bài nên dùng, điều chỉnh ngân sách thông minh',
        'Xuất báo cáo định kỳ dưới nhiều định dạng (PDF, Slide...)',
      ],
      icon: '📊',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      imagePosition: 'right',
      laptopContent: 'analytics',
    },
    {
      title: 'AI cho Quản trị Doanh nghiệp',
      highlighted: 'Quản trị Doanh nghiệp',
      description:
        'Tạo thư viện hỏi đáp từ SOP và chính sách công ty. Giao việc bằng chat, theo dõi tiến độ, giúp tiết kiệm thời gian vận hành và nhân lực hành chính.',
      features: [
        'Tạo thư viện hỏi đáp nội bộ từ file tài liệu, chính sách',
        'Giao việc, theo dõi tiến độ, truy vấn tài liệu bằng chat',
        'Tối ưu thời gian và chi phí vận hành hành chính',
      ],
      icon: '🏢',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      imagePosition: 'left',
      laptopContent: 'enterprise',
    },
  ];

  // Component for laptop mockup
  const LaptopMockup = ({
    content,
    className = '',
  }: {
    content: string;
    className?: string;
  }) => {
    const renderContent = () => {
      switch (content) {
        case 'chatbot':
          return (
            <div className="bg-white rounded-lg overflow-hidden h-80">
              <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                  ASI.ai/dashboard
                </div>
              </div>
              <div className="flex h-full">
                <div className="w-16 bg-blue-900 flex flex-col items-center py-4 space-y-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">🏠</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">💬</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">⚙️</span>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        case 'marketing':
          return (
            <div className="bg-white rounded-lg overflow-hidden h-80">
              <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                  marketing.smartselly.ai
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">Chiến dịch 1</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Tiến độ</span>
                    <span className="text-sm font-bold">3/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-3/10"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        1.2K
                      </div>
                      <div className="text-xs text-gray-500">Lượt xem</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        2.5K
                      </div>
                      <div className="text-xs text-gray-500">Tương tác</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        case 'education':
          return (
            <div className="bg-white rounded-lg overflow-hidden h-80">
              <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                  education.smartselly.ai
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">3D Design</h3>
                <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🍣</div>
                    <div className="text-sm text-gray-600">
                      Chương 1: Làm Quen Với Blender
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        case 'analytics':
          return (
            <div className="bg-white rounded-lg overflow-hidden h-80">
              <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                  analytics.smartselly.ai
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">Báo cáo hiệu suất</h3>
                <div className="space-y-4">
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-sm text-gray-500">
                      📊 Biểu đồ phân tích
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold">3.8K</div>
                      <div className="text-xs text-gray-500">Lượt click</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">2.1K</div>
                      <div className="text-xs text-gray-500">Chuyển đổi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        case 'enterprise':
          return (
            <div className="bg-white rounded-lg overflow-hidden h-80">
              <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                  enterprise.smartselly.ai
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">Quản lý dự án</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm">Task 1 - Hoàn thành</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-sm">Task 2 - Đang xử lý</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <span className="text-sm">Task 3 - Chờ xử lý</span>
                  </div>
                </div>
              </div>
            </div>
          );
        default:
          return <div className="h-80 bg-gray-100 rounded-lg"></div>;
      }
    };

    return (
      <div className={`bg-gray-800 rounded-xl p-3 shadow-2xl ${className}`}>
        {renderContent()}
      </div>
    );
  };

  return (
    <section
      id="solutions"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 pb-10"
        >
          <h2 className="text-5xl pt-28 md:text-6xl font-bold text-green-600 mb-8">
            Giải pháp nổi bật
          </h2>
          <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-10">
            Các sản phẩm AI đa dạng của chúng tôi bao gồm: AI Agent chatbot, AI
            quản lý fanpage, AI hỗ trợ tạo nội dung, AI phân tích quảng cáo và
            quản trị nội bộ... Dễ dàng triển khai, ứng dụng và tạo workflow chỉ
            với một click.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              openConsultation(
                'Giải pháp nổi bật',
                'Tìm hiểu các giải pháp AI phù hợp nhất cho doanh nghiệp của bạn',
              )
            }
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-10 py-4 rounded-lg text-xl shadow-2xl hover:shadow-3xl transition-all duration-200"
          >
            Đăng ký ngay
          </motion.button>
        </motion.div>
        <div className="mb-32"></div>
        {/* Individual Solution Sections */}
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`mb-32 ${index % 2 === 0 ? 'lg:mb-40' : 'lg:mb-40'}`}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                solution.imagePosition === 'right'
                  ? 'lg:grid-flow-col-dense'
                  : ''
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-8 ${
                  solution.imagePosition === 'right' ? 'lg:col-start-2' : ''
                }`}
              >
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                    {solution.title.split(solution.highlighted)[0]}
                    <span className="text-orange-500">
                      {solution.highlighted}
                    </span>
                    {solution.title.split(solution.highlighted)[1]}
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-lg text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Laptop Mockup */}
              <div
                className={`${
                  solution.imagePosition === 'right' ? 'lg:col-start-1' : ''
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <LaptopMockup content={solution.laptopContent} />

                  {/* Floating Chat Card for Chatbot */}
                  {solution.laptopContent === 'chatbot' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="absolute -right-8 top-8 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-64"
                    >
                      <div className="bg-blue-500 rounded-t-2xl -m-4 mb-3 p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <span className="text-blue-500 text-sm">🤖</span>
                          </div>
                          <span className="text-white text-sm font-semibold">
                            AI Assistant
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">⚡</span>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-2 text-xs">
                            <div className="h-2 bg-gray-300 rounded w-full mb-1"></div>
                            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">👤</span>
                          </div>
                          <div className="bg-blue-100 rounded-lg p-2 text-xs">
                            <div className="h-2 bg-blue-300 rounded w-full mb-1"></div>
                            <div className="h-2 bg-blue-300 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center space-x-2">
                        <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-xs text-gray-500">
                          Nhập tin nhắn...
                        </div>
                        <button className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs">→</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
