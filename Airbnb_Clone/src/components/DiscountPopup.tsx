import React, { useState, useEffect } from 'react';
import { X, Gift, Clock } from 'lucide-react';

const DiscountPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    // Show popup after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in fade-in duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          {/* Gift Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mb-6">
            <Gift className="w-8 h-8 text-white" />
          </div>

          {/* Discount Badge */}
          <div className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-full text-2xl font-bold mb-4">
            20% OFF
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Limited Time Offer!
          </h2>
          
          <p className="text-gray-600 mb-6">
            Get 20% off your first booking when you sign up today. Perfect for your next getaway!
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center space-x-4 mb-6 p-4 bg-gray-50 rounded-xl">
            <Clock className="w-5 h-5 text-gray-600" />
            <div className="flex items-center space-x-2 text-lg font-mono">
              <div className="bg-white px-2 py-1 rounded shadow">
                <span className="font-bold text-red-500">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span className="text-gray-500">:</span>
              <div className="bg-white px-2 py-1 rounded shadow">
                <span className="font-bold text-red-500">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span className="text-gray-500">:</span>
              <div className="bg-white px-2 py-1 rounded shadow">
                <span className="font-bold text-red-500">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500 mb-6">
            Hours : Minutes : Seconds
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-medium hover:from-pink-600 hover:to-red-600 transition-all transform hover:scale-105">
              Claim Your 20% Discount
            </button>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="w-full text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              Maybe later
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 mt-4">
            *Valid for new users only. Minimum booking value $100. Cannot be combined with other offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;