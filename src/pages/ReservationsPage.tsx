import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Phone, Clock, MapPin, Sparkles, AlertCircle, Utensils, Music } from 'lucide-react';
import { DeskBookingSection } from '../components/DeskBookingSection';
import { CandleFlame, JazzyPatternRibbon } from '../components/CandlelightVibe';

export function ReservationsPage() {
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
            <span>Personal Telephone Reservations</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/40 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 shadow-md">
          <Phone className="w-3.5 h-3.5 text-yellow-400" />
          <span>Direct Front Desk Booking</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          Table Reservations by Phone
        </h1>

        <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          In true 1960s Sophiatown style, we keep table bookings personal, warm, and attentive. Speak directly to our floor host on Fox Street to reserve prime frontline bandstand views or breezy street veranda seating.
        </p>
      </div>

      {/* Main Desk Booking Section with Wood-Fired Hearth Backdrop */}
      <DeskBookingSection />

      {/* Helpful Pre-Booking Links */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/menu"
          className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 transition-colors flex items-center justify-between group"
        >
          <div>
            <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold mb-1">
              <Utensils className="w-4 h-4" />
              <span>Decide what to eat</span>
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
              Browse the Online Menu
            </h4>
          </div>
          <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          to="/jazz"
          className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/40 transition-colors flex items-center justify-between group"
        >
          <div>
            <div className="flex items-center gap-2 text-red-400 text-xs font-bold mb-1">
              <Music className="w-4 h-4" />
              <span>Weekend Music Sets</span>
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
              Check Live Jazz Schedule
            </h4>
          </div>
          <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
