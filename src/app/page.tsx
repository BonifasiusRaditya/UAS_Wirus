import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import logo from '../../public/3d.png';

const Dashboard: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-row justify-between py-16">
          {/* Left side - Text Content */}
          <div className="w-1/2 flex flex-col justify-center ml-8">
            <h1 className="text-4xl font-bold text-black mb-4">
              Replace or create with 3D printing
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Duplicate broken parts more affordably or make your own innovations
            </p>
            <div className="flex items-center justify-center">
              <button className="bg-blue-900 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-800 transition-colors">
                Get started
              </button>
            </div>  
          </div>

          {/* Right side - Image placeholder */}
          <div className="w-1/2 relative">
            <div className="aspect-square rounded-lg flex items-center justify-center">
              <Image src={logo} alt="3D Printer Illustration" width={400} height={400} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 