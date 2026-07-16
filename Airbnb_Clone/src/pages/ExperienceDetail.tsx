import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share, ChevronLeft, ChevronRight, MapPin, Users, Clock, Calendar, Globe, Award, Shield, CheckCircle, AlertTriangle, Camera, MessageCircle, DollarSign } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { favorites, toggleFavorite, user, setIsLoginModalOpen } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(1);

  // Create unique experience data based on ID
  const getExperienceData = (experienceId: string) => {
    const experienceMap: { [key: string]: any } = {
      'orig-1': {
        id: 'orig-1',
        title: 'Design a Bag with Samara Joy',
        description: 'Join Grammy-winning jazz vocalist Samara Joy for an intimate session designing custom tote bags while discussing her musical journey and creative process.',
        longDescription: 'Experience a unique blend of music and design with Grammy Award-winning jazz vocalist Samara Joy. In this exclusive Airbnb Original, you\'ll learn about sustainable fashion design while creating your own custom tote bag. Samara will share stories from her musical journey, discuss the intersection of art and activism, and guide you through the design process. This intimate session combines creativity, music, and meaningful conversation in a way that only Samara can deliver.',
        price: 85,
        duration: '90 minutes',
        rating: 4.9,
        reviewCount: 234,
        images: [
          'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        location: { city: 'Online', country: 'Worldwide' },
        host: {
          name: 'Samara Joy',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
          isSuperhost: true,
          responseRate: 100,
          responseTime: 'within an hour',
          languages: ['English'],
          joinedDate: '2023',
          experiencesHosted: 12,
          totalGuests: 850
        },
        category: 'art-culture',
        maxGuests: 20,
        languages: ['English'],
        includes: [
          'Design materials and tools',
          'Custom tote bag to take home',
          'Personal stories from Samara',
          'Music and design insights',
          'Q&A session',
          'Digital design templates'
        ],
        highlights: [
          'Learn from a Grammy-winning artist',
          'Create a unique, personalized tote bag',
          'Hear exclusive stories about music and creativity',
          'Connect with other creative minds',
          'Take home your custom creation'
        ],
        isOnlineExperience: true,
        tags: ['Music', 'Design', 'Celebrity', 'Creative'],
        difficulty: 'Beginner friendly',
        ageRestriction: '13+',
        groupSize: '5-20 guests',
        cancellationPolicy: 'Free cancellation up to 24 hours before',
        whatToBring: ['Notebook for sketching', 'Good internet connection', 'Creative mindset'],
        meetingPoint: 'Zoom link provided after booking',
        accessibility: ['Fully accessible', 'Closed captions available', 'Materials shipped worldwide']
      },
      'orig-2': {
        id: 'orig-2',
        title: 'Cook with Priyanka Chopra Jonas',
        description: 'Learn to make authentic Indian dishes with global superstar Priyanka Chopra Jonas in her home kitchen, sharing stories of culture and family traditions.',
        longDescription: 'Join global icon Priyanka Chopra Jonas for an intimate cooking experience that goes beyond recipes. In this exclusive Airbnb Original, Priyanka will teach you to prepare traditional Indian dishes while sharing personal stories about her multicultural journey, family traditions, and the role food plays in connecting us to our roots. You\'ll learn authentic techniques passed down through generations while enjoying meaningful conversations about culture, identity, and the universal language of food.',
        price: 120,
        duration: '2 hours',
        rating: 4.9,
        reviewCount: 567,
        images: [
          'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/4253303/pexels-photo-4253303.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/4253304/pexels-photo-4253304.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        location: { city: 'Online', country: 'Worldwide' },
        host: {
          name: 'Priyanka Chopra Jonas',
          avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
          isSuperhost: true,
          responseRate: 100,
          responseTime: 'within an hour',
          languages: ['English', 'Hindi'],
          joinedDate: '2023',
          experiencesHosted: 8,
          totalGuests: 1200
        },
        category: 'food-drink',
        maxGuests: 15,
        languages: ['English', 'Hindi'],
        includes: [
          'Recipe cards for 3 dishes',
          'Spice blend samples',
          'Cultural stories and insights',
          'Cooking techniques demonstration',
          'Family recipe secrets',
          'Q&A with Priyanka'
        ],
        highlights: [
          'Cook with a global superstar',
          'Learn authentic family recipes',
          'Hear stories about Indian culture',
          'Master traditional cooking techniques',
          'Connect with fellow food lovers'
        ],
        isOnlineExperience: true,
        tags: ['Cooking', 'Indian cuisine', 'Celebrity', 'Culture'],
        difficulty: 'Beginner friendly',
        ageRestriction: '10+',
        groupSize: '8-15 guests',
        cancellationPolicy: 'Free cancellation up to 48 hours before',
        whatToBring: ['Ingredients list provided', 'Basic cooking utensils', 'Enthusiasm for cooking'],
        meetingPoint: 'Zoom link provided after booking',
        accessibility: ['Fully accessible', 'Multiple language support', 'Recipe cards in multiple languages']
      },
      'orig-3': {
        id: 'orig-3',
        title: 'Magic with David Blaine',
        description: 'Learn mind-bending magic tricks and the psychology behind illusions with world-renowned magician David Blaine in this exclusive masterclass.',
        longDescription: 'Step into the extraordinary world of magic with David Blaine, one of the most influential magicians of our time. In this exclusive Airbnb Original, David will teach you incredible magic tricks while revealing the psychology and dedication behind his legendary performances. You\'ll learn close-up magic, mentalism techniques, and the art of misdirection. David will share stories from his most famous stunts and explain how magic can be a powerful tool for human connection and wonder.',
        price: 95,
        duration: '75 minutes',
        rating: 4.8,
        reviewCount: 445,
        images: [
          'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        location: { city: 'Online', country: 'Worldwide' },
        host: {
          name: 'David Blaine',
          avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
          isSuperhost: true,
          responseRate: 100,
          responseTime: 'within an hour',
          languages: ['English'],
          joinedDate: '2023',
          experiencesHosted: 15,
          totalGuests: 980
        },
        category: 'entertainment',
        maxGuests: 25,
        languages: ['English'],
        includes: [
          'Magic trick tutorials',
          'Psychology of illusion insights',
          'Performance tips and techniques',
          'Behind-the-scenes stories',
          'Practice materials list',
          'Exclusive magic kit recommendations'
        ],
        highlights: [
          'Learn from a legendary magician',
          'Master mind-bending tricks',
          'Understand the psychology of magic',
          'Hear incredible behind-the-scenes stories',
          'Develop performance confidence'
        ],
        isOnlineExperience: true,
        tags: ['Magic', 'Entertainment', 'Psychology', 'Performance'],
        difficulty: 'All levels',
        ageRestriction: '12+',
        groupSize: '10-25 guests',
        cancellationPolicy: 'Free cancellation up to 24 hours before',
        whatToBring: ['Deck of cards', 'Small everyday objects', 'Willingness to practice'],
        meetingPoint: 'Zoom link provided after booking',
        accessibility: ['Fully accessible', 'Visual demonstrations', 'Practice materials provided']
      },
      'orig-4': {
        id: 'orig-4',
        title: 'Meditation with Deepak Chopra',
        description: 'Experience transformative meditation techniques with wellness pioneer Deepak Chopra in this profound journey of self-discovery and inner peace.',
        longDescription: 'Join renowned wellness pioneer Dr. Deepak Chopra for a transformative meditation experience that will deepen your understanding of consciousness and well-being. In this exclusive Airbnb Original, Deepak will guide you through ancient meditation practices combined with modern scientific insights. You\'ll learn techniques for stress reduction, emotional balance, and spiritual growth while exploring the connection between mind, body, and spirit. This session offers practical tools for daily life and profound insights into the nature of consciousness.',
        price: 75,
        duration: '60 minutes',
        rating: 4.9,
        reviewCount: 678,
        images: [
          'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3822624/pexels-photo-3822624.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        location: { city: 'Online', country: 'Worldwide' },
        host: {
          name: 'Deepak Chopra',
          avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
          isSuperhost: true,
          responseRate: 100,
          responseTime: 'within an hour',
          languages: ['English'],
          joinedDate: '2023',
          experiencesHosted: 20,
          totalGuests: 1500
        },
        category: 'wellness',
        maxGuests: 50,
        languages: ['English'],
        includes: [
          'Guided meditation sessions',
          'Breathing techniques',
          'Mindfulness practices',
          'Consciousness insights',
          'Daily practice guide',
          'Meditation music playlist'
        ],
        highlights: [
          'Learn from a world-renowned wellness expert',
          'Master ancient meditation techniques',
          'Understand the science of consciousness',
          'Develop a sustainable practice',
          'Connect with a global community'
        ],
        isOnlineExperience: true,
        tags: ['Meditation', 'Wellness', 'Spirituality', 'Mindfulness'],
        difficulty: 'All levels',
        ageRestriction: '16+',
        groupSize: '20-50 guests',
        cancellationPolicy: 'Free cancellation up to 24 hours before',
        whatToBring: ['Comfortable seating', 'Quiet space', 'Open mind'],
        meetingPoint: 'Zoom link provided after booking',
        accessibility: ['Fully accessible', 'Audio-focused experience', 'Meditation guides provided']
      }
    };

    return experienceMap[experienceId] || experienceMap['orig-1'];
  };

  const experience = getExperienceData(id || 'orig-1');
  const isFavorite = favorites.includes(experience.id);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === experience.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? experience.images.length - 1 : prev - 1
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

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">{experience.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-medium">{experience.rating}</span>
                <span className="text-gray-500">({experience.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-500">{experience.location.city}, {experience.location.country}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span className="text-gray-500">{experience.duration}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-sm font-medium hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button
                onClick={() => toggleFavorite(experience.id)}
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
                src={experience.images[currentImageIndex]}
                alt={experience.title}
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
              {experience.images.slice(1, 5).map((image, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={image}
                    alt={`${experience.title} ${index + 2}`}
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
            {/* Experience Overview */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    Experience hosted by {experience.host.name}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-600 mt-1">
                    <span>{experience.duration}</span>
                    <span>•</span>
                    <span>Up to {experience.maxGuests} guests</span>
                    <span>•</span>
                    <span>Hosted in {experience.languages.join(', ')}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src={experience.host.avatar}
                    alt={experience.host.name}
                    className="w-12 h-12 rounded-full"
                  />
                  {experience.host.isSuperhost && (
                    <Award className="w-5 h-5 text-yellow-500" />
                  )}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{experience.description}</p>
              <p className="text-gray-700 leading-relaxed">{experience.longDescription}</p>
            </div>

            {/* What's Included */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold mb-6">What's included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.includes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold mb-6">Experience highlights</h3>
              <div className="space-y-3">
                {experience.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Information */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold mb-6">Know before you go</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">What to bring</h4>
                  <ul className="space-y-1">
                    {experience.whatToBring.map((item, index) => (
                      <li key={index} className="text-gray-600 text-sm">• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Accessibility</h4>
                  <ul className="space-y-1">
                    {experience.accessibility.map((item, index) => (
                      <li key={index} className="text-gray-600 text-sm">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800 font-medium">Age requirement: {experience.ageRestriction}</p>
                    <p className="text-sm text-yellow-700 mt-1">{experience.cancellationPolicy}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Host Information */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={experience.host.avatar}
                  alt={experience.host.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Meet your host, {experience.host.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                    <span>Hosting since {experience.host.joinedDate}</span>
                    <span>•</span>
                    <span>{experience.host.experiencesHosted} experiences</span>
                    <span>•</span>
                    <span>{experience.host.totalGuests} guests</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{experience.host.responseRate}%</div>
                  <div className="text-sm text-gray-600">Response rate</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{experience.host.responseTime}</div>
                  <div className="text-sm text-gray-600">Response time</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{experience.host.languages.length}</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
              </div>
              
              <p className="text-gray-700">
                {experience.host.isSuperhost 
                  ? `${experience.host.name} is a renowned expert in their field with extensive experience creating meaningful experiences for guests from around the world.`
                  : `${experience.host.name} is passionate about sharing their expertise and creating memorable experiences for guests.`
                }
              </p>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-semibold">${experience.price}</span>
                    <span className="text-gray-500"> per person</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{experience.rating}</span>
                    <span className="text-gray-500">({experience.reviewCount})</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      CHOOSE DATE
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
                      CHOOSE TIME
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      GUESTS
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                    >
                      {Array.from({ length: experience.maxGuests }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>
                          {num} guest{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-[#FF5A5F] text-white py-3 rounded-lg font-medium hover:bg-[#E54850] transition-colors mb-4"
                >
                  Book experience
                </button>

                <p className="text-center text-sm text-gray-500 mb-4">
                  You won't be charged yet
                </p>

                {selectedDate && selectedTime && (
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span>${experience.price} x {guests} guest{guests > 1 ? 's' : ''}</span>
                      <span>${experience.price * guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>${Math.round(experience.price * guests * 0.14)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${experience.price * guests + Math.round(experience.price * guests * 0.14)}</span>
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

export default ExperienceDetail;