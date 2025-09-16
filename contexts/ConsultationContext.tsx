'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface ConsultationContextType {
  isOpen: boolean;
  title: string;
  description: string;
  openConsultation: (title?: string, description?: string) => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(
  undefined,
);

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Nhận tư vấn miễn phí');
  const [description, setDescription] = useState(
    'Để lại thông tin để chúng tôi tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn',
  );

  const openConsultation = (newTitle?: string, newDescription?: string) => {
    if (newTitle) setTitle(newTitle);
    if (newDescription) setDescription(newDescription);
    setIsOpen(true);
  };

  const closeConsultation = () => {
    setIsOpen(false);
  };

  return (
    <ConsultationContext.Provider
      value={{
        isOpen,
        title,
        description,
        openConsultation,
        closeConsultation,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (context === undefined) {
    throw new Error(
      'useConsultation must be used within a ConsultationProvider',
    );
  }
  return context;
}
