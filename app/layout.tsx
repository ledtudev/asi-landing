import { ConsultationProvider } from '@/contexts/ConsultationContext';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Poppins } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://asi.example.com'), // Thay bằng domain thật của bạn
  title: {
    default: 'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI',
    template: '%s | ASI Smart Sales',
  },
  description:
    'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI (MST: 0111020361) chuyên cung cấp giải pháp AI, chatbot, tự động hóa quy trình cho doanh nghiệp vừa và nhỏ tại Việt Nam.',
  keywords: [
    'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI',
    'ASI SMART SALES CONSULTING AND SOLUTIONS COMPANY LIMITED',
    'CTTNHH TVGP BÁN HÀNG THÔNG MINH ASI',
    '0111020361',
    'AI',
    'chatbot',
    'automation',
    'tự động hóa',
    'doanh nghiệp',
    'SMB',
    'Việt Nam',
    'Hà Nội',
  ],
  authors: [
    {
      name: 'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI',
      url: 'https://asi.example.com',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://asi.example.com',
    siteName: 'Công ty TNHH tư vấn và giải pháp bán hàng thông minh ASI',
    title: 'ASI - Giải pháp AI & Chatbot cho doanh nghiệp',
    description:
      'Tăng trưởng bằng AI: Chatbot hỗ trợ khách hàng, tự động hóa và tích hợp nhanh từ ASI.',
    images: [
      {
        url: '/images/aichatbot.png',
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
    images: ['/images/aichatbot.png'],
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
    canonical: 'https://asi.example.com',
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.variable} ${poppins.variable} scroll-smooth`}
      >
        <ConsultationProvider>{children}</ConsultationProvider>
      </body>
    </html>
  );
}
