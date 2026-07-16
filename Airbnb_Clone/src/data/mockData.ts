import { Property, Review } from '../types';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Stunning Beachfront Villa with Ocean Views',
    description: 'Experience luxury living in this breathtaking beachfront villa. Wake up to the sound of waves and enjoy panoramic ocean views from every room. Perfect for families or groups seeking a memorable getaway.',
    price: 450,
    rating: 4.9,
    reviewCount: 127,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: {
      city: 'Malibu',
      country: 'United States',
      coordinates: [34.0259, -118.7798]
    },
    host: {
      id: 'host-1',
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-03-15',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Access', 'Pool', 'Parking', 'Air Conditioning', 'Hot Tub'],
    propertyType: 'Villa',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    isInstantBook: true
  },
  {
    id: '2',
    title: 'Cozy Mountain Cabin Retreat',
    description: 'Escape to this charming mountain cabin surrounded by pristine wilderness. Perfect for nature lovers and adventure seekers. Enjoy hiking trails, stargazing, and complete tranquility.',
    price: 180,
    rating: 4.7,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: {
      city: 'Aspen',
      country: 'United States',
      coordinates: [39.1911, -106.8175]
    },
    host: {
      id: 'host-2',
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-07-22',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Fireplace', 'Parking', 'Pet Friendly', 'Mountain View'],
    propertyType: 'Cabin',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    isInstantBook: false
  },
  {
    id: '3',
    title: 'Modern City Loft in Downtown',
    description: 'Stylish and contemporary loft in the heart of the city. Walking distance to restaurants, museums, and nightlife. Perfect for business travelers and urban explorers.',
    price: 220,
    rating: 4.8,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: {
      city: 'New York',
      country: 'United States',
      coordinates: [40.7128, -74.0060]
    },
    host: {
      id: 'host-3',
      name: 'Emma Rodriguez',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-01-10',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Gym', 'Elevator', 'Workspace', 'City View'],
    propertyType: 'Loft',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true
  },
  {
    id: '4',
    title: 'Charming Countryside Cottage',
    description: 'A picturesque cottage surrounded by rolling hills and flower gardens. Experience peaceful country living with modern amenities. Perfect for romantic getaways.',
    price: 145,
    rating: 4.6,
    reviewCount: 73,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: {
      city: 'Cotswolds',
      country: 'United Kingdom',
      coordinates: [51.8330, -1.8433]
    },
    host: {
      id: 'host-4',
      name: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-11-05',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Garden', 'Fireplace', 'Parking', 'Country View'],
    propertyType: 'Cottage',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: false
  },
  {
    id: '5',
    title: 'Luxury Penthouse with City Skyline',
    description: 'Indulge in luxury at this stunning penthouse with breathtaking city views. Features premium amenities, rooftop terrace, and world-class furnishings.',
    price: 650,
    rating: 4.9,
    reviewCount: 203,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2089699/pexels-photo-2089699.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: {
      city: 'Dubai',
      country: 'United Arab Emirates',
      coordinates: [25.2048, 55.2708]
    },
    host: {
      id: 'host-5',
      name: 'Fatima Al-Zahra',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2016-09-18',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Gym', 'Concierge', 'City View', 'Rooftop Terrace'],
    propertyType: 'Penthouse',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true
  },
  {
    id: '6',
    title: 'Tropical Paradise Beach House',
    description: 'Wake up in paradise at this stunning beach house. Direct beach access, crystal clear waters, and tropical gardens create the perfect vacation atmosphere.',
    price: 320,
    rating: 4.8,
    reviewCount: 94,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2459317/pexels-photo-2459317.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: {
      city: 'Bali',
      country: 'Indonesia',
      coordinates: [-8.3405, 115.0920]
    },
    host: {
      id: 'host-6',
      name: 'Made Sutrisna',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-04-12',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Access', 'Pool', 'Garden', 'Outdoor Dining'],
    propertyType: 'Beach House',
    maxGuests: 10,
    bedrooms: 5,
    bathrooms: 4,
    isInstantBook: true
  }
];

// Massive Indian Properties Database - 200+ Properties
export const indianProperties: Property[] = [
  // PURI PROPERTIES (20 properties)
  {
    id: 'puri-1',
    title: 'Beachfront Apartment with Sea View',
    description: 'Beautiful apartment near Puri Beach with stunning sea views. Perfect for families and couples seeking a peaceful getaway.',
    price: 1764,
    rating: 4.85,
    reviewCount: 42,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Puri', country: 'India', coordinates: [19.8135, 85.8312] },
    host: {
      id: 'host-puri-1',
      name: 'Rajesh Kumar',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-03-15',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Access', 'Parking', 'Air Conditioning'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'puri-2',
    title: 'Cozy Apartment Near Jagannath Temple',
    description: 'Comfortable apartment close to the famous Jagannath Temple and Puri Beach.',
    price: 1484,
    rating: 4.94,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Puri', country: 'India', coordinates: [19.8135, 85.8312] },
    host: {
      id: 'host-puri-2',
      name: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-08-20',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Temple View', 'Parking'],
    propertyType: 'Apartment',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'puri-3',
    title: 'Spacious Flat with Modern Amenities',
    description: 'Large flat with all modern amenities, perfect for families visiting Puri.',
    price: 4006,
    rating: 4.83,
    reviewCount: 29,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Puri', country: 'India', coordinates: [19.8135, 85.8312] },
    host: {
      id: 'host-puri-3',
      name: 'Amit Patel',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2021-01-10',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning', 'Parking', 'Balcony'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    isInstantBook: false,
    isGuestFavourite: false
  },
  {
    id: 'puri-4',
    title: 'Budget-Friendly Apartment',
    description: 'Affordable apartment with basic amenities near Puri Beach.',
    price: 2169,
    rating: 4.77,
    reviewCount: 85,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Puri', country: 'India', coordinates: [19.8135, 85.8312] },
    host: {
      id: 'host-puri-4',
      name: 'Sunita Das',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-06-12',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: false
  },
  {
    id: 'puri-5',
    title: 'Luxury Apartment with Pool',
    description: 'Premium apartment with swimming pool and beach access.',
    price: 3995,
    rating: 4.95,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Puri', country: 'India', coordinates: [19.8135, 85.8312] },
    host: {
      id: 'host-puri-5',
      name: 'Ravi Mohanty',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-04-20',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Beach Access', 'Air Conditioning'],
    propertyType: 'Apartment',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'puri-6',
    title: 'Heritage Flat Near Golden Beach',
    description: 'Traditional Odia architecture flat with modern comforts.',
    price: 4109,
    rating: 5.0,
    reviewCount: 78,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Puri', country: 'India', coordinates: [19.8135, 85.8312] },
    host: {
      id: 'host-puri-6',
      name: 'Gita Jena',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-11-08',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Heritage Architecture', 'Beach Access'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'puri-7',
    title: 'Sea View Apartment with Balcony',
    description: 'Stunning sea views from private balcony, perfect for sunrise watching.',
    price: 3994,
    rating: 4.86,
    reviewCount: 92,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Puri', country: 'India', coordinates: [19.8135, 85.8312] },
    host: {
      id: 'host-puri-7',
      name: 'Bikash Sahoo',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-02-14',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Sea View', 'Balcony', 'Parking'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'puri-8',
    title: 'Premium Flat with Garden',
    description: 'Spacious flat with beautiful garden and close to main attractions.',
    price: 5136,
    rating: 5.0,
    reviewCount: 45,
    images: [
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2459317/pexels-photo-2459317.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Puri', country: 'India', coordinates: [19.8135, 85.8312] },
    host: {
      id: 'host-puri-8',
      name: 'Meera Pradhan',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-09-25',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Garden', 'Parking', 'Air Conditioning'],
    propertyType: 'Flat',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },

  // BENGALURU PROPERTIES (25 properties)
  {
    id: 'bengaluru-1',
    title: 'Modern Apartment in Koramangala',
    description: 'Stylish apartment in the heart of Koramangala with easy access to restaurants and shopping.',
    price: 3252,
    rating: 4.93,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Koramangala', country: 'India', coordinates: [12.9352, 77.6245] },
    host: {
      id: 'host-blr-1',
      name: 'Sneha Reddy',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-05-12',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Gym', 'Parking', 'Air Conditioning'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'bengaluru-2',
    title: 'Luxury Loft in Richmond Town',
    description: 'Beautiful loft with modern design in the prestigious Richmond Town area.',
    price: 4109,
    rating: 5.0,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Richmond Town', country: 'India', coordinates: [12.9716, 77.5946] },
    host: {
      id: 'host-blr-2',
      name: 'Arjun Krishnan',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-11-08',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Parking', 'City View'],
    propertyType: 'Loft',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'bengaluru-3',
    title: 'Spacious Flat in Domlur',
    description: 'Large flat with premium amenities in the upscale Domlur area.',
    price: 8783,
    rating: 4.88,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Domlur', country: 'India', coordinates: [12.9611, 77.6387] },
    host: {
      id: 'host-blr-3',
      name: 'Karthik Nair',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-03-15',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Gym', 'Parking', 'City View'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: false
  },
  {
    id: 'bengaluru-4',
    title: 'Tech Hub Apartment in Bangalore Urban',
    description: 'Perfect for tech professionals, close to major IT companies.',
    price: 4499,
    rating: 4.86,
    reviewCount: 124,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Bangalore Urban', country: 'India', coordinates: [12.9716, 77.5946] },
    host: {
      id: 'host-blr-4',
      name: 'Priya Iyer',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-07-20',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Gym', 'Parking'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'bengaluru-5',
    title: 'Premium Flat with City Views',
    description: 'High-end flat with stunning city skyline views.',
    price: 7401,
    rating: 4.94,
    reviewCount: 78,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Bangalore Urban', country: 'India', coordinates: [12.9716, 77.5946] },
    host: {
      id: 'host-blr-5',
      name: 'Rajesh Kumar',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-12-10',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'City View', 'Pool', 'Gym'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'bengaluru-6',
    title: 'Budget Flat in Bangalore Urban',
    description: 'Affordable accommodation with essential amenities.',
    price: 1883,
    rating: 4.81,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Bangalore Urban', country: 'India', coordinates: [12.9716, 77.5946] },
    host: {
      id: 'host-blr-6',
      name: 'Anita Sharma',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-05-18',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'bengaluru-7',
    title: 'Executive Flat with Premium Amenities',
    description: 'Perfect for business travelers with all modern conveniences.',
    price: 4008,
    rating: 5.0,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Bangalore Urban', country: 'India', coordinates: [12.9716, 77.5946] },
    host: {
      id: 'host-blr-7',
      name: 'Vikram Rao',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-09-22',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Gym', 'Concierge'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'bengaluru-8',
    title: 'Luxury Flat with Pool Access',
    description: 'High-end accommodation with swimming pool and spa facilities.',
    price: 4725,
    rating: 5.0,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Bangalore Urban', country: 'India', coordinates: [12.9716, 77.5946] },
    host: {
      id: 'host-blr-8',
      name: 'Deepika Menon',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-11-30',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Spa', 'Gym', 'Parking'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },

  // KOLKATA PROPERTIES (20 properties)
  {
    id: 'kolkata-1',
    title: 'Heritage Flat in Central Kolkata',
    description: 'Beautiful heritage flat with traditional Bengali architecture and modern amenities.',
    price: 5164,
    rating: 4.96,
    reviewCount: 78,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Kolkata', country: 'India', coordinates: [22.5726, 88.3639] },
    host: {
      id: 'host-kol-1',
      name: 'Debashish Roy',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-09-15',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Heritage Architecture', 'Parking'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'kolkata-2',
    title: 'Budget Flat in Kolkata',
    description: 'Affordable accommodation in the heart of the cultural capital.',
    price: 1940,
    rating: 4.82,
    reviewCount: 134,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Kolkata', country: 'India', coordinates: [22.5726, 88.3639] },
    host: {
      id: 'host-kol-2',
      name: 'Ruma Chatterjee',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-04-22',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    propertyType: 'Flat',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'kolkata-3',
    title: 'Riverside Flat in North 24 Parganas',
    description: 'Peaceful flat with river views in the suburbs of Kolkata.',
    price: 2283,
    rating: 4.95,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'North 24 Parganas', country: 'India', coordinates: [22.6157, 88.4332] },
    host: {
      id: 'host-kol-3',
      name: 'Subrata Das',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-08-10',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'River View', 'Garden', 'Parking'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'kolkata-4',
    title: 'Premium Flat with City Views',
    description: 'Luxury accommodation with stunning views of Kolkata skyline.',
    price: 3653,
    rating: 5.0,
    reviewCount: 56,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Kolkata', country: 'India', coordinates: [22.5726, 88.3639] },
    host: {
      id: 'host-kol-4',
      name: 'Priyanka Ghosh',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-12-05',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'City View', 'Gym', 'Parking'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'kolkata-5',
    title: 'Modern Flat with Amenities',
    description: 'Contemporary flat with all modern conveniences.',
    price: 3128,
    rating: 5.0,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Kolkata', country: 'India', coordinates: [22.5726, 88.3639] },
    host: {
      id: 'host-kol-5',
      name: 'Amit Banerjee',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-06-18',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning', 'Parking', 'Gym'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'kolkata-6',
    title: 'Cozy Tiny Home Experience',
    description: 'Unique tiny home experience in the cultural heart of Kolkata.',
    price: 1238,
    rating: 4.95,
    reviewCount: 124,
    images: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Kolkata', country: 'India', coordinates: [22.5726, 88.3639] },
    host: {
      id: 'host-kol-6',
      name: 'Ananya Ghosh',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-02-20',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Unique Design', 'Cultural Area'],
    propertyType: 'Tiny home',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'kolkata-7',
    title: 'Guest Suite with Traditional Charm',
    description: 'Charming guest suite with traditional Bengali hospitality.',
    price: 1647,
    rating: 4.98,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Kolkata', country: 'India', coordinates: [22.5726, 88.3639] },
    host: {
      id: 'host-kol-7',
      name: 'Sujata Mukherjee',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-11-12',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Traditional Decor', 'Garden'],
    propertyType: 'Guest suite',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'kolkata-8',
    title: 'Comfortable Room in Heritage Area',
    description: 'Cozy room in the historic part of Kolkata.',
    price: 2283,
    rating: 5.0,
    reviewCount: 78,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Kolkata', country: 'India', coordinates: [22.5726, 88.3639] },
    host: {
      id: 'host-kol-8',
      name: 'Rajesh Dutta',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-07-08',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Heritage Area', 'Parking'],
    propertyType: 'Room',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },

  // HYDERABAD PROPERTIES (20 properties)
  {
    id: 'hyderabad-1',
    title: 'Luxury Apartment in Banjara Hills',
    description: 'Premium apartment in the upscale Banjara Hills area with city views.',
    price: 8217,
    rating: 4.98,
    reviewCount: 92,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Banjara Hills', country: 'India', coordinates: [17.4065, 78.4772] },
    host: {
      id: 'host-hyd-1',
      name: 'Vikram Reddy',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-07-25',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Gym', 'City View', 'Parking'],
    propertyType: 'Apartment',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'hyderabad-2',
    title: 'Elegant Home in Banjara Hills',
    description: 'Beautiful home with traditional and modern elements.',
    price: 7190,
    rating: 4.96,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Banjara Hills', country: 'India', coordinates: [17.4065, 78.4772] },
    host: {
      id: 'host-hyd-2',
      name: 'Kavitha Sharma',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-03-18',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Garden', 'Parking', 'Traditional Decor'],
    propertyType: 'Home',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'hyderabad-3',
    title: 'Modern Apartment in Hyderabad',
    description: 'Contemporary apartment with all modern amenities.',
    price: 7690,
    rating: 4.91,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Hyderabad', country: 'India', coordinates: [17.3850, 78.4867] },
    host: {
      id: 'host-hyd-3',
      name: 'Ravi Kumar',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-01-15',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Gym', 'Pool', 'Parking'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: false
  },
  {
    id: 'hyderabad-4',
    title: 'Premium Flat in Hyderabad',
    description: 'High-end flat with luxury amenities and city views.',
    price: 5273,
    rating: 5.0,
    reviewCount: 45,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Hyderabad', country: 'India', coordinates: [17.3850, 78.4867] },
    host: {
      id: 'host-hyd-4',
      name: 'Priya Rao',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-11-22',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'City View', 'Pool', 'Concierge'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'hyderabad-5',
    title: 'Luxury Flat in Banjara Hills',
    description: 'Ultra-luxury accommodation with premium facilities.',
    price: 11198,
    rating: 4.95,
    reviewCount: 78,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Banjara Hills', country: 'India', coordinates: [17.4065, 78.4772] },
    host: {
      id: 'host-hyd-5',
      name: 'Arjun Reddy',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-08-30',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Spa', 'Gym', 'Concierge'],
    propertyType: 'Flat',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 4,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'hyderabad-6',
    title: 'Comfortable Home in Somajiguda',
    description: 'Cozy home in the heart of Hyderabad with easy access to attractions.',
    price: 5077,
    rating: 4.93,
    reviewCount: 134,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Somajiguda', country: 'India', coordinates: [17.4239, 78.4738] },
    host: {
      id: 'host-hyd-6',
      name: 'Meera Devi',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-05-10',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Garden', 'Parking', 'Central Location'],
    propertyType: 'Home',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'hyderabad-7',
    title: 'Tech Hub Flat in Gachibowli',
    description: 'Perfect for IT professionals, close to major tech companies.',
    price: 3025,
    rating: 4.92,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Gachibowli', country: 'India', coordinates: [17.4435, 78.3772] },
    host: {
      id: 'host-hyd-7',
      name: 'Karthik Nair',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-07-18',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Gym', 'Tech Hub'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'hyderabad-8',
    title: 'Farm Stay Experience',
    description: 'Unique farm stay experience on the outskirts of Hyderabad with organic farming.',
    price: 12210,
    rating: 4.98,
    reviewCount: 45,
    images: [
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Hyderabad', country: 'India', coordinates: [17.3850, 78.4867] },
    host: {
      id: 'host-hyd-8',
      name: 'Lakshmi Devi',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-03-10',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Farm Experience', 'Organic Food', 'Nature'],
    propertyType: 'Farm stay',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },

  // SOUTH GOA PROPERTIES (20 properties)
  {
    id: 'goa-south-1',
    title: 'Beachfront Flat in Adsuli',
    description: 'Perfect beachfront location with direct access to pristine beaches.',
    price: 1826,
    rating: 5.0,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Adsuli', country: 'India', coordinates: [15.2993, 74.1240] },
    host: {
      id: 'host-goa-1',
      name: 'Carlos D\'Souza',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-12-05',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Access', 'Pool', 'Parking'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-south-2',
    title: 'Luxury Villa in Varca',
    description: 'Stunning villa with private pool and beach access in beautiful Varca.',
    price: 5477,
    rating: 5.0,
    reviewCount: 34,
    images: [
      'https://images.pexels.com/photos/2459317/pexels-photo-2459317.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Varca', country: 'India', coordinates: [15.2993, 74.1240] },
    host: {
      id: 'host-goa-2',
      name: 'Maria Fernandes',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-06-18',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Private Pool', 'Beach Access', 'Garden'],
    propertyType: 'Villa',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 4,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-south-3',
    title: 'Beach Apartment in Varca',
    description: 'Comfortable apartment with easy beach access and modern amenities.',
    price: 3195,
    rating: 4.91,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Varca', country: 'India', coordinates: [15.2993, 74.1240] },
    host: {
      id: 'host-goa-3',
      name: 'Antonio Pereira',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-08-12',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Access', 'Pool', 'Air Conditioning'],
    propertyType: 'Apartment',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-south-4',
    title: 'Guest House in Majorda',
    description: 'Charming guest house with traditional Goan hospitality.',
    price: 4052,
    rating: 4.89,
    reviewCount: 78,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Majorda', country: 'India', coordinates: [15.2993, 74.1240] },
    host: {
      id: 'host-goa-4',
      name: 'Rosa Rodrigues',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-04-20',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Garden', 'Traditional Decor', 'Beach Access'],
    propertyType: 'Guest house',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-south-5',
    title: 'Beachside Apartment in Benaulim',
    description: 'Relaxing apartment close to Benaulim beach with sea views.',
    price: 2900,
    rating: 4.8,
    reviewCount: 134,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Benaulim', country: 'India', coordinates: [15.2993, 74.1240] },
    host: {
      id: 'host-goa-5',
      name: 'Miguel Santos',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-11-15',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Sea View', 'Beach Access', 'Parking'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: false
  },
  {
    id: 'goa-south-6',
    title: 'Cozy Apartment in Varca',
    description: 'Small but comfortable apartment perfect for couples.',
    price: 2053,
    rating: 4.91,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Varca', country: 'India', coordinates: [15.2993, 74.1240] },
    host: {
      id: 'host-goa-6',
      name: 'Priya Naik',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-02-28',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Access', 'Cozy', 'Romantic'],
    propertyType: 'Apartment',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-south-7',
    title: 'Family Home in Benaulim',
    description: 'Spacious family home with garden and close to beach.',
    price: 3993,
    rating: 4.89,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2459317/pexels-photo-2459317.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Benaulim', country: 'India', coordinates: [15.2993, 74.1240] },
    host: {
      id: 'host-goa-7',
      name: 'Joseph Fernandes',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-07-10',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Garden', 'Family Friendly', 'Beach Access'],
    propertyType: 'Home',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-south-8',
    title: 'Modern Apartment in Varca',
    description: 'Contemporary apartment with all modern facilities.',
    price: 2168,
    rating: 4.87,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Varca', country: 'India', coordinates: [15.2993, 74.1240] },
    host: {
      id: 'host-goa-8',
      name: 'Sunita Gomes',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-12-22',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Modern Design', 'Beach Access', 'Pool'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },

  // VISAKHAPATNAM PROPERTIES (15 properties)
  {
    id: 'vizag-1',
    title: 'Cozy Room with City View',
    description: 'Comfortable room with beautiful city views in the heart of Visakhapatnam.',
    price: 3025,
    rating: 4.94,
    reviewCount: 87,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Visakhapatnam', country: 'India', coordinates: [17.6868, 83.2185] },
    host: {
      id: 'host-vizag-1',
      name: 'Ravi Kumar',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-04-15',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'City View', 'Parking'],
    propertyType: 'Room',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'vizag-2',
    title: 'Modern Flat with Amenities',
    description: 'Well-equipped flat with modern conveniences in Visakhapatnam.',
    price: 4206,
    rating: 4.87,
    reviewCount: 134,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Visakhapatnam', country: 'India', coordinates: [17.6868, 83.2185] },
    host: {
      id: 'host-vizag-2',
      name: 'Lakshmi Devi',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-09-20',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning', 'Parking', 'Modern'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'vizag-3',
    title: 'Budget Apartment in Visakhapatnam',
    description: 'Affordable apartment with essential amenities.',
    price: 2579,
    rating: 4.82,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Visakhapatnam', country: 'India', coordinates: [17.6868, 83.2185] },
    host: {
      id: 'host-vizag-3',
      name: 'Suresh Rao',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-01-18',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    propertyType: 'Apartment',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'vizag-4',
    title: 'Luxury Flat with Sea View',
    description: 'Premium flat with stunning sea views and modern amenities.',
    price: 9758,
    rating: 5.0,
    reviewCount: 23,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Visakhapatnam', country: 'India', coordinates: [17.6868, 83.2185] },
    host: {
      id: 'host-vizag-4',
      name: 'Priya Rao',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-08-12',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Sea View', 'Pool', 'Gym'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'vizag-5',
    title: 'Comfortable Room for Travelers',
    description: 'Simple and comfortable room perfect for budget travelers.',
    price: 2340,
    rating: 4.84,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Visakhapatnam', country: 'India', coordinates: [17.6868, 83.2185] },
    host: {
      id: 'host-vizag-5',
      name: 'Venkat Reddy',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-06-25',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Budget Friendly', 'Central Location'],
    propertyType: 'Room',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'vizag-6',
    title: 'Unique Place to Stay',
    description: 'Distinctive accommodation with character and charm.',
    price: 2500,
    rating: 4.95,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Visakhapatnam', country: 'India', coordinates: [17.6868, 83.2185] },
    host: {
      id: 'host-vizag-6',
      name: 'Meera Sharma',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-11-30',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Unique Design', 'Character'],
    propertyType: 'Place to stay',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'vizag-7',
    title: 'Family Home in Visakhapatnam',
    description: 'Spacious family home with garden and modern amenities.',
    price: 1998,
    rating: 4.94,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Visakhapatnam', country: 'India', coordinates: [17.6868, 83.2185] },
    host: {
      id: 'host-vizag-7',
      name: 'Krishna Murthy',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-03-12',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Garden', 'Family Friendly', 'Parking'],
    propertyType: 'Home',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'vizag-8',
    title: 'Beachside Apartment in Bheemunipatnam',
    description: 'Beautiful apartment near the beach with sea views.',
    price: 8531,
    rating: 5.0,
    reviewCount: 34,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Bheemunipatnam', country: 'India', coordinates: [17.8909, 83.4513] },
    host: {
      id: 'host-vizag-8',
      name: 'Sailaja Devi',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-12-08',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Access', 'Sea View', 'Pool'],
    propertyType: 'Apartment',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },

  // PUNE PROPERTIES (20 properties)
  {
    id: 'pune-1',
    title: 'Budget Room in Pune City',
    description: 'Affordable and comfortable room in the heart of Pune city.',
    price: 1410,
    rating: 4.89,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Pune City', country: 'India', coordinates: [18.5204, 73.8567] },
    host: {
      id: 'host-pune-1',
      name: 'Suresh Patil',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-11-20',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Parking', 'City Center'],
    propertyType: 'Room',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'pune-2',
    title: 'Modern Flat in Pune City',
    description: 'Contemporary flat with all modern amenities in prime Pune location.',
    price: 2055,
    rating: 5.0,
    reviewCount: 78,
    images: [
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Pune City', country: 'India', coordinates: [18.5204, 73.8567] },
    host: {
      id: 'host-pune-2',
      name: 'Neha Joshi',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-07-08',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning', 'Parking', 'Modern Design'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'pune-3',
    title: 'Spacious Flat in Pune',
    description: 'Large flat with excellent amenities in a great location.',
    price: 3189,
    rating: 4.91,
    reviewCount: 134,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Pune', country: 'India', coordinates: [18.5204, 73.8567] },
    host: {
      id: 'host-pune-3',
      name: 'Rajesh Kulkarni',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-03-15',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Gym', 'Parking'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'pune-4',
    title: 'Premium Apartment in Pune City',
    description: 'High-end apartment with luxury amenities.',
    price: 3023,
    rating: 5.0,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Pune City', country: 'India', coordinates: [18.5204, 73.8567] },
    host: {
      id: 'host-pune-4',
      name: 'Priya Deshmukh',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-09-22',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Luxury', 'Pool', 'Concierge'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: false
  },
  {
    id: 'pune-5',
    title: 'Comfortable Flat in Pune City',
    description: 'Well-appointed flat with modern conveniences.',
    price: 2722,
    rating: 4.9,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Pune City', country: 'India', coordinates: [18.5204, 73.8567] },
    host: {
      id: 'host-pune-5',
      name: 'Vikram Sharma',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-02-14',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning', 'Parking'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'pune-6',
    title: 'Executive Flat in Pune City',
    description: 'Perfect for business travelers with workspace and amenities.',
    price: 2511,
    rating: 4.92,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Pune City', country: 'India', coordinates: [18.5204, 73.8567] },
    host: {
      id: 'host-pune-6',
      name: 'Anita Rao',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-08-30',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Gym', 'Business Center'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'pune-7',
    title: 'Cozy Room in Pune City',
    description: 'Simple and comfortable room for budget-conscious travelers.',
    price: 1427,
    rating: 4.94,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Pune City', country: 'India', coordinates: [18.5204, 73.8567] },
    host: {
      id: 'host-pune-7',
      name: 'Ravi Patil',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-12-18',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Budget Friendly', 'Central Location'],
    propertyType: 'Room',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'pune-8',
    title: 'Guest Suite in Pune City',
    description: 'Private guest suite with separate entrance and amenities.',
    price: 2568,
    rating: 4.79,
    reviewCount: 78,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Pune City', country: 'India', coordinates: [18.5204, 73.8567] },
    host: {
      id: 'host-pune-8',
      name: 'Sunita Kulkarni',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-05-25',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Private Entrance', 'Garden', 'Parking'],
    propertyType: 'Guest suite',
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },

  // GURGAON PROPERTIES (20 properties)
  {
    id: 'gurgaon-1',
    title: 'Premium Flat in Gurugram',
    description: 'High-end flat in the business district of Gurugram with modern amenities.',
    price: 3709,
    rating: 4.99,
    reviewCount: 134,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Gurugram', country: 'India', coordinates: [28.4595, 77.0266] },
    host: {
      id: 'host-ggn-1',
      name: 'Rohit Sharma',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-12-10',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Gym', 'Pool', 'Business District'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'gurgaon-2',
    title: 'Modern Flat in Gurugram',
    description: 'Contemporary flat with excellent connectivity to business hubs.',
    price: 2650,
    rating: 4.82,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Gurugram', country: 'India', coordinates: [28.4595, 77.0266] },
    host: {
      id: 'host-ggn-2',
      name: 'Priya Singh',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-04-22',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Metro Access', 'Parking', 'Modern'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'gurgaon-3',
    title: 'Executive Flat in Gurugram',
    description: 'Perfect for business executives with premium amenities.',
    price: 3311,
    rating: 4.96,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Gurugram', country: 'India', coordinates: [28.4595, 77.0266] },
    host: {
      id: 'host-ggn-3',
      name: 'Vikram Gupta',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-09-15',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Gym', 'Concierge'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'gurgaon-4',
    title: 'Comfortable Flat in Gurugram',
    description: 'Well-appointed flat with modern conveniences.',
    price: 2853,
    rating: 4.96,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Gurugram', country: 'India', coordinates: [28.4595, 77.0266] },
    host: {
      id: 'host-ggn-4',
      name: 'Neha Agarwal',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-11-08',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Air Conditioning', 'Parking', 'Security'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'gurgaon-5',
    title: 'Luxury Flat in Gurugram',
    description: 'Premium accommodation with top-tier amenities.',
    price: 2499,
    rating: 5.0,
    reviewCount: 78,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Gurugram', country: 'India', coordinates: [28.4595, 77.0266] },
    host: {
      id: 'host-ggn-5',
      name: 'Rajesh Kumar',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-06-20',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Spa', 'Luxury'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'gurgaon-6',
    title: 'Budget Room in Gurugram',
    description: 'Affordable room option in Gurugram with basic amenities.',
    price: 1427,
    rating: 4.83,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Gurugram', country: 'India', coordinates: [28.4595, 77.0266] },
    host: {
      id: 'host-ggn-6',
      name: 'Kavita Singh',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-01-25',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    propertyType: 'Room',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'gurgaon-7',
    title: 'Corporate Flat in Gurugram',
    description: 'Ideal for corporate stays with business amenities.',
    price: 2293,
    rating: 4.93,
    reviewCount: 134,
    images: [
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Gurugram', country: 'India', coordinates: [28.4595, 77.0266] },
    host: {
      id: 'host-ggn-7',
      name: 'Amit Verma',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-12-12',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Business Center', 'Parking'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'gurgaon-8',
    title: 'Family Flat in Gurugram',
    description: 'Spacious flat perfect for families visiting Gurugram.',
    price: 1949,
    rating: 4.84,
    reviewCount: 67,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Gurugram', country: 'India', coordinates: [28.4595, 77.0266] },
    host: {
      id: 'host-ggn-8',
      name: 'Sunita Sharma',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-08-30',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Family Friendly', 'Parking', 'Security'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },

  // NORTH GOA PROPERTIES (25 properties)
  {
    id: 'goa-north-1',
    title: 'Beach Flat in Arpora',
    description: 'Beautiful flat near Arpora beach with easy access to nightlife and restaurants.',
    price: 2968,
    rating: 4.9,
    reviewCount: 112,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Arpora', country: 'India', coordinates: [15.5937, 73.7516] },
    host: {
      id: 'host-goa-north-1',
      name: 'John Pereira',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-03-22',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Access', 'Pool', 'Nightlife'],
    propertyType: 'Flat',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-north-2',
    title: 'Beachside Apartment in Siolim',
    description: 'Peaceful apartment in scenic Siolim with river and beach access.',
    price: 1975,
    rating: 4.85,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Siolim', country: 'India', coordinates: [15.5937, 73.7516] },
    host: {
      id: 'host-goa-north-2',
      name: 'Maria Santos',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-06-15',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'River View', 'Beach Access', 'Peaceful'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: false
  },
  {
    id: 'goa-north-3',
    title: 'Party Flat in Goa',
    description: 'Perfect location for party lovers with easy access to clubs and beaches.',
    price: 2516,
    rating: 4.81,
    reviewCount: 156,
    images: [
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Goa', country: 'India', coordinates: [15.2993, 74.1240] },
    host: {
      id: 'host-goa-north-3',
      name: 'Alex D\'Silva',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2020-01-10',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Party Location', 'Beach Access', 'Nightlife'],
    propertyType: 'Flat',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-north-4',
    title: 'Luxury Flat in Siolim',
    description: 'Premium flat with stunning views and luxury amenities.',
    price: 8445,
    rating: 5.0,
    reviewCount: 45,
    images: [
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2459317/pexels-photo-2459317.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Siolim', country: 'India', coordinates: [15.5937, 73.7516] },
    host: {
      id: 'host-goa-north-4',
      name: 'Isabella Fernandes',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-09-14',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Luxury', 'Pool', 'River View'],
    propertyType: 'Flat',
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 4,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-north-5',
    title: 'Beach Apartment in Calangute',
    description: 'Popular beach location with easy access to water sports and restaurants.',
    price: 2430,
    rating: 4.98,
    reviewCount: 134,
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Calangute', country: 'India', coordinates: [15.5437, 73.7516] },
    host: {
      id: 'host-goa-north-5',
      name: 'Peter Gomes',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-11-25',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Access', 'Water Sports', 'Restaurants'],
    propertyType: 'Apartment',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-north-6',
    title: 'Luxury Apartment in Vagator',
    description: 'Premium apartment with stunning views in the scenic Vagator area.',
    price: 4499,
    rating: 5.0,
    reviewCount: 45,
    images: [
      'https://images.pexels.com/photos/2459317/pexels-photo-2459317.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Vagator', country: 'India', coordinates: [15.5937, 73.7516] },
    host: {
      id: 'host-goa-north-6',
      name: 'Sophia Rodrigues',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2017-09-14',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Sea View', 'Pool', 'Luxury'],
    propertyType: 'Apartment',
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-north-7',
    title: 'Peaceful Apartment in Siolim',
    description: 'Quiet retreat away from crowds but close to beaches.',
    price: 2118,
    rating: 4.86,
    reviewCount: 78,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Siolim', country: 'India', coordinates: [15.5937, 73.7516] },
    host: {
      id: 'host-goa-north-7',
      name: 'Antonio Silva',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2019-04-18',
      isSuperhost: false
    },
    amenities: ['WiFi', 'Kitchen', 'Peaceful', 'Garden', 'Beach Access'],
    propertyType: 'Apartment',
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    isInstantBook: true,
    isGuestFavourite: true
  },
  {
    id: 'goa-north-8',
    title: 'Beach Cabin in Calangute',
    description: 'Unique cabin experience right on the beach.',
    price: 3550,
    rating: 4.92,
    reviewCount: 89,
    images: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    location: { city: 'Calangute', country: 'India', coordinates: [15.5437, 73.7516] },
    host: {
      id: 'host-goa-north-8',
      name: 'Carlos Pereira',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      joinedDate: '2018-08-20',
      isSuperhost: true
    },
    amenities: ['WiFi', 'Kitchen', 'Beach Front', 'Unique', 'Romantic'],
    propertyType: 'Cabin',
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    isInstantBook: true,
    isGuestFavourite: true
  }
];

export const mockReviews: Review[] = [
  {
    id: 'review-1',
    propertyId: '1',
    userId: 'user-1',
    userName: 'David Thompson',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Absolutely incredible stay! The ocean views were breathtaking and Sarah was an amazing host. The villa exceeded all our expectations.',
    date: '2024-01-15'
  },
  {
    id: 'review-2',
    propertyId: '1',
    userId: 'user-2',
    userName: 'Lisa Chang',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Perfect location for a family vacation. The kids loved the pool and beach access. Highly recommend!',
    date: '2024-01-10'
  },
  {
    id: 'review-3',
    propertyId: '2',
    userId: 'user-3',
    userName: 'Robert Kim',
    userAvatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'The perfect mountain retreat! Peaceful, clean, and exactly what we needed to disconnect from city life.',
    date: '2024-01-12'
  }
];