import React from "react";

export default function Home() {
  return (
    <div className="bg-white">
      <header className="bg-blue-700 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">عيادة د. عماد ظهيرات لطب الأسنان</h1>
        <p className="text-lg mt-2">ابتسامتك معنا أجمل</p>
      </header>
      <main className="p-8">
        <div className="text-center my-10">
          <h2 className="text-2xl font-semibold mb-4">خدمات احترافية في طب الأسنان</h2>
          <p>احجز موعدك اليوم مع د. عماد ظهيرات واستفد من استشارة أولى مجانية.</p>
          <a href="/Appointment" className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">احجز الآن</a>
        </div>
        <section className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold text-xl mb-2">تبييض الأسنان</h3>
            <p>حلول فعالة لتبييض الأسنان واستعادة إشراقة ابتسامتك.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold text-xl mb-2">تقويم الأسنان</h3>
            <p>تقنيات حديثة لتقويم الأسنان بدون ألم وبنتائج مثالية.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold text-xl mb-2">زراعة الأسنان</h3>
            <p>زراعة أسنان ثابتة ودائمة بخبرة عالية وتقنيات متطورة.</p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 text-center p-4 mt-12 text-sm">
        جميع الحقوق محفوظة &copy; د. عماد ظهيرات - 2025
      </footer>
    </div>
  );
}
