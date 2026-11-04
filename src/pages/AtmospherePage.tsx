import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import { AtmosphereSection } from '../components/AtmosphereSection';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from '../components/SocialIcons';

interface AtmospherePageProps {
  onOpenBooking: () => void;
}

export function AtmospherePage({ onOpenBooking }: AtmospherePageProps) {
  return (
    <div className="bg-white text-stone-900 pt-6 pb-12">
      {/* Top Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home Overview</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-stone-600">
            <span>The Living Room of Maboneng</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
          <Compass className="w-3.5 h-3.5 text-stone-900" />
          <span>Inside Pata Pata & Fox Street</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-stone-950 mb-3">
          Candlelight, Vintage Soul &amp; Street Life
        </h1>

        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Step into our warm, candlelit sanctuary at 286 Fox Street. Discover the original chalkboard beam lyrics, cylindrical drum lanterns, vintage spindle-back seating, and sidewalk veranda dining.
        </p>

        {/* Follow Socials */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-900 text-xs font-medium transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-stone-900" />
            <span>Instagram {SOCIAL_LINKS.handle}</span>
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-900 text-xs font-medium transition-colors"
          >
            <TikTokIcon className="w-3.5 h-3.5 text-stone-900" />
            <span>TikTok</span>
          </a>
        </div>
      </div>

      {/* Main Atmosphere Section */}
      <AtmosphereSection onOpenBooking={onOpenBooking} />

      {/* Quick Jump Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-0.5">
              Live Weekend Music
            </span>
            <p className="text-sm font-bold text-stone-950">
              Want to see who plays during our candlelit dinners?
            </p>
          </div>

          <Link
            to="/jazz"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shrink-0"
          >
            <span>See Live Jazz Lineup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
