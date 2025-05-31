'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function TrackPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  // Dummy tracking data
  const trackingSteps = [
    {
      name: 'Order Received',
      description: 'We have received your 3D printing order',
      date: '2024-03-20',
      status: 'complete'
    },
    {
      name: 'Processing',
      description: 'Your 3D model is being prepared for printing',
      date: '2024-03-21',
      status: 'complete'
    },
    {
      name: 'Printing',
      description: 'Your item is currently being printed',
      date: '2024-03-22',
      status: 'current'
    },
    {
      name: 'Quality Check',
      description: 'Final inspection and quality assurance',
      date: '',
      status: 'upcoming'
    },
    {
      name: 'Ready for Pickup',
      description: 'Your item is ready for pickup or shipping',
      date: '',
      status: 'upcoming'
    }
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-black mb-8">Track Your Order</h1>

        {!isTracking ? (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order Number
                </label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your order number"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Track Order
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Order #3D{orderNumber}</h2>
              <p className="text-sm text-gray-600">Estimated completion: March 23, 2024</p>
            </div>

            <div className="space-y-8">
              {trackingSteps.map((step, index) => (
                <div key={step.name} className="relative">
                  {index !== trackingSteps.length - 1 && (
                    <div
                      className={`absolute top-5 left-5 ml-px h-full w-0.5 ${
                        step.status === 'complete' ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                  <div className="relative flex items-start group">
                    <div className="flex-shrink-0">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          step.status === 'complete'
                            ? 'bg-blue-600'
                            : step.status === 'current'
                            ? 'bg-blue-200'
                            : 'bg-gray-200'
                        }`}
                      >
                        {step.status === 'complete' ? (
                          <svg
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              step.status === 'current' ? 'bg-blue-600' : 'bg-gray-400'
                            }`}
                          />
                        )}
                      </span>
                    </div>
                    <div className="ml-4 min-w-0">
                      <div className="text-sm font-semibold text-gray-900">
                        {step.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {step.description}
                      </div>
                      {step.date && (
                        <div className="text-sm text-gray-400 mt-1">
                          {step.date}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 