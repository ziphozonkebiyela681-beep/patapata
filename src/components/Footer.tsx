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
  const logoUrl = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_3.44.31_AM_78ac61fd.jpg';

  return (
    <footer className="bg-stone-50 text-stone-900 border-t border-stone-200 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vintage 1960s Double Rule Top of Footer */}
        <div className="mb-10 max-w-xl mx-auto">
          <VintageDoubleRule />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-200">
          
          {/* Brand & Logo */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="inline-block">
              <img
                src={logoUrl}
                alt="Pata Pata Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm">
              Authentic South African cuisine, 1960s Sophiatown jazz spirit, and warm hospitality on Fox Street.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <VinylRecordBadge label="SOPHIATOWN 1967" sublabel="PATAPATA ARCHIVE" />
              <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center p-1 text-white">
                <AfricanContinentSVG className="w-full h-full text-white" showJoburgStar={true} />
              </div>
              <DancingCoupleSilhouette className="w-8 h-8 text-stone-900 opacity-60" />
            </div>

            <p className="text-xs text-stone-500 font-serif italic pt-1">
              In eternal tribute to Mama Africa, <strong>Miriam Makeba</strong> (1932–2008).
            </p>

            {/* Social channels: Instagram and TikTok */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-900 hover:bg-stone-100 text-xs font-medium transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram {SOCIAL_LINKS.handle}</span>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-900 hover:bg-stone-100 text-xs font-medium transition-colors"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
                <span>TikTok {SOCIAL_LINKS.handle}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Multi-Page Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">
                Pages
              </span>
              <span className="text-[10px] font-typewriter text-stone-500 uppercase">[SIDE A &amp; B]</span>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-600">
              <li>
                <Link to="/" className="hover:text-stone-950 transition-colors block py-0.5">Home Overview</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-stone-950 transition-colors block py-0.5">Food &amp; Drinks Menu</Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-stone-950 transition-colors block py-0.5">Our Story &amp; Miriam Makeba</Link>
              </li>
              <li>
                <Link to="/atmosphere" className="hover:text-stone-950 transition-colors block py-0.5">Atmosphere &amp; Gallery</Link>
              </li>
              <li>
                <Link to="/jazz" className="hover:text-stone-950 transition-colors block py-0.5">Live Jazz Bandstand</Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-stone-950 transition-colors block py-0.5">Desk Phone Reservations</Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-stone-950 transition-colors block py-0.5">Fox Street Precinct &amp; Hours</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Desk Reservation */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">
                Front Desk Reservations
              </span>
              <SaxophoneSilhouette className="w-6 h-7 text-stone-900 opacity-60" />
            </div>
            
            <p className="text-xs text-stone-600">
              Tables reserved directly via telephone desk.
            </p>

            <div className="space-y-1.5 text-xs text-stone-600">
              <a
                href="tel:+27113340470"
                className="text-base font-display font-bold text-stone-950 hover:underline block font-typewriter"
              >
                +27 11 334 0470
              </a>
              <span className="block flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>Open 7 Days · 08:00 – 23:00 (SAST)</span>
              </span>
              <span className="block flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>286 Fox Street, Maboneng, JHB</span>
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-lg bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
              >
                Call Desk
              </button>

              <Link
                to="/reservations"
                className="px-3.5 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900 font-semibold hover:bg-stone-100 transition-colors"
              >
                Call Planner
              </Link>
            </div>
          </div>

        </div>

        {/* Sub-footer with 1960s Typewriter Docket */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 font-typewriter">
          <p>© {new Date().getFullYear()} PATA PATA • 286 FOX STREET • MABONENG JHB</p>
          <p className="tracking-wider">PRESSING № 1967 • KOFIFI SOUL &amp; KWELA BEAT</p>
        </div>

      </div>
    </footer>
  );
}
