import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Music, Phone, Clock, Volume2, Sparkles } from 'lucide-react';
import { LiveJazzSchedule } from '../components/LiveJazzSchedule';
import { CandleFlame, JazzyPatternRibbon } from '../components/CandlelightVibe';

interface JazzPageProps {
  onOpenBooking: () => void;
}

export function JazzPage({ onOpenBooking }: JazzPageProps) {
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
            <span>Live Music Residency · Fox Street</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/40 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 shadow-md">
          <Music className="w-3.5 h-3.5 text-red-500" />
          <span>Weekend Afro-Jazz Sessions</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          The Beating Marabi Heart of Joburg
        </h1>

        <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Tenor saxophone, Korg synthesizer, upright bass, and syncopated drumming right beside the front Fox Street glass window. Join us every weekend for high-fidelity acoustic soul.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
          >
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span>Call Desk to Hold Stage Table</span>
          </button>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-xs hover:border-amber-400 transition-colors"
          >
            <span>Browse Dinner Menu</span>
          </Link>
        </div>
      </div>

      {/* Main Live Jazz Component (Band Photo, Session Cards, Acoustic Tips, Stage Table Holds) */}
      <LiveJazzSchedule onOpenBooking={onOpenBooking} />
    </div>
  );
}
