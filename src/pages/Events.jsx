import React from 'react'; 

const Events = () => {
  return (
    <div className="bg-[#fff9db] min-h-screen p-8">
      <h2 className="text-3xl font-black text-[#1a365d] mb-6 uppercase border-l-8 border-[#991b1b] pl-4">
        Annual Function & Events
      </h2>
      <div className="columns-1 md:columns-3 gap-4 space-y-4">
        <img src="/src/assets/event-1.jpg" className="w-full rounded shadow-lg border-2 border-white" alt="Event 1" />
        <img src="/src/assets/event-2.jpg" className="w-full rounded shadow-lg border-2 border-white" alt="Event 2" />
      </div>
    </div>
  );
};

export default Events; 