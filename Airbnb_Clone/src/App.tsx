import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import Search from './pages/Search';
import PropertyDetail from './pages/PropertyDetail';
import Profile from './pages/Profile';
import HostDashboard from './pages/HostDashboard';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import CompanyDetails from './pages/CompanyDetails';
import HelpCentre from './pages/HelpCentre';
import AirCover from './pages/AirCover';
import HostingResources from './pages/HostingResources';
import CommunityForum from './pages/CommunityForum';
import Experiences from './pages/Experiences';
import ExperienceDetail from './pages/ExperienceDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <AuthModal />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/host" element={<HostDashboard />} />
              <Route path="/trips" element={<Profile />} />
              <Route path="/wishlists" element={<Profile />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/experience/:id" element={<ExperienceDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/company-details" element={<CompanyDetails />} />
              <Route path="/help" element={<HelpCentre />} />
              <Route path="/aircover" element={<AirCover />} />
              <Route path="/hosting-resources" element={<HostingResources />} />
              <Route path="/community" element={<CommunityForum />} />
              
              {/* Additional support pages */}
              <Route path="/anti-discrimination" element={<HelpCentre />} />
              <Route path="/disability-support" element={<HelpCentre />} />
              <Route path="/cancellation-options" element={<HelpCentre />} />
              <Route path="/report-concern" element={<HelpCentre />} />
              
              {/* Hosting pages */}
              <Route path="/host-experience" element={<HostDashboard />} />
              <Route path="/host-service" element={<HostDashboard />} />
              <Route path="/aircover-hosts" element={<AirCover />} />
              <Route path="/hosting-responsibly" element={<HostingResources />} />
              <Route path="/hosting-class" element={<HostingResources />} />
              <Route path="/co-host" element={<HostingResources />} />
              
              {/* Company pages */}
              <Route path="/summer-release" element={<HelpCentre />} />
              <Route path="/newsroom" element={<HelpCentre />} />
              <Route path="/careers" element={<HelpCentre />} />
              <Route path="/investors" element={<HelpCentre />} />
              <Route path="/emergency-stays" element={<HelpCentre />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;