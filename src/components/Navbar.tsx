import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Utensils, Music, BookOpen, Compass, Sparkles, MapPin } from 'lucide-react';
import { PataPataSignature } from './PataPataSignature';
import { CandleFlame } from './CandlelightVibe';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from './SocialIcons';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Online Menu' },
    { to: '/story', label: 'Our Story' },
    { to: '/atmosphere', label: 'Atmosphere' },
    { to: '/jazz', label: 'Live Jazz' },
    { to: '/location', label: 'Location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md border-b border-amber-950/40 transition-colors">
      {/* Top thin jazz flame accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400" />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-8 px-3 sm:px-6 lg:px-8 h-16 sm:h-20">
        
        {/* Zone 1: Pure Isolated Signature Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg py-1"
          aria-label="Pata Pata Home"
        >
          <div className="relative group-hover:scale-105 transition-transform duration-200">
            <PataPataSignature 
              className="h-8 xs:h-9 sm:h-11 md:h-12 w-auto text-white group-hover:text-amber-300 filter drop-shadow-[0_0_10px_rgba(255,107,0,0.4)]" 
              color="currentColor"
            />
          </div>

          <div className="hidden lg:flex flex-col border-l border-zinc-800 pl-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-amber-400 font-bold whitespace-nowrap">
              Maboneng · Fox St
            </span>
            <span className="text-[9px] tracking-wider uppercase text-zinc-500 font-medium whitespace-nowrap">
              Jazz & Heritage Dining
            </span>
          </div>
        </Link>

        {/* Zone 2: 4–6 single-line clean text links with warm hover / active underlines */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={`whitespace-nowrap transition-colors py-1 relative ${
                  isActive 
                    ? 'text-amber-400 font-bold' 
                    : 'text-zinc-300 hover:text-amber-400'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-[0_0_8px_#f59e0b]" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Zone 3: Social Links & Primary Desk Booking CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Social links (Instagram & TikTok) */}
          <div className="hidden xl:flex items-center gap-1.5 border-r border-zinc-800 pr-3 mr-1">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-amber-400 hover:bg-zinc-900/80 transition-colors"
              title="Instagram @pata.pata_maboneng"
              aria-label="Instagram @pata.pata_maboneng"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-amber-400 hover:bg-zinc-900/80 transition-colors"
              title="TikTok @pata.pata_maboneng"
              aria-label="TikTok @pata.pata_maboneng"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="hidden 2xl:flex items-center">
            <CandleFlame className="scale-75" />
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 xs:px-3 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_18px_rgba(245,158,11,0.4)] whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span className="hidden sm:inline">Call Desk to Book</span>
            <span className="sm:hidden">Call Desk</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-amber-900/40 text-amber-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-950 bg-black/95 px-5 py-6 space-y-4">
          <nav className="flex flex-col gap-2 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/' 
                  ? 'bg-amber-400/10 text-amber-400 font-bold border border-amber-500/30' 
                  : 'text-zinc-200 hover:text-amber-400'
              }`}
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Home Overview</span>
            </Link>

            <Link
              to="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/menu' 
                  ? 'bg-amber-400/10 text-amber-400 font-bold border border-amber-500/30' 
                  : 'text-zinc-200 hover:text-amber-400'
              }`}
            >
              <Utensils className="w-4 h-4 text-yellow-400" />
              <span>Online Menu & Specials</span>
            </Link>

            <Link
              to="/story"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/story' 
                  ? 'bg-amber-400/10 text-amber-400 font-bold border border-amber-500/30' 
                  : 'text-zinc-200 hover:text-amber-400'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Our Story & Miriam Makeba</span>
            </Link>

            <Link
              to="/atmosphere"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/atmosphere' 
                  ? 'bg-amber-400/10 text-amber-400 font-bold border border-amber-500/30' 
                  : 'text-zinc-200 hover:text-amber-400'
              }`}
            >
              <Compass className="w-4 h-4 text-red-400" />
              <span>Inside Atmosphere & Fox St Gallery</span>
            </Link>

            <Link
              to="/jazz"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/jazz' 
                  ? 'bg-amber-400/10 text-amber-400 font-bold border border-amber-500/30' 
                  : 'text-zinc-200 hover:text-amber-400'
              }`}
            >
              <Music className="w-4 h-4 text-orange-400" />
              <span>Weekend Live Jazz Bandstand</span>
            </Link>

            <Link
              to="/location"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
                location.pathname === '/location' 
                  ? 'bg-amber-400/10 text-amber-400 font-bold border border-amber-500/30' 
                  : 'text-zinc-200 hover:text-amber-400'
              }`}
            >
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>286 Fox Street Location & Hours</span>
            </Link>
          </nav>

          <div className="pt-4 border-t border-zinc-900 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-md"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call Frontline Desk (+27 11 334 0470)</span>
            </button>

            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 text-xs font-medium"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-orange-400" />
                <span>Instagram @pata.pata_maboneng</span>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 text-xs font-medium"
              >
                <TikTokIcon className="w-3.5 h-3.5 text-yellow-400" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
