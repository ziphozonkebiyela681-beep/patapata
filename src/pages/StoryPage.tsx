import { Link } from 'react-router-dom';
import { ArrowLeft, Utensils, Phone, Disc3 } from 'lucide-react';
import { StorySection } from '../components/StorySection';
import { FamilySection } from '../components/FamilySection';

interface StoryPageProps {
  onOpenBooking: () => void;
}

export function StoryPage({ onOpenBooking }: StoryPageProps) {
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
            <span>1960s Sophiatown Marabi Heritage</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
          <Disc3 className="w-3.5 h-3.5 text-stone-900" />
          <span>The Heritage of Pata Pata</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-stone-950 mb-3">
          Born from Miriam Makeba&apos;s Rhythm
        </h1>

        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          In 1967, Miriam Makeba released &ldquo;Pata Pata&rdquo;, celebrating the joyful touch-dance of Johannesburg&apos;s legendary Sophiatown shebeens. Today on Fox Street, that timeless spirit lives on through crackling vinyl, slow-simmered feasts, and heartfelt community.
        </p>
      </div>

      {/* Main Story Narrative */}
      <StorySection />

      {/* Family Section */}
      <div className="mt-8">
        <FamilySection />
      </div>

      {/* Next Step Exploration Hub */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-base font-bold font-display text-stone-950 mb-1">
              Taste the heritage in our kitchen
            </h3>
            <p className="text-xs text-stone-600">
              Explore traditional Mogodu, 6-hour oxtail potjies, and charcoal braai favorites.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Browse Menu</span>
            </Link>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-stone-300 text-stone-900 font-semibold text-xs hover:bg-stone-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Desk</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
