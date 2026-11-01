import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Clock, Phone, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { LocationAndHours } from '../components/LocationAndHours';
import { CandleFlame, JazzyPatternRibbon } from '../components/CandlelightVibe';

interface LocationPageProps {
  onOpenBooking: () => void;
}

export function LocationPage({ onOpenBooking }: LocationPageProps) {
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
            <span>Fox Street Precinct · Maboneng</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/40 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 shadow-md">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Precinct Guide & Hours</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          286 Fox Street, Johannesburg
        </h1>

        <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Situated in the heart of Johannesburg’s vibrant Maboneng Arts District, right on paved Fox Street. Open 7 days a week for breakfast, lunch, candlelit dinners, and weekend live afro-jazz.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://maps.google.com/?q=Pata+Pata+286+Fox+Street+Maboneng+Johannesburg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
          >
            <Navigation className="w-3.5 h-3.5 fill-black" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 text-black/70" />
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-750 text-white font-bold text-xs hover:border-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call Desk for Directions</span>
          </button>
        </div>
      </div>

      {/* Main Location & Hours Component (Timetable, Precinct details, Neighborhood landmarks, and Fox Street scenes photo gallery) */}
      <LocationAndHours onOpenBooking={onOpenBooking} />
    </div>
  );
}
