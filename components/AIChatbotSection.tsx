import { motion } from 'framer-motion';
import { SendHorizonal } from 'lucide-react';

export default function AIChatbotSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Enhanced Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Laptop Base */}
            <div className="relative mx-auto w-full max-w-2xl">
              {/* Laptop Screen */}
              <motion.div
                className="bg-gray-800 rounded-xl p-3 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-lg overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-6 py-3 flex items-center space-x-3 border-b">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-600">
                      chatbot.smartselly.ai
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex h-80">
                    {/* Sidebar */}
                    <div className="w-20 bg-blue-900 flex flex-col items-center py-6 space-y-6">
                      <motion.div
                        className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white text-lg">🏠</span>
                      </motion.div>
                      <motion.div
                        className="w-10 h-10 bg-gray-600 rounded-xl flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white text-lg">💬</span>
                      </motion.div>
                      <motion.div
                        className="w-10 h-10 bg-gray-600 rounded-xl flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white text-lg">⚙️</span>
                      </motion.div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6">
                      <div className="space-y-4">
                        <motion.div
                          className="h-5 bg-gray-200 rounded w-3/4"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.div>
                        <motion.div
                          className="h-5 bg-gray-200 rounded w-1/2"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5,
                          }}
                        ></motion.div>
                        <motion.div
                          className="h-5 bg-gray-200 rounded w-2/3"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1,
                          }}
                        ></motion.div>
                        <motion.div
                          className="h-5 bg-gray-200 rounded w-1/3"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1.5,
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Floating Chat Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, y: -2 }}
                className="absolute -right-12 top-12 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80"
              >
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl -m-6 mb-4 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-500 text-lg">🤖</span>
                    </div>
                    <div>
                      <span className="text-white text-lg font-semibold">
                        AI Assistant
                      </span>
                      <div className="text-blue-100 text-sm">
                        Đang hoạt động
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Chat Content */}
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3 text-sm">
                      <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">👤</span>
                    </div>
                    <div className="bg-blue-100 rounded-2xl p-3 text-sm">
                      <div className="h-3 bg-blue-300 rounded w-full mb-2"></div>
                      <div className="h-3 bg-blue-300 rounded w-2/3"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3 text-sm">
                      <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-4/5"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Chat Input */}
                <motion.div
                  className="mt-6 flex items-center space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                >
                  <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 text-sm text-gray-500">
                    Nhập tin nhắn...
                  </div>
                  <motion.button
                    className="w-10 h-10 bg-blue-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SendHorizonal className="text-white text-sm h-5" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Chatbot <span className="text-orange-500">Thông Minh</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                AI AGENT có khả năng tư vấn sản phẩm, chốt đơn, tạo báo cáo...
                phù hợp với nhiều ngành hàng: thời trang, F&B, giáo dục, du
                lịch.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
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
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Chủ shop tạo chatbot dễ dàng trong vài phút
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
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
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    AI Agent tùy chỉnh theo ngành hàng: hỗ trợ và tự động hóa
                    nghiệp vụ sales, chăm sóc khách hàng, báo cáo... như một{' '}
                    <strong className="text-orange-500">NHÂN VIÊN</strong> và
                    tích hợp đa nền tảng
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
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
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Training AI bằng cách nhập kiến thức sản phẩm
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-10 py-4 rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Trải nghiệm ngay
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
