import React from "react";

export default function BeforeAfter() {
  const cases = [
    { before: "https://via.placeholder.com/150", after: "https://via.placeholder.com/150", desc: "تبييض أسنان" },
    { before: "https://via.placeholder.com/150", after: "https://via.placeholder.com/150", desc: "تقويم أسنان" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">قبل وبعد العلاج</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {cases.map((c, index) => (
          <div key={index} className="border rounded p-4 text-center">
            <p className="font-semibold mb-2">{c.desc}</p>
            <div className="flex justify-around">
              <div>
                <p className="text-sm">قبل</p>
                <img src={c.before} alt="قبل" className="mx-auto my-2" />
              </div>
              <div>
                <p className="text-sm">بعد</p>
                <img src={c.after} alt="بعد" className="mx-auto my-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
