import React from 'react';

const Infrastructure = () => {
  // Organized by campus and utility
  const mainCampusRooms = [
    { name: "Aruna, Udaya & Kiran (Primary Branch)", count: "Dedicated Block" },
    { name: "Senior Classrooms (Class 3 to 10)", count: "Multiple Blocks" },
    { name: "Headmaster's Chamber & Office", count: 2 },
    { name: "Science & Computer Laboratories", count: 2 },
    { name: "Library & Prayer Hall (Baudhika Mandap)", count: 2 },
    { name: "Staff Common Rooms", count: 2 },
  ];

  const facilities = [
    { name: "CCTV Surveillance", status: "24/7 Security" },
    { name: "Boundary Wall", status: "Fully Secured" },
    { name: "Electricity Facility", status: "Available" },
    { name: "Pure Drinking Water", status: "Available" },
    { name: "Playground", status: "Spacious Area" },
  ];

  return (
    <div className="bg-[#fff9db] min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#1a365d]">
        <h2 className="text-3xl font-black text-[#991b1b] uppercase mb-6 border-b-2 border-orange-400 pb-2">
          School Infrastructure
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Saraswati Shishu Vidya Mandir operates across two different locations to provide specialized learning environments. The primary branch caters to Aruna, Udaya, and Kiran levels, while the main campus houses students from Class 3 to 10.
        </p>

        {/* Room/Campus Distribution */}
        <h3 className="text-xl font-bold text-[#1a365d] mb-4">Academic Blocks & Chambers</h3>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border-2 border-gray-200">
            <thead>
              <tr className="bg-[#991b1b] text-white">
                <th className="p-4 border border-gray-300 text-left">Campus / Room Type</th>
                <th className="p-4 border border-gray-300 text-center">Details</th>
              </tr>
            </thead>
            <tbody>
              {mainCampusRooms.map((room, index) => (
                <tr key={index} className="hover:bg-orange-50 transition-colors">
                  <td className="p-4 border border-gray-200 font-bold text-[#1a365d]">{room.name}</td>
                  <td className="p-4 border border-gray-200 text-center font-black">{room.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* General Facilities */}
        <h3 className="text-xl font-bold text-[#1a365d] mb-4">Campus Facilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {facilities.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <span className="font-bold text-[#991b1b]">{item.name}</span>
              <span className="text-gray-700 font-medium">{item.status}</span>
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-sm italic text-gray-500 border-t pt-4">
          * Campus is fully equipped with electricity and water facilities to ensure student comfort.
        </p>
      </div>
    </div>
  );
};

export default Infrastructure;