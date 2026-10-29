import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AtmosphereSection } from './components/AtmosphereSection';
import { StorySection } from './components/StorySection';
import { FamilySection } from './components/FamilySection';
import { MenuSection } from './components/MenuSection';
import { LiveJazzSchedule } from './components/LiveJazzSchedule';
import { DeskBookingSection } from './components/DeskBookingSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { DeskBookingModal } from './components/DeskBookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ff6b00] selection:text-black font-sans relative">
      
      {/* Global Miriam Makeba Wallpaper Pattern filling black background spaces across the entire website */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none z-0 opacity-22 bg-makeba-pattern" 
      />

      <div className="relative z-10 pb-16 md:pb-0">
        {/* Navigation Top Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        <main>
          {/* Hero with Isolated Signature & Potjie Dining Room Background */}
          <Hero onOpenBooking={handleOpenBooking} />

          {/* Inside Atmosphere: Authentic Candlelit Interior, Chalkboard Lyrics & Vibe */}
          <AtmosphereSection onOpenBooking={handleOpenBooking} />

          {/* The Story of Pata Pata & Miriam Makeba & Sophiatown Heritage */}
          <StorySection />

          {/* The Pata Pata Family: Head Chef & Servers Dedicated to Your Best Experience */}
          <FamilySection />

          {/* Online Menu with Traditional African Staples & Categories */}
          <MenuSection onOpenBooking={handleOpenBooking} />

          {/* Weekend Live Afro-Jazz Sessions */}
          <LiveJazzSchedule onOpenBooking={handleOpenBooking} />

          {/* Dedicated Desk Reservation Section */}
          <DeskBookingSection />

          {/* Fox Street Location, Timetable & Neighborhood Landmarks */}
          <LocationAndHours onOpenBooking={handleOpenBooking} />
        </main>

        {/* Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* One-Tap Desk Booking Call Modal */}
        <DeskBookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
        />

        {/* Mobile-Only Sticky Bottom Quick Bar: 1-Tap Desk Call & Menu (Height < 10% viewport) */}
        <aside aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/92 backdrop-blur-lg border-t border-amber-500/30 px-3 py-2 flex items-center justify-between gap-2 shadow-[0_-5px_20px_rgba(0,0,0,0.8)] pb-safe">
          <a
            href="tel:+27113340470"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-md"
          >
            <span className="truncate">Call Desk (+27 11 334 0470)</span>
          </a>
          
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-zinc-900 border border-amber-500/40 text-amber-300 font-bold text-xs whitespace-nowrap hover:bg-zinc-800"
          >
            <span>Menu</span>
          </a>
        </aside>

      </div>
    </div>
  );
}
