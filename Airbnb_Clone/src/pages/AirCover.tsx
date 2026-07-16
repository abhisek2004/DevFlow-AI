import React from 'react';
import { Shield, CheckCircle, AlertTriangle, Users, Home, CreditCard, Clock, Phone } from 'lucide-react';

const AirCover: React.FC = () => {
  const protectionFeatures = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Booking Protection',
      description: 'Get a full refund if your Host cancels within 30 days of check-in',
      coverage: 'Up to $1M USD'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Check-in Guarantee',
      description: 'If you can\'t check in and your Host can\'t resolve the issue, we\'ll find you a similar place',
      coverage: 'Alternative accommodation'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Get-What-You-Booked Guarantee',
      description: 'If your listing isn\'t as advertised, we\'ll work to make it right',
      coverage: 'Full resolution support'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: '24-Hour Safety Line',
      description: 'Contact us anytime if you feel unsafe during your stay',
      coverage: '24/7 emergency support'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Book with confidence',
      description: 'AirCover is included for free with every booking on Airbnb'
    },
    {
      step: '2',
      title: 'If something goes wrong',
      description: 'Contact us within 24 hours of check-in if there\'s an issue'
    },
    {
      step: '3',
      title: 'We\'ll make it right',
      description: 'Our team will work to resolve the issue or provide alternative solutions'
    }
  ];

  const coverageDetails = [
    {
      category: 'Booking Issues',
      items: [
        'Host cancellations within 30 days',
        'Listing not as described',
        'Check-in problems',
        'Cleanliness issues',
        'Missing amenities'
      ]
    },
    {
      category: 'Safety & Security',
      items: [
        '24/7 safety hotline',
        'Emergency rebooking',
        'Safety incident support',
        'Neighborhood safety concerns',
        'Property security issues'
      ]
    },
    {
      category: 'Payment Protection',
      items: [
        'Secure payment processing',
        'Refund protection',
        'Fraudulent charge protection',
        'Currency conversion protection',
        'Fee transparency'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">AirCover</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive protection included for free with every booking. Travel with confidence knowing you're covered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">$1M+</div>
                <div className="text-sm text-gray-600">Coverage limit</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support available</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">Free</div>
                <div className="text-sm text-gray-600">Included with booking</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Protection Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What's covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protectionFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {feature.coverage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How AirCover works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Coverage details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageDetails.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-16">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-red-900 mb-2">Emergency Safety Line</h3>
              <p className="text-red-800 mb-4">
                If you ever feel unsafe during your stay, contact our 24/7 safety line immediately.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>Call Safety Line</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Report Safety Issue</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'Is AirCover really free?',
                answer: 'Yes, AirCover is included at no additional cost with every booking on Airbnb. There are no hidden fees or charges.'
              },
              {
                question: 'How do I file a claim?',
                answer: 'Contact us through the Resolution Center in your account or call our support line within 24 hours of check-in if there\'s an issue.'
              },
              {
                question: 'What if my Host cancels last minute?',
                answer: 'If your Host cancels within 30 days of check-in, you\'ll get a full refund and we\'ll help you find alternative accommodation.'
              },
              {
                question: 'Does AirCover work internationally?',
                answer: 'Yes, AirCover protection applies to all Airbnb bookings worldwide, regardless of your location or destination.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to book with confidence?</h2>
          <p className="text-blue-100 mb-6">
            Start planning your next trip knowing you're protected by AirCover
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start searching
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirCover;