import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Utensils, Music, BookOpen, Compass, MapPin } from 'lucide-react';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from './SocialIcons';
import { AfricanContinentSVG } from './AfricanMotifs';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/story', label: 'Our Story' },
    { to: '/atmosphere', label: 'Atmosphere' },
    { to: '/jazz', label: 'Live Jazz' },
    { to: '/location', label: 'Location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        
        {/* Zone 1: User Logo (Black text on clean white background) */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-lg py-1"
          aria-label="Pata Pata Home"
        >
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_3.44.31_AM_78ac61fd.jpg"
            alt="PATAPATA - SA Cuisine • Bar • Live Music"
            className="h-9 sm:h-12 w-auto object-contain"
            loading="eager"
          />
          <span className="hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 border border-dashed border-stone-300 rounded text-[9px] font-typewriter uppercase tracking-widest text-stone-600 bg-stone-50">
            <AfricanContinentSVG className="w-3.5 h-3.5 text-stone-900" showJoburgStar={true} />
            <span>EST. 1967 · KOFIFI SOUL</span>
          </span>
        </Link>

        {/* Zone 2: Clean single-line text links with simple black active underlines */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={`whitespace-nowrap transition-colors py-1 relative ${
                  isActive 
                    ? 'text-black font-bold' 
                    : 'text-stone-600 hover:text-black'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Zone 3: Social Links & Primary Desk Booking CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Social links (Instagram & TikTok) */}
          <div className="hidden xl:flex items-center gap-1 border-r border-stone-200 pr-3 mr-1">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-stone-500 hover:text-black hover:bg-stone-100 transition-colors"
              title="Instagram @pata.pata_maboneng"
              aria-label="Instagram @pata.pata_maboneng"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-stone-500 hover:text-black hover:bg-stone-100 transition-colors"
              title="TikTok @pata.pata_maboneng"
              aria-label="TikTok @pata.pata_maboneng"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-stone-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-black active:scale-95 transition-all shadow-sm whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 fill-white" />
            <span className="hidden sm:inline">Call Desk to Book</span>
            <span className="sm:hidden">Call Desk</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-stone-100 border border-stone-300 text-stone-800 hover:text-black hover:bg-stone-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-white px-5 py-5 space-y-3 shadow-lg">
          <nav className="flex flex-col gap-1 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/' 
                  ? 'bg-stone-100 text-black font-bold' 
                  : 'text-stone-700 hover:text-black hover:bg-stone-50'
              }`}
            >
              <span>Home Overview</span>
            </Link>

            <Link
              to="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/menu' 
                  ? 'bg-stone-100 text-black font-bold' 
                  : 'text-stone-700 hover:text-black hover:bg-stone-50'
              }`}
            >
              <Utensils className="w-4 h-4 text-stone-500" />
              <span>Online Menu & Specials</span>
            </Link>

            <Link
              to="/story"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/story' 
                  ? 'bg-stone-100 text-black font-bold' 
                  : 'text-stone-700 hover:text-black hover:bg-stone-50'
              }`}
            >
              <BookOpen className="w-4 h-4 text-stone-500" />
              <span>Our Story & Miriam Makeba</span>
            </Link>

            <Link
              to="/atmosphere"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/atmosphere' 
                  ? 'bg-stone-100 text-black font-bold' 
                  : 'text-stone-700 hover:text-black hover:bg-stone-50'
              }`}
            >
              <Compass className="w-4 h-4 text-stone-500" />
              <span>Inside Atmosphere & Photos</span>
            </Link>

            <Link
              to="/jazz"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/jazz' 
                  ? 'bg-stone-100 text-black font-bold' 
                  : 'text-stone-700 hover:text-black hover:bg-stone-50'
              }`}
            >
              <Music className="w-4 h-4 text-stone-500" />
              <span>Weekend Live Jazz Bandstand</span>
            </Link>

            <Link
              to="/location"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/location' 
                  ? 'bg-stone-100 text-black font-bold' 
                  : 'text-stone-700 hover:text-black hover:bg-stone-50'
              }`}
            >
              <MapPin className="w-4 h-4 text-stone-500" />
              <span>286 Fox Street Location & Hours</span>
            </Link>
          </nav>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-stone-900 text-white font-semibold text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Front Desk (+27 11 334 0470)</span>
            </button>

            <div className="flex items-center justify-center gap-3 pt-1 text-xs text-stone-600">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black underline"
              >
                Instagram {SOCIAL_LINKS.handle}
              </a>
              <span>·</span>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black underline"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
