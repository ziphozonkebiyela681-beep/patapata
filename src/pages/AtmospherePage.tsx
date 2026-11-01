import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Compass, Phone, Sparkles, Camera, MapPin } from 'lucide-react';
import { AtmosphereSection } from '../components/AtmosphereSection';
import { CandleFlame, JazzyPatternRibbon } from '../components/CandlelightVibe';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from '../components/SocialIcons';

interface AtmospherePageProps {
  onOpenBooking: () => void;
}

export function AtmospherePage({ onOpenBooking }: AtmospherePageProps) {
  return (
    <div className="pt-6 pb-12">
      {/* Top Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home Overview</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-amber-400 font-bold">
            <CandleFlame className="scale-65" />
            <span>The Living Room of Maboneng</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/40 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 shadow-md">
          <Compass className="w-3.5 h-3.5 text-orange-400" />
          <span>Inside Pata Pata & Fox Street</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          Candlelight, Vintage Soul &amp; Street Life
        </h1>

        <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Step into our warm, candlelit sanctuary at 286 Fox Street. Discover the original chalkboard beam lyrics, giant cylindrical drum lanterns, vintage spindle-back seating, and vibrant sidewalk veranda dining.
        </p>

        {/* Follow Socials */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 hover:text-white text-xs font-medium transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-orange-400" />
            <span>Instagram {SOCIAL_LINKS.handle}</span>
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 hover:text-white text-xs font-medium transition-colors"
          >
            <TikTokIcon className="w-3.5 h-3.5 text-yellow-400" />
            <span>TikTok</span>
          </a>
        </div>
      </div>

      {/* Main Atmosphere Section: Dual Switcher (Candlelit Tables vs Grand Dining Hall) + Interior Craft Highlights */}
      <AtmosphereSection onOpenBooking={onOpenBooking} />

      {/* Quick Jump Links */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
              Live Weekend Music
            </span>
            <p className="text-sm font-bold text-white">
              Want to see who plays during our candlelit dinners?
            </p>
          </div>

          <Link
            to="/jazz"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shrink-0"
          >
            <span>See Live Jazz Lineup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
