import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Phone, Utensils, Music } from 'lucide-react';
import { DeskBookingSection } from '../components/DeskBookingSection';

export function ReservationsPage() {
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
            <span>Direct Telephone Reservations</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
          <Phone className="w-3.5 h-3.5 text-stone-900" />
          <span>Direct Front Desk Booking</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-stone-950 mb-3">
          Table Reservations by Phone
        </h1>

        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          In true Sophiatown style, we keep table bookings personal, warm, and attentive. Speak directly to our floor host on Fox Street to reserve prime frontline bandstand views or breezy street veranda seating.
        </p>
      </div>

      {/* Main Desk Booking Section */}
      <DeskBookingSection />

      {/* Helpful Pre-Booking Links */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/menu"
          className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-400 transition-colors flex items-center justify-between group shadow-2xs"
        >
          <div>
            <div className="flex items-center gap-2 text-stone-800 text-xs font-semibold mb-1">
              <Utensils className="w-4 h-4" />
              <span>Decide what to eat</span>
            </div>
            <h4 className="text-sm font-bold text-stone-950">
              Browse the Online Menu
            </h4>
          </div>
          <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          to="/jazz"
          className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-400 transition-colors flex items-center justify-between group shadow-2xs"
        >
          <div>
            <div className="flex items-center gap-2 text-stone-800 text-xs font-semibold mb-1">
              <Music className="w-4 h-4" />
              <span>Weekend Music Sets</span>
            </div>
            <h4 className="text-sm font-bold text-stone-950">
              Check Live Jazz Schedule
            </h4>
          </div>
          <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
