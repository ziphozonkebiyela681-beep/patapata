import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Utensils, Flame, Sparkles } from 'lucide-react';
import { MenuSection } from '../components/MenuSection';
import { CandleFlame, JazzyPatternRibbon } from '../components/CandlelightVibe';

interface MenuPageProps {
  onOpenBooking: () => void;
}

export function MenuPage({ onOpenBooking }: MenuPageProps) {
  return (
    <div className="pt-6 pb-12">
      {/* Top Breadcrumb & Kicker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
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
            <span className="hidden sm:inline">286 Fox Street · South African Heritage Kitchen</span>
            <span className="sm:hidden">Fox Street Menu</span>
          </div>
        </div>
      </div>

      {/* Hero Header for Menu */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/40 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 shadow-md">
          <Utensils className="w-3.5 h-3.5 text-yellow-400" />
          <span>Complete Restaurant Menu</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          Traditional Flavors &amp; Modern Afro-Soul
        </h1>
        
        <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          From slow-simmered rich Mogodu and 6-hour cast-iron Oxtail Potjies to flame-seared T-bones, fresh chakalaka, steamed dombolo bread, and Miriam Makeba signature libations.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
          >
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span>Call Desk To Hold Dishes</span>
          </button>

          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-xs hover:border-amber-400 transition-colors"
          >
            <span>Desk Booking Planner</span>
          </Link>
        </div>
      </div>

      {/* Full Menu Section Component (Includes search, filters, category tabs, dish grid, side kitchen photos, order note drawer, dish modal) */}
      <MenuSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
