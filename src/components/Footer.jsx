import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#991b1b] text-white pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-red-800 pb-10">
        <div>
          <h3 className="text-xl font-bold uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4">SSVM Kiapada</h3>
          <p className="text-sm text-red-100 italic">KIAPADA, JAJPUR, ODISHA-755019</p>
        </div>
        <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center">
          <div className="bg-black/20 p-6 rounded-2xl border border-white/10 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-300 mb-2">Developed By</p>
            <p className="text-2xl font-black tracking-tighter text-white">JAYPRAKASH BAHALIA</p>
            <div className="h-1 w-12 bg-yellow-400 mx-auto mt-2"></div>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-[11px] text-red-300 uppercase tracking-widest font-bold">
        © 2026 Saraswati Shishu Vidya Mandir | KIAPADA
      </p>
    </footer>
  );
};

export default Footer;