import React, { useState } from 'react';
import { Globe, Facebook, Twitter, Instagram, X, Code, Heart, Coffee, Zap, Github, Linkedin, ExternalLink, User, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [showMore, setShowMore] = useState(false);
  const [showCreatorModal, setShowCreatorModal] = useState(false);

  const footerSections = [
    {
      title: 'Support',
      links: [
        { name: 'Help Centre', href: '/help' },
        { name: 'AirCover', href: '/aircover' },
        { name: 'Anti-discrimination', href: '/anti-discrimination' },
        { name: 'Disability support', href: '/disability-support' },
        { name: 'Cancellation options', href: '/cancellation-options' },
        { name: 'Report neighbourhood concern', href: '/report-concern' }
      ]
    },
    {
      title: 'Hosting',
      links: [
        { name: 'Airbnb your home', href: '/host' },
        { name: 'Airbnb your experience', href: '/host-experience' },
        { name: 'Airbnb your service', href: '/host-service' },
        { name: 'AirCover for Hosts', href: '/aircover-hosts' },
        { name: 'Hosting resources', href: '/hosting-resources' },
        { name: 'Community forum', href: '/community' },
        { name: 'Hosting responsibly', href: '/hosting-responsibly' },
        { name: 'Join a free Hosting class', href: '/hosting-class' },
        { name: 'Find a co‑host', href: '/co-host' }
      ]
    },
    {
      title: 'Airbnb',
      links: [
        { name: '2025 Summer Release', href: '/summer-release' },
        { name: 'Newsroom', href: '/newsroom' },
        { name: 'Careers', href: '/careers' },
        { name: 'Investors', href: '/investors' },
        { name: 'Airbnb.org emergency stays', href: '/emergency-stays' }
      ]
    }
  ];

  const inspirationCategories = [
    {
      category: 'Popular',
      id: 'popular',
      destinations: [
        { name: 'Canmore', location: 'Apartment rentals' },
        { name: 'Benalmádena', location: 'Apartment rentals' },
        { name: 'Marbella', location: 'Apartment rentals' },
        { name: 'Mijas', location: 'House rentals' },
        { name: 'Prescott', location: 'House rentals' },
        { name: 'Scottsdale', location: 'Apartment rentals' },
        { name: 'Tucson', location: 'House rentals' },
        { name: 'Jasper', location: 'Cabin rentals' },
        { name: 'Mountain View', location: 'House rentals' },
        { name: 'Devonport', location: 'Cottage rentals' },
        { name: 'Mallacoota', location: 'House rentals' },
        { name: 'Ibiza', location: 'Apartment rentals' },
        { name: 'Anaheim', location: 'House rentals' },
        { name: 'Monterey', location: 'House rentals' },
        { name: 'Paso Robles', location: 'House rentals' },
        { name: 'Santa Barbara', location: 'House rentals' },
        { name: 'Sonoma', location: 'Apartment rentals' }
      ]
    },
    {
      category: 'Arts & culture',
      id: 'arts-culture',
      destinations: [
        { name: 'Phoenix', location: 'Apartment rentals' },
        { name: 'Hot Springs', location: 'Cabin rentals' },
        { name: 'Los Angeles', location: 'Apartment rentals' },
        { name: 'San Diego', location: 'Apartment rentals' },
        { name: 'San Francisco', location: 'Apartment rentals' },
        { name: 'Barcelona', location: 'Apartment rentals' },
        { name: 'Prague', location: 'Apartment rentals' },
        { name: 'Washington', location: 'Apartment rentals' },
        { name: 'Keswick', location: 'Cottage rentals' },
        { name: 'London', location: 'Apartment rentals' },
        { name: 'Scarborough', location: 'Apartment rentals' },
        { name: 'Sherwood Forest', location: 'Cottage rentals' },
        { name: 'York', location: 'Apartment rentals' },
        { name: 'Paris', location: 'Apartment rentals' },
        { name: 'Rhodes', location: 'House rentals' },
        { name: 'Nashville', location: 'Apartment rentals' },
        { name: 'Dublin', location: 'Apartment rentals' }
      ]
    },
    {
      category: 'Outdoors',
      id: 'outdoors',
      destinations: [
        { name: 'Lake Martin', location: 'Cabin rentals' },
        { name: 'Banff', location: 'Cabin rentals' },
        { name: 'Nerja', location: 'Apartment rentals' },
        { name: 'Greer', location: 'Cabin rentals' },
        { name: 'Lake Havasu City', location: 'House rentals' },
        { name: 'Lake Powell', location: 'House rentals' },
        { name: 'North Rim', location: 'Cabin rentals' },
        { name: 'Payson', location: 'Cabin rentals' },
        { name: 'Pinetop-Lakeside', location: 'Cabin rentals' },
        { name: 'Red Rock', location: 'Cabin rentals' },
        { name: 'Dinner Plain', location: 'House rentals' },
        { name: 'Streaky Bay', location: 'House rentals' },
        { name: 'Emerald Lake', location: 'Cabin rentals' },
        { name: 'Vancouver Island', location: 'Cabin rentals' },
        { name: 'Victoria', location: 'Apartment rentals' },
        { name: 'Idyllwild-Pine Cove', location: 'Cabin rentals' },
        { name: 'Mammoth Lakes', location: 'Cabin rentals' }
      ]
    },
    {
      category: 'Mountains',
      id: 'mountains',
      destinations: [
        { name: 'Mentone', location: 'Cabin rentals' },
        { name: 'Sedona', location: 'Apartment rentals' },
        { name: 'Helen', location: 'Cabin rentals' },
        { name: 'Pine Mountain', location: 'Cabin rentals' },
        { name: 'Stone Mountain', location: 'Cabin rentals' },
        { name: 'Island Park', location: 'Cabin rentals' },
        { name: 'Blue Ridge', location: 'Cabin rentals' },
        { name: 'Asheville', location: 'Apartment rentals' },
        { name: 'Blowing Rock', location: 'Cabin rentals' },
        { name: 'Boone', location: 'Cabin rentals' },
        { name: 'Hochatown', location: 'Cabin rentals' },
        { name: 'Pigeon Forge', location: 'Cabin rentals' },
        { name: 'Townsend', location: 'Cabin rentals' },
        { name: 'Wears Valley', location: 'Cabin rentals' },
        { name: 'Cabins', location: 'Cabin rentals' }
      ]
    },
    {
      category: 'Beach',
      id: 'beach',
      destinations: [
        { name: 'Dauphin Island', location: 'House rentals' },
        { name: 'Fort Morgan', location: 'House rentals' },
        { name: 'Gulf Shores', location: 'House rentals' },
        { name: 'Bruny Island', location: 'House rentals' },
        { name: 'Crescent Head', location: 'House rentals' },
        { name: 'Gerringong', location: 'House rentals' },
        { name: 'Hamilton Island', location: 'Apartment rentals' },
        { name: 'Lancelin', location: 'House rentals' },
        { name: 'Melbourne Beach', location: 'House rentals' },
        { name: 'Morisset', location: 'House rentals' },
        { name: 'Ocean Grove', location: 'House rentals' },
        { name: 'Majorca', location: 'House rentals' },
        { name: 'Belize', location: 'House rentals' },
        { name: 'Placencia', location: 'House rentals' },
        { name: 'Tybee Island', location: 'House rentals' },
        { name: 'Destin', location: 'Apartment rentals' },
        { name: 'Fort Walton Beach', location: 'House rentals' }
      ]
    },
    {
      category: 'Unique stays',
      id: 'unique-stays',
      destinations: [
        { name: 'Yurt Rentals', location: 'United States' },
        { name: 'Yurt Rentals', location: 'United Kingdom' },
        { name: 'Castle Rentals', location: 'United States' },
        { name: 'Houseboats', location: 'United States' },
        { name: 'Holiday Caravans', location: 'United Kingdom' },
        { name: 'Private Island Rentals', location: 'United States' },
        { name: 'Farm Houses', location: 'United States' },
        { name: 'Farm Cottages', location: 'United Kingdom' },
        { name: 'Cabin Rentals', location: 'Australia' },
        { name: 'Luxury Cabins', location: 'United Kingdom' },
        { name: 'Luxury Cabins', location: 'United States' },
        { name: 'Holiday Chalets', location: 'United Kingdom' },
        { name: 'Cottage Rentals', location: 'United States' },
        { name: 'Holiday Cottages', location: 'United Kingdom' },
        { name: 'Mansion Rentals', location: 'United States' },
        { name: 'Villa Rentals', location: 'United Kingdom' },
        { name: 'Holiday Bungalows', location: 'United Kingdom' }
      ]
    }
  ];

  const selectedCategoryData = inspirationCategories.find(cat => cat.id === selectedCategory);
  const displayedDestinations = showMore 
    ? selectedCategoryData?.destinations || []
    : (selectedCategoryData?.destinations || []).slice(0, 12);

  // Creator Modal Component
  const CreatorModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">⚠️ Disclaimer & Acknowledgement</h2>
                <p className="text-gray-600">Website Creator Information</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreatorModal(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Creator Info */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">💻🌐👨‍💻 Website Creator: Abhisek Panda</h3>
                <p className="text-gray-600">Full-Stack Web Developer</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <a 
                href="https://abhisekpanda072.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Globe className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="font-semibold text-gray-900">🌍 Portfolio</div>
                  <div className="text-sm text-gray-600">abhisekpanda072.vercel.app</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
              
              <a 
                href="https://github.com/abhisek2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Github className="w-6 h-6 text-gray-900" />
                <div>
                  <div className="font-semibold text-gray-900">🐙 GitHub</div>
                  <div className="text-sm text-gray-600">abhisek2004</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/abhisekpanda2004/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">💼 LinkedIn</div>
                  <div className="text-sm text-gray-600">abhisekpanda2004</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="text-yellow-600 mt-1">🚧</div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Important Note:</h4>
                <p className="text-yellow-800 leading-relaxed">
                  This website has been developed as a personal learning project to sharpen my skills in full-stack web development — specifically using the MERN stack:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">M</span>
                    </div>
                    <span className="text-sm font-medium">🧠 MongoDB</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">E</span>
                    </div>
                    <span className="text-sm font-medium">🚀 Express.js</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">R</span>
                    </div>
                    <span className="text-sm font-medium">⚛️ React.js</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">N</span>
                    </div>
                    <span className="text-sm font-medium">🛠️ Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purpose */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center space-x-2">
              <span>🎯</span>
              <span>Purpose of this Project:</span>
            </h4>
            <p className="text-blue-800 mb-4">
              This is not an official Airbnb product. I built this clone project as a part of my journey into professional web development. The goal was to:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800">Explore real-world web scraping using Puppeteer, Axios, and Cheerio 🕷️</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800">Practice routing, dynamic UI rendering, and API integration 🧩</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800">Experiment with clean UI/UX practices and responsiveness 📱💻🖥️</span>
              </div>
              <div className="flex items-center space-x-3">
                <Coffee className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800">Push myself to learn by recreating something from scratch 🏗️</span>
              </div>
            </div>
          </div>

          {/* Content Disclaimer */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <h4 className="text-lg font-semibold text-red-900 mb-4">📊 About the Content:</h4>
            <div className="space-y-3 text-red-800">
              <p>The data (such as experiences, services, and photos) has been scraped from the official Airbnb website (https://airbnb.com) purely for educational and demonstration purposes.</p>
              <p>⚠️ I do not claim any ownership over the content, design, or media. All trademarks, logos, photos, and statistics belong to Airbnb, Inc.</p>
              <p>📸 Property images and content are sourced only to recreate a real-time UI experience for learning purposes and are not being used commercially or maliciously.</p>
            </div>
          </div>

          {/* No Affiliation */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">❌ No Affiliation Notice:</h4>
            <p className="text-gray-700">
              This site is not affiliated with, endorsed by, or associated with Airbnb or any of its partners, sponsors, or media outlets.
              It is a fan-made clone and a portfolio piece for skill demonstration only.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center">
            <h4 className="text-xl font-bold mb-4">🧠 Calling Developers, Learners & Recruiters!</h4>
            <p className="mb-6">
              If you're someone who's into learning the MERN stack, working with real-time data APIs and scraping, 
              exploring frontend or backend architecture, or collaborating on open-source projects...
            </p>
            <p className="text-lg font-semibold mb-4">📬 Feel free to reach out!</p>
            <p className="mb-6">
              Let's connect on LinkedIn or check out more of my work on GitHub. I'm always up for feedback, collaboration, or just tech talk 🤝✨
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg font-bold">
              <span>🧪 This project = Code</span>
              <Coffee className="w-6 h-6" />
              <span>Coffee</span>
              <span>+ Curiosity ☕💡💻</span>
            </div>
            <p className="mt-4 text-purple-100">
              Thanks for visiting this experimental build! Hope it inspires you to build something of your own 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inspiration section */}
        <div className="py-12 border-b border-gray-200">
          <h2 className="text-2xl font-semibold mb-8">Inspiration for future getaways</h2>
          
          {/* Tabs */}
          <div className="flex space-x-8 border-b border-gray-200 mb-8 overflow-x-auto">
            {inspirationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setShowMore(false);
                }}
                className={`pb-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Selected category content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedDestinations.map((destination, index) => (
              <div key={index} className="space-y-2">
                <Link
                  to={`/search?location=${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-sm font-medium text-gray-900 hover:text-gray-700 hover:underline transition-colors"
                >
                  {destination.name}
                </Link>
                <p className="text-sm text-gray-600">{destination.location}</p>
              </div>
            ))}
          </div>

          {selectedCategoryData && selectedCategoryData.destinations.length > 12 && (
            <button 
              onClick={() => setShowMore(!showMore)}
              className="mt-8 text-gray-900 font-medium hover:underline"
            >
              {showMore ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left Side */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="text-sm text-gray-600">
                © 2025 Airbnb, Inc.
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy
                </Link>
                <span className="text-gray-300">·</span>
                <Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms
                </Link>
                <span className="text-gray-300">·</span>
                <Link to="/sitemap" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Sitemap
                </Link>
                <span className="text-gray-300">·</span>
                <Link to="/company-details" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Company details
                </Link>
                <span className="text-gray-300">·</span>
                <button 
                  onClick={() => setShowCreatorModal(true)}
                  className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
                >
                  <Code className="w-4 h-4" />
                  <span>Creator</span>
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              {/* Language & Currency */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>English (US)</span>
                </button>
                <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  $ USD
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Modal */}
      {showCreatorModal && <CreatorModal />}
    </footer>
  );
};

export default Footer;