import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kết nối Zalo với ASI | Hỗ trợ 24/7',
  description:
    'Quét mã QR để kết nối Zalo với ASI. Nhận tư vấn và hỗ trợ trực tiếp về các giải pháp AI, chatbot và tự động hóa cho doanh nghiệp của bạn.',
  alternates: {
    canonical: '/zalo',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
