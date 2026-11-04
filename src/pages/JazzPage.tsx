import { Link } from 'react-router-dom';
import { ArrowLeft, Music, Phone } from 'lucide-react';
import { LiveJazzSchedule } from '../components/LiveJazzSchedule';

interface JazzPageProps {
  onOpenBooking: () => void;
}

export function JazzPage({ onOpenBooking }: JazzPageProps) {
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
            <span>Live Music Residency · Fox Street</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
          <Music className="w-3.5 h-3.5 text-stone-900" />
          <span>Weekend Afro-Jazz Sessions</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-stone-950 mb-3">
          Live Afro-Jazz at Pata Pata
        </h1>

        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Tenor saxophone, piano, upright bass, and syncopated drumming right beside the front Fox Street window. Join us every weekend for warm acoustic soul.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Desk to Reserve Table</span>
          </button>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-100 border border-stone-300 text-stone-900 font-semibold text-xs hover:bg-stone-200 transition-colors"
          >
            <span>Browse Dinner Menu</span>
          </Link>
        </div>
      </div>

      {/* Main Live Jazz Component */}
      <LiveJazzSchedule onOpenBooking={onOpenBooking} />
    </div>
  );
}
