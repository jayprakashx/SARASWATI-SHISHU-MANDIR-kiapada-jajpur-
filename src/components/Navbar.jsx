import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ssvmlogo.jpg'; //

const Navbar = () => {
  // Administration has been removed from this list
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Admission", path: "/admission" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Gallery", path: "/photo-gallery" },
    { name: "Contact Us", path: "/contact-us" }
  ];

  return (
    <nav className="w-full shadow-lg">
      {/* Top Branding Section with Logo */}
      <div className="bg-gradient-to-r from-[#ffd43b] to-[#fcc419] py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex-shrink-0 bg-white p-1 rounded-full shadow-md w-16 h-16 flex items-center justify-center overflow-hidden">
            <img 
              src={logo} 
              alt="SSVM Logo" 
              className="h-full w-full object-contain"
              onError={(e) => { e.target.src = "https://via.placeholder.com/60?text=SSVM"; }}
            />
          </div>
          
          <div className="text-center flex-grow">
            <h1 className="text-xl md:text-2xl font-bold text-[#991b1b] uppercase leading-tight">
              ସରସ୍ୱତୀ ଶିଶୁ ବିଦ୍ୟା ମନ୍ଦିର
            </h1>
            <h2 className="text-md md:text-lg font-black text-[#1a365d] tracking-tighter uppercase">
              SARASWATI SHISHU  MANDIR
            </h2>
            <p className="text-[10px] md:text-xs font-bold text-red-800 tracking-widest mt-1">
              KIAPADA, JAJPUR, ODISHA-755019
            </p>
          </div>
          <div className="hidden md:block w-16"></div>
        </div>
      </div>

      {/* Red Navigation Bar */}
      <div className="bg-[#991b1b] border-t border-red-800">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <ul className="flex justify-center md:justify-end gap-0 py-0">
            {navItems.map((item) => (
              <li key={item.name} className="border-r border-red-800 last:border-0 whitespace-nowrap">
                <Link 
                  to={item.path} 
                  className="block text-white text-[10px] md:text-xs font-bold uppercase py-3 px-4 hover:bg-red-700 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;