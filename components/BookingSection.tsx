'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function BookingSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <section id="booking" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Cal
          namespace="30min"
          calLink="le-đ.-tu-ovlmd8/30min"
          style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          config={{ layout: 'month_view' }}
        />
        ;
      </div>
    </section>
  );
}
