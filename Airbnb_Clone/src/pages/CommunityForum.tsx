import React, { useState } from 'react';
import { MessageCircle, Users, TrendingUp, Clock, ThumbsUp, MessageSquare, Search, Filter, Plus } from 'lucide-react';

const CommunityForum: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const categories = [
    { id: 'all', name: 'All discussions', count: 15420 },
    { id: 'getting-started', name: 'Getting started', count: 2340 },
    { id: 'hosting-tips', name: 'Hosting tips', count: 4560 },
    { id: 'guest-experience', name: 'Guest experience', count: 3210 },
    { id: 'pricing', name: 'Pricing strategies', count: 1890 },
    { id: 'safety', name: 'Safety & security', count: 1120 },
    { id: 'legal', name: 'Legal & regulations', count: 980 },
    { id: 'technical', name: 'Technical support', count: 1320 }
  ];

  const discussions = [
    {
      id: 1,
      title: 'How to handle difficult guests professionally?',
      author: 'Sarah M.',
      authorLevel: 'Superhost',
      category: 'guest-experience',
      replies: 23,
      likes: 45,
      views: 1240,
      lastActivity: '2 hours ago',
      isHot: true,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      preview: 'I recently had a guest who was very demanding and left negative feedback despite...'
    },
    {
      id: 2,
      title: 'Best practices for pricing during peak season',
      author: 'Mike R.',
      authorLevel: 'Host',
      category: 'pricing',
      replies: 18,
      likes: 32,
      views: 890,
      lastActivity: '4 hours ago',
      isHot: false,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      preview: 'With summer approaching, I\'m wondering what strategies other hosts use for...'
    },
    {
      id: 3,
      title: 'New host - first booking anxiety!',
      author: 'Emma L.',
      authorLevel: 'New Host',
      category: 'getting-started',
      replies: 31,
      likes: 67,
      views: 2100,
      lastActivity: '6 hours ago',
      isHot: true,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      preview: 'I just got my first booking and I\'m so nervous! Any tips for making sure...'
    },
    {
      id: 4,
      title: 'Smart lock recommendations for hosts',
      author: 'David K.',
      authorLevel: 'Superhost',
      category: 'technical',
      replies: 15,
      likes: 28,
      views: 650,
      lastActivity: '8 hours ago',
      isHot: false,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      preview: 'Looking to upgrade to a smart lock system. What brands do you recommend...'
    },
    {
      id: 5,
      title: 'Dealing with local regulations - need advice',
      author: 'Anna P.',
      authorLevel: 'Host',
      category: 'legal',
      replies: 12,
      likes: 19,
      views: 480,
      lastActivity: '12 hours ago',
      isHot: false,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      preview: 'My city just introduced new short-term rental regulations and I\'m confused...'
    }
  ];

  const topContributors = [
    {
      name: 'Jennifer S.',
      level: 'Superhost',
      posts: 1240,
      helpfulVotes: 3450,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Carlos M.',
      level: 'Community Leader',
      posts: 980,
      helpfulVotes: 2890,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa T.',
      level: 'Superhost',
      posts: 756,
      helpfulVotes: 2340,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const filteredDiscussions = selectedCategory === 'all' 
    ? discussions 
    : discussions.filter(discussion => discussion.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Community Forum</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with fellow hosts, share experiences, and get advice from the Airbnb community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">50K+</div>
                <div className="text-sm text-gray-600">Active members</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">15K+</div>
                <div className="text-sm text-gray-600">Discussions</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Community support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* New Discussion Button */}
            <button className="w-full bg-[#FF5A5F] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#E54850] transition-colors mb-6 flex items-center justify-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Start Discussion</span>
            </button>

            {/* Categories */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#FF5A5F] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <span className="text-sm opacity-75">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{contributor.name}</div>
                      <div className="text-sm text-gray-500">{contributor.level}</div>
                      <div className="text-xs text-gray-400">
                        {contributor.posts} posts • {contributor.helpfulVotes} helpful votes
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                >
                  <option value="recent">Most recent</option>
                  <option value="popular">Most popular</option>
                  <option value="replies">Most replies</option>
                  <option value="likes">Most liked</option>
                </select>
              </div>
            </div>

            {/* Discussions List */}
            <div className="space-y-4">
              {filteredDiscussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <img
                      src={discussion.avatar}
                      alt={discussion.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900 hover:text-[#FF5A5F] transition-colors">
                              {discussion.title}
                            </h3>
                            {discussion.isHot && (
                              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                <TrendingUp className="w-3 h-3" />
                                <span>Hot</span>
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                            <span className="font-medium">{discussion.author}</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                              {discussion.authorLevel}
                            </span>
                            <span>•</span>
                            <span>{discussion.lastActivity}</span>
                          </div>
                          <p className="text-gray-600 mb-3">{discussion.preview}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{discussion.likes} likes</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span>{discussion.views} views</span>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400 capitalize">
                          {categories.find(c => c.id === discussion.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Load more discussions
              </button>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Be Respectful</h3>
              <p className="text-sm text-gray-600">Treat all community members with respect and kindness</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-full mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stay On Topic</h3>
              <p className="text-sm text-gray-600">Keep discussions relevant to hosting and Airbnb</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4">
                <ThumbsUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Be Helpful</h3>
              <p className="text-sm text-gray-600">Share knowledge and support fellow hosts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;