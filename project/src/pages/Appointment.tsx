import React, { useState } from "react";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">حجز موعد</h2>
      {submitted ? (
        <div className="text-green-600 text-center font-semibold">تم إرسال طلب الحجز بنجاح! سنتواصل معك قريباً.</div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input type="text" placeholder="الاسم الكامل" required className="border p-2 rounded" />
          <input type="email" placeholder="البريد الإلكتروني" required className="border p-2 rounded" />
          <input type="tel" placeholder="رقم الهاتف" required className="border p-2 rounded" />
          <input type="datetime-local" required className="border p-2 rounded" />
          <textarea placeholder="ملاحظات إضافية" className="border p-2 rounded" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-800">إرسال</button>
        </form>
      )}
    </div>
  );
}
