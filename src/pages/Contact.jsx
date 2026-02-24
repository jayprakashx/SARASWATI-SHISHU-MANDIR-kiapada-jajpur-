import React from 'react';
import { Phone, Mail, Instagram, Youtube, MapPin, Facebook, MessageCircle, Heart } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-[#fff9db] min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#991b1b] uppercase mb-2">
            Let's Connect for Your Child's Future
          </h2>
          <p className="text-[#1a365d] font-bold italic">"Every great journey starts with a simple conversation. We are here for you."</p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Humanized Contact Information */}
          <div className="space-y-8 bg-white p-8 rounded-2xl shadow-xl border-t-[12px] border-[#991b1b]">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="text-green-700" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Direct Support</p>
                <p className="text-xl font-black text-[#1a365d]">9437208026</p>
                <p className="text-xl font-black text-[#1a365d]">92388 23338</p>
                <p className="text-xs text-green-600 font-bold mt-1 italic">● Available for your queries during school hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="text-blue-700" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Write to Us</p>
                <p className="text-lg font-bold text-[#1a365d]">hkbahalia1976@gmail.com</p>
                <p className="text-lg font-bold text-[#1a365d]">ssmkiapada2005@gmail.com</p>
                <p className="text-xs text-blue-600 font-bold mt-1">We usually respond within 24 hours.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <MapPin className="text-orange-700" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Visit Our Campus</p>
                <p className="text-lg font-bold text-[#1a365d]">KIAPADA, JAJPUR, ODISHA-755019</p>
                <p className="text-xs text-orange-700 font-bold mt-1">Experience our environment first-hand.</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100 flex items-center text-[#991b1b] font-bold">
               <Heart className="mr-2" size={20} fill="#991b1b" />
               <span>Partnering with parents for excellence.</span>
            </div>
          </div>

          {/* Right Side: Social Community */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#1a365d]">Be Part of Our Community</h3>
                <p className="text-gray-600">See what our students are achieving every day.</p>
            </div>
            
            <a href="https://www.facebook.com/share/17wG2N4ojF/" target="_blank" rel="noreferrer" className="flex items-center p-5 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all border-l-4 border-blue-600">
              <Facebook className="text-blue-600 mr-4" size={32} />
              <div>
                  <span className="block text-xl font-bold text-gray-800">Facebook</span>
                  <span className="text-sm text-gray-500 font-medium">Join 700+ followers family</span>
              </div>
            </a>

            <a href="https://www.instagram.com/ssm_kiapada?igsh=bDN6aTgwY3h2NTVn" target="_blank" rel="noreferrer" className="flex items-center p-5 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all border-l-4 border-pink-500">
              <Instagram className="text-pink-600 mr-4" size={32} />
              <div>
                  <span className="block text-xl font-bold text-gray-800">Instagram</span>
                  <span className="text-sm text-gray-500 font-medium">Daily campus life updates</span>
              </div>
            </a>

            <a href="https://youtube.com/@saraswatisishumandirkiapada?si=luMKbCDR8l9YCMfO" target="_blank" rel="noreferrer" className="flex items-center p-5 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all border-l-4 border-red-600">
              <Youtube className="text-red-600 mr-4" size={32} />
              <div>
                  <span className="block text-xl font-bold text-gray-800">YouTube</span>
                  <span className="text-sm text-gray-500 font-medium">Event highlights & videos</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;