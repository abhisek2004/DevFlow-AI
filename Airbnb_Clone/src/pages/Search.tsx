import React, { useState, useMemo } from 'react';
import { Filter, MapPin, Star } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { mockProperties, indianProperties } from '../data/mockData';
import { useApp } from '../context/AppContext';

const Search: React.FC = () => {
  const { searchFilters } = useApp();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  const [localFilters, setLocalFilters] = useState({
    priceMin: 0,
    priceMax: 20000,
    propertyType: '',
    bedrooms: 0,
    amenities: [] as string[]
  });

  const allAmenities = [
    'WiFi', 'Kitchen', 'Pool', 'Parking', 'Air Conditioning', 
    'Beach Access', 'Hot Tub', 'Fireplace', 'Pet Friendly', 'Gym',
    'Sea View', 'City View', 'Garden', 'Workspace', 'Heritage Architecture'
  ];

  const propertyTypes = ['Villa', 'Cabin', 'Loft', 'Cottage', 'Penthouse', 'Beach House', 'Apartment', 'Flat', 'Room', 'Home', 'Guest suite', 'Tiny home', 'Farm stay', 'Guest house'];

  // Combine all properties
  const allProperties = [...mockProperties, ...indianProperties];

  const filteredProperties = useMemo(() => {
    let filtered = allProperties.filter(property => {
      const matchesLocation = !searchFilters.location || 
        property.location.city.toLowerCase().includes(searchFilters.location.toLowerCase()) ||
        property.location.country.toLowerCase().includes(searchFilters.location.toLowerCase());
      
      const matchesPrice = property.price >= localFilters.priceMin && property.price <= localFilters.priceMax;
      const matchesType = !localFilters.propertyType || property.propertyType === localFilters.propertyType;
      const matchesBedrooms = localFilters.bedrooms === 0 || property.bedrooms >= localFilters.bedrooms;
      const matchesAmenities = localFilters.amenities.length === 0 || 
        localFilters.amenities.every(amenity => property.amenities.includes(amenity));

      return matchesLocation && matchesPrice && matchesType && matchesBedrooms && matchesAmenities;
    });

    // Sort properties
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep recommended order
        break;
    }

    return filtered;
  }, [searchFilters, localFilters, sortBy, allProperties]);

  const toggleAmenity = (amenity: string) => {
    setLocalFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Results Header */}
        <div className="py-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                {searchFilters.location ? `Stays in ${searchFilters.location}` : 'Search results'}
              </h1>
              <p className="text-gray-600 mt-1">{filteredProperties.length} properties found</p>
            </div>
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
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-8 py-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-6">Filters</h3>
                
                {/* Price Range */}
                <div className="mb-8">
                  <h4 className="font-medium mb-4">Price range (per night)</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Min price (₹)</label>
                      <input
                        type="number"
                        value={localFilters.priceMin}
                        onChange={(e) => setLocalFilters(prev => ({ ...prev, priceMin: Number(e.target.value) }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Max price (₹)</label>
                      <input
                        type="number"
                        value={localFilters.priceMax}
                        onChange={(e) => setLocalFilters(prev => ({ ...prev, priceMax: Number(e.target.value) }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Property Type */}
                <div className="mb-8">
                  <h4 className="font-medium mb-4">Property type</h4>
                  <select
                    value={localFilters.propertyType}
                    onChange={(e) => setLocalFilters(prev => ({ ...prev, propertyType: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                  >
                    <option value="">All types</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Bedrooms */}
                <div className="mb-8">
                  <h4 className="font-medium mb-4">Bedrooms</h4>
                  <div className="flex space-x-2">
                    {[0, 1, 2, 3, 4].map(num => (
                      <button
                        key={num}
                        onClick={() => setLocalFilters(prev => ({ ...prev, bedrooms: num }))}
                        className={`px-4 py-2 border rounded-lg transition-colors ${
                          localFilters.bedrooms === num
                            ? 'border-[#FF5A5F] bg-[#FF5A5F] text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {num === 0 ? 'Any' : `${num}+`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h4 className="font-medium mb-4">Amenities</h4>
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    {allAmenities.map(amenity => (
                      <label key={amenity} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={localFilters.amenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="w-4 h-4 text-[#FF5A5F] border-gray-300 rounded focus:ring-[#FF5A5F]"
                        />
                        <span className="text-sm">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setLocalFilters({
                    priceMin: 0,
                    priceMax: 20000,
                    propertyType: '',
                    bedrooms: 0,
                    amenities: []
                  })}
                  className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="flex-1">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search filters or location.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;