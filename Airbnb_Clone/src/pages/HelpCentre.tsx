import React, { useState } from 'react';
import { Search, HelpCircle, MessageCircle, Phone, Mail, ChevronRight, Star, Clock, Users, Home, CreditCard, Shield } from 'lucide-react';

const HelpCentre: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All topics', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'booking', name: 'Booking & Reservations', icon: <Home className="w-5 h-5" /> },
    { id: 'hosting', name: 'Hosting', icon: <Users className="w-5 h-5" /> },
    { id: 'payments', name: 'Payments & Refunds', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'safety', name: 'Safety & Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'account', name: 'Account & Profile', icon: <Users className="w-5 h-5" /> },
  ];

  const popularArticles = [
    {
      title: 'How do I cancel my reservation?',
      category: 'booking',
      views: '2.1M',
      helpful: 95,
      description: 'Learn about cancellation policies and how to cancel your booking'
    },
    {
      title: 'When will I be charged for my reservation?',
      category: 'payments',
      views: '1.8M',
      helpful: 92,
      description: 'Understanding payment timing and billing schedules'
    },
    {
      title: 'How do I become a Host?',
      category: 'hosting',
      views: '1.5M',
      helpful: 98,
      description: 'Step-by-step guide to listing your space on Airbnb'
    },
    {
      title: 'What is AirCover for guests?',
      category: 'safety',
      views: '1.2M',
      helpful: 94,
      description: 'Learn about our comprehensive protection program'
    },
    {
      title: 'How do I change or cancel my reservation?',
      category: 'booking',
      views: '980K',
      helpful: 89,
      description: 'Modify your booking dates, guests, or cancel your trip'
    },
    {
      title: 'How do I contact my Host or guest?',
      category: 'booking',
      views: '850K',
      helpful: 91,
      description: 'Communicate safely through the Airbnb platform'
    }
  ];

  const quickActions = [
    {
      title: 'Contact Support',
      description: 'Get help from our customer service team',
      icon: <MessageCircle className="w-6 h-6" />,
      action: 'Chat now',
      color: 'bg-blue-500'
    },
    {
      title: 'Report a Safety Issue',
      description: 'Report urgent safety concerns immediately',
      icon: <Shield className="w-6 h-6" />,
      action: 'Report now',
      color: 'bg-red-500'
    },
    {
      title: 'Call Us',
      description: 'Speak directly with our support team',
      icon: <Phone className="w-6 h-6" />,
      action: 'Call now',
      color: 'bg-green-500'
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? popularArticles 
    : popularArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Centre</h1>
          <p className="text-lg text-gray-600 mb-8">
            Get the help you need, when you need it
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className={`inline-flex items-center justify-center w-12 h-12 ${action.color} text-white rounded-lg mb-4`}>
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-gray-600 mb-4">{action.description}</p>
              <button className="text-[#FF5A5F] font-medium hover:underline">
                {action.action}
              </button>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Browse by topic</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#FF5A5F] text-white border-[#FF5A5F]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {selectedCategory === 'all' ? 'Popular articles' : `Popular ${categories.find(c => c.id === selectedCategory)?.name} articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#FF5A5F] transition-colors">
                    {article.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#FF5A5F] transition-colors" />
                </div>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>{article.views} views</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span>{article.helpful}% helpful</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Still need help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-4">Chat with our support team</p>
              <button className="text-[#FF5A5F] font-medium hover:underline">Start chat</button>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600 mb-4">Speak with our team</p>
              <button className="text-[#FF5A5F] font-medium hover:underline">Get phone number</button>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 mb-4">Send us a message</p>
              <button className="text-[#FF5A5F] font-medium hover:underline">Send email</button>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-sm text-gray-600 mb-4">Connect with other users</p>
              <button className="text-[#FF5A5F] font-medium hover:underline">Join forum</button>
            </div>
          </div>
        </div>

        {/* Support Hours */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Support available 24/7 in multiple languages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCentre;