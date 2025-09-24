'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Logo from './Logo';

const partners = [
  {
    name: 'Đối tác 1',
    logo: '/images/3-do.png',
  },
  {
    name: 'Đối tác 2',
    logo: '/images/access-trade.png',
  },
  {
    name: 'Đối tác 3',
    logo: '/images/dc-group.png',
  },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
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
              <Logo className="w-10 h-10 rounded-lg" />

              <span className="text-2xl font-bold text-blue-600">
                ASI Smart Sales
              </span>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <span className="font-medium">Tên đầy đủ: </span>
                Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI
              </p>
              <p>
                <span className="font-medium">Tên tiếng nước ngoài: </span>
                ASI SMART SALES CONSULTING AND SOLUTIONS COMPANY LIMITED
              </p>
              <p>
                <span className="font-medium">Tên viết tắt: </span>
                CTTNHH TVGP BÁN HÀNG THÔNG MINH ASI
              </p>

              <div className="flex items-start space-x-3 mt-2">
                <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                <p>
                  Số nhà 7A ngõ 93, Tổ 2, Phường Hoàng Văn Thụ, Quận Hoàng Mai,
                  Thành phố Hà Nội
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                <p>vnasi.group@gmail.com</p>
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
                    Hotline tư vấn
                  </p>
                  <p className="text-lg font-semibold text-blue-600">
                    0973 448 052
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    Email hỗ trợ
                  </p>
                  <p className="text-lg font-semibold text-blue-600">
                    vnasi.group@gmail.com
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
                Chính sách bảo mật thông tin
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
                Chính sách khách hàng
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

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            Đối Tác Của Chúng Tôi
          </h3>
          <div className="flex justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8 flex-wrap">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={130}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
