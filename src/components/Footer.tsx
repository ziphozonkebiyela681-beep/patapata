import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from './SocialIcons';
import { SaxophoneSilhouette, DancingCoupleSilhouette } from './JazzSketches';
import { VintageDoubleRule, VinylRecordBadge, VintageStampBadge } from './VintageAccents';
import { AfricanContinentSVG, AfricanGeometricDivider } from './AfricanMotifs';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const logoUrl = '/assets/aistudio/patapata_logo_white_isolated.png';

  return (
    <footer className="bg-[#181715] text-stone-100 border-t border-stone-800 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vintage 1960s Double Rule Top of Footer */}
        <div className="mb-10 max-w-xl mx-auto">
          <VintageDoubleRule />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Brand & Logo */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="inline-block">
              <img
                src={logoUrl}
                alt="Pata Pata Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              Authentic South African cuisine, 1960s Sophiatown jazz spirit, and warm hospitality on Fox Street.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <VinylRecordBadge label="SOPHIATOWN 1967" sublabel="PATAPATA ARCHIVE" />
              <div className="w-8 h-9 rounded-lg bg-[#242220] flex items-center justify-center p-0.5 border border-stone-700 shadow-2xs">
                <AfricanContinentSVG className="w-full h-full object-contain" />
              </div>
              <DancingCoupleSilhouette className="w-9 h-9 opacity-75" />
            </div>

            <p className="text-xs text-stone-400 font-serif italic pt-1">
              In eternal tribute to Mama Africa, <strong>Miriam Makeba</strong> (1932–2008).
            </p>

            {/* Social channels: Instagram and TikTok */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 hover:bg-stone-800 hover:text-white text-xs font-medium transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram {SOCIAL_LINKS.handle}</span>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 hover:bg-stone-800 hover:text-white text-xs font-medium transition-colors"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
                <span>TikTok {SOCIAL_LINKS.handle}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Multi-Page Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                Pages
              </span>
              <span className="text-[10px] font-typewriter text-amber-400 uppercase">[SIDE A &amp; B]</span>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-300">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors block py-0.5">Home Overview</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-400 transition-colors block py-0.5">Food &amp; Drinks Menu</Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-amber-400 transition-colors block py-0.5">Our Story &amp; Miriam Makeba</Link>
              </li>
              <li>
                <Link to="/atmosphere" className="hover:text-amber-400 transition-colors block py-0.5">Atmosphere &amp; Gallery</Link>
              </li>
              <li>
                <Link to="/jazz" className="hover:text-amber-400 transition-colors block py-0.5">Live Jazz Bandstand</Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-amber-400 transition-colors block py-0.5">Desk Phone Reservations</Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-amber-400 transition-colors block py-0.5">Fox Street Precinct &amp; Hours</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Desk Reservation */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                Front Desk Reservations
              </span>
              <SaxophoneSilhouette className="w-7 h-8 opacity-80" />
            </div>
            
            <p className="text-xs text-stone-300">
              Tables reserved directly via telephone desk.
            </p>

            <div className="space-y-1.5 text-xs text-stone-300">
              <a
                href="tel:+27113340470"
                className="text-base font-display font-bold text-white hover:text-amber-400 block font-typewriter"
              >
                +27 11 334 0470
              </a>
              <span className="block flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Open 7 Days · 08:00 – 23:00 (SAST)</span>
              </span>
              <span className="block flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>286 Fox Street, Maboneng, JHB</span>
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-lg bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-sm"
              >
                Call Desk
              </button>

              <Link
                to="/reservations"
                className="px-3.5 py-2 rounded-lg bg-stone-900 border border-stone-700 text-xs text-stone-200 font-semibold hover:bg-stone-800 hover:text-white transition-colors"
              >
                Call Planner
              </Link>
            </div>
          </div>

        </div>

        {/* Sub-footer with 1960s Typewriter Docket */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 font-typewriter">
          <p>© {new Date().getFullYear()} PATA PATA • 286 FOX STREET • MABONENG JHB</p>
          <p className="tracking-wider text-stone-400">PRESSING № 1967 • KOFIFI SOUL &amp; KWELA BEAT</p>
        </div>

      </div>
    </footer>
  );
}
