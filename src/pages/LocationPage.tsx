import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Navigation, ExternalLink } from 'lucide-react';
import { LocationAndHours } from '../components/LocationAndHours';

interface LocationPageProps {
  onOpenBooking: () => void;
}

export function LocationPage({ onOpenBooking }: LocationPageProps) {
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
            <span>Fox Street Precinct · Maboneng</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
          <MapPin className="w-3.5 h-3.5 text-stone-900" />
          <span>Precinct Guide & Hours</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-stone-950 mb-3">
          286 Fox Street, Johannesburg
        </h1>

        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Situated in the heart of Johannesburg’s vibrant Maboneng Arts District, right on paved Fox Street. Open 7 days a week for breakfast, lunch, dinner, and weekend live afro-jazz.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://maps.google.com/?q=Pata+Pata+286+Fox+Street+Maboneng+Johannesburg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-100 border border-stone-300 text-stone-900 font-semibold text-xs hover:bg-stone-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Desk (+27 11 334 0470)</span>
          </button>
        </div>
      </div>

      {/* Main Location & Hours Component */}
      <LocationAndHours onOpenBooking={onOpenBooking} />
    </div>
  );
}
