export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  location: {
    city: string;
    country: string;
    coordinates: [number, number];
  };
  host: {
    id: string;
    name: string;
    avatar: string;
    joinedDate: string;
    isSuperhost: boolean;
  };
  amenities: string[];
  propertyType: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  isInstantBook: boolean;
  isGuestFavourite?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinedDate: string;
  isHost: boolean;
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface SearchFilters {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  adults: number;
  children: number;
  infants: number;
  pets: number;
  priceMin: number;
  priceMax: number;
  propertyType: string;
  amenities: string[];
}