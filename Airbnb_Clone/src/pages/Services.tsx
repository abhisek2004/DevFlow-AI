import React, { useState } from 'react';
import { Star, MapPin, Clock, Users, Heart, Filter, Search, CheckCircle, Award, Shield, Phone, Mail, Calendar, DollarSign, TrendingUp, MessageCircle, Camera, Wrench, Utensils, Palette, User, Lock, Sparkles, Zap, Home, Car, Wifi, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
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
  provider: {
    name: string;
    avatar: string;
    isVerified: boolean;
    businessName: string;
    yearsExperience: number;
    responseTime: string;
    completedJobs: number;
  };
  category: string;
  serviceType: string;
  availability: string[];
  includes: string[];
  certifications: string[];
  tags: string[];
  pricing: {
    basePrice: number;
    additionalFees?: string[];
    discounts?: string[];
  };
  serviceArea: string[];
  emergencyAvailable: boolean;
  insurance: boolean;
  guarantee: string;
}

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [emergencyOnly, setEmergencyOnly] = useState(false);

  const categories = [
    { id: 'all', name: 'All services', count: 1850, icon: <Star className="w-4 h-4" /> },
    { id: 'cleaning', name: 'Cleaning', count: 420, icon: <Shield className="w-4 h-4" /> },
    { id: 'maintenance', name: 'Maintenance', count: 350, icon: <Wrench className="w-4 h-4" /> },
    { id: 'photography', name: 'Photography', count: 280, icon: <Camera className="w-4 h-4" /> },
    { id: 'massage', name: 'Massage', count: 240, icon: <Heart className="w-4 h-4" /> },
    { id: 'training', name: 'Training', count: 180, icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'chefs', name: 'Chefs', count: 160, icon: <Utensils className="w-4 h-4" /> },
    { id: 'design', name: 'Interior Design', count: 140, icon: <Palette className="w-4 h-4" /> },
    { id: 'concierge', name: 'Concierge', count: 120, icon: <User className="w-4 h-4" /> },
    { id: 'security', name: 'Security', count: 95, icon: <Lock className="w-4 h-4" /> },
    { id: 'technology', name: 'Technology', count: 85, icon: <Zap className="w-4 h-4" /> },
    { id: 'transportation', name: 'Transportation', count: 75, icon: <Car className="w-4 h-4" /> }
  ];

  // Massage Services (based on original Airbnb services data)
  const massageServices = [
    {
      id: 'massage-1',
      title: 'In-Home Therapeutic Massage',
      description: 'Professional therapeutic massage in the comfort of your property. Perfect for guest relaxation and wellness experiences with certified therapists.',
      price: 120,
      duration: '60-90 minutes',
      rating: 4.9,
      reviewCount: 456,
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Wellness Spa Services',
      specialties: ['Swedish', 'Deep Tissue', 'Hot Stone', 'Aromatherapy'],
      certifications: ['Licensed Massage Therapist', 'Certified Wellness Practitioner'],
      highlights: ['Licensed professionals', 'Equipment provided', 'Customized sessions', 'All skill levels']
    },
    {
      id: 'massage-2',
      title: 'Couples Massage Experience',
      description: 'Romantic couples massage service with professional therapists, candles, and relaxing ambiance for the perfect intimate experience.',
      price: 220,
      duration: '90 minutes',
      rating: 4.8,
      reviewCount: 234,
      image: 'https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Luxury Wellness Co.',
      specialties: ['Couples Therapy', 'Relaxation', 'Stress Relief', 'Romance'],
      certifications: ['Certified Couples Therapy', 'Spa Professional'],
      highlights: ['Romantic setting', 'Professional therapists', 'Candles included', 'Relaxing music']
    },
    {
      id: 'massage-3',
      title: 'Sports Recovery Massage',
      description: 'Specialized sports massage for athletes and active guests. Focus on recovery, performance enhancement, and injury prevention.',
      price: 140,
      duration: '75 minutes',
      rating: 4.9,
      reviewCount: 345,
      image: 'https://images.pexels.com/photos/3757944/pexels-photo-3757944.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Athletic Recovery Pro',
      specialties: ['Sports Massage', 'Injury Recovery', 'Performance Enhancement', 'Flexibility'],
      certifications: ['Sports Massage Certified', 'Athletic Therapy License'],
      highlights: ['Sports specialists', 'Recovery focused', 'Performance enhancement', 'Injury prevention']
    },
    {
      id: 'massage-4',
      title: 'Prenatal Massage Service',
      description: 'Safe and relaxing prenatal massage for expecting mothers, with specialized techniques and equipment designed for pregnancy comfort.',
      price: 130,
      duration: '60 minutes',
      rating: 4.9,
      reviewCount: 189,
      image: 'https://images.pexels.com/photos/3757945/pexels-photo-3757945.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Maternal Wellness',
      specialties: ['Prenatal Care', 'Pregnancy Support', 'Gentle Therapy', 'Comfort Focus'],
      certifications: ['Prenatal Massage Certified', 'Maternal Health Specialist'],
      highlights: ['Pregnancy safe', 'Specialized equipment', 'Gentle techniques', 'Comfort focused']
    }
  ];

  // Training Services (based on original Airbnb services data)
  const trainingServices = [
    {
      id: 'training-1',
      title: 'Personal Fitness Training',
      description: 'Professional personal training sessions for your guests. Equipment provided, all fitness levels welcome with certified trainers.',
      price: 80,
      duration: '60 minutes',
      rating: 4.8,
      reviewCount: 567,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Elite Fitness Pros',
      specialties: ['Weight Training', 'Cardio', 'Flexibility', 'Nutrition Coaching'],
      certifications: ['ACSM Certified', 'NASM Personal Trainer'],
      highlights: ['Certified trainers', 'Equipment provided', 'All levels welcome', 'Nutrition guidance']
    },
    {
      id: 'training-2',
      title: 'Yoga & Meditation Classes',
      description: 'Private yoga and meditation sessions with certified instructors. All levels and styles available for inner peace and flexibility.',
      price: 70,
      duration: '75 minutes',
      rating: 4.9,
      reviewCount: 423,
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Zen Wellness Studio',
      specialties: ['Hatha Yoga', 'Vinyasa', 'Meditation', 'Breathwork'],
      certifications: ['RYT 500 Certified', 'Meditation Teacher Training'],
      highlights: ['Certified instructors', 'All yoga styles', 'Meditation included', 'Breathwork training']
    },
    {
      id: 'training-3',
      title: 'Swimming Instruction',
      description: 'Professional swimming lessons for all ages and skill levels. Pool safety and technique focused with certified water safety instructors.',
      price: 90,
      duration: '45 minutes',
      rating: 4.7,
      reviewCount: 234,
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'AquaFit Instructors',
      specialties: ['Beginner Swimming', 'Stroke Improvement', 'Water Safety', 'Aqua Fitness'],
      certifications: ['Water Safety Instructor', 'Swim Coach Certified'],
      highlights: ['All ages welcome', 'Safety focused', 'Technique improvement', 'Pool required']
    },
    {
      id: 'training-4',
      title: 'Dance Lessons',
      description: 'Fun dance lessons in various styles. Perfect for couples, families, or solo learners with professional dance instructors.',
      price: 85,
      duration: '60 minutes',
      rating: 4.8,
      reviewCount: 345,
      image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Dance Academy Pro',
      specialties: ['Ballroom', 'Latin', 'Contemporary', 'Hip Hop'],
      certifications: ['Professional Dance Instructor', 'Ballroom Certified'],
      highlights: ['Multiple styles', 'All skill levels', 'Couples welcome', 'Fun atmosphere']
    }
  ];

  // Chef Services (based on original Airbnb services data)
  const chefServices = [
    {
      id: 'chef-1',
      title: 'Private Chef Experience',
      description: 'Professional chef creates custom menus and cooks in your property. Full-service dining experience with world-class cuisine.',
      price: 300,
      duration: '4 hours',
      rating: 4.9,
      reviewCount: 678,
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Gourmet Chef Services',
      specialties: ['Fine Dining', 'International Cuisine', 'Dietary Restrictions', 'Wine Pairing'],
      certifications: ['Culinary Arts Degree', 'Food Safety Certified'],
      highlights: ['Custom menus', 'Professional chef', 'Full service', 'Wine pairing']
    },
    {
      id: 'chef-2',
      title: 'Cooking Classes & Workshops',
      description: 'Interactive cooking classes where guests learn to prepare gourmet meals with professional guidance and take home recipes.',
      price: 150,
      duration: '3 hours',
      rating: 4.8,
      reviewCount: 445,
      image: 'https://images.pexels.com/photos/4253303/pexels-photo-4253303.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Culinary Workshop Co.',
      specialties: ['Italian Cuisine', 'French Cooking', 'Baking', 'Knife Skills'],
      certifications: ['Professional Chef', 'Culinary Instructor'],
      highlights: ['Interactive learning', 'Recipe cards', 'Hands-on experience', 'Professional guidance']
    },
    {
      id: 'chef-3',
      title: 'BBQ & Grilling Master',
      description: 'Expert BBQ and grilling services for outdoor dining experiences. All equipment and ingredients provided for the perfect cookout.',
      price: 200,
      duration: '3 hours',
      rating: 4.7,
      reviewCount: 356,
      image: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'BBQ Masters',
      specialties: ['American BBQ', 'Grilling Techniques', 'Smoking', 'Outdoor Cooking'],
      certifications: ['Pitmaster Certified', 'Food Handler License'],
      highlights: ['BBQ expertise', 'Equipment provided', 'Outdoor cooking', 'All ingredients included']
    },
    {
      id: 'chef-4',
      title: 'Healthy Meal Prep Service',
      description: 'Nutritious meal preparation service focusing on healthy, balanced meals for health-conscious guests with dietary customization.',
      price: 180,
      duration: '2.5 hours',
      rating: 4.8,
      reviewCount: 267,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Healthy Kitchen Pro',
      specialties: ['Nutrition Planning', 'Meal Prep', 'Dietary Restrictions', 'Organic Cooking'],
      certifications: ['Nutrition Specialist', 'Organic Food Certified'],
      highlights: ['Health focused', 'Meal prep', 'Dietary customization', 'Nutrition guidance']
    }
  ];

  // Photography Services (based on original Airbnb services data)
  const photographyServices = [
    {
      id: 'photo-1',
      title: 'Professional Property Photography',
      description: 'High-quality photos that showcase your property in the best light to attract more bookings. Includes professional editing and drone shots.',
      price: 250,
      duration: '2-3 hours',
      rating: 4.9,
      reviewCount: 342,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Elite Property Photos',
      specialties: ['Real Estate', 'Drone Photography', 'Virtual Staging', 'Twilight Shots'],
      certifications: ['Professional Photographer', 'Drone Pilot License'],
      highlights: ['Professional editing', 'Drone shots', 'Virtual staging', 'Same-day delivery']
    },
    {
      id: 'photo-2',
      title: 'Guest Experience Photography',
      description: 'Capture memorable moments for your guests during their stay with professional photography services and instant sharing.',
      price: 180,
      duration: '2 hours',
      rating: 4.8,
      reviewCount: 234,
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Memory Makers Photography',
      specialties: ['Portrait Photography', 'Event Coverage', 'Family Photos', 'Couple Sessions'],
      certifications: ['Portrait Specialist', 'Event Photography Certified'],
      highlights: ['Guest memories', 'Professional portraits', 'Instant sharing', 'Event coverage']
    },
    {
      id: 'photo-3',
      title: 'Social Media Content Creation',
      description: 'Create stunning social media content for your property marketing with professional photography and editing for maximum engagement.',
      price: 200,
      duration: '3 hours',
      rating: 4.7,
      reviewCount: 189,
      image: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Social Media Pros',
      specialties: ['Instagram Content', 'Marketing Photos', 'Brand Photography', 'Content Strategy'],
      certifications: ['Digital Marketing Certified', 'Social Media Specialist'],
      highlights: ['Social media ready', 'Marketing focused', 'Brand photography', 'Content strategy']
    },
    {
      id: 'photo-4',
      title: 'Video Production Services',
      description: 'Professional video production for property tours, promotional content, and guest experiences with cinematic quality.',
      price: 400,
      duration: '4-5 hours',
      rating: 4.9,
      reviewCount: 156,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Video Production Co.',
      specialties: ['Property Tours', 'Promotional Videos', 'Drone Videography', 'Post-Production'],
      certifications: ['Video Production Certified', 'Drone Operator License'],
      highlights: ['Cinematic quality', 'Property tours', 'Drone videography', 'Professional editing']
    }
  ];

  // Cleaning Services (based on original Airbnb services data)
  const cleaningServices = [
    {
      id: 'clean-1',
      title: 'Deep Cleaning & Turnover Service',
      description: 'Comprehensive cleaning service between guests to ensure your property is spotless and guest-ready with quality guarantee.',
      price: 120,
      duration: '3-4 hours',
      rating: 4.8,
      reviewCount: 567,
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Spotless Stays',
      specialties: ['Deep Cleaning', 'Turnover Service', 'Quality Inspection', 'Same-day Service'],
      certifications: ['Bonded & Insured', 'Background Checked', 'Eco-friendly Certified'],
      highlights: ['Quality guarantee', 'Same-day service', 'Eco-friendly', 'Bonded & insured']
    },
    {
      id: 'clean-2',
      title: 'Emergency Cleaning Service',
      description: 'Rapid response cleaning for urgent situations. Available 24/7 for last-minute bookings and emergency situations.',
      price: 180,
      duration: '2-3 hours',
      rating: 4.7,
      reviewCount: 234,
      image: 'https://images.pexels.com/photos/4239147/pexels-photo-4239147.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Rapid Clean Pro',
      specialties: ['Emergency Response', '24/7 Availability', 'Rapid Cleaning', 'Last-minute Bookings'],
      certifications: ['Emergency Response Certified', 'Rapid Service Specialist'],
      highlights: ['24/7 availability', 'Emergency response', 'Rapid service', 'Last-minute bookings']
    },
    {
      id: 'clean-3',
      title: 'Eco-Friendly Cleaning',
      description: 'Environmentally conscious cleaning using only eco-friendly products and sustainable practices for health-conscious guests.',
      price: 140,
      duration: '3-4 hours',
      rating: 4.9,
      reviewCount: 345,
      image: 'https://images.pexels.com/photos/4239148/pexels-photo-4239148.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Green Clean Solutions',
      specialties: ['Eco-friendly Products', 'Sustainable Practices', 'Health Conscious', 'Non-toxic Cleaning'],
      certifications: ['Green Cleaning Certified', 'Eco-friendly Specialist'],
      highlights: ['Eco-friendly products', 'Health conscious', 'Sustainable practices', 'Non-toxic cleaning']
    },
    {
      id: 'clean-4',
      title: 'Luxury Property Cleaning',
      description: 'Premium cleaning service for luxury properties with attention to detail and high-end property care expertise.',
      price: 200,
      duration: '4-5 hours',
      rating: 4.9,
      reviewCount: 189,
      image: 'https://images.pexels.com/photos/4239149/pexels-photo-4239149.jpeg?auto=compress&cs=tinysrgb&w=800',
      provider: 'Luxury Clean Elite',
      specialties: ['Luxury Properties', 'Attention to Detail', 'High-end Care', 'Premium Service'],
      certifications: ['Luxury Property Specialist', 'Premium Service Certified'],
      highlights: ['Luxury focused', 'Attention to detail', 'High-end care', 'Premium service']
    }
  ];

  const serviceStats = [
    { label: 'Verified Providers', value: '1850+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Services Completed', value: '75K+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Average Rating', value: '4.8★', icon: <Star className="w-6 h-6" /> },
    { label: 'Response Time', value: '<2hrs', icon: <Clock className="w-6 h-6" /> }
  ];

  const featuredServices = [
    {
      title: 'Cleaning Services',
      description: 'Professional cleaning between guests',
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '420+ providers',
      link: '/services?category=cleaning',
      features: ['Same-day service', 'Quality guarantee', 'Eco-friendly options']
    },
    {
      title: 'Photography',
      description: 'Professional property photos',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '280+ providers',
      link: '/services?category=photography',
      features: ['Drone photography', 'Same-day editing', 'Virtual staging']
    },
    {
      title: 'Massage Services',
      description: 'In-home wellness and relaxation',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '240+ providers',
      link: '/services?category=massage',
      features: ['Licensed therapists', 'Multiple techniques', 'Equipment provided']
    },
    {
      title: 'Chef Services',
      description: 'Private dining and cooking classes',
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '160+ providers',
      link: '/services?category=chefs',
      features: ['Custom menus', 'All cuisines', 'Dietary accommodations']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? [...cleaningServices, ...massageServices, ...trainingServices, ...chefServices, ...photographyServices].slice(0, 12)
    : selectedCategory === 'cleaning' ? cleaningServices
    : selectedCategory === 'massage' ? massageServices
    : selectedCategory === 'training' ? trainingServices
    : selectedCategory === 'chefs' ? chefServices
    : selectedCategory === 'photography' ? photographyServices
    : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Airbnb Services</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional services to help you succeed as a host. From cleaning to photography, find trusted providers in your area.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-1 px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="What service do you need for your property?"
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg px-6 py-4 shadow-sm">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="text-blue-600">{stat.icon}</div>
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Massage Services Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Heart className="w-8 h-8 text-pink-500" />
            <h2 className="text-3xl font-bold text-gray-900">Massage & Wellness Services</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Professional massage and wellness services to enhance your guests' relaxation experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {massageServices.map((service, index) => (
              <Link
                key={index}
                to={`/service/${service.id}`}
                className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#FF5A5F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                  <div className="text-sm text-gray-600 mb-2">{service.provider}</div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-900">${service.price}</span>
                      <span className="text-gray-500 text-sm"> starting</span>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Training Services Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold text-gray-900">Training & Fitness Services</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Personal training, yoga, and fitness instruction services for active guests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingServices.map((service, index) => (
              <Link
                key={index}
                to={`/service/${service.id}`}
                className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#FF5A5F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                  <div className="text-sm text-gray-600 mb-2">{service.provider}</div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-900">${service.price}</span>
                      <span className="text-gray-500 text-sm"> starting</span>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Chef Services Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Utensils className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-900">Chef & Culinary Services</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Professional chefs and culinary experiences to delight your guests with exceptional dining.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chefServices.map((service, index) => (
              <Link
                key={index}
                to={`/service/${service.id}`}
                className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#FF5A5F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                  <div className="text-sm text-gray-600 mb-2">{service.provider}</div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-900">${service.price}</span>
                      <span className="text-gray-500 text-sm"> starting</span>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Photography Services Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Camera className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold text-gray-900">Photography & Media Services</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Professional photography and video services to showcase your property and create memorable guest experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographyServices.map((service, index) => (
              <Link
                key={index}
                to={`/service/${service.id}`}
                className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#FF5A5F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                  <div className="text-sm text-gray-600 mb-2">{service.provider}</div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-900">${service.price}</span>
                      <span className="text-gray-500 text-sm"> starting</span>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Browse all services</h2>
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
                <option value="availability">Availability</option>
                <option value="response-time">Fastest Response</option>
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
                {category.icon}
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price range</label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                  >
                    <option value="">All locations</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="miami">Miami</option>
                    <option value="new-york">New York</option>
                    <option value="austin">Austin</option>
                    <option value="san-francisco">San Francisco</option>
                    <option value="chicago">Chicago</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]">
                    <option value="">All types</option>
                    <option value="one-time">One-time</option>
                    <option value="recurring">Recurring</option>
                    <option value="on-demand">On-demand</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={emergencyOnly}
                      onChange={(e) => setEmergencyOnly(e.target.checked)}
                      className="w-4 h-4 text-[#FF5A5F] border-gray-300 rounded focus:ring-[#FF5A5F]"
                    />
                    <span className="text-sm text-gray-700">Emergency available</span>
                  </label>
                  <label className="flex items-center space-x-2 mt-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#FF5A5F] border-gray-300 rounded focus:ring-[#FF5A5F]"
                    />
                    <span className="text-sm text-gray-700">Verified only</span>
                  </label>
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

        {/* Featured Service Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Popular service categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#FF5A5F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                  <p className="text-xs text-gray-500 mb-3">{service.count}</p>
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'All services' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Link key={service.id} to={`/service/${service.id}`} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative">
                  <div className="aspect-video">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <button className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 fill-black/20 text-white stroke-2" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-gray-900" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <div className="text-sm text-gray-700 mb-3">{service.provider}</div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-gray-900">${service.price}</span>
                      <span className="text-gray-500 text-sm"> starting</span>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust & Safety */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Why choose Airbnb Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verified Providers</h3>
              <p className="text-gray-600">All service providers are background-checked and verified for your peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Every service comes with our quality guarantee and customer support.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Host-Focused</h3>
              <p className="text-gray-600">Services designed specifically for Airbnb hosts to improve guest experience.</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Browse & Compare', description: 'Find the right service provider for your needs', icon: <Search className="w-8 h-8" /> },
              { step: '2', title: 'Book & Schedule', description: 'Choose your preferred time and book instantly', icon: <Calendar className="w-8 h-8" /> },
              { step: '3', title: 'Service Delivered', description: 'Professional service delivered to your property', icon: <CheckCircle className="w-8 h-8" /> },
              { step: '4', title: 'Pay & Review', description: 'Secure payment and rate your experience', icon: <Star className="w-8 h-8" /> }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF5A5F] text-white rounded-full mb-4">
                  {step.icon}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{step.step}. {step.title}</div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Service Provider */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Become a service provider</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our network of trusted service providers and help hosts create amazing experiences for their guests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;