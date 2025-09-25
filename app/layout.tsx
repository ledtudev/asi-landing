import { ConsultationProvider } from '@/contexts/ConsultationContext';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://salingbot.com'),
  title: {
    default: 'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI',
    template: '%s | ASI Smart Sales',
  },
  description:
    'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI (MST: 0111020361) chuyên cung cấp giải pháp AI, chatbot, tự động hóa quy trình cho doanh nghiệp vừa và nhỏ tại Việt Nam.',
  keywords: [
    'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI',
    'ASI SMART SALES CONSULTING AND SOLUTIONS COMPANY LIMITED',
    'AI',
    'chatbot',
    'automation',
    'tự động hóa',
    'doanh nghiệp',
    'Việt Nam',
    'Hà Nội',
  ],
  authors: [
    {
      name: 'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI',
      url: 'https://salingbot.com',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://salingbot.com',
    siteName: 'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI',
    title: 'ASI - Giải pháp AI & Chatbot cho doanh nghiệp',
    description:
      'Tăng trưởng bằng AI: Chatbot hỗ trợ khách hàng, tự động hóa và tích hợp nhanh từ ASI.',
    images: [
      {
        url: '/images/solution-img-1.png',
        width: 1200,
        height: 630,
        alt: 'ASI - AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASI - AI Solutions & Chatbots',
    description:
      'Triển khai chatbot AI, tự động hóa quy trình và giải pháp AI cho SMBs.',
    images: ['/images/solution-img-1.png'],
  },
  icons: {
    icon: [
      { url: '/logo/asi-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo/asi-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/asi-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/logo/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/logo/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      {
        url: '/logo/apple-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        url: '/logo/apple-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: 'https://salingbot.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI',
    alternateName: 'ASI SMART SALES CONSULTING AND SOLUTIONS COMPANY LIMITED',
    url: 'https://asi.example.com', // <<-- THAY BẰNG DOMAIN THẬT
    logo: 'https://asi.example.com/logo/asi-icon-192x192.png', // <<-- THAY BẰNG DOMAIN THẬT
    email: 'vnasi.group@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Số nhà 7A ngõ 93, Tổ 2, Phường Hoàng Văn Thụ',
      addressLocality: 'Quận Hoàng Mai',
      addressRegion: 'Hà Nội',
      postalCode: '100000',
      addressCountry: 'VN',
    },
    vatID: '0111020361',
  };

  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ConsultationProvider>{children}</ConsultationProvider>
      </body>
    </html>
  );
}
