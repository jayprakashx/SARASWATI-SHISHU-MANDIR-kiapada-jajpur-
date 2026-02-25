import React from 'react'; 

const notices = [
  { title: "Admissions Open for 2026", date: "15 Jan 2026" },
  { title: "Annual Sports Day Celebration", date: "28 Jan 2026" },
  { title: "Parent-Teacher Meeting", date: "5 Feb 2026" },
];

const NoticeBoard = () => {
  return (
    <section className="bg-yellow-50 py-8 border-2 border-orange-500 rounded-lg shadow-inner">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
          <span className="mr-2 animate-pulse">🚩</span> Notice Board
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {notices.map((notice, index) => (
            <div key={index} className="bg-white p-4 rounded border-l-4 border-red-700 shadow hover:bg-orange-50 transition">
              <h3 className="font-bold text-blue-900 mb-1">{notice.title}</h3>
              <p className="text-xs text-gray-500">Date: {notice.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;