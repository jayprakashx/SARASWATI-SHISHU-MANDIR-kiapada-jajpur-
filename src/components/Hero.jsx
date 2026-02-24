import React from 'react';
import schoolImg from '../assets/school-main.jpg'; 

const Hero = () => {
  return (
    /* We lock the height and use overflow-hidden to contain the image */
    <div className="w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
      <img 
        src={schoolImg} 
        alt="Saraswati Shishu Vidya Mandir Building" 
        /* 'object-bottom' is the secret—it shows the building, not the sky */
        className="w-full h-full object-cover object-bottom transition-transform duration-700 hover:scale-105" 
      />
    </div>
  );
};

export default Hero;