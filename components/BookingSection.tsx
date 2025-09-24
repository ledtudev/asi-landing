'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function BookingSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: 'asi-giai-phap-chatbot-ai-tu-van',
      });
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#000000' },
          dark: { 'cal-brand': '#fafafa' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <section
      id="booking"
      className="relative bg-white max-w-screen overflow-x-hidden pt-20"
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Cal
          namespace="asi-giai-phap-chatbot-ai-tu-van"
          calLink="le-đ.-tu-ovlmd8/asi-giai-phap-chatbot-ai-tu-van"
          style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          config={{ layout: 'month_view' }}
        />
        ;
      </div>
    </section>
  );
}
