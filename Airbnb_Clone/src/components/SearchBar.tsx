import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

const SearchBar: React.FC = () => {
  const { searchFilters, setSearchFilters } = useApp();
  const navigate = useNavigate();
  const [activeField, setActiveField] = useState<string | null>(null);
  const [dateMode, setDateMode] = useState<'dates' | 'months' | 'flexible'>('dates');
  const [flexibleDuration, setFlexibleDuration] = useState<'weekend' | 'week' | 'month'>('weekend');
  const [selectedMonth, setSelectedMonth] = useState(7); // July = 7
  const [currentCalendarMonth, setCurrentCalendarMonth] = useState(new Date(2025, 6)); // July 2025
  const [selectedDates, setSelectedDates] = useState<{ checkIn: Date | null; checkOut: Date | null }>({
    checkIn: null,
    checkOut: null
  });
  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0
  });

  const handleSearch = () => {
    navigate('/search');
    setActiveField(null);
  };

  const handleLocationChange = (value: string) => {
    setSearchFilters({ ...searchFilters, location: value });
  };

  const updateGuestCount = (type: keyof GuestCounts, increment: boolean) => {
    setGuestCounts(prev => {
      const newCounts = { ...prev };
      if (increment) {
        newCounts[type] += 1;
      } else {
        newCounts[type] = Math.max(0, newCounts[type] - 1);
        if (type === 'adults' && newCounts[type] === 0) {
          newCounts[type] = 1;
        }
      }
      
      const totalGuests = newCounts.adults + newCounts.children;
      setSearchFilters({ ...searchFilters, guests: totalGuests });
      
      return newCounts;
    });
  };

  const getTotalGuests = () => {
    return guestCounts.adults + guestCounts.children;
  };

  const getGuestText = () => {
    const total = getTotalGuests();
    const parts = [];
    
    if (total > 0) {
      parts.push(`${total} guest${total > 1 ? 's' : ''}`);
    }
    
    if (guestCounts.infants > 0) {
      parts.push(`${guestCounts.infants} infant${guestCounts.infants > 1 ? 's' : ''}`);
    }
    
    if (guestCounts.pets > 0) {
      parts.push(`${guestCounts.pets} pet${guestCounts.pets > 1 ? 's' : ''}`);
    }
    
    return parts.length > 0 ? parts.join(', ') : 'Add guests';
  };

  const getDateText = (type: 'checkin' | 'checkout') => {
    if (dateMode === 'flexible') {
      if (type === 'checkin') {
        return flexibleDuration === 'weekend' ? 'Weekend' : 
               flexibleDuration === 'week' ? 'Week' : 'Month';
      } else {
        return 'Flexible';
      }
    }
    
    if (dateMode === 'months') {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      if (type === 'checkin') {
        return `${monthNames[selectedMonth - 1]} 2025`;
      } else {
        return 'Flexible';
      }
    }
    
    // Dates mode
    if (selectedDates.checkIn && type === 'checkin') {
      return selectedDates.checkIn.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    if (selectedDates.checkOut && type === 'checkout') {
      return selectedDates.checkOut.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    
    return 'Add dates';
  };

  const renderCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    return (
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-center mb-4">
          {monthNames[month]} {year}
        </h3>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="text-center text-xs font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const isCurrentMonth = day.getMonth() === month;
            const isToday = day.toDateString() === new Date().toDateString();
            const isSelected = selectedDates.checkIn?.toDateString() === day.toDateString() || 
                              selectedDates.checkOut?.toDateString() === day.toDateString();
            
            return (
              <button
                key={index}
                onClick={() => {
                  if (!selectedDates.checkIn || (selectedDates.checkIn && selectedDates.checkOut)) {
                    setSelectedDates({ checkIn: day, checkOut: null });
                  } else if (day > selectedDates.checkIn) {
                    setSelectedDates({ ...selectedDates, checkOut: day });
                  } else {
                    setSelectedDates({ checkIn: day, checkOut: null });
                  }
                }}
                className={`h-10 w-10 rounded-full text-sm transition-colors ${
                  !isCurrentMonth 
                    ? 'text-gray-300' 
                    : isSelected
                    ? 'bg-gray-900 text-white'
                    : isToday
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
                disabled={!isCurrentMonth}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const nextMonth = () => {
    setCurrentCalendarMonth(new Date(currentCalendarMonth.getFullYear(), currentCalendarMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentCalendarMonth(new Date(currentCalendarMonth.getFullYear(), currentCalendarMonth.getMonth() - 1));
  };

  const months = [
    { name: 'July', number: 7, year: 2025 },
    { name: 'August', number: 8, year: 2025 },
    { name: 'September', number: 9, year: 2025 },
    { name: 'October', number: 10, year: 2025 },
    { name: 'November', number: 11, year: 2025 },
    { name: 'December', number: 12, year: 2025 }
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Mobile Search Bar */}
      <div className="block md:hidden">
        <button 
          onClick={() => setActiveField('mobile-search')}
          className="w-full bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow p-4"
        >
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-gray-400" />
            <div className="flex-1 text-left">
              <div className="text-sm font-medium text-gray-900">Where to?</div>
              <div className="text-xs text-gray-500">Anywhere • Any week • Add guests</div>
            </div>
          </div>
        </button>

        {/* Mobile Search Modal */}
        {activeField === 'mobile-search' && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={() => setActiveField(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h2 className="text-lg font-semibold">Search</h2>
                <div></div>
              </div>

              <div className="space-y-6">
                {/* Where */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Where</label>
                  <input
                    type="text"
                    placeholder="Search destinations"
                    value={searchFilters.location}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                  />
                </div>

                {/* When */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">When</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                    />
                    <input
                      type="date"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Who */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Who</label>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Adults</div>
                        <div className="text-sm text-gray-500">Ages 13 or above</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateGuestCount('adults', false)}
                          disabled={guestCounts.adults <= 1}
                          className={`w-8 h-8 border rounded-full flex items-center justify-center ${
                            guestCounts.adults <= 1
                              ? 'border-gray-200 text-gray-300'
                              : 'border-gray-400 text-gray-600 hover:border-gray-600'
                          }`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-medium">{guestCounts.adults}</span>
                        <button
                          onClick={() => updateGuestCount('adults', true)}
                          className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSearch}
                  className="w-full bg-[#FF5A5F] text-white py-4 rounded-lg font-medium hover:bg-[#E54850] transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow">
        {/* Where */}
        <div 
          className={`flex-1 px-8 py-4 rounded-full cursor-pointer ${
            activeField === 'location' ? 'bg-white shadow-lg' : 'hover:bg-gray-50'
          }`}
          onClick={() => setActiveField(activeField === 'location' ? null : 'location')}
        >
          <div className="text-xs font-semibold text-gray-900 mb-1">Where</div>
          <input
            type="text"
            placeholder="Search destinations"
            value={searchFilters.location}
            onChange={(e) => handleLocationChange(e.target.value)}
            className="w-full text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
          />
        </div>

        <div className="w-px h-8 bg-gray-200" />

        {/* Check in */}
        <div 
          className={`flex-1 px-8 py-4 rounded-full cursor-pointer ${
            activeField === 'checkin' ? 'bg-white shadow-lg' : 'hover:bg-gray-50'
          }`}
          onClick={() => setActiveField(activeField === 'checkin' ? null : 'checkin')}
        >
          <div className="text-xs font-semibold text-gray-900 mb-1">Check in</div>
          <div className="text-sm text-gray-400">{getDateText('checkin')}</div>
        </div>

        <div className="w-px h-8 bg-gray-200" />

        {/* Check out */}
        <div 
          className={`flex-1 px-8 py-4 rounded-full cursor-pointer ${
            activeField === 'checkout' ? 'bg-white shadow-lg' : 'hover:bg-gray-50'
          }`}
          onClick={() => setActiveField(activeField === 'checkout' ? null : 'checkout')}
        >
          <div className="text-xs font-semibold text-gray-900 mb-1">Check out</div>
          <div className="text-sm text-gray-400">{getDateText('checkout')}</div>
        </div>

        <div className="w-px h-8 bg-gray-200" />

        {/* Who */}
        <div 
          className={`flex-1 px-8 py-4 rounded-full cursor-pointer ${
            activeField === 'guests' ? 'bg-white shadow-lg' : 'hover:bg-gray-50'
          }`}
          onClick={() => setActiveField(activeField === 'guests' ? null : 'guests')}
        >
          <div className="text-xs font-semibold text-gray-900 mb-1">Who</div>
          <div className="text-sm text-gray-400">{getGuestText()}</div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="mr-2 p-4 bg-[#FF5A5F] text-white rounded-full hover:bg-[#E54850] transition-colors"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>

      {/* Date Picker Dropdown */}
      {(activeField === 'checkin' || activeField === 'checkout') && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-3xl shadow-xl p-8 z-50">
          {/* Date Mode Tabs */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setDateMode('dates')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  dateMode === 'dates' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Dates
              </button>
              <button
                onClick={() => setDateMode('months')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  dateMode === 'months' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Months
              </button>
              <button
                onClick={() => setDateMode('flexible')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  dateMode === 'flexible' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Flexible
              </button>
            </div>
          </div>

          {/* Dates Mode - Calendar */}
          {dateMode === 'dates' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex gap-12">
                {renderCalendar(currentCalendarMonth)}
                {renderCalendar(new Date(currentCalendarMonth.getFullYear(), currentCalendarMonth.getMonth() + 1))}
              </div>
              
              {/* Quick date options */}
              <div className="flex items-center justify-center space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button className="px-4 py-2 border border-gray-900 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                  Exact dates
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-gray-400 transition-colors">
                  ± 1 day
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-gray-400 transition-colors">
                  ± 2 days
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-gray-400 transition-colors">
                  ± 3 days
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-gray-400 transition-colors">
                  ± 7 days
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-gray-400 transition-colors">
                  ± 14 days
                </button>
              </div>
            </div>
          )}

          {/* Months Mode */}
          {dateMode === 'months' && (
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">When's your trip?</h3>
              
              {/* Circular month selector */}
              <div className="relative w-80 h-80 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-100 to-red-100"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">1</div>
                    <div className="text-sm text-gray-600">month</div>
                  </div>
                </div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
              </div>
              
              <div className="text-lg font-medium text-gray-900 mb-8">
                <span className="border-b-2 border-gray-900 pb-1">Fri, Aug 1</span>
                <span className="mx-4">to</span>
                <span className="border-b-2 border-gray-900 pb-1">Mon, Sep 1</span>
              </div>
            </div>
          )}

          {/* Flexible Mode */}
          {dateMode === 'flexible' && (
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-8">How long would you like to stay?</h3>
              
              {/* Duration options */}
              <div className="flex items-center justify-center space-x-4 mb-12">
                <button
                  onClick={() => setFlexibleDuration('weekend')}
                  className={`px-6 py-3 rounded-full border transition-colors ${
                    flexibleDuration === 'weekend'
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  Weekend
                </button>
                <button
                  onClick={() => setFlexibleDuration('week')}
                  className={`px-6 py-3 rounded-full border transition-colors ${
                    flexibleDuration === 'week'
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setFlexibleDuration('month')}
                  className={`px-6 py-3 rounded-full border transition-colors ${
                    flexibleDuration === 'month'
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  Month
                </button>
              </div>
              
              <h4 className="text-xl font-semibold mb-8">When do you want to go?</h4>
              
              {/* Month grid */}
              <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
                {months.map((month, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMonth(month.number)}
                    className={`p-6 border rounded-2xl transition-colors ${
                      selectedMonth === month.number
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Calendar className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                    <div className="font-medium text-gray-900">{month.name}</div>
                    <div className="text-sm text-gray-500">{month.year}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Guests Dropdown */}
      {activeField === 'guests' && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 z-50">
          <div className="space-y-6">
            {/* Adults */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Adults</div>
                <div className="text-sm text-gray-500">Ages 13 or above</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateGuestCount('adults', false)}
                  disabled={guestCounts.adults <= 1}
                  className={`w-8 h-8 border rounded-full flex items-center justify-center transition-colors ${
                    guestCounts.adults <= 1
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-400 text-gray-600 hover:border-gray-600'
                  }`}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-8 text-center font-medium">{guestCounts.adults}</span>
                <button
                  onClick={() => updateGuestCount('adults', true)}
                  className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-600 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Children</div>
                <div className="text-sm text-gray-500">Ages 2–12</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateGuestCount('children', false)}
                  disabled={guestCounts.children <= 0}
                  className={`w-8 h-8 border rounded-full flex items-center justify-center transition-colors ${
                    guestCounts.children <= 0
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-400 text-gray-600 hover:border-gray-600'
                  }`}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-8 text-center font-medium">{guestCounts.children}</span>
                <button
                  onClick={() => updateGuestCount('children', true)}
                  className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-600 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Infants */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Infants</div>
                <div className="text-sm text-gray-500">Under 2</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateGuestCount('infants', false)}
                  disabled={guestCounts.infants <= 0}
                  className={`w-8 h-8 border rounded-full flex items-center justify-center transition-colors ${
                    guestCounts.infants <= 0
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-400 text-gray-600 hover:border-gray-600'
                  }`}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-8 text-center font-medium">{guestCounts.infants}</span>
                <button
                  onClick={() => updateGuestCount('infants', true)}
                  className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-600 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Pets */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Pets</div>
                <div className="text-sm text-gray-500">
                  <button className="text-gray-500 underline hover:text-gray-700">
                    Bringing a service animal?
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateGuestCount('pets', false)}
                  disabled={guestCounts.pets <= 0}
                  className={`w-8 h-8 border rounded-full flex items-center justify-center transition-colors ${
                    guestCounts.pets <= 0
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-400 text-gray-600 hover:border-gray-600'
                  }`}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-8 text-center font-medium">{guestCounts.pets}</span>
                <button
                  onClick={() => updateGuestCount('pets', true)}
                  className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-600 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;