import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Globe, Menu, User, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser, setIsLoginModalOpen } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('homes');

  const handleLogout = () => {
    setUser(null);
    setIsMenuOpen(false);
    navigate('/');
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'experiences') {
      navigate('/experiences');
    } else if (tab === 'services') {
      navigate('/services');
    } else {
      navigate('/');
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#FF5A5F]">
              <path fill="currentColor" d="M16 1C7.163 1 0 8.163 0 17s7.163 16 16 16 16-7.163 16-16S24.837 1 16 1zm0 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 24.732 2 17 8.268 3 16 3zm0 2C9.373 5 4 10.373 4 17s5.373 12 12 12 12-5.373 12-12S22.627 5 16 5zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 22.523 6 17s4.477-10 10-10z"/>
            </svg>
            <span className="hidden sm:inline font-bold text-xl text-[#FF5A5F] ml-2">airbnb</span>
          </Link>

          {/* Navigation Tabs - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleTabClick('homes')}
              className={`flex items-center space-x-2 px-4 py-3 rounded-full transition-colors relative ${
                activeTab === 'homes' 
                  ? 'text-gray-900' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                <path d="M8 1l6.25 7h-1.48L8 2.75 3.23 8H1.75L8 1z"/>
                <path d="M3 9v6h3v-4h4v4h3V9l-5-5.5L3 9z"/>
              </svg>
              <span className="font-medium">Homes</span>
              {activeTab === 'homes' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-900"></div>
              )}
            </button>
            
            <button
              onClick={() => handleTabClick('experiences')}
              className={`flex items-center space-x-2 px-4 py-3 rounded-full transition-colors relative ${
                activeTab === 'experiences' 
                  ? 'text-gray-900' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM6.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM8 6a4 4 0 0 1 4 4H4a4 4 0 0 1 4-4z"/>
              </svg>
              <span className="font-medium">Experiences</span>
              {activeTab === 'experiences' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-900"></div>
              )}
            </button>
            
            <button
              onClick={() => handleTabClick('services')}
              className={`flex items-center space-x-2 px-4 py-3 rounded-full transition-colors relative ${
                activeTab === 'services' 
                  ? 'text-gray-900' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                <path d="M3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3zm0 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7zm0 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2z"/>
              </svg>
              <span className="font-medium">Services</span>
              {activeTab === 'services' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-900"></div>
              )}
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-full transition-colors">
              Become a Host
            </button>

            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
              <Globe className="w-4 h-4" />
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-3 px-3 py-2 border border-gray-300 rounded-full hover:shadow-md transition-shadow"
              >
                <Menu className="w-4 h-4" />
                <div className="w-7 h-7 bg-gray-500 rounded-full flex items-center justify-center">
                  {user ? (
                    <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full" />
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                </div>
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  {user ? (
                    <>
                      <Link 
                        to="/profile" 
                        className="block px-4 py-3 text-sm hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link 
                        to="/trips" 
                        className="block px-4 py-3 text-sm hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Trips
                      </Link>
                      <Link 
                        to="/wishlists" 
                        className="block px-4 py-3 text-sm hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Wishlists
                      </Link>
                      <hr className="my-2" />
                      <Link 
                        to="/host" 
                        className="block px-4 py-3 text-sm hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Manage listings
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50"
                      >
                        Log out
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => {
                          setIsLoginModalOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-50"
                      >
                        Log in
                      </button>
                      <button 
                        onClick={() => {
                          setIsLoginModalOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50"
                      >
                        Sign up
                      </button>
                      <hr className="my-2" />
                      <button className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50">
                        Airbnb your home
                      </button>
                      <button className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50">
                        Help Center
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar - Full Width Below Header */}
        {activeTab === 'homes' && (
          <div className="pb-6">
            <SearchBar />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;