import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-blue-600">
                SmartSelly
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700 font-medium">Hà Nội</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Tầng 17 Toà nhà Center Building Hapulico Complex, số 1
                    Nguyễn Huy Tưởng, Phường Thanh Xuân, Thành phố Hà Nội
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    Hồ Chí Minh
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Văn Phòng Hồ Chí Minh Số 127, Đường Võ Văn Tần, Phường Xuân
                    Hòa, TP Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Customer Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900">
              Hỗ trợ khách hàng
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    Hotline Sale Martech
                  </p>
                  <p className="text-lg font-semibold text-blue-600">
                    1900 63 64 65
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    Email sale
                  </p>
                  <p className="text-lg font-semibold text-blue-600">
                    smartselly@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    Tổng đài chăm sóc khách hàng
                  </p>
                  <p className="text-lg font-semibold text-blue-600">
                    0123456789
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900">Về chúng tôi</h3>

            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Chính sách bảo vệ thông tin cá nhân
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Điều khoản sử dụng
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Chính sách
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Liên hệ
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2024 SmartSelly. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
