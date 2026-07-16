import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Property, SearchFilters } from '../types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  searchFilters: SearchFilters;
  setSearchFilters: (filters: SearchFilters) => void;
  favorites: string[];
  toggleFavorite: (propertyId: string) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  isSignupModalOpen: boolean;
  setIsSignupModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: '',
    checkIn: null,
    checkOut: null,
    guests: 1,
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
    priceMin: 0,
    priceMax: 1000,
    propertyType: '',
    amenities: []
  });

  const toggleFavorite = (propertyId: string) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      searchFilters,
      setSearchFilters,
      favorites,
      toggleFavorite,
      isLoginModalOpen,
      setIsLoginModalOpen,
      isSignupModalOpen,
      setIsSignupModalOpen
    }}>
      {children}
    </AppContext.Provider>
  );
};