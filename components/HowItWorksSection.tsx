'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Rocket, Settings, Users, Zap } from 'lucide-react';
import { forwardRef, useEffect, useRef, useState } from 'react';

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: 'Đăng ký',
    description: 'Tạo tài khoản chỉ với vài cú click và bắt đầu ngay lập tức.',
    icon: Users,
    image: '/images/solution-img-1.png',
  },
  {
    id: 2,
    title: 'Thiết lập',
    description: 'Tùy chỉnh cài đặt và kết nối với các công cụ bạn yêu thích.',
    icon: Settings,
    image: '/images/solution-img-2.png',
  },
  {
    id: 3,
    title: 'Triển khai',
    description: 'Bắt đầu dự án với tự động hóa và quy trình mạnh mẽ.',
    icon: Rocket,
    image: '/images/solution-img-3.png',
  },
  {
    id: 4,
    title: 'Mở rộng',
    description:
      'Tăng trưởng nhanh hơn với phân tích, báo cáo và tính năng nâng cao.',
    icon: Zap,
    image: '/images/solution-img-4.png',
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  // Track toàn bộ section
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, {
    margin: '-30% 0px -30% 0px',
    amount: 0.1,
  });

  return (
    <section ref={sectionRef} className="relative bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Bán hàng thông minh hơn{' '}
            </span>
            <span className="bg-gradient-to-r from-[#FF9616] to-[#1677FF]  bg-clip-text text-transparent">
              cùng Chatbot AI
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Lược đồ dưới đây cho thấy cách chúng tôi tinh gọn quy trình bán
            hàng, giúp bạn triển khai nhanh và tự tin hơn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Sticky Image - Giảm chiều cao trên mobile */}
          <div className="lg:sticky lg:top-24 h-0 lg:h-[80vh] flex items-center">
            {/* Mobile Floating Image */}
            <AnimatePresence>
              {sectionInView && (
                <motion.div
                  className="lg:hidden fixed z-50 right-[40px]  bottom-5 w-[200px] h-[200px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-2xl shadow-2xl border-4 border-white bg-white relative">
                    <motion.img
                      key={activeStep}
                      src={steps.find((s) => s.id === activeStep)?.image}
                      alt={`Bước ${activeStep}`}
                      className="w-full h-full object-cover rounded-xl"
                      initial={{ opacity: 0.7, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                      {activeStep}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Image */}
            <div className="hidden lg:flex w-full justify-end items-center">
              <div className="w-[60%] max-w-md">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStep}
                    src={steps.find((s) => s.id === activeStep)?.image}
                    alt={`Bước ${activeStep}`}
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Steps + Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#48d0f6] to-[#2d6ae6]" />
            <div className="space-y-32">
              {steps.map((step) => (
                <StepBlock key={step.id} step={step} onInView={setActiveStep} />
              ))}
            </div>
          </div>
        </div>

        {/* Giảm mobile spacing */}
        <div className="lg:hidden h-40" />
      </div>
    </section>
  );
}

// StepBlock với chiều cao hợp lý hơn
interface StepBlockProps {
  step: Step;
  onInView: (id: number) => void;
}

const StepBlock = forwardRef<HTMLDivElement, StepBlockProps>(
  ({ step, onInView }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const actualRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;

    const inView = useInView(actualRef, {
      margin: '-10% 0px -10% 0px',
      amount: 0.2,
    });

    useEffect(() => {
      if (inView) {
        onInView(step.id);
      }
    }, [inView, onInView, step.id]);

    const Icon = step.icon;

    return (
      <div
        ref={actualRef}
        className="min-h-[30vh] sm:min-h-[40vh] lg:min-h-screen flex items-center relative py-4"
      >
        {/* Timeline dot */}
        <div className="flex-shrink-0 relative">
          <div
            className={`
              flex items-center justify-center rounded-full
              bg-gradient-to-r from-[#5494cc] to-[#286dae]
              text-white shadow-lg
              relative z-10
              w-12 h-12 sm:w-14 sm:h-14
              ${step.id === 1 ? 'mt-4 sm:mt-8' : 'mt-0'}
            `}
          >
            <Icon size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="ml-4 sm:ml-6 lg:ml-20 flex-1 pt-1 sm:pt-2"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="block text-sm font-semibold mb-1 sm:mb-2 bg-gradient-to-r from-[#FF9616] to-[#1677FF] bg-clip-text text-transparent"
          >
            Bước {step.id}
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3"
          >
            {step.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg"
          >
            {step.description}
          </motion.p>
        </motion.div>
      </div>
    );
  },
);

StepBlock.displayName = 'StepBlock';
