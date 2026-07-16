import React, { useState } from 'react';
import { Star, MapPin, Clock, Users, Heart, Filter, Calendar, Search, Play, Video, Globe, Award, Shield, CheckCircle, TrendingUp, MessageCircle, Camera, Wrench, Utensils, Palette, User, Lock, Sparkles, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Experience {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  reviewCount: number;
  images: string[];
  location: {
    city: string;
    country: string;
  };
  host: {
    name: string;
    avatar: string;
    isSuperhost: boolean;
    responseRate: number;
    responseTime: string;
    languages: string[];
  };
  category: string;
  maxGuests: number;
  languages: string[];
  includes: string[];
  highlights: string[];
  isOnlineExperience: boolean;
  isAirbnbOriginal?: boolean;
  tags: string[];
  difficulty: string;
  ageRestriction: string;
  groupSize: string;
  cancellationPolicy: string;
  whatToBring: string[];
  meetingPoint: string;
  accessibility: string[];
}

const Experiences: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const categories = [
    { id: 'all', name: 'All experiences', count: 2500, icon: '🌟' },
    { id: 'food-drink', name: 'Food & drink', count: 680, icon: '🍷' },
    { id: 'art-culture', name: 'Art & culture', count: 520, icon: '🎨' },
    { id: 'nature-outdoors', name: 'Nature & outdoors', count: 450, icon: '🏔️' },
    { id: 'sports', name: 'Sports', count: 320, icon: '⚽' },
    { id: 'entertainment', name: 'Entertainment', count: 280, icon: '🎭' },
    { id: 'wellness', name: 'Wellness', count: 240, icon: '🧘' },
    { id: 'online', name: 'Online experiences', count: 180, icon: '💻' },
    { id: 'music', name: 'Music', count: 150, icon: '🎵' },
    { id: 'history', name: 'History & culture', count: 130, icon: '🏛️' },
    { id: 'family', name: 'Family friendly', count: 200, icon: '👨‍👩‍👧‍👦' },
    { id: 'photography', name: 'Photography', count: 110, icon: '📸' }
  ];

  // Airbnb Originals - Premium curated experiences from original website
  const airbnbOriginals = [
    {
      id: 'orig-1',
      title: 'Design a Bag with Samara Joy',
      description: 'Join Grammy-winning jazz vocalist Samara Joy for an intimate session designing custom tote bags while discussing her musical journey and creative process.',
      price: 85,
      duration: '90 minutes',
      rating: 4.9,
      reviewCount: 234,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      host: 'Samara Joy',
      isOnline: true,
      category: 'Music & Design',
      highlights: ['Grammy-winning artist', 'Custom tote bag creation', 'Music industry insights', 'Creative design process']
    },
    {
      id: 'orig-2',
      title: 'Cook with Priyanka Chopra Jonas',
      description: 'Learn to make authentic Indian dishes with global superstar Priyanka Chopra Jonas in her home kitchen, sharing stories of culture and family traditions.',
      price: 120,
      duration: '2 hours',
      rating: 4.9,
      reviewCount: 567,
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800',
      host: 'Priyanka Chopra Jonas',
      isOnline: true,
      category: 'Cooking & Culture',
      highlights: ['Global superstar chef', 'Authentic Indian recipes', 'Cultural storytelling', 'Family traditions']
    },
    {
      id: 'orig-3',
      title: 'Magic with David Blaine',
      description: 'Learn mind-bending magic tricks and the psychology behind illusions with world-renowned magician David Blaine in this exclusive masterclass.',
      price: 95,
      duration: '75 minutes',
      rating: 4.8,
      reviewCount: 445,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      host: 'David Blaine',
      isOnline: true,
      category: 'Magic & Psychology',
      highlights: ['World-renowned magician', 'Mind-bending tricks', 'Psychology of illusion', 'Exclusive techniques']
    },
    {
      id: 'orig-4',
      title: 'Meditation with Deepak Chopra',
      description: 'Experience transformative meditation techniques with wellness pioneer Deepak Chopra in this profound journey of self-discovery and inner peace.',
      price: 75,
      duration: '60 minutes',
      rating: 4.9,
      reviewCount: 678,
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
      host: 'Deepak Chopra',
      isOnline: true,
      category: 'Wellness & Spirituality',
      highlights: ['Wellness pioneer', 'Transformative techniques', 'Self-discovery journey', 'Inner peace practices']
    },
    {
      id: 'orig-5',
      title: 'Storytelling with Matthew McConaughey',
      description: 'Learn the art of storytelling from Academy Award-winning actor Matthew McConaughey, exploring narrative techniques and personal expression.',
      price: 110,
      duration: '90 minutes',
      rating: 4.8,
      reviewCount: 389,
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800',
      host: 'Matthew McConaughey',
      isOnline: true,
      category: 'Storytelling & Acting',
      highlights: ['Academy Award winner', 'Narrative techniques', 'Personal expression', 'Acting insights']
    },
    {
      id: 'orig-6',
      title: 'Photography with Annie Leibovitz',
      description: 'Master portrait photography with legendary photographer Annie Leibovitz, learning composition, lighting, and storytelling through images.',
      price: 150,
      duration: '2 hours',
      rating: 4.9,
      reviewCount: 456,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      host: 'Annie Leibovitz',
      isOnline: true,
      category: 'Photography & Art',
      highlights: ['Legendary photographer', 'Portrait mastery', 'Composition techniques', 'Visual storytelling']
    }
  ];

  // Popular with travellers from India (based on original website data)
  const popularWithTravellers = [
    {
      id: 'pop-1',
      title: 'Mumbai Street Food Walking Tour',
      description: 'Discover the authentic flavors of Mumbai with a local food expert through bustling markets and hidden gems, tasting iconic street foods.',
      price: 35,
      duration: '3 hours',
      rating: 4.8,
      reviewCount: 892,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Mumbai, India',
      category: 'Food & Culture',
      highlights: ['Local food expert', 'Authentic street food', 'Hidden gems', 'Cultural immersion']
    },
    {
      id: 'pop-2',
      title: 'Bollywood Dance Workshop',
      description: 'Learn energetic Bollywood dance moves from professional choreographers in the heart of Mumbai, complete with costume and music.',
      price: 45,
      duration: '2 hours',
      rating: 4.9,
      reviewCount: 567,
      image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Mumbai, India',
      category: 'Dance & Culture',
      highlights: ['Professional choreographers', 'Authentic Bollywood', 'Costume included', 'Music and energy']
    },
    {
      id: 'pop-3',
      title: 'Sunrise Yoga at Marine Drive',
      description: 'Start your day with peaceful yoga practice overlooking the Arabian Sea at iconic Marine Drive, guided by certified instructors.',
      price: 25,
      duration: '90 minutes',
      rating: 4.7,
      reviewCount: 334,
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Mumbai, India',
      category: 'Wellness & Nature',
      highlights: ['Iconic location', 'Sunrise practice', 'Arabian Sea views', 'Certified instructors']
    },
    {
      id: 'pop-4',
      title: 'Traditional Pottery Making',
      description: 'Create beautiful pottery using ancient techniques passed down through generations, working with local artisans in their traditional workshop.',
      price: 40,
      duration: '2.5 hours',
      rating: 4.8,
      reviewCount: 445,
      image: 'https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Pune, India',
      category: 'Arts & Crafts',
      highlights: ['Ancient techniques', 'Local artisans', 'Traditional workshop', 'Take home creation']
    },
    {
      id: 'pop-5',
      title: 'Spice Market Tour & Cooking Class',
      description: 'Explore vibrant spice markets with a local chef, then learn to cook authentic Indian dishes using fresh spices and traditional methods.',
      price: 55,
      duration: '4 hours',
      rating: 4.9,
      reviewCount: 623,
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Delhi, India',
      category: 'Food & Culture',
      highlights: ['Spice market exploration', 'Local chef guide', 'Authentic cooking', 'Traditional methods']
    },
    {
      id: 'pop-6',
      title: 'Heritage Walk in Old Delhi',
      description: 'Journey through centuries of history in Old Delhi, exploring ancient monuments, bustling bazaars, and hidden architectural gems.',
      price: 30,
      duration: '3 hours',
      rating: 4.6,
      reviewCount: 789,
      image: 'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Delhi, India',
      category: 'History & Culture',
      highlights: ['Ancient monuments', 'Historical insights', 'Architectural gems', 'Cultural immersion']
    }
  ];

  // Experiences in South Goa (based on original website)
  const southGoaExperiences = [
    {
      id: 'goa-1',
      title: 'Spice Plantation Tour & Cooking Class',
      description: 'Explore organic spice plantations and learn to cook authentic Goan cuisine with fresh ingredients, including traditional recipes and techniques.',
      price: 55,
      duration: '4 hours',
      rating: 4.9,
      reviewCount: 678,
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'South Goa, India',
      category: 'Food & Nature',
      highlights: ['Organic plantations', 'Authentic Goan cuisine', 'Traditional recipes', 'Fresh ingredients']
    },
    {
      id: 'goa-2',
      title: 'Sunset Dolphin Watching Cruise',
      description: 'Sail along the Goan coast to spot playful dolphins while enjoying a spectacular sunset, with refreshments and marine life education.',
      price: 45,
      duration: '3 hours',
      rating: 4.8,
      reviewCount: 523,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'South Goa, India',
      category: 'Wildlife & Nature',
      highlights: ['Dolphin spotting', 'Spectacular sunset', 'Marine education', 'Refreshments included']
    },
    {
      id: 'goa-3',
      title: 'Traditional Feni Distillery Experience',
      description: 'Learn about Goa\'s traditional cashew feni production and enjoy tastings at a local distillery, understanding the cultural significance.',
      price: 35,
      duration: '2 hours',
      rating: 4.7,
      reviewCount: 289,
      image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'South Goa, India',
      category: 'Culture & Drinks',
      highlights: ['Traditional production', 'Feni tastings', 'Cultural significance', 'Local distillery']
    },
    {
      id: 'goa-4',
      title: 'Beach Yoga & Meditation Retreat',
      description: 'Find inner peace with guided yoga and meditation sessions on pristine South Goan beaches, with breathing exercises and relaxation.',
      price: 30,
      duration: '2 hours',
      rating: 4.9,
      reviewCount: 445,
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'South Goa, India',
      category: 'Wellness',
      highlights: ['Pristine beaches', 'Guided meditation', 'Breathing exercises', 'Inner peace focus']
    },
    {
      id: 'goa-5',
      title: 'Portuguese Heritage Walking Tour',
      description: 'Discover the colonial history of Goa through its beautiful Portuguese architecture and churches, with expert historical commentary.',
      price: 25,
      duration: '2.5 hours',
      rating: 4.6,
      reviewCount: 356,
      image: 'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'South Goa, India',
      category: 'History & Culture',
      highlights: ['Colonial history', 'Portuguese architecture', 'Historic churches', 'Expert commentary']
    },
    {
      id: 'goa-6',
      title: 'Backwater Kayaking Adventure',
      description: 'Paddle through serene backwaters and mangrove forests while spotting exotic birds and wildlife, with nature guide and equipment.',
      price: 50,
      duration: '3.5 hours',
      rating: 4.8,
      reviewCount: 234,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'South Goa, India',
      category: 'Adventure & Nature',
      highlights: ['Serene backwaters', 'Mangrove exploration', 'Wildlife spotting', 'Nature guide included']
    }
  ];

  // International experiences (based on original website data)
  const internationalExperiences = [
    {
      id: 'int-1',
      title: 'Pasta Making Class with Local Nonna',
      description: 'Learn authentic Italian pasta making from a real Italian grandmother in her home kitchen, with wine tasting and family stories.',
      price: 65,
      duration: '3 hours',
      rating: 4.9,
      reviewCount: 1247,
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Rome, Italy',
      category: 'Food & Culture',
      highlights: ['Authentic Italian nonna', 'Family recipes', 'Wine tasting', 'Home kitchen experience']
    },
    {
      id: 'int-2',
      title: 'Street Art Walking Tour & Graffiti Workshop',
      description: 'Discover hidden murals and learn about the underground art scene with a local street artist, creating your own piece.',
      price: 35,
      duration: '2.5 hours',
      rating: 4.8,
      reviewCount: 892,
      image: 'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Berlin, Germany',
      category: 'Art & Culture',
      highlights: ['Hidden murals', 'Underground art scene', 'Local street artist', 'Create your own art']
    },
    {
      id: 'int-3',
      title: 'Sunrise Yoga & Meditation in Red Rocks',
      description: 'Start your day with peaceful yoga practice surrounded by breathtaking red rock formations and spiritual energy.',
      price: 45,
      duration: '2 hours',
      rating: 4.9,
      reviewCount: 634,
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Sedona, United States',
      category: 'Wellness & Nature',
      highlights: ['Red rock formations', 'Spiritual energy', 'Sunrise practice', 'Breathtaking views']
    },
    {
      id: 'int-4',
      title: 'Virtual Cocktail Making Masterclass',
      description: 'Learn to craft professional cocktails from home with a world-class mixologist, with ingredient kit and techniques.',
      price: 25,
      duration: '1.5 hours',
      rating: 4.7,
      reviewCount: 456,
      image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Online, Worldwide',
      category: 'Food & Drink',
      highlights: ['World-class mixologist', 'Professional techniques', 'Ingredient kit', 'Home cocktail bar']
    },
    {
      id: 'int-5',
      title: 'Authentic Flamenco Dance Workshop',
      description: 'Learn passionate flamenco moves from professional dancers in an authentic Spanish setting with live music.',
      price: 55,
      duration: '2 hours',
      rating: 4.8,
      reviewCount: 723,
      image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Seville, Spain',
      category: 'Dance & Culture',
      highlights: ['Professional dancers', 'Authentic setting', 'Live music', 'Passionate flamenco']
    },
    {
      id: 'int-6',
      title: 'Kayaking Adventure with Marine Wildlife',
      description: 'Paddle through pristine waters while spotting dolphins, seals, and seabirds in their natural habitat with expert guide.',
      price: 85,
      duration: '4 hours',
      rating: 4.9,
      reviewCount: 567,
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Monterey Bay, United States',
      category: 'Adventure & Wildlife',
      highlights: ['Marine wildlife', 'Pristine waters', 'Expert guide', 'Natural habitat']
    }
  ];

  const featuredCollections = [
    {
      title: 'Online Experiences',
      description: 'Interactive activities you can do from home',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '180+ experiences',
      link: '/experiences?category=online'
    },
    {
      title: 'Food & Drink',
      description: 'Cooking classes and tastings with local experts',
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '680+ experiences',
      link: '/experiences?category=food-drink'
    },
    {
      title: 'Art & Culture',
      description: 'Creative workshops and cultural tours',
      image: 'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '520+ experiences',
      link: '/experiences?category=art-culture'
    },
    {
      title: 'Nature & Outdoors',
      description: 'Adventures in the great outdoors',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '450+ experiences',
      link: '/experiences?category=nature-outdoors'
    }
  ];

  const filteredExperiences = selectedCategory === 'all' 
    ? internationalExperiences 
    : internationalExperiences.filter(exp => exp.category.toLowerCase().includes(selectedCategory));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Airbnb Experiences</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-1 px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="What do you want to learn or explore?"
                      className="w-full text-lg bg-transparent border-none outline-none placeholder-gray-400"
                    />
                  </div>
                </div>
                <button className="mr-2 p-4 bg-[#FF5A5F] text-white rounded-full hover:bg-[#E54850] transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">2500+</div>
                <div className="text-sm text-gray-600">Experiences</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">150K+</div>
                <div className="text-sm text-gray-600">Happy guests</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">4.8★</div>
                <div className="text-sm text-gray-600">Average rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Airbnb Originals */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Crown className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">Airbnb Originals</h2>
            <Sparkles className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-lg text-gray-600 mb-8">
            One-of-a-kind activities hosted by inspiring people, designed exclusively for Airbnb.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airbnbOriginals.map((original, index) => (
              <Link
                key={index}
                to={`/experience/${original.id}`}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={original.image}
                      alt={original.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full shadow-sm">
                    <div className="flex items-center space-x-1">
                      <Crown className="w-3 h-3" />
                      <span className="text-xs font-bold">ORIGINAL</span>
                    </div>
                  </div>
                  
                  {original.isOnline && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full shadow-sm">
                      <div className="flex items-center space-x-1">
                        <Video className="w-3 h-3" />
                        <span className="text-xs font-medium">Online</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-sm font-medium">{original.rating}</span>
                      <span className="text-sm text-gray-500">({original.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{original.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-[#FF5A5F] transition-colors">
                    {original.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {original.description}
                  </p>
                  
                  <div className="text-sm text-gray-500 mb-2">
                    Hosted by {original.host}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {original.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-900">${original.price}</span>
                    <span className="text-gray-500 text-sm"> per person</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular with travellers from your area */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold text-gray-900">Popular with travellers from your area</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Experiences that guests from India love the most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularWithTravellers.map((experience, index) => (
              <Link
                key={index}
                to={`/experience/${experience.id}`}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-sm font-medium">{experience.rating}</span>
                      <span className="text-sm text-gray-500">({experience.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-[#FF5A5F] transition-colors">
                    {experience.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {experience.description}
                  </p>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {experience.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-900">${experience.price}</span>
                    <span className="text-gray-500 text-sm"> per person</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Experiences in South Goa */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <MapPin className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-gray-900">Experiences in South Goa</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Discover the authentic culture, cuisine, and natural beauty of South Goa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {southGoaExperiences.map((experience, index) => (
              <Link
                key={index}
                to={`/experience/${experience.id}`}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-sm font-medium">{experience.rating}</span>
                      <span className="text-sm text-gray-500">({experience.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#FF5A5F] transition-colors">
                    {experience.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {experience.description}
                  </p>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {experience.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-900">${experience.price}</span>
                    <span className="text-gray-500 text-sm"> per person</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Browse by category</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
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
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price range</label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$0</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                  >
                    <option value="">Any duration</option>
                    <option value="1-2">1-2 hours</option>
                    <option value="2-4">2-4 hours</option>
                    <option value="4+">4+ hours</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                  >
                    <option value="">Any language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Italian">Italian</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Clear filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Featured Collections */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Popular experience types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.map((collection, index) => (
              <Link
                key={index}
                to={collection.link}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-3">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#FF5A5F] transition-colors">
                  {collection.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{collection.description}</p>
                <p className="text-xs text-gray-500">{collection.count}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* All Experiences Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'All experiences' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExperiences.map((experience) => (
              <Link key={experience.id} to={`/experience/${experience.id}`} className="group cursor-pointer">
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <button className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 fill-black/20 text-white stroke-2" />
                  </button>
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-sm font-medium">{experience.rating}</span>
                      <span className="text-sm text-gray-500">({experience.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                    {experience.title}
                  </h3>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {experience.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-900">${experience.price}</span>
                    <span className="text-gray-500 text-sm"> per person</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust & Safety */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Why choose Airbnb Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verified Hosts</h3>
              <p className="text-gray-600">All experience hosts are reviewed for quality and expertise in their field.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Every experience meets our standards for quality, uniqueness, and access.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Highly Rated</h3>
              <p className="text-gray-600">Join experiences with consistently high ratings from previous guests.</p>
            </div>
          </div>
        </div>

        {/* Host Your Own Experience */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Host your own experience</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Share your passion and expertise with travelers from around the world. Create memorable experiences and earn money doing what you love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn more
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Start hosting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;