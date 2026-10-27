import { Phone, Sparkles } from 'lucide-react';
import { PataPataSignature } from './PataPataSignature';
import { CandleFlame, JazzyPatternRibbon } from './CandlelightVibe';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from './SocialIcons';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-transparent text-white border-t border-amber-950/40 py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Jazzy Pattern Ribbon top of footer */}
        <div className="mb-12">
          <JazzyPatternRibbon />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand & Pure Isolated Signature */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <PataPataSignature className="h-12 w-auto text-white" color="jazz" glow />
              <div className="flex flex-col border-l border-zinc-800 pl-3">
                <span className="text-[10px] tracking-[0.25em] uppercase text-amber-400 font-bold">
                  Maboneng · Fox St
                </span>
                <span className="text-[9px] tracking-wider uppercase text-zinc-500 font-medium">
                  Johannesburg
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm">
              Authentic South African heritage dining, 1960s Sophiatown jazz soul, flickering candlelight, and warm hospitality on Fox Street.
            </p>

            <div className="pt-2 text-xs text-amber-400/90 flex items-center gap-2">
              <CandleFlame className="scale-65" />
              <span>In eternal tribute to Mama Africa, <strong>Miriam Makeba</strong> (1932–2008).</span>
            </div>

            {/* Social channels: Instagram and TikTok */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 hover:text-white hover:border-amber-400 text-xs font-medium transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-orange-400" />
                <span>Instagram {SOCIAL_LINKS.handle}</span>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 hover:text-white hover:border-amber-400 text-xs font-medium transition-colors"
              >
                <TikTokIcon className="w-3.5 h-3.5 text-yellow-400" />
                <span>TikTok {SOCIAL_LINKS.handle}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block">
              Explore
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#story" className="hover:text-amber-300 transition-colors">Our Story & Heritage</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">Online Menu & Specials</a>
              </li>
              <li>
                <a href="#jazz" className="hover:text-amber-300 transition-colors">Live Jazz Bandstand</a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-amber-300 transition-colors">Desk Phone Reservations</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">Fox Street Precinct</a>
              </li>
            </ul>
          </div>

          {/* Contact & Desk Reservation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Direct Desk Booking
            </span>
            
            <p className="text-xs text-zinc-300">
              Tables reserved exclusively via telephone desk.
            </p>

            <div className="space-y-1.5">
              <a
                href="tel:+27113340470"
                className="text-base font-display font-bold text-white hover:text-amber-400 transition-colors block"
              >
                +27 11 334 0470
              </a>
              <span className="text-xs text-zinc-400 block">
                Mobile / WhatsApp: +27 72 268 0313
              </span>
              <span className="text-xs text-zinc-400 block">
                286 Fox Street, Maboneng, JHB 2094
              </span>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            >
              Call Desk Reservation
            </button>
          </div>

        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Pata Pata Restaurant & Jazz Lounge. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Crafted with warm candlelight & jazz</span>
            <span className="text-red-500">♥</span>
            <span>in Maboneng</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
