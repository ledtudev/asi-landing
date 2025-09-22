'use client';

import { useMemo, useState } from 'react';

type DateKey = string;

interface TimeSlot {
  time: string;
}

interface BookingFormData {
  name: string;
  email: string;
  notes: string;
}

export default function BookingSection() {
  const today = useMemo(() => new Date(), []);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'calendar' | 'times' | 'form' | 'done'>(
    'calendar',
  );
  const [form, setForm] = useState<BookingFormData>({
    name: '',
    email: '',
    notes: '',
  });
  const [viewYear, setViewYear] = useState<number>(today.getFullYear());
  const [viewMonth, setViewMonth] = useState<number>(today.getMonth()); // 0..11

  // Visible month grid
  const monthDays = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const lastDay = new Date(viewYear, viewMonth + 1, 0).getDate();
    const days: Date[] = [];
    for (let d = 1; d <= lastDay; d++)
      days.push(new Date(viewYear, viewMonth, d));
    const blanks = (first.getDay() + 6) % 7; // Monday-first
    return { days, blanks };
  }, [viewMonth, viewYear]);

  const goPrevMonth = () => {
    setStep('calendar');
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    setStep('calendar');
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const timesByWeekday: Record<number, TimeSlot[]> = {
    1: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30'].map((t) => ({
      time: t,
    })),
    2: ['09:00', '09:30', '10:00', '10:30', '11:00'].map((t) => ({ time: t })),
    3: ['14:00', '14:30', '15:00', '15:30'].map((t) => ({ time: t })),
    4: ['09:00', '09:30', '10:00', '10:30'].map((t) => ({ time: t })),
    5: ['14:00', '14:30', '15:00'].map((t) => ({ time: t })),
  };

  const isSameDate = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const dateToKey = (d: Date): DateKey =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
      d.getDate(),
    ).padStart(2, '0')}`;

  const getTimesForDate = (date: Date): TimeSlot[] => {
    const weekday = date.getDay(); // 0 Sun..6 Sat
    if (weekday === 0 || weekday === 6) return [];
    return timesByWeekday[weekday] || [];
  };

  const proceedToTimes = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setStep('times');
  };

  const proceedToForm = (time: string) => {
    setSelectedTime(time);
    setStep('form');
  };

  const submitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('done');
  };

  return (
    <section id="booking" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Đặt lịch tư vấn
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Book lịch tư vấn nhanh trong 15 phút
          </h2>
          <p className="mt-3 text-gray-600">
            Chọn thời gian phù hợp, đội ngũ ASI sẽ liên hệ qua Google Meet/Zalo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4">
              <button
                onClick={goPrevMonth}
                className="px-3 py-1.5 text-sm rounded-md border border-gray-200 hover:bg-gray-50"
              >
                Tháng trước
              </button>
              <div className="text-sm font-semibold text-gray-700">
                {new Date(viewYear, viewMonth).toLocaleString('vi-VN', {
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
              <button
                onClick={goNextMonth}
                className="px-3 py-1.5 text-sm rounded-md border border-gray-200 hover:bg-gray-50"
              >
                Tháng sau
              </button>
            </div>
            <div className="px-6 pb-2 text-xs text-gray-500">
              Thứ 2 - Chủ nhật
            </div>
            <div className="grid grid-cols-7 gap-2 px-6 pb-6">
              {[...Array(monthDays.blanks)].map((_, i) => (
                <div key={`b-${i}`} className="h-10" />
              ))}
              {monthDays.days.map((d) => {
                const disabled =
                  d <
                    new Date(
                      today.getFullYear(),
                      today.getMonth(),
                      today.getDate(),
                    ) || getTimesForDate(d).length === 0;
                const active = selectedDate && isSameDate(d, selectedDate);
                return (
                  <button
                    key={dateToKey(d)}
                    onClick={() => !disabled && proceedToTimes(d)}
                    className={`h-10 rounded-lg text-sm font-medium transition-colors border ${
                      active
                        ? 'bg-blue-600 text-white border-blue-600'
                        : disabled
                        ? 'bg-gray-100 text-gray-400 border-gray-100'
                        : 'bg-white text-gray-700 hover:bg-blue-50 border-gray-200'
                    }`}
                  >
                    {d.getDate()}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            {step === 'calendar' && (
              <div className="text-gray-600">
                Chọn một ngày để xem thời gian trống
              </div>
            )}

            {step === 'times' && selectedDate && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="font-semibold text-gray-900">
                    {selectedDate.toLocaleDateString('vi-VN', {
                      weekday: 'long',
                      day: '2-digit',
                      month: '2-digit',
                    })}
                  </div>
                  <button
                    onClick={() => setStep('calendar')}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Quay lại
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {getTimesForDate(selectedDate).map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => proceedToForm(slot.time)}
                      className="rounded-lg border border-gray-200 px-4 py-3 text-sm hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 'form' && selectedDate && selectedTime && (
              <form onSubmit={submitBooking} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {selectedDate.toLocaleDateString('vi-VN')} • {selectedTime}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep('times')}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Đổi thời gian
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tên của bạn
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nhập tên"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ghi chú
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Chia sẻ thông tin giúp buổi tư vấn hiệu quả hơn"
                    rows={4}
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep('times')}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Quay lại
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 text-white px-5 py-2.5 font-semibold shadow hover:bg-blue-700"
                  >
                    Xác nhận
                  </button>
                </div>
              </form>
            )}

            {step === 'done' && (
              <div className="text-center py-10">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  Đã đặt lịch thành công!
                </div>
                <div className="text-gray-600">
                  Chúng tôi đã gửi email xác nhận cho bạn. Hẹn gặp bạn trong
                  buổi tư vấn.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
