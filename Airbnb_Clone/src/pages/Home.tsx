import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import DiscountPopup from '../components/DiscountPopup';
import BackToTop from '../components/BackToTop';
import PriceIncludesFeesNotice from '../components/PriceIncludesFeesNotice';
import { mockProperties, indianProperties } from '../data/mockData';

const Home: React.FC = () => {
  const categories = [
    { name: 'Beach', icon: '🏖️' },
    { name: 'Trending', icon: '🔥' },
    { name: 'Cabins', icon: '🏕️' },
    { name: 'Luxe', icon: '💎' },
    { name: 'Amazing views', icon: '🏔️' },
    { name: 'Mansions', icon: '🏰' },
    { name: 'Islands', icon: '🏝️' },
    { name: 'Countryside', icon: '🌾' },
    { name: 'Tiny homes', icon: '🏠' },
    { name: 'Lakefront', icon: '🏞️' },
    { name: 'Design', icon: '🎨' },
    { name: 'Skiing', icon: '⛷️' }
  ];

  // Group Indian properties by city
  const puriProperties = indianProperties.filter(p => p.location.city === 'Puri').slice(0, 8);
  const bengaluruProperties = indianProperties.filter(p => 
    p.location.city === 'Koramangala' || p.location.city === 'Richmond Town' || p.location.city.includes('Bangalore')
  ).slice(0, 8);
  const kolkataProperties = indianProperties.filter(p => 
    p.location.city === 'Kolkata' || p.location.city.includes('Kolkata')
  ).slice(0, 8);
  const hyderabadProperties = indianProperties.filter(p => 
    p.location.city === 'Banjara Hills' || p.location.city === 'Hyderabad' || p.location.city.includes('Hyderabad')
  ).slice(0, 8);
  const southGoaProperties = indianProperties.filter(p => 
    p.location.city === 'Adsuli' || p.location.city === 'Varca' || p.location.city === 'Majorda' || p.location.city === 'Benaulim'
  ).slice(0, 8);
  const visakhapatnamProperties = indianProperties.filter(p => 
    p.location.city === 'Visakhapatnam' || p.location.city === 'Bheemunipatnam'
  ).slice(0, 8);
  const puneProperties = indianProperties.filter(p => 
    p.location.city === 'Pune City' || p.location.city === 'Pune'
  ).slice(0, 8);
  const gurgaonProperties = indianProperties.filter(p => 
    p.location.city === 'Gurugram'
  ).slice(0, 8);
  const northGoaProperties = indianProperties.filter(p => 
    p.location.city === 'Arpora' || p.location.city === 'Vagator' || p.location.city === 'Siolim' || p.location.city === 'Calangute'
  ).slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <DiscountPopup />
      <BackToTop />
      <PriceIncludesFeesNotice />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="py-6 border-b border-gray-200">
          <div className="flex space-x-8 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex flex-col items-center space-y-2 p-4 hover:bg-gray-50 rounded-lg transition-colors min-w-max group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular homes in Puri */}
        <div className="py-12">
          <h2 className="text-2xl font-semibold mb-8">Popular homes in Puri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
            {puriProperties.map((property) => (
              <PropertyCard key={property.id} property={property} showPriceFor2Nights={true} />
            ))}
          </div>
        </div>

        {/* Available next month in Bengaluru */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-8">Available next month in Bengaluru</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
            {bengaluruProperties.map((property) => (
              <PropertyCard key={property.id} property={property} showPriceFor2Nights={true} />
            ))}
          </div>
        </div>

        {/* Stay in Kolkata */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-8">Stay in Kolkata</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
            {kolkataProperties.map((property) => (
              <PropertyCard key={property.id} property={property} showPriceFor2Nights={true} />
            ))}
          </div>
        </div>

        {/* Available next month in Hyderabad */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-8">Available next month in Hyderabad</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
            {hyderabadProperties.map((property) => (
              <PropertyCard key={property.id} property={property} showPriceFor2Nights={true} />
            ))}
          </div>
        </div>

        {/* Homes in South Goa */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-8">Homes in South Goa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
            {southGoaProperties.map((property) => (
              <PropertyCard key={property.id} property={property} showPriceFor2Nights={true} />
            ))}
          </div>
        </div>

        {/* Available in Visakhapatnam this weekend */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-8">Available in Visakhapatnam this weekend</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
            {visakhapatnamProperties.map((property) => (
              <PropertyCard key={property.id} property={property} showPriceFor2Nights={true} />
            ))}
          </div>
        </div>

        {/* Places to stay in Pune */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-8">Places to stay in Pune</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
            {puneProperties.map((property) => (
              <PropertyCard key={property.id} property={property} showPriceFor2Nights={true} />
            ))}
          </div>
        </div>

        {/* Check out homes in Gurgaon District */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-8">Check out homes in Gurgaon District</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
            {gurgaonProperties.map((property) => (
              <PropertyCard key={property.id} property={property} showPriceFor2Nights={true} />
            ))}
          </div>
        </div>

        {/* Popular homes in North Goa */}
        <div className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-8">Popular homes in North Goa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
            {northGoaProperties.map((property) => (
              <PropertyCard key={property.id} property={property} showPriceFor2Nights={true} />
            ))}
          </div>
        </div>

        {/* Continue exploring section */}
        <div className="py-16 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-8">Continue exploring homes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Destinations for arts & culture',
                link: '/search?category=culture'
              },
              {
                image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Destinations for outdoor adventure',
                link: '/search?category=adventure'
              },
              {
                image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Mountain cabins',
                link: '/search?type=cabin'
              },
              {
                image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Beach destinations',
                link: '/search?category=beach'
              }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:underline">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;