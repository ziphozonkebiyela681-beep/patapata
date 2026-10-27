import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { PataPataSignature } from './PataPataSignature';
import { CandleFlame } from './CandlelightVibe';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from './SocialIcons';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md border-b border-amber-950/40 transition-colors">
      {/* Top thin jazz flame accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400" />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        
        {/* Zone 1: Pure Isolated Signature Logo (No boxes, pure writing) */}
        <a 
          href="#" 
          className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg py-1"
          aria-label="Pata Pata Home"
        >
          <div className="relative group-hover:scale-105 transition-transform duration-200">
            <PataPataSignature 
              className="h-10 sm:h-12 w-auto text-white group-hover:text-amber-300 filter drop-shadow-[0_0_10px_rgba(255,107,0,0.4)]" 
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
        </a>

        {/* Zone 2: 4–5 single-line clean text links with warm hover underlines */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a
            href="#atmosphere"
            className="hover:text-amber-400 transition-colors whitespace-nowrap underline-offset-8 hover:underline decoration-amber-400"
          >
            Atmosphere
          </a>
          <a
            href="#story"
            className="hover:text-amber-400 transition-colors whitespace-nowrap underline-offset-8 hover:underline decoration-orange-500"
          >
            Our Story
          </a>
          <a
            href="#menu"
            className="hover:text-amber-400 transition-colors whitespace-nowrap underline-offset-8 hover:underline decoration-yellow-400"
          >
            Online Menu
          </a>
          <a
            href="#jazz"
            className="hover:text-amber-400 transition-colors whitespace-nowrap underline-offset-8 hover:underline decoration-red-500"
          >
            Live Jazz
          </a>
          <a
            href="#reservations"
            className="hover:text-amber-400 transition-colors whitespace-nowrap underline-offset-8 hover:underline decoration-orange-500"
          >
            Desk Booking
          </a>
        </nav>

        {/* Zone 3: Social Links & Primary Desk Booking CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Social links (Instagram & TikTok) */}
          <div className="hidden lg:flex items-center gap-1.5 border-r border-zinc-800 pr-3 mr-1">
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

          <div className="hidden xl:flex items-center">
            <CandleFlame className="scale-75" />
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_18px_rgba(245,158,11,0.4)] whitespace-nowrap"
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-950 bg-black/95 px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 hover:text-amber-400 py-1"
            >
              Our Story
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 hover:text-amber-400 py-1"
            >
              Online Menu
            </a>
            <a
              href="#jazz"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 hover:text-amber-400 py-1"
            >
              Live Jazz Lineup
            </a>
            <a
              href="#reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 hover:text-amber-400 py-1"
            >
              Desk Reservation
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 hover:text-amber-400 py-1"
            >
              Location & Hours
            </a>
          </nav>

          <div className="pt-4 border-t border-zinc-900 flex flex-col gap-3">
            <a
              href="tel:+27113340470"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Direct Dial Desk: +27 11 334 0470</span>
            </a>

            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 text-xs font-medium"
              >
                <InstagramIcon className="w-4 h-4 text-orange-400" />
                <span>Instagram @pata.pata_maboneng</span>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 text-xs font-medium"
              >
                <TikTokIcon className="w-4 h-4 text-yellow-400" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
