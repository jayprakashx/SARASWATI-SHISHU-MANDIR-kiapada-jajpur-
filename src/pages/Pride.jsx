import React from 'react';

const Pride = () => {
  return (
    <div className="bg-[#fff9db] min-h-screen py-10 px-4">
      <h2 className="text-4xl font-black text-[#1a365d] text-center uppercase mb-10 border-b-4 border-orange-400 pb-4">
        Pride of Our School
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* ✅ Standardized to lowercase and hyphenated to match public/gallery */}
        <img src="/gallery/pride-1.jpg" className="w-full rounded-xl shadow-2xl border-4 border-orange-400" alt="Topper Banner 1" />
        <img src="/gallery/pride-2.jpg" className="w-full rounded-xl shadow-2xl border-4 border-orange-400" alt="Topper Banner 2" />
      </div>
    </div>
  );
};

export default Pride;