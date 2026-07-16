import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share, ChevronLeft, ChevronRight, MapPin, Clock, Calendar, CheckCircle, AlertTriangle, Shield, Award, Phone, Mail, MessageCircle, DollarSign, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { favorites, toggleFavorite, user, setIsLoginModalOpen } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [serviceType, setServiceType] = useState('standard');

  // Create unique service data based on ID
  const getServiceData = (serviceId: string) => {
    const serviceMap: { [key: string]: any } = {
      'massage-1': {
        id: 'massage-1',
        title: 'In-Home Therapeutic Massage',
        description: 'Professional therapeutic massage in the comfort of your property. Perfect for guest relaxation and wellness experiences with certified therapists.',
        longDescription: 'Transform your guests\' stay with our premium in-home therapeutic massage service. Our licensed massage therapists bring a complete spa experience directly to your property, offering a range of therapeutic techniques including Swedish, deep tissue, hot stone, and aromatherapy massages. Each session is customized to your guests\' needs, whether they\'re seeking relaxation, pain relief, or stress reduction. We provide all necessary equipment including professional massage tables, premium oils, and calming music to create the perfect ambiance.',
        price: 120,
        duration: '60-90 minutes',
        rating: 4.9,
        reviewCount: 456,
        images: [
          'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3757944/pexels-photo-3757944.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        location: { city: 'Los Angeles', country: 'United States' },
        provider: {
          name: 'Sarah Martinez',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
          isVerified: true,
          businessName: 'Wellness Spa Services',
          yearsExperience: 12,
          responseTime: 'within 1 hour',
          completedJobs: 2400,
          joinedDate: '2018'
        },
        category: 'massage',
        serviceType: 'On-demand',
        availability: ['Daily', 'Evening', 'Weekend'],
        includes: [
          'Professional massage table setup',
          'Premium organic oils and lotions',
          'Relaxing background music',
          'Fresh linens and towels',
          'Customized pressure and technique',
          'Post-massage relaxation time',
          'Aromatherapy options',
          'Professional cleanup'
        ],
        certifications: [
          'Licensed Massage Therapist (LMT)',
          'Certified Wellness Practitioner',
          'Deep Tissue Specialist',
          'Aromatherapy Certified',
          'CPR/First Aid Certified'
        ],
        tags: ['Massage', 'Wellness', 'Relaxation', 'Therapeutic'],
        pricing: {
          basePrice: 120,
          additionalFees: [
            'Travel fee for locations >15 miles: $25',
            'Holiday surcharge: $30',
            'Additional guests: $100 each',
            'Premium oils upgrade: $20'
          ],
          discounts: [
            '10% off for weekly bookings',
            '15% off for monthly packages',
            '20% off for first-time customers'
          ]
        },
        serviceArea: ['Los Angeles County', 'Orange County', 'Ventura County'],
        emergencyAvailable: false,
        insurance: true,
        guarantee: '100% satisfaction guarantee - full refund if not completely satisfied',
        servicePackages: [
          {
            name: 'Relaxation Package',
            price: 120,
            includes: ['60-min Swedish massage', 'Aromatherapy', 'Relaxation music'],
            duration: '60 minutes'
          },
          {
            name: 'Therapeutic Package',
            price: 150,
            includes: ['75-min deep tissue', 'Hot stone therapy', 'Targeted pain relief'],
            duration: '75 minutes'
          },
          {
            name: 'Luxury Package',
            price: 200,
            includes: ['90-min full body', 'Premium oils', 'Scalp massage', 'Reflexology'],
            duration: '90 minutes'
          }
        ]
      },
      'training-1': {
        id: 'training-1',
        title: 'Personal Fitness Training',
        description: 'Professional personal training sessions for your guests. Equipment provided, all fitness levels welcome with certified trainers.',
        longDescription: 'Elevate your guests\' fitness experience with our professional personal training service. Our certified trainers bring complete workout equipment and expertise directly to your property, offering customized fitness sessions for all levels. Whether your guests want to maintain their routine while traveling, try something new, or achieve specific fitness goals, our trainers provide motivation, proper form guidance, and effective workouts. Sessions can include strength training, cardio, flexibility work, and nutrition coaching.',
        price: 80,
        duration: '60 minutes',
        rating: 4.8,
        reviewCount: 567,
        images: [
          'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1552243/pexels-photo-1552243.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1552244/pexels-photo-1552244.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        location: { city: 'Miami', country: 'United States' },
        provider: {
          name: 'Marcus Johnson',
          avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
          isVerified: true,
          businessName: 'Elite Fitness Pros',
          yearsExperience: 8,
          responseTime: 'within 2 hours',
          completedJobs: 1800,
          joinedDate: '2019'
        },
        category: 'training',
        serviceType: 'Scheduled',
        availability: ['Morning', 'Afternoon', 'Evening'],
        includes: [
          'Portable fitness equipment',
          'Customized workout plan',
          'Form and technique coaching',
          'Nutrition guidance',
          'Progress tracking',
          'Motivational support',
          'Flexibility and stretching',
          'Equipment sanitization'
        ],
        certifications: [
          'ACSM Certified Personal Trainer',
          'NASM Certified',
          'Nutrition Specialist',
          'Corrective Exercise Specialist',
          'Youth Fitness Specialist'
        ],
        tags: ['Fitness', 'Training', 'Health', 'Wellness'],
        pricing: {
          basePrice: 80,
          additionalFees: [
            'Equipment delivery fee: $15',
            'Additional participants: $40 each',
            'Specialized equipment: $25',
            'Nutrition consultation: $50'
          ],
          discounts: [
            '15% off for 5+ session packages',
            '20% off for group training (3+ people)',
            '10% off for early morning sessions'
          ]
        },
        serviceArea: ['Miami-Dade County', 'Broward County', 'Palm Beach County'],
        emergencyAvailable: false,
        insurance: true,
        guarantee: 'Satisfaction guarantee - free follow-up session if goals not met',
        servicePackages: [
          {
            name: 'Basic Training',
            price: 80,
            includes: ['60-min workout', 'Basic equipment', 'Form coaching'],
            duration: '60 minutes'
          },
          {
            name: 'Premium Training',
            price: 120,
            includes: ['75-min session', 'Advanced equipment', 'Nutrition plan'],
            duration: '75 minutes'
          },
          {
            name: 'Elite Training',
            price: 160,
            includes: ['90-min session', 'Full equipment suite', 'Meal planning', 'Progress tracking'],
            duration: '90 minutes'
          }
        ]
      },
      'chef-1': {
        id: 'chef-1',
        title: 'Private Chef Experience',
        description: 'Professional chef creates custom menus and cooks in your property. Full-service dining experience with world-class cuisine.',
        longDescription: 'Indulge your guests with an unforgettable private chef experience that brings restaurant-quality dining directly to your property. Our professional chefs specialize in creating custom menus tailored to dietary preferences and special occasions. From intimate dinners to celebration feasts, we handle everything from grocery shopping and preparation to cooking, plating, and cleanup. Each meal is crafted with premium ingredients and presented with restaurant-level sophistication, creating memories that will last a lifetime.',
        price: 300,
        duration: '4 hours',
        rating: 4.9,
        reviewCount: 678,
        images: [
          'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/4253303/pexels-photo-4253303.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/4253304/pexels-photo-4253304.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        location: { city: 'New York', country: 'United States' },
        provider: {
          name: 'Chef Isabella Romano',
          avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
          isVerified: true,
          businessName: 'Gourmet Chef Services',
          yearsExperience: 15,
          responseTime: 'within 3 hours',
          completedJobs: 950,
          joinedDate: '2017'
        },
        category: 'chefs',
        serviceType: 'Event-based',
        availability: ['Advance booking', 'Special occasions', 'Holiday catering'],
        includes: [
          'Custom menu consultation',
          'Premium ingredient sourcing',
          'Professional cooking equipment',
          'Multi-course meal preparation',
          'Elegant plating and presentation',
          'Wine pairing recommendations',
          'Table service coordination',
          'Complete kitchen cleanup'
        ],
        certifications: [
          'Culinary Arts Degree',
          'Food Safety Manager Certified',
          'Wine Sommelier Level 2',
          'Michelin Restaurant Experience',
          'Dietary Specialist Certified'
        ],
        tags: ['Chef', 'Fine Dining', 'Gourmet', 'Custom Menus'],
        pricing: {
          basePrice: 300,
          additionalFees: [
            'Premium ingredients: varies by menu',
            'Additional guests (6+): $75 per person',
            'Wine service: $150',
            'Special dietary accommodations: $50'
          ],
          discounts: [
            '10% off for multi-day bookings',
            '15% off for repeat customers',
            '20% off for off-season bookings'
          ]
        },
        serviceArea: ['Manhattan', 'Brooklyn', 'Queens', 'Westchester'],
        emergencyAvailable: false,
        insurance: true,
        guarantee: 'Culinary excellence guarantee - complete satisfaction or full refund',
        servicePackages: [
          {
            name: 'Intimate Dinner',
            price: 300,
            includes: ['3-course meal', 'Wine pairing', 'Service for up to 4'],
            duration: '4 hours'
          },
          {
            name: 'Celebration Feast',
            price: 500,
            includes: ['5-course tasting', 'Premium wines', 'Service for up to 8'],
            duration: '5 hours'
          },
          {
            name: 'Luxury Experience',
            price: 800,
            includes: ['7-course degustation', 'Champagne service', 'Tableside preparation'],
            duration: '6 hours'
          }
        ]
      },
      'photo-1': {
        id: 'photo-1',
        title: 'Professional Property Photography',
        description: 'High-quality photos that showcase your property in the best light to attract more bookings. Includes professional editing and drone shots.',
        longDescription: 'Maximize your property\'s booking potential with our professional photography service designed specifically for vacation rentals. Our experienced photographers understand what guests look for and how to highlight your property\'s best features. We use advanced equipment and techniques to capture stunning images that stand out in search results. Each session includes comprehensive coverage of all rooms, outdoor spaces, and unique amenities, with professional editing and optimization for online listings.',
        price: 250,
        duration: '2-3 hours',
        rating: 4.9,
        reviewCount: 342,
        images: [
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        location: { city: 'San Francisco', country: 'United States' },
        provider: {
          name: 'David Chen',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
          isVerified: true,
          businessName: 'Elite Property Photos',
          yearsExperience: 10,
          responseTime: 'within 2 hours',
          completedJobs: 1250,
          joinedDate: '2016'
        },
        category: 'photography',
        serviceType: 'One-time',
        availability: ['Weekdays', 'Weekends', 'Same-day'],
        includes: [
          'Professional camera equipment',
          'Advanced lighting setup',
          '30+ high-resolution photos',
          'Professional editing and color correction',
          'Drone photography (weather permitting)',
          'Virtual staging options',
          'Multiple angle shots',
          'Same-day delivery available'
        ],
        certifications: [
          'Licensed Drone Pilot (FAA Part 107)',
          'Professional Photographer Certification',
          'Real Estate Photography Specialist',
          'Airbnb Partner Program Member',
          'Adobe Certified Expert'
        ],
        tags: ['Photography', 'Real Estate', 'Drone', 'Professional'],
        pricing: {
          basePrice: 250,
          additionalFees: [
            'Travel fee for locations >20 miles: $50',
            'Rush delivery (same day): $75',
            'Additional property (same session): $150',
            'Virtual staging per room: $25'
          ],
          discounts: [
            '10% off for repeat customers',
            '15% off for 3+ properties',
            '20% off for annual contracts'
          ]
        },
        serviceArea: ['San Francisco Bay Area', 'Silicon Valley', 'Marin County'],
        emergencyAvailable: false,
        insurance: true,
        guarantee: '100% satisfaction guarantee - reshoot if not satisfied',
        servicePackages: [
          {
            name: 'Standard Package',
            price: 250,
            includes: ['20+ photos', 'Basic editing', '24hr delivery'],
            duration: '2-3 hours'
          },
          {
            name: 'Premium Package',
            price: 350,
            includes: ['30+ photos', 'Advanced editing', 'Drone shots', 'Virtual staging'],
            duration: '3-4 hours'
          },
          {
            name: 'Luxury Package',
            price: 500,
            includes: ['50+ photos', 'Premium editing', 'Drone video', 'Virtual tour'],
            duration: '4-5 hours'
          }
        ]
      }
    };

    return serviceMap[serviceId] || serviceMap['photo-1'];
  };

  const service = getServiceData(id || 'photo-1');
  const isFavorite = favorites.includes(service.id);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  const handleBooking = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time');
      return;
    }
    
    alert('Booking functionality would be implemented here!');
  };

  const selectedPackage = service.servicePackages.find(pkg => 
    pkg.name.toLowerCase().includes(serviceType)
  ) || service.servicePackages[0];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-medium">{service.rating}</span>
                <span className="text-gray-500">({service.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-500">{service.location.city}, {service.location.country}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span className="text-gray-500">{service.duration}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-sm font-medium hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button
                onClick={() => toggleFavorite(service.id)}
                className="flex items-center space-x-2 text-sm font-medium hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#FF5A5F] text-[#FF5A5F]' : ''}`} />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 rounded-xl overflow-hidden">
            <div className="relative aspect-square lg:aspect-auto">
              <img
                src={service.images[currentImageIndex]}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-2">
              {service.images.slice(1, 5).map((image, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={image}
                    alt={`${service.title} ${index + 2}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setCurrentImageIndex(index + 1)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Overview */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    Service provided by {service.provider.businessName}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-600 mt-1">
                    <span>{service.duration}</span>
                    <span>•</span>
                    <span>{service.serviceType}</span>
                    <span>•</span>
                    <span>{service.provider.completedJobs} jobs completed</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src={service.provider.avatar}
                    alt={service.provider.name}
                    className="w-12 h-12 rounded-full"
                  />
                  {service.provider.isVerified && (
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  )}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
              <p className="text-gray-700 leading-relaxed">{service.longDescription}</p>
            </div>

            {/* Service Packages */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold mb-6">Service packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.servicePackages.map((pkg, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-xl p-4 cursor-pointer transition-colors ${
                      serviceType === pkg.name.toLowerCase().split(' ')[0] 
                        ? 'border-[#FF5A5F] bg-red-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setServiceType(pkg.name.toLowerCase().split(' ')[0])}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{pkg.name}</h4>
                    <div className="text-2xl font-bold text-gray-900 mb-2">${pkg.price}</div>
                    <div className="text-sm text-gray-500 mb-3">{pkg.duration}</div>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold mb-6">What's included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.includes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Insurance */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold mb-6">Certifications & Insurance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span>Certifications</span>
                  </h4>
                  <ul className="space-y-2">
                    {service.certifications.map((cert, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <span>Protection</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Fully insured and bonded</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{service.guarantee}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Provider Information */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={service.provider.avatar}
                  alt={service.provider.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">{service.provider.businessName}</h3>
                  <p className="text-gray-600">Owned by {service.provider.name}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                    <span>In business since {service.provider.joinedDate}</span>
                    <span>•</span>
                    <span>{service.provider.yearsExperience} years experience</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{service.provider.completedJobs}</div>
                  <div className="text-sm text-gray-600">Jobs completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{service.provider.responseTime}</div>
                  <div className="text-sm text-gray-600">Response time</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{service.rating}★</div>
                  <div className="text-sm text-gray-600">Average rating</div>
                </div>
              </div>
              
              <p className="text-gray-700">
                {service.provider.businessName} specializes in providing high-quality {service.category} services for vacation rentals and hospitality properties. 
                With {service.provider.yearsExperience} years of experience and over {service.provider.completedJobs} successful projects, 
                we understand what makes properties stand out and guests happy.
              </p>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-semibold">${selectedPackage.price}</span>
                    <span className="text-gray-500"> starting</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{service.rating}</span>
                    <span className="text-gray-500">({service.reviewCount})</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      SERVICE PACKAGE
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                    >
                      {service.servicePackages.map((pkg, index) => (
                        <option key={index} value={pkg.name.toLowerCase().split(' ')[0]}>
                          {pkg.name} - ${pkg.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      PREFERRED TIME
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-[#FF5A5F] text-white py-3 rounded-lg font-medium hover:bg-[#E54850] transition-colors mb-4"
                >
                  Book service
                </button>

                <p className="text-center text-sm text-gray-500 mb-4">
                  Free consultation before booking
                </p>

                {selectedDate && selectedTime && (
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span>{selectedPackage.name}</span>
                      <span>${selectedPackage.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>${Math.round(selectedPackage.price * 0.1)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${selectedPackage.price + Math.round(selectedPackage.price * 0.1)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;