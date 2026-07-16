import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Property } from '../types';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  showPriceFor2Nights?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, showPriceFor2Nights = false }) => {
  const { favorites, toggleFavorite } = useApp();
  const isFavorite = favorites.includes(property.id);

  const formatPrice = (price: number) => {
    if (showPriceFor2Nights) {
      const totalFor2Nights = price * 2;
      return `₹${totalFor2Nights.toLocaleString('en-IN')} for 2 nights`;
    }
    return `₹${price.toLocaleString('en-IN')} night`;
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative">
        <Link to={`/property/${property.id}`}>
          <div className="aspect-square rounded-xl overflow-hidden">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
        
        {/* Guest Favourite Badge */}
        {property.isGuestFavourite && (
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full shadow-sm">
            <div className="flex items-center space-x-1">
              <Heart className="w-3 h-3 fill-[#FF5A5F] text-[#FF5A5F]" />
              <span className="text-xs font-medium text-gray-900">Guest favourite</span>
            </div>
          </div>
        )}
        
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(property.id);
          }}
          className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-6 h-6 ${
              isFavorite
                ? 'fill-[#FF5A5F] text-[#FF5A5F]'
                : 'fill-black/20 text-white stroke-2'
            }`}
          />
        </button>
      </div>

      <Link to={`/property/${property.id}`}>
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900 truncate">
              {property.propertyType} in {property.location.city}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-current text-gray-900" />
              <span className="text-sm font-medium">{property.rating}</span>
            </div>
          </div>
          
          <div className="mt-2">
            <span className="font-medium text-gray-900">{formatPrice(property.price)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;