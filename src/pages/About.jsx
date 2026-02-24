import React from 'react';
import { GraduationCap, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#fff9db] min-h-screen">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Main Title */}
          <h2 className="text-4xl font-black text-center text-[#991b1b] mb-10 uppercase tracking-tight">
            About Our School
          </h2>

          {/* Your Provided Mission & Vision Text */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-[12px] border-[#991b1b] mb-16">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4 italic">Mission & Vision</h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              Started in 2005, the school’s mission is to create an environment where children learn 
              modern education along with Indian cultural values. 
              Our vision is to develop the mental, emotional, social, spiritual, and physical abilities of the students.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-semibold">
              We aim to make them responsible human beings who are dedicated to the nation and to helping common people.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-xl text-center shadow-lg border-b-4 border-orange-400 hover:scale-105 transition-transform">
              <GraduationCap className="mx-auto text-[#991b1b]" size={48} />
              <h3 className="mt-4 font-bold text-xl text-[#1a365d]">
                Quality Education
              </h3>
              <p className="text-gray-700 mt-2 font-medium">
                Strong academic foundation from Prambha to Class 8.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-lg border-b-4 border-orange-400 hover:scale-105 transition-transform">
              <Users className="mx-auto text-[#991b1b]" size={48} />
              <h3 className="mt-4 font-bold text-xl text-[#1a365d]">
                Moral Values
              </h3>
              <p className="text-gray-700 mt-2 font-medium">
                Character building with Indian culture & discipline.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-lg border-b-4 border-orange-400 hover:scale-105 transition-transform">
              <BookOpen className="mx-auto text-[#991b1b]" size={48} />
              <h3 className="mt-4 font-bold text-xl text-[#1a365d]">
                Student Growth
              </h3>
              <p className="text-gray-700 mt-2 font-medium">
                Focus on academics, sports, and creativity.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;