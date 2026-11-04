import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, Utensils } from 'lucide-react';
import { MenuSection } from '../components/MenuSection';

interface MenuPageProps {
  onOpenBooking: () => void;
}

export function MenuPage({ onOpenBooking }: MenuPageProps) {
  return (
    <div className="bg-white text-stone-900 pt-6 pb-12">
      {/* Top Navigation & Subtitle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-stone-950 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home Overview</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-stone-600">
            <span>286 Fox Street · South African Heritage Kitchen</span>
          </div>
        </div>
      </div>

      {/* Hero Header for Menu */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
          <Utensils className="w-3.5 h-3.5 text-stone-900" />
          <span>Complete Restaurant Menu</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-stone-950 mb-3">
          Traditional Flavors &amp; Modern Afro-Soul
        </h1>
        
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          From slow-simmered rich Mogodu and 6-hour cast-iron Oxtail Potjies to flame-seared braai cuts, fresh chakalaka, steamed dombolo bread, and Miriam Makeba signature libations.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Desk To Hold Dishes</span>
          </button>

          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-100 border border-stone-300 text-stone-900 font-semibold text-xs hover:bg-stone-200 transition-colors"
          >
            <span>Desk Booking Planner</span>
          </Link>
        </div>
      </div>

      {/* Full Menu Section */}
      <MenuSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
