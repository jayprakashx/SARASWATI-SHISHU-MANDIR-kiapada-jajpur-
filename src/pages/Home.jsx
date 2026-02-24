import React from 'react';
import { Link } from 'react-router-dom'; 
import Hero from '../components/Hero';
import topperImg from '../assets/topper.jpg';

// --- FIXED PHOTO IMPORTS ---
import schoolPhoto1 from '../assets/campus-life.jpg'; 
import schoolPhoto2 from '../assets/activities.jpg'; 

const Home = () => {
  const sidebarLinks = [
    { name: "SCHOOL UNIFORM", path: "/school-uniform" },
    { name: "SCHOOL PRAYER", path: "/school-prayer" },
    { name: "SHISHU BATIKA", path: "/shishu-batika" },
    { name: "PRIDE OF OUR SCHOOL", path: "/pride-of-our-school" },
    { name: "OUR FAMILY", path: "/our-family" },
    { name: "PHOTO GALLERY", path: "/photo-gallery" },
    { name: "ANNUAL EVENTS", path: "/annual-events" }
  ];

  return (
    <div className="bg-[#fff9db] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-start">
        
        {/* Navigation Sidebar */}
        <aside className="w-full md:w-[320px] flex-shrink-0 space-y-6">
          <div className="bg-white rounded-lg shadow-md border border-orange-200 overflow-hidden">
            <h3 className="bg-[#991b1b] text-white p-4 font-bold text-lg uppercase tracking-widest">Navigation</h3>
            <ul className="flex flex-col">
              {sidebarLinks.map((link) => (
                <li key={link.name} className="hover:bg-orange-50 border-b border-gray-100 last:border-0 transition-all">
                  <Link 
                    to={link.path} 
                    className="flex items-center p-4 text-base font-bold text-[#991b1b]"
                  >
                    <span className="mr-3 text-red-600">➩</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievement Image Box */}
          <div className="bg-white rounded-lg shadow-md border border-orange-200 p-5 text-center">
            <h3 className="text-[#1a365d] font-bold mb-4 text-lg uppercase border-b pb-2">Our Toppers</h3>
            <img src={topperImg} alt="Topper" className="w-full h-auto rounded-lg border-2 border-orange-400" />
            <p className="text-sm font-bold text-red-700 italic mt-3">"Our Shimmering Stars"</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full space-y-8">
          <Hero /> 
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-[12px] border-[#991b1b]">
            <h2 className="text-3xl font-black text-[#1a365d] mb-4 uppercase tracking-tighter">Welcome to SSVM Kiapada</h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              Saraswati Shishu Vidya Mandir, Kiapada provides quality education rooted in moral values 
              and traditional excellence.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white p-4 rounded-lg shadow-md border border-orange-100">
                <h4 className="text-[#1a365d] font-bold mb-3 uppercase tracking-tight border-b pb-1">science projects</h4>
                <div className="aspect-video rounded overflow-hidden shadow-inner">
                   <img src={schoolPhoto1} alt="Campus Life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
             </div>
             
             <div className="bg-white p-4 rounded-lg shadow-md border border-orange-100">
                <h4 className="text-[#1a365d] font-bold mb-3 uppercase tracking-tight border-b pb-1">Our little heros </h4>
                <div className="aspect-video rounded overflow-hidden shadow-inner">
                   <img src={schoolPhoto2} alt="School Activities" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;