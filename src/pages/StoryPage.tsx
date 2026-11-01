import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Utensils, Phone, Disc3 } from 'lucide-react';
import { StorySection } from '../components/StorySection';
import { FamilySection } from '../components/FamilySection';
import { CandleFlame, JazzyPatternRibbon } from '../components/CandlelightVibe';

interface StoryPageProps {
  onOpenBooking: () => void;
}

export function StoryPage({ onOpenBooking }: StoryPageProps) {
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
            <span>1960s Sophiatown Marabi Heritage</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/40 text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 shadow-md">
          <Disc3 className="w-3.5 h-3.5 text-red-500 animate-spin [animation-duration:10s]" />
          <span>The Heritage of Pata Pata</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          Born from Miriam Makeba&apos;s Rhythm
        </h1>

        <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          In 1967, Miriam Makeba released &ldquo;Pata Pata&rdquo;, a song celebrating the joyful touch-dance of Johannesburg&apos;s legendary Sophiatown shebeens. Today on Fox Street, that timeless marabi spirit lives on through crackling vinyl, flickering candlelight, slow-simmered feasts, and heartfelt community.
        </p>
      </div>

      {/* Main Story Narrative & Editorial Chapters with Retro Entrance Photo */}
      <StorySection />

      {/* Dedicated Section on the Pata Pata Family (Head Chef & Floor Hosts) */}
      <div className="mt-8">
        <FamilySection />
      </div>

      {/* Next Step Exploration Hub */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-lg font-bold font-display text-white mb-1">
              Taste the heritage in our kitchen
            </h3>
            <p className="text-xs text-zinc-300">
              Explore traditional Mogodu, 6-hour oxtail potjies, and charcoal braai favorites.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
            >
              <Utensils className="w-3.5 h-3.5 fill-black" />
              <span>Browse Menu</span>
            </Link>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-750 text-white font-bold text-xs hover:border-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Desk</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
