import { useConsultation } from '@/contexts/ConsultationContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SolutionsSection() {
  const { openConsultation } = useConsultation();
  const solutions = [
    {
      title: 'AI Chatbot Thông Minh',
      highlighted: 'Thông Minh',
      description:
        'AI AGENT có khả năng tư vấn sản phẩm, chốt đơn, tạo báo cáo... phù hợp với nhiều ngành hàng: thời trang, F&B, giáo dục, du lịch.',
      features: [
        'Chủ shop tạo chatbot dễ dàng trong vài phút',
        'AI Agent tuỳ chỉnh theo ngành hàng: hỗ trợ và tự động hoá nghiệp vụ sales, chăm sóc khách hàng, báo cáo… như một NHÂN VIÊN ảo tích hợp đa nền tảng.',
        'Training AI bằng cách nhập kiến thức sản phẩm',
      ],
      imagePosition: 'left',
      urlImage: '/images/solution-img-1',
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
      urlImage: '/images/solution-img-2',
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
      urlImage: '/images/solution-img-3',
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
      urlImage: '/images/solution-img-4',
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
      urlImage: '/images/solution-img-5',
    },
  ];

  return (
    <section
      id="solutions"
      className="py-20 bg-gradient-to-b from-blue-50 to-white max-w-screen overflow-hidden"
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
          <h2
            className="text-5xl pt-28 md:text-6xl font-bold mb-8 
              bg-gradient-to-r from-[#13B34E] to-[#1677FF] bg-clip-text text-transparent"
          >
            Giải pháp nổi bật
          </h2>

          <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-10">
            Các sản phẩm AI đa dạng của chúng tôi bao gồm: AI Agent chatbot, AI
            quản lý fanpage, AI hỗ trợ tạo nội dung, AI phân tích quảng cáo và
            quản trị nội bộ... Dễ dàng triển khai, ứng dụng và tạo workflow chỉ
            với một click.
          </p>
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
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">
                    {solution.title.split(solution.highlighted)[0]}
                    <span className="bg-gradient-to-r from-[#FF9616] to-[#1677FF] bg-clip-text text-transparent">
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

              {/* Visual */}
              <div
                className={`${
                  solution.imagePosition === 'right' ? 'lg:col-start-1' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <SolutionStillImage src={`${solution.urlImage}.png`} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SolutionStillImage({ src }: { src: string }) {
  return (
    <div className="relative rounded-3xl border border-gray-100 bg-gradient-to-br from-sky-50 to-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.25)]">
      {/* Ambient background blob for depth */}
      <div className="pointer-events-none absolute -top-10 -left-6 h-40 w-40 rounded-full bg-sky-100 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-blue-100 blur-3xl opacity-60" />

      {/* Image frame */}
      <div className="relative h-64 sm:h-72 md:h-96 lg:h-[28rem] flex items-center justify-center p-4 md:p-6">
        <Image
          src={src}
          alt="solution preview"
          className="max-h-full w-auto object-contain drop-shadow-xl"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}
