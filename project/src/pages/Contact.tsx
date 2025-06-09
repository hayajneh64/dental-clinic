import React from "react";

export default function Contact() {
  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">اتصل بنا</h2>
      <p className="mb-2">📞 الهاتف: 078XXXXXXX</p>
      <p className="mb-2">📍 العنوان: عمان - الأردن</p>
      <a
        href="https://wa.me/96278XXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-800"
      >
        تواصل عبر واتساب
      </a>
    </div>
  );
}
