import React from 'react';
import { Info, FileText, CreditCard, AlertCircle } from 'lucide-react';

const Admission = () => {
  return (
    <div className="bg-[#fff9db] min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-[#991b1b] text-center uppercase mb-12 border-b-4 border-orange-400 pb-4">
          Admission Procedure
        </h2>

        <div className="grid gap-8">
          {/* Seat Allocation */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-[12px] border-[#991b1b]">
            <div className="flex items-center mb-4">
              <Info className="text-orange-500 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-[#1a365d]">Seat Allocation</h3>
            </div>
            <ul className="space-y-3 text-lg text-gray-800 list-disc pl-5">
              <li>Seats in  Aruna , Udaya & Kiran classes will be given on a <strong>first come, first served basis</strong>.</li>
              <li>For other classes, seats will be given based on <strong>merit</strong>.</li>
            </ul>
          </div>

          {/* Fees & Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-[12px] border-orange-400">
            <div className="flex items-center mb-4">
              <FileText className="text-[#991b1b] mr-3" size={28} />
              <h3 className="text-2xl font-bold text-[#1a365d]">Form & Fee Structure</h3>
            </div>
            <p className="text-lg text-gray-800 mb-4">
              Note: Fees are subject to change as per school committee decisions. <strong></strong>.
            </p>
            <p className="text-lg text-gray-800 italic">
              * Admission fees and tuition fees will be decided by the authorities yearly.
            </p>
          </div>

          {/* Payment Mode & Late Fees */}
          <div className="bg-[#fff5f5] p-8 rounded-2xl shadow-xl border-2 border-red-200">
            <div className="flex items-center mb-4 text-red-700">
              <CreditCard className="mr-3" size={28} />
              <h3 className="text-2xl font-bold uppercase">Payment & Due Dates</h3>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-800">
                <strong>Shaping Futures:</strong> Contribution period is between the 5th and 15th. Your timely support helps us maintain the highest educational standards for your child.
              </p>
              <div className="bg-white p-4 rounded-lg flex items-start space-x-3 border-l-4 border-red-600">
                <AlertCircle className="text-red-600 mt-1" size={20} />
                <p className="text-md text-red-800">
                  <strong>Time to </strong> "Timely contributions are small steps toward your child's big dreams."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;