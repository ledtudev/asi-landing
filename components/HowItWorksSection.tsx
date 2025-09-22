'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Rocket, Settings, Users, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
    title: 'Sign Up',
    description:
      'Create your account in just a few clicks and get started right away.',
    icon: Users,
    image: '/images/aichatbot.png',
  },
  {
    id: 2,
    title: 'Setup',
    description:
      'Customize your settings and integrate with your favorite tools.',
    icon: Settings,
    image: '/images/aichatbot.png',
  },
  {
    id: 3,
    title: 'Launch',
    description:
      'Kick off your project with powerful automation and workflows.',
    icon: Rocket,
    image: '/images/aichatbot.png',
  },
  {
    id: 4,
    title: 'Scale',
    description: 'Grow faster with insights, reports, and advanced features.',
    icon: Zap,
    image: '/images/aichatbot.png',
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 px-4 sm:px-6 lg:px-12">
        {/* Sticky Image */}
        <div className="lg:sticky lg:top-24 h-[40vh] sm:h-[50vh] lg:h-[80vh] flex items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeStep}
              src={steps.find((s) => s.id === activeStep)?.image}
              alt={`Step ${activeStep}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
            />
          </AnimatePresence>
        </div>

        {/* Steps + timeline */}
        <div className="relative space-y-12 sm:space-y-16 lg:space-y-32 lg:snap-y lg:snap-mandatory">
          {/* Vertical line (desktop only) */}
          <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200" />

          {steps.map((step) => (
            <StepBlock key={step.id} step={step} onInView={setActiveStep} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepBlock({
  step,
  onInView,
}: {
  step: Step;
  onInView: (id: number) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: '-100px 0px',
  });

  useEffect(() => {
    if (inView) {
      onInView(step.id);
    }
  }, [inView, onInView, step.id]);

  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className="min-h-[48vh] sm:min-h-[56vh] lg:min-h-screen flex flex-col justify-center lg:snap-start relative"
    >
      {/* Dot icon on the timeline (desktop only) */}
      <div className="hidden lg:flex absolute left-6 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg">
        <Icon size={22} />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-lg lg:ml-20"
      >
        <span className="block text-sm font-semibold text-indigo-600 mb-2">
          Step {step.id}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          {step.title}
        </h3>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}
