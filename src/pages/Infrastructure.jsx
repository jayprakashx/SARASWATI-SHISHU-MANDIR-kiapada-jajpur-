import React from 'react';

const Infrastructure = () => {
  // Updated room list to better reflect the ~40 room total
  const rooms = [
    { name: "Prarambha & Bodha Classrooms", count: 4 },
    { name: "General Classrooms (Standard I to X)", count: 20 },
    { name: "Headmaster Room", count: 1 },
    { name: "General Office / Staff Room", count: 2 },
    { name: "Science Laboratory", count: 1 },
    { name: "Computer Lab", count: 1 },
    { name: "Library", count: 1 },
    { name: "Music & Dance Room", count: 1 },
    { name: "Prayer Hall (Baudhika Mandap)", count: 1 },
    { name: "Sports & Games Room", count: 1 },
    { name: "Store Rooms", count: 2 },
    { name: "Visitor's Lounge", count: 1 }
  ];

  return (
    <div className="bg-[#fff9db] min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#1a365d]">
        <h2 className="text-3xl font-black text-[#991b1b] uppercase mb-6 border-b-2 border-orange-400 pb-2">
          School Infrastructure
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          The SSVM school features a modern **three-storey building** containing approximately **40 rooms**. 
          To ensure a safe learning environment, the campus is surrounded by a sturdy compound wall and is equipped with **CCTV cameras** for 24/7 security.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border-2 border-gray-200">
            <thead>
              <tr className="bg-[#991b1b] text-white">
                <th className="p-4 border border-gray-300 text-left">Activity / Room Name</th>
                <th className="p-4 border border-gray-300 text-center">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr key={index} className="hover:bg-orange-50 transition-colors">
                  <td className="p-4 border border-gray-200 font-bold text-[#1a365d]">{room.name}</td>
                  <td className="p-4 border border-gray-200 text-center font-black">{room.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;