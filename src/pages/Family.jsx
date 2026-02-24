import React from 'react'; // 👈 THIS LINE FIXES THE ERROR

const Family = () => {
  return (
    <div className="bg-[#fff9db] min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black text-[#991b1b] uppercase mb-8 border-b-4 border-orange-400 pb-4 inline-block">
          Our Family (Staff Members)
        </h2>
        
        {/* Main Group Photo */}
        <div className="bg-white p-4 rounded-2xl shadow-2xl border-4 border-white transition-transform hover:scale-[1.01]">
          <img 
            src="/src/assets/staff-group.jpg" 
            alt="School Staff Group" 
            className="w-full h-auto rounded-xl"
            onError={(e) => { e.target.src = "https://via.placeholder.com/1200x600?text=Upload+staff-group.jpg+to+Assets"; }}
          />
          <p className="mt-6 text-xl font-bold text-[#1a365d] italic">
            "Dedicated to shaping the future of our students with moral values and excellence."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Family; // 👈 ENSURES App.jsx CAN LOAD THE PAGE