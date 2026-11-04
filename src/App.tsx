import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { Home, Utensils, Music, BookOpen, Phone, Compass, MapPin } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DeskBookingModal } from './components/DeskBookingModal';
import { ScrollToTop } from './components/ScrollToTop';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { StoryPage } from './pages/StoryPage';
import { AtmospherePage } from './pages/AtmospherePage';
import { JazzPage } from './pages/JazzPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { LocationPage } from './pages/LocationPage';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <div className="min-h-screen bg-white text-stone-900 selection:bg-stone-900 selection:text-white font-sans relative flex flex-col">
        {/* Navigation Top Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Page Routing */}
        <main className="flex-1 pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/menu" element={<MenuPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/story" element={<StoryPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/atmosphere" element={<AtmospherePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/jazz" element={<JazzPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/location" element={<LocationPage onOpenBooking={handleOpenBooking} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* One-Tap Desk Booking Call Modal */}
        <DeskBookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
        />

        {/* Mobile-Only Ergonomic Bottom Tab Bar (Clean white background, black text, min 44px hitboxes) */}
        <nav 
          aria-label="Mobile Bottom Navigation" 
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-stone-200 px-2 py-1 shadow-md pb-safe"
        >
          <div className="grid grid-cols-5 items-center h-14">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-h-[44px] rounded-lg transition-colors ${
                  isActive ? 'text-black font-bold' : 'text-stone-500 hover:text-black'
                }`
              }
            >
              <Home className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] tracking-tight">Home</span>
            </NavLink>

            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-h-[44px] rounded-lg transition-colors ${
                  isActive ? 'text-black font-bold' : 'text-stone-500 hover:text-black'
                }`
              }
            >
              <Utensils className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] tracking-tight">Menu</span>
            </NavLink>

            <NavLink
              to="/jazz"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-h-[44px] rounded-lg transition-colors ${
                  isActive ? 'text-black font-bold' : 'text-stone-500 hover:text-black'
                }`
              }
            >
              <Music className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] tracking-tight">Live Jazz</span>
            </NavLink>

            <NavLink
              to="/atmosphere"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-h-[44px] rounded-lg transition-colors ${
                  isActive ? 'text-black font-bold' : 'text-stone-500 hover:text-black'
                }`
              }
            >
              <Compass className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] tracking-tight">Vibe</span>
            </NavLink>

            <button
              type="button"
              onClick={handleOpenBooking}
              className="flex flex-col items-center justify-center min-h-[44px] rounded-lg text-stone-700 hover:text-black transition-colors"
              aria-label="Call Frontline Desk"
            >
              <div className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center mb-0.5 shadow-sm">
                <Phone className="w-3.5 h-3.5 fill-white" />
              </div>
              <span className="text-[10px] font-bold tracking-tight text-stone-900">Call Desk</span>
            </button>
          </div>
        </nav>

      </div>
    </BrowserRouter>
  );
}
