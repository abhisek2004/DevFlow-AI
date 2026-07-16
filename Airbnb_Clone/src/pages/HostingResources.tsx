import React, { useState } from 'react';
import { BookOpen, Video, Users, TrendingUp, Star, Download, Play, Clock, Award } from 'lucide-react';

const HostingResources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All resources' },
    { id: 'getting-started', name: 'Getting started' },
    { id: 'optimization', name: 'Listing optimization' },
    { id: 'guest-experience', name: 'Guest experience' },
    { id: 'safety', name: 'Safety & security' },
    { id: 'legal', name: 'Legal & taxes' }
  ];

  const resources = [
    {
      type: 'guide',
      category: 'getting-started',
      title: 'Complete Guide to Hosting',
      description: 'Everything you need to know to start hosting successfully',
      duration: '15 min read',
      rating: 4.9,
      downloads: '250K',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      type: 'video',
      category: 'optimization',
      title: 'Photography Tips for Your Listing',
      description: 'Professional tips to make your space look amazing',
      duration: '12 min',
      rating: 4.8,
      views: '180K',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      type: 'webinar',
      category: 'guest-experience',
      title: 'Creating 5-Star Guest Experiences',
      description: 'Learn how to exceed guest expectations and earn great reviews',
      duration: '45 min',
      rating: 4.9,
      attendees: '15K',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      type: 'guide',
      category: 'safety',
      title: 'Safety and Security Best Practices',
      description: 'Keep yourself and your guests safe with these essential tips',
      duration: '10 min read',
      rating: 4.7,
      downloads: '120K',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      type: 'calculator',
      category: 'optimization',
      title: 'Pricing Calculator',
      description: 'Find the optimal price for your listing',
      duration: 'Interactive tool',
      rating: 4.6,
      uses: '500K',
      image: 'https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      type: 'guide',
      category: 'legal',
      title: 'Tax Guide for Hosts',
      description: 'Understanding your tax obligations as an Airbnb host',
      duration: '20 min read',
      rating: 4.5,
      downloads: '95K',
      image: 'https://images.pexels.com/photos/1571477/pexels-photo-1571477.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const featuredWebinars = [
    {
      title: 'Superhost Masterclass',
      date: 'January 25, 2025',
      time: '2:00 PM PST',
      instructor: 'Sarah Chen, Superhost',
      attendees: 2500,
      description: 'Learn the secrets of becoming and maintaining Superhost status'
    },
    {
      title: 'Seasonal Pricing Strategies',
      date: 'February 1, 2025',
      time: '11:00 AM PST',
      instructor: 'Mike Rodriguez, Host Expert',
      attendees: 1800,
      description: 'Maximize your earnings with smart seasonal pricing'
    },
    {
      title: 'Guest Communication Excellence',
      date: 'February 8, 2025',
      time: '3:00 PM PST',
      instructor: 'Emma Thompson, Superhost',
      attendees: 2100,
      description: 'Master the art of guest communication for better reviews'
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="w-5 h-5" />;
      case 'webinar': return <Users className="w-5 h-5" />;
      case 'calculator': return <TrendingUp className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getResourceStats = (resource: any) => {
    switch (resource.type) {
      case 'video':
        return `${resource.views} views`;
      case 'webinar':
        return `${resource.attendees} attendees`;
      case 'calculator':
        return `${resource.uses} uses`;
      default:
        return `${resource.downloads} downloads`;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-8">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Hosting Resources</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Everything you need to become a successful host. From getting started to optimizing your earnings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Resources available</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-green-600">1M+</div>
                <div className="text-sm text-gray-600">Hosts helped</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-green-600">Free</div>
                <div className="text-sm text-gray-600">All resources</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Webinars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWebinars.map((webinar, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-2 mb-4">
                  <Video className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-medium text-red-500">LIVE WEBINAR</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                <p className="text-gray-600 mb-4">{webinar.description}</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{webinar.date} at {webinar.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{webinar.attendees} registered</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Instructor: {webinar.instructor}
                </div>
                <button className="w-full bg-[#FF5A5F] text-white py-2 rounded-lg hover:bg-[#E54850] transition-colors">
                  Register for free
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse resources</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#FF5A5F] text-white border-[#FF5A5F]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredResources.map((resource, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                    {getResourceIcon(resource.type)}
                    <span className="capitalize">{resource.type}</span>
                  </div>
                </div>
                {resource.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#FF5A5F] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span>{resource.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{getResourceStats(resource)}</span>
                  <button className="flex items-center space-x-1 text-[#FF5A5F] hover:underline">
                    {resource.type === 'calculator' ? (
                      <>
                        <TrendingUp className="w-4 h-4" />
                        <span>Use tool</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Access</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Santos',
                location: 'Barcelona, Spain',
                achievement: 'Increased bookings by 150%',
                quote: 'The photography guide completely transformed my listing. Bookings doubled within a month!',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
              },
              {
                name: 'David Kim',
                location: 'Seoul, South Korea',
                achievement: 'Achieved Superhost status',
                quote: 'The guest experience webinar gave me the tools to consistently earn 5-star reviews.',
                avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
              },
              {
                name: 'Sophie Laurent',
                location: 'Paris, France',
                achievement: 'Optimized pricing strategy',
                quote: 'Using the pricing calculator helped me increase my revenue by 40% without losing bookings.',
                avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold text-gray-900 mb-1">{story.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{story.location}</p>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {story.achievement}
                </div>
                <p className="text-gray-700 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#FF5A5F] to-[#E54850] rounded-xl p-8 text-center text-white">
          <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-2xl font-bold mb-4">Ready to become a Superhost?</h2>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            Join thousands of successful hosts who have used our resources to build thriving hosting businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-[#FF5A5F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start hosting
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Browse all resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingResources;