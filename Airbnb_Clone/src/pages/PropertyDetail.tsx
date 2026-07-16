import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share, ChevronLeft, ChevronRight, MapPin, Users, Bed, Bath, Wifi, Car, Waves, Home, Calendar, CreditCard, AlertCircle } from 'lucide-react';
import { mockProperties, mockReviews, indianProperties } from '../data/mockData';
import { useApp } from '../context/AppContext';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { favorites, toggleFavorite, user, setIsLoginModalOpen } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  // Search in both regular and Indian properties
  const allProperties = [...mockProperties, ...indianProperties];
  const property = allProperties.find(p => p.id === id);
  const propertyReviews = mockReviews.filter(r => r.propertyId === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Error Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <AlertCircle className="w-12 h-12 text-gray-400" />
            </div>
            
            {/* Main Error Message */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              We can't seem to find the page you're looking for.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link
              to="/"
              className="w-full sm:w-auto bg-[#FF5A5F] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#E54850] transition-colors text-center"
            >
              Go to Airbnb homepage
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Go back
            </button>
          </div>

          {/* Error Code */}
          <div className="text-center">
            <p className="text-sm text-gray-500">Error 404</p>
          </div>

          {/* Suggested Properties */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              You might like these
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProperties.slice(0, 3).map((suggestedProperty) => (
                <Link
                  key={suggestedProperty.id}
                  to={`/property/${suggestedProperty.id}`}
                  className="group"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-3">
                    <img
                      src={suggestedProperty.images[0]}
                      alt={suggestedProperty.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 truncate">
                        {suggestedProperty.location.city}, {suggestedProperty.location.country}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current text-gray-900" />
                        <span className="text-sm font-medium">{suggestedProperty.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-sm">{suggestedProperty.propertyType}</p>
                    
                    <div className="mt-2">
                      <span className="font-medium text-gray-900">
                        {suggestedProperty.location.country === 'India' 
                          ? `₹${suggestedProperty.price.toLocaleString('en-IN')}`
                          : `$${suggestedProperty.price}`
                        }
                      </span>
                      <span className="text-gray-500 text-sm"> night</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need help?
              </h3>
              <p className="text-gray-600 mb-6">
                Visit our Help Center for answers to common questions.
              </p>
              <Link
                to="/help"
                className="inline-flex items-center text-[#FF5A5F] hover:underline font-medium"
              >
                Visit Help Center
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.includes(property.id);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const totalPrice = nights * property.price;

  const handleReserve = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    
    alert('Booking functionality would be implemented here!');
  };

  const amenityIcons: { [key: string]: React.ReactNode } = {
    'WiFi': <Wifi className="w-5 h-5" />,
    'Kitchen': <Home className="w-5 h-5" />,
    'Parking': <Car className="w-5 h-5" />,
    'Beach Access': <Waves className="w-5 h-5" />,
    'Pool': <Waves className="w-5 h-5" />,
    'Air Conditioning': <Home className="w-5 h-5" />,
    'Hot Tub': <Waves className="w-5 h-5" />,
    'Fireplace': <Home className="w-5 h-5" />,
    'Pet Friendly': <Heart className="w-5 h-5" />,
    'Mountain View': <MapPin className="w-5 h-5" />,
    'Gym': <Users className="w-5 h-5" />,
    'Elevator': <Home className="w-5 h-5" />,
    'Workspace': <Home className="w-5 h-5" />,
    'City View': <MapPin className="w-5 h-5" />,
    'Garden': <Home className="w-5 h-5" />,
    'Country View': <MapPin className="w-5 h-5" />,
    'Concierge': <Users className="w-5 h-5" />,
    'Rooftop Terrace': <Home className="w-5 h-5" />,
    'Outdoor Dining': <Home className="w-5 h-5" />
  };

  const isIndianProperty = property.location.country === 'India';
  const currencySymbol = isIndianProperty ? '₹' : '$';
  const formatPrice = (price: number) => {
    return isIndianProperty ? price.toLocaleString('en-IN') : price.toString();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">{property.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-medium">{property.rating}</span>
                <span className="text-gray-500">({property.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-500">{property.location.city}, {property.location.country}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-sm font-medium hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button
                onClick={() => toggleFavorite(property.id)}
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
                src={property.images[currentImageIndex]}
                alt={property.title}
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
              {property.images.slice(1, 5).map((image, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={image}
                    alt={`${property.title} ${index + 2}`}
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
            {/* Property Overview */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {property.propertyType} hosted by {property.host.name}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-600 mt-1">
                    <span>{property.maxGuests} guests</span>
                    <span>•</span>
                    <span>{property.bedrooms} bedrooms</span>
                    <span>•</span>
                    <span>{property.bathrooms} bathrooms</span>
                  </div>
                </div>
                <img
                  src={property.host.avatar}
                  alt={property.host.name}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold mb-6">What this place offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(showAllAmenities ? property.amenities : property.amenities.slice(0, 10)).map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-3">
                    {amenityIcons[amenity] || <Home className="w-5 h-5" />}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
              {property.amenities.length > 10 && (
                <button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="mt-4 text-[#FF5A5F] font-medium hover:underline"
                >
                  {showAllAmenities ? 'Show less' : `Show all ${property.amenities.length} amenities`}
                </button>
              )}
            </div>

            {/* Reviews */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-xl font-semibold">{property.rating}</span>
                <span className="text-gray-500">· {property.reviewCount} reviews</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {propertyReviews.map((review) => (
                  <div key={review.id} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-medium">{review.userName}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Host Information */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={property.host.avatar}
                  alt={property.host.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Hosted by {property.host.name}</h3>
                  <p className="text-gray-500">
                    Joined in {new Date(property.host.joinedDate).getFullYear()}
                    {property.host.isSuperhost && ' • Superhost'}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                {property.host.isSuperhost 
                  ? "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."
                  : "This host is committed to providing great stays for guests."
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
                    <span className="text-2xl font-semibold">{currencySymbol}{formatPrice(property.price)}</span>
                    <span className="text-gray-500"> night</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="text-gray-500">({property.reviewCount})</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        CHECK-IN
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        CHECK-OUT
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                      />
                    </div>
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
                      {Array.from({ length: property.maxGuests }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>
                          {num} guest{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleReserve}
                  className="w-full bg-[#FF5A5F] text-white py-3 rounded-lg font-medium hover:bg-[#E54850] transition-colors mb-4"
                >
                  {property.isInstantBook ? 'Reserve' : 'Request to book'}
                </button>

                <p className="text-center text-sm text-gray-500 mb-4">
                  You won't be charged yet
                </p>

                {nights > 0 && (
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span>{currencySymbol}{formatPrice(property.price)} x {nights} nights</span>
                      <span>{currencySymbol}{formatPrice(property.price * nights)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning fee</span>
                      <span>{currencySymbol}{isIndianProperty ? '500' : '50'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>{currencySymbol}{formatPrice(Math.round(totalPrice * 0.14))}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>{currencySymbol}{formatPrice(totalPrice + (isIndianProperty ? 500 : 50) + Math.round(totalPrice * 0.14))}</span>
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

export default PropertyDetail;