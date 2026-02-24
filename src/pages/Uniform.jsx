import React, { useState } from 'react';

const Uniform = () => {
  const [activeTab, setActiveTab] = useState('Boys');

  const uniformData = {
    Boys: {
      schedule1: "Monday to Thursday: Navy Blue Pant, White-Half shirt, Black shoes, White socks, Belt. For Winter Days Red coloured- Sweater, Red Cap.",
      schedule2: "Friday to Saturday: White full pant, White half shirt, White socks & belt."
    },
    Girls: {
      schedule1: "Monday to Thursday: Navy Blue Skirt/Kurta, White-Half shirt/Salwar, Black shoes, White socks. Winter: Red coloured Sweater.",
      schedule2: "Friday to Saturday: White Skirt/Salwar, White shirt/Kurta, White socks."
    },
    Acharyas: {
      schedule1: "Standard Gana-besha for formal school hours as per SSVM guidelines.",
      schedule2: "Ceremonial dress for Saturday and special events."
    }
  };

  return (
    <div className="bg-[#fff9db] min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        
        {/* Page Title */}
        <div className="p-8 border-b border-gray-100">
          <h1 className="text-4xl font-light text-gray-800 uppercase tracking-tight">School Uniform</h1>
        </div>

        <div className="flex flex-col md:flex-row p-8 gap-8">
          {/* Left Sidebar Tabs */}
          <div className="w-full md:w-1/3 space-y-3">
            {Object.keys(uniformData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left p-4 rounded-md text-lg font-medium transition-all border-l-8 ${
                  activeTab === tab 
                  ? "bg-orange-100 text-orange-900 border-orange-500 shadow-inner" 
                  : "bg-gray-50 text-gray-600 border-transparent hover:bg-gray-100"
                }`}
              >
                {tab === 'Acharyas' ? 'Acharya and Acharyas (Ganabesha)' : tab}
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-2/3 bg-[#ffcc80] p-8 rounded-lg shadow-md border-2 border-white">
            <div className="space-y-8">
              <div>
                <p className="text-gray-900 leading-relaxed font-bold text-lg">
                  <span className="text-red-800 mr-2">●</span> {uniformData[activeTab].schedule1}
                </p>
              </div>
              <div>
                <p className="text-gray-900 leading-relaxed font-bold text-lg">
                  <span className="text-red-800 mr-2">●</span> {uniformData[activeTab].schedule2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uniform;