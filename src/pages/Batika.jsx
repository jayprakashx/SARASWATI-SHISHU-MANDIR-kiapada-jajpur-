import React from 'react';

const Batika = () => {
  return (
    <div className="bg-[#fff9db] min-h-screen p-8">
      <h2 className="text-3xl font-black text-[#991b1b] mb-6 uppercase border-b-4 border-orange-400 pb-2">Shishu Batika</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ✅ Standardized to lowercase and hyphenated to match public/gallery */}
        <img src="/gallery/batika-1.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg border-4 border-white" alt="Batika 1" />
        <img src="/gallery/batika-2.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg border-4 border-white" alt="Batika 2" />
        <img src="/gallery/batika-3.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg border-4 border-white" alt="Batika 3" />
        <img src="/gallery/batika-4.jpg" className="w-full h-64 object-cover rounded-lg shadow-lg border-4 border-white" alt="Batika 4" />
      </div>
    </div>
  );
};

export default Batika;