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

      <div className="relative z-10">
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
      </div>
    </div>
  );
}
