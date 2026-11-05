import { useState, useEffect, useRef } from 'react';
import { Phone, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from './SocialIcons';
import { DancingCoupleSilhouette, MiriamMakebaSilhouette } from './JazzSketches';
import { VintageStampBadge } from './VintageAccents';
import { AfricanContinentSVG, AfricanGeometricDivider } from './AfricanMotifs';

interface AtmosphereSectionProps {
  onOpenBooking: () => void;
}

interface AtmospherePhoto {
  url: string;
  badge: string;
  title: string;
  description: string;
  subcaption: string;
  alt: string;
}

export function AtmosphereSection({ onOpenBooking }: AtmosphereSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const photos: AtmospherePhoto[] = [
    {
      url: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_12.36.42_PM_463ec968.jpeg',
      badge: 'View 1 of 2 · Candlelit Tables & Chalkboard Beams',
      title: 'Fox Street Evening Dinner Service',
      description: 'Candlelit tables beneath the historic chalkboard lyrics, surrounded by 1960s vintage spindle-back seating.',
      subcaption: 'Chalkboard beams · Candlelit ambiance · Warm timber tables',
      alt: 'Inside atmosphere of Pata Pata in Maboneng with candlelit tables, chalkboard beams, and bar',
    },
    {
      url: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_3.20.16_PM_9e981227.jpg',
      badge: 'View 2 of 2 · Grand Dining Hall & Bar Lounge',
      title: 'The Bustling Living Room of Maboneng',
      description: 'Wide view of the dining hall featuring cylindrical woven drum lanterns, iconic yellow table legs, and live music corner.',
      subcaption: 'Woven drum lanterns · Yellow table legs · Live music corner',
      alt: 'Wide-angle interior view of Pata Pata dining hall with drum lamps, yellow tables, and bar lounge',
    },
  ];

  // Auto-switch between the two atmosphere pictures back and forth
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const currentPhoto = photos[currentIndex];

  const interiorDetails = [
    {
      title: 'Chalkboard Lyrics on Overhead Beams',
      description: 'Running across the timber beams are the original lyrics to Miriam Makeba’s 1967 anthem: "aHiyo mama aHiyo mama, nants’ iPata Pata...".',
      tag: 'Ceiling Beams',
    },
    {
      title: 'Warm Candlelight on Every Table',
      description: 'As dusk settles over Fox Street, lit candles bathe our rustic wooden tables in intimate golden warmth.',
      tag: 'Table Vibe',
    },
    {
      title: 'Cylindrical Woven Drum Lamps',
      description: 'Suspended cylindrical lighting pendants cast soft, ambient golden halos across the dining hall and cocktail bar.',
      tag: 'Lighting',
    },
    {
      title: '1960s Vintage Wooden Seating',
      description: 'Antique spindle-back timber chairs, vibrant yellow-legged tables, and retro decor celebrate Sophiatown spirit.',
      tag: 'Interior',
    },
  ];

  return (
    <section id="atmosphere" className="py-16 sm:py-20 bg-[#1c1b19] text-stone-100 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              286 Fox Street · Atmosphere
            </span>
            <VintageStampBadge text="AUTHENTIC 1960s SHEBEEN VIBE" />
          </div>
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white mb-3">
              Inside Pata Pata
            </h2>
            <DancingCoupleSilhouette className="w-8 h-8 opacity-75 hidden sm:block" />
          </div>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-serif italic">
            Dimmed woven pendant lamps, handwritten chalk lyrics across ceiling beams, glowing candles on weathered wooden tables, and laughter filling the room.
          </p>
        </div>

        {/* Chalkboard Lyrics Inscription Banner */}
        <div className="w-full bg-[#141312] border border-stone-800 text-stone-200 py-3 px-4 mb-8 rounded-xl overflow-hidden shadow-md">
          <div className="flex items-center justify-between text-xs tracking-wider font-mono italic whitespace-nowrap overflow-x-auto scrollbar-none gap-6">
            <span className="text-amber-400 font-sans font-bold uppercase text-[10px] tracking-widest bg-stone-900 border border-stone-700 px-2 py-0.5 rounded shrink-0 not-italic">
              Ceiling Inscription
            </span>
            <span>&ldquo;aHiyo mama aHiyo mama, nants&apos; iPata Pata&rdquo;</span>
            <span className="text-stone-600">·</span>
            <span>&ldquo;Saguquka sathi bheka, nants&apos; iPata Pata&rdquo;</span>
            <span className="text-stone-600">·</span>
            <span>&ldquo;do down Johannesburg way. And everybody starts to move as soon as &apos;Pata Pata&apos; starts to play&rdquo;</span>
          </div>
        </div>

        {/* View Switcher Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-stone-400">Switch Photo:</span>
            <div className="inline-flex rounded-lg p-0.5 bg-[#242220] border border-stone-700">
              <button
                type="button"
                onClick={() => setCurrentIndex(0)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  currentIndex === 0
                    ? 'bg-stone-100 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                1. Candlelit Dining
              </button>
              <button
                type="button"
                onClick={() => setCurrentIndex(1)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  currentIndex === 1
                    ? 'bg-stone-100 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                2. Grand Hall &amp; Bar
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-400 hidden sm:inline">Follow us:</span>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#242220] hover:bg-stone-800 border border-stone-700 text-stone-200 text-xs font-medium transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{SOCIAL_LINKS.handle}</span>
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#242220] hover:bg-stone-800 border border-stone-700 text-stone-200 text-xs font-medium transition-colors"
            >
              <TikTokIcon className="w-3.5 h-3.5" />
              <span>TikTok</span>
            </a>
          </div>
        </div>

        {/* 1960s African Heritage Divider */}
        <div className="max-w-xl mx-auto mb-6">
          <AfricanGeometricDivider />
        </div>

        {/* Featured Photo in Authentic Gilded Baroque Carved Gold Frame */}
        <div 
          className="relative group w-full mb-10 transition-transform duration-300 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ornate Gold Carved Frame */}
          <div
            style={{
              borderStyle: 'solid',
              borderColor: '#c99a4a',
              borderWidth: 'clamp(28px, 5vw, 52px) clamp(24px, 4.3vw, 45px) clamp(24px, 4.3vw, 45px) clamp(24px, 4.3vw, 45px)',
              borderImageSource: "url('/assets/aistudio/ornate_gold_frame_cutout.png')",
              borderImageSlice: '254 225 221 223',
              borderImageRepeat: 'stretch',
              filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.35)) drop-shadow(0 4px 10px rgba(0,0,0,0.22))',
            }}
            className="relative w-full"
          >
            {/* Aspect Ratio Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] w-full overflow-hidden bg-stone-950 shadow-[inset_0_0_14px_rgba(0,0,0,0.7)] ring-1 ring-amber-950/50">
            
            {/* Photo 1 */}
            <div 
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={photos[0].url}
                alt={photos[0].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Photo 2 */}
            <div 
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={photos[1].url}
                alt={photos[1].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Gentle gradient scrim at bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-15" />

            {/* Top Controls Overlay */}
            <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 z-25">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/70 backdrop-blur-xs text-white text-xs font-medium">
                {currentPhoto.badge}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="p-1.5 rounded-md bg-black/70 backdrop-blur-xs text-white hover:bg-black transition-colors"
                  aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-xs text-white text-xs font-medium hover:bg-black transition-colors flex items-center gap-1"
                >
                  <span>Next View</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Arrow Controls */}
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-25 p-2 rounded-full bg-black/60 backdrop-blur-xs text-white hover:bg-black transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-25 p-2 rounded-full bg-black/60 backdrop-blur-xs text-white hover:bg-black transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white z-25">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-wider text-stone-300 font-semibold block mb-1">
                  {currentPhoto.subcaption}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {currentPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 mt-1">
                  {currentPhoto.description}
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-stone-900 font-semibold text-xs uppercase tracking-wider hover:bg-stone-100 transition-colors shrink-0 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Desk to Book</span>
              </button>
            </div>

            {/* Bottom-Center Indicator Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-25">
              {photos.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            </div>
          </div>

          {/* Engraved Antique Brass Museum Plaque */}
          <div className="mt-3 pt-1 flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-stone-800">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-gradient-to-b from-[#e1bf72] via-[#c6953d] to-[#996a22] border border-[#785012] text-stone-950 font-typewriter text-[9px] sm:text-[10px] uppercase font-bold tracking-widest shadow-[0_2px_4px_rgba(0,0,0,0.22)] select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52360b] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] border border-amber-300/40" />
              <span>FOX STREET LIVING ROOM • 286 FOX ST • 1960s ARCHIVE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#52360b] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] border border-amber-300/40" />
            </div>
            <p className="font-serif italic text-xs text-stone-600">
              {currentPhoto.subcaption}
            </p>
          </div>
        </div>

        {/* 4 Authentic Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {interiorDetails.map((h, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#242220] border border-stone-800 flex flex-col justify-between shadow-md"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5 block">
                  {h.tag}
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  {h.title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {h.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center gap-1.5 text-xs text-stone-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Atmosphere detail</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desk Call Banner */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#242220] border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-950 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 fill-stone-950" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Reserve your favorite corner at Pata Pata
              </h4>
              <p className="text-xs text-stone-300">
                Call our front desk host directly at <strong className="text-white">+27 11 334 0470</strong> to reserve your table.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-stone-950" />
            <span>Call Desk To Book</span>
          </button>
        </div>

      </div>
    </section>
  );
}
