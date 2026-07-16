import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Home, Search, User, Heart, Calendar, Settings, HelpCircle } from 'lucide-react';

const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: <Home className="w-5 h-5" />,
      links: [
        { name: 'Home', href: '/', description: 'Discover amazing places to stay around the world' },
        { name: 'Search Results', href: '/search', description: 'Find and filter accommodations' },
        { name: 'Host Dashboard', href: '/host', description: 'Manage your listings and bookings' },
        { name: 'User Profile', href: '/profile', description: 'View and edit your profile information' }
      ]
    },
    {
      title: 'User Features',
      icon: <User className="w-5 h-5" />,
      links: [
        { name: 'Trips', href: '/trips', description: 'View your upcoming and past trips' },
        { name: 'Wishlists', href: '/wishlists', description: 'Save your favorite places' },
        { name: 'Messages', href: '/messages', description: 'Communicate with hosts and guests' },
        { name: 'Account Settings', href: '/account', description: 'Manage your account preferences' }
      ]
    },
    {
      title: 'Support & Help',
      icon: <HelpCircle className="w-5 h-5" />,
      links: [
        { name: 'Help Centre', href: '/help', description: 'Get answers to common questions' },
        { name: 'AirCover', href: '/aircover', description: 'Learn about our protection programs' },
        { name: 'Anti-discrimination', href: '/anti-discrimination', description: 'Our commitment to inclusion' },
        { name: 'Disability Support', href: '/disability-support', description: 'Accessibility resources and support' },
        { name: 'Cancellation Options', href: '/cancellation-options', description: 'Understand cancellation policies' },
        { name: 'Report Neighbourhood Concern', href: '/report-concern', description: 'Report issues in your area' }
      ]
    },
    {
      title: 'Hosting',
      icon: <Settings className="w-5 h-5" />,
      links: [
        { name: 'Airbnb Your Home', href: '/host', description: 'Start hosting your property' },
        { name: 'Airbnb Your Experience', href: '/host-experience', description: 'Host unique experiences' },
        { name: 'Airbnb Your Service', href: '/host-service', description: 'Offer professional services' },
        { name: 'AirCover for Hosts', href: '/aircover-hosts', description: 'Protection for hosts' },
        { name: 'Hosting Resources', href: '/hosting-resources', description: 'Tips and guides for hosts' },
        { name: 'Community Forum', href: '/community', description: 'Connect with other hosts' },
        { name: 'Hosting Responsibly', href: '/hosting-responsibly', description: 'Best practices for responsible hosting' },
        { name: 'Join a Free Hosting Class', href: '/hosting-class', description: 'Learn hosting skills' },
        { name: 'Find a Co‑host', href: '/co-host', description: 'Get help managing your listing' }
      ]
    },
    {
      title: 'Company',
      icon: <Heart className="w-5 h-5" />,
      links: [
        { name: '2025 Summer Release', href: '/summer-release', description: 'Latest features and updates' },
        { name: 'Newsroom', href: '/newsroom', description: 'Latest news and announcements' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Investors', href: '/investors', description: 'Investor relations and financial information' },
        { name: 'Airbnb.org Emergency Stays', href: '/emergency-stays', description: 'Emergency housing assistance' }
      ]
    },
    {
      title: 'Legal & Policies',
      icon: <Calendar className="w-5 h-5" />,
      links: [
        { name: 'Privacy Policy', href: '/privacy', description: 'How we protect and use your data' },
        { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions of use' },
        { name: 'Company Details', href: '/company-details', description: 'Corporate information and registration' },
        { name: 'Sitemap', href: '/sitemap', description: 'Complete site navigation' }
      ]
    },
    {
      title: 'Property Types',
      icon: <Search className="w-5 h-5" />,
      links: [
        { name: 'Yurt Rentals', href: '/search?type=yurt', description: 'Unique circular accommodations' },
        { name: 'Castle Rentals', href: '/search?type=castle', description: 'Historic castle stays' },
        { name: 'Houseboats', href: '/search?type=houseboat', description: 'Floating accommodations' },
        { name: 'Holiday Caravans', href: '/search?type=caravan', description: 'Mobile holiday homes' },
        { name: 'Private Island Rentals', href: '/search?type=island', description: 'Exclusive island getaways' },
        { name: 'Farm Houses', href: '/search?type=farmhouse', description: 'Rural countryside stays' },
        { name: 'Luxury Cabins', href: '/search?type=luxury-cabin', description: 'Premium cabin experiences' },
        { name: 'Holiday Chalets', href: '/search?type=chalet', description: 'Mountain retreat accommodations' },
        { name: 'Mansion Rentals', href: '/search?type=mansion', description: 'Luxurious estate properties' },
        { name: 'Villa Rentals', href: '/search?type=villa', description: 'Private villa accommodations' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Map className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through all pages and features available on our platform. Find exactly what you're looking for.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search sitemap..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
            />
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sitemapSections.map((section, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-[#FF5A5F]">{section.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              
              <div className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="group">
                    <Link
                      to={link.href}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 group-hover:text-[#FF5A5F] transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {link.description}
                          </p>
                        </div>
                        <svg 
                          className="w-4 h-4 text-gray-400 group-hover:text-[#FF5A5F] transition-colors mt-1 ml-2 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Finding Something?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help you navigate our platform and find the information you need.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Help Centre</h3>
              <p className="text-sm text-gray-600 mb-4">Browse our comprehensive help articles</p>
              <Link to="/help" className="text-[#FF5A5F] hover:underline font-medium">
                Visit Help Centre
              </Link>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Contact Support</h3>
              <p className="text-sm text-gray-600 mb-4">Get personalized help from our team</p>
              <Link to="/contact" className="text-[#FF5A5F] hover:underline font-medium">
                Contact Us
              </Link>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Community Forum</h3>
              <p className="text-sm text-gray-600 mb-4">Connect with other users and hosts</p>
              <Link to="/community" className="text-[#FF5A5F] hover:underline font-medium">
                Join Community
              </Link>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Last updated: January 15, 2025
        </div>
      </div>
    </div>
  );
};

export default Sitemap;