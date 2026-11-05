import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Clock, MapPin, Music } from 'lucide-react';
import { MiriamMakebaSilhouette, DancingCoupleSilhouette, VINTAGE_MIRIAM_SKETCH, VINTAGE_DANCERS_SKETCH } from './JazzSketches';
import { VintageDoubleRule } from './VintageAccents';
import { AfricanContinentSeal, AfricanGeometricDivider, AfricanContinentSVG } from './AfricanMotifs';
import { VintagePhotoFrame } from './VintagePhotoFrame';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const heroBgUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.02.19_PM_0a091eb0.jpg';
  const logoUrl = '/assets/aistudio/patapata_logo_white_isolated.png';

  return (
    <section className="bg-[#1c1b19] text-stone-100 pt-8 sm:pt-12 pb-14 sm:pb-20 border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Humble Brand Header with Mama Africa & Dancers Flanking Silhouettes */}
        <div className="relative text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          
          {/* Subtle Vintage Miriam Makeba Singing Silhouette flanking the top banner on md+ screens (replaces horn per request) */}
          <div className="hidden md:flex absolute -left-12 lg:-left-20 top-4 flex-col items-center gap-1 opacity-85 hover:opacity-100 transition-opacity">
            <MiriamMakebaSilhouette className="w-20 h-22" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-stone-400">Mama Africa</span>
          </div>

          {/* Sophiatown Dancers flanking on right */}
          <div className="hidden md:flex absolute -right-12 lg:-right-20 top-4 flex-col items-center gap-1 opacity-85 hover:opacity-100 transition-opacity">
            <DancingCoupleSilhouette className="w-24 h-20 sm:w-28 sm:h-22" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-stone-400">Touch Dance</span>
          </div>

          {/* Official Provided Logo Image - White letters on charcoal */}
          <div className="flex justify-center mb-6">
            <img
              src={logoUrl}
              alt="PATA PATA - SA Cuisine • Bar • Live Music"
              className="h-20 xs:h-24 sm:h-28 md:h-34 lg:h-38 max-w-[92vw] sm:max-w-xl w-auto object-contain transition-transform duration-300 hover:scale-[1.02] drop-shadow-md"
              loading="eager"
            />
          </div>

          {/* African Continent Seal & Vintage Soul Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <AfricanContinentSeal />
          </div>

          {/* Mobile silhouettes strip: Miriam Makeba (replacing horn) + Africa Map + Dancers */}
          <div className="flex md:hidden items-center justify-center gap-6 mb-4 opacity-90">
            <MiriamMakebaSilhouette className="w-14 h-15" />
            <AfricanContinentSVG className="w-10 h-11" />
            <DancingCoupleSilhouette className="w-14 h-12" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-700 text-xs text-stone-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>286 Fox Street, Maboneng, Johannesburg</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-dashed border-stone-600 rounded text-[10px] font-typewriter uppercase tracking-widest text-stone-300 bg-stone-900/90 -rotate-1 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>REC. 1967 • SOPHIATOWN SOUL</span>
            </span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight mb-4 text-balance">
            Honest South African cooking, warm hospitality, and live weekend jazz.
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal font-serif italic">
            Named in honor of Miriam Makeba&apos;s timeless rhythm. Slow-simmered cast-iron potjies, rich mogodu, peri-peri chicken, and friendly neighborhood vibes in the heart of Maboneng.
          </p>

          {/* Humble Action Buttons (Light on Charcoal) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-8">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-stone-100 text-stone-950 font-bold text-sm hover:bg-white transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 fill-stone-950" />
              <span>Call Desk to Book: +27 11 334 0470</span>
            </button>

            <Link
              to="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-stone-850 border border-stone-700 text-stone-200 font-semibold text-sm hover:bg-stone-800 hover:text-white transition-colors"
            >
              <span>View Food Menu</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>

        {/* 1960s African Heritage Geometric Divider */}
        <div className="max-w-2xl mx-auto mb-8">
          <AfricanGeometricDivider />
        </div>

        {/* Authentic Atmosphere Showcase in Antique Gilded Baroque Gold Frame */}
        <div className="mb-10 max-w-5xl mx-auto">
          <VintagePhotoFrame
            src={heroBgUrl}
            alt="Pata Pata traditional potjie pot on polished timber dining table with warm ambient lamps"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
            plateText="286 FOX STREET • MARABI DINING ROOM • EST. 1967"
            caption="Cast-iron potjie pots, flickering candles & warm timber tables"
            priority={true}
            frameSize="lg"
          />
        </div>

        {/* Vintage Jazz Sketches Duo Strip (Mama Africa Miriam Makeba & 1960s Dancers) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#242220] border border-stone-800 mb-8">
          <div className="flex items-center justify-between gap-3 mb-3 pb-2 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <MiriamMakebaSilhouette className="w-5 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                1960s Sophiatown Heritage &amp; Soul
              </span>
            </div>
            <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">
              Vintage Chalk Sketches &amp; Dance Soul
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Sketch 1: Miriam Makeba (Mama Africa) singing - replaced horn per user request */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-stone-900/90 border border-stone-800 shadow-2xs">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-stone-800 bg-[#1c1b19] flex items-center justify-center p-1">
                <img
                  src={VINTAGE_MIRIAM_SKETCH}
                  alt="Vintage chalk sketch of Miriam Makeba singing into microphone"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                  Mama Africa
                </span>
                <h3 className="text-sm font-bold text-white font-display">
                  Miriam Makeba Soul
                </h3>
                <p className="text-xs text-stone-400 leading-snug mt-1">
                  The legendary rhythm and spirit that gave Pata Pata its world-famous name.
                </p>
              </div>
            </div>

            {/* Sketch 2: Touch Dance Couple */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-stone-900/90 border border-stone-800 shadow-2xs">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-stone-800 bg-[#1c1b19] flex items-center justify-center p-1">
                <img
                  src={VINTAGE_DANCERS_SKETCH}
                  alt="Vintage ink line sketch of couples dancing the 1960s Pata Pata touch dance"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                  The Touch Dance
                </span>
                <h3 className="text-sm font-bold text-white font-display">
                  Miriam Makeba Rhythm
                </h3>
                <p className="text-xs text-stone-400 leading-snug mt-1">
                  &ldquo;Everybody starts to move as soon as Pata Pata starts to play!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Quick Fact Badges (Charcoal background, white text) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          
          <div className="p-4 rounded-xl bg-[#242220] border border-stone-800">
            <div className="flex items-center gap-2 text-stone-200 mb-1">
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Phone Desk</span>
            </div>
            <a href="tel:+27113340470" className="text-sm font-bold text-white block hover:underline">
              +27 11 334 0470
            </a>
            <span className="text-xs text-stone-400">Table reservations & inquiries</span>
          </div>

          <div className="p-4 rounded-xl bg-[#242220] border border-stone-800">
            <div className="flex items-center gap-2 text-stone-200 mb-1">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Operating Hours</span>
            </div>
            <span className="text-sm font-bold text-white block">08:00 – 23:00</span>
            <span className="text-xs text-stone-400">Open 7 days every week</span>
          </div>

          <div className="p-4 rounded-xl bg-[#242220] border border-stone-800">
            <div className="flex items-center gap-2 text-stone-200 mb-1">
              <Music className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Live Jazz</span>
            </div>
            <span className="text-sm font-bold text-white block">Fri, Sat & Sun</span>
            <span className="text-xs text-stone-400">Evening sets from 18:30</span>
          </div>

          <div className="p-4 rounded-xl bg-[#242220] border border-stone-800">
            <div className="flex items-center gap-2 text-stone-200 mb-1">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Neighborhood</span>
            </div>
            <span className="text-sm font-bold text-white block">Fox Street, Joburg</span>
            <span className="text-xs text-stone-400">Heart of Maboneng Arts Hub</span>
          </div>

        </div>

      </div>
    </section>
  );
}
