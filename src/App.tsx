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
      
      <div className="min-h-screen bg-black text-white selection:bg-[#ff6b00] selection:text-black font-sans relative">
        
        {/* Global Miriam Makeba Wallpaper Pattern filling black background spaces across all pages */}
        <div 
          aria-hidden="true" 
          className="fixed inset-0 pointer-events-none z-0 opacity-22 bg-makeba-pattern" 
        />

        <div className="relative z-10 pb-20 md:pb-0 flex flex-col min-h-screen">
          {/* Navigation Top Bar */}
          <Navbar onOpenBooking={handleOpenBooking} />

          {/* Page Routing */}
          <main className="flex-1">
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

          {/* Mobile-Only Ergonomic Bottom Tab Bar (< 10% viewport height, min 44px hitboxes) */}
          <nav 
            aria-label="Mobile Bottom Navigation" 
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-xl border-t border-amber-950/60 px-2 py-1 shadow-[0_-8px_25px_rgba(0,0,0,0.9)] pb-safe"
          >
            <div className="grid grid-cols-5 items-center h-14">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center min-h-[44px] rounded-lg transition-colors ${
                    isActive ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
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
                    isActive ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
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
                    isActive ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
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
                    isActive ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
                  }`
                }
              >
                <Compass className="w-5 h-5 mb-0.5" />
                <span className="text-[10px] tracking-tight">Vibe</span>
              </NavLink>

              <button
                type="button"
                onClick={handleOpenBooking}
                className="flex flex-col items-center justify-center min-h-[44px] rounded-lg text-amber-300 hover:text-white transition-colors"
                aria-label="Call Frontline Desk"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black flex items-center justify-center mb-0.5 shadow-sm">
                  <Phone className="w-3.5 h-3.5 fill-black" />
                </div>
                <span className="text-[10px] font-bold tracking-tight text-amber-300">Call Desk</span>
              </button>
            </div>
          </nav>

        </div>
      </div>
    </BrowserRouter>
  );
}
