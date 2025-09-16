import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import PricingPopup from './PricingPopup';

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
  } | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePricingClick = (planName: string, planPrice: string) => {
    setSelectedPlan({ name: planName, price: planPrice });
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPlan(null);
  };
  const pricingPlans = [
    {
      name: 'Cơ bản',
      price: '800k',
      period: '/ tháng',
      target: 'Cá nhân',
      points: '6.000 point / ngày',
      features: [
        'Tích hợp Facebook Messenger',
        'Tích hợp Zalo',
        'Tích hợp Website',
        'Báo cáo cơ bản',
      ],
      buttonText: 'Nhận tư vấn ngay',
      buttonStyle: 'bg-gray-500 hover:bg-gray-600',
      isPopular: false,
    },
    {
      name: 'Nâng cao',
      price: '3.500k',
      period: '/ tháng',
      target: 'Nhóm nhỏ',
      points: '30.000 point / ngày',
      features: [
        'Tích hợp Facebook Messenger',
        'Tích hợp Zalo',
        'Tích hợp Website',
        'Báo cáo chi tiết',
      ],
      buttonText: 'Nhận tư vấn ngay',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700',
      isPopular: true,
    },
    {
      name: 'VIP',
      price: '12.500k',
      period: '/ tháng',
      target: 'Nhóm lớn',
      points: '150.000 point / ngày',
      features: [
        'Tích hợp Facebook Messenger',
        'Tích hợp Zalo',
        'Tích hợp Website',
        'Báo cáo nâng cao',
      ],
      buttonText: 'Nhận tư vấn ngay',
      buttonStyle: 'bg-gray-500 hover:bg-gray-600',
      isPopular: false,
    },
    {
      name: 'Custom',
      price: 'Liên hệ',
      period: '',
      target: '',
      points: 'Point theo yêu cầu',
      features: [
        'Tích hợp Facebook Messenger',
        'Tích hợp Zalo',
        'Tích hợp Website',
        'Báo cáo tùy chỉnh',
      ],
      buttonText: 'Nhận tư vấn ngay',
      buttonStyle: 'bg-gray-500 hover:bg-gray-600',
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Bảng giá linh hoạt
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Chọn gói theo nhu cầu sử dụng. Dễ mở rộng - chi phí minh bạch -
            không phát sinh.
          </p>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-4 rounded-lg text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Đăng ký ngay
          </motion.button>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.005 }}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 ${
                plan.isPopular
                  ? 'border-blue-500 shadow-xl'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Phổ biến nhất
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 text-lg">{plan.period}</span>
                </div>

                {plan.target && (
                  <p className="text-gray-600 text-sm mb-4">{plan.target}</p>
                )}

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700 font-medium">
                    {plan.points}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  handlePricingClick(plan.name, plan.price + plan.period)
                }
                className={`w-full ${
                  plan.buttonStyle
                } text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 ${
                  plan.isPopular ? 'shadow-lg' : 'shadow-md'
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500">
            Các gói bản đã bao gồm thuế, có điều chỉnh giá tùy thuộc vào nhu cầu
          </p>
        </motion.div>
      </div>

      {/* Pricing Popup */}
      {selectedPlan && (
        <PricingPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          planName={selectedPlan.name}
          planPrice={selectedPlan.price}
        />
      )}
    </section>
  );
}
