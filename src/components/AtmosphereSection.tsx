import { useState, useEffect, useRef } from 'react';
import { Phone, Sparkles, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { CandleFlame, JazzyPatternRibbon } from './CandlelightVibe';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from './SocialIcons';

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
      description: 'Real candlelit tables beneath the historic chalkboard lyrics, surrounded by 1960s vintage spindle-back seating.',
      subcaption: 'Chalkboard beams · Candlelit ambiance · Mama Africa’s vigil',
      alt: 'Inside atmosphere of Pata Pata in Maboneng with candlelit tables, chalkboard beams, and bar',
    },
    {
      url: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_3.20.16_PM_9e981227.jpg',
      badge: 'View 2 of 2 · Grand Dining Hall & Bar Lounge',
      title: 'The Bustling Living Room of Maboneng',
      description: 'Wide view of the dining hall featuring giant cylindrical woven drum lanterns, iconic yellow table legs, and the glowing blue neon live music sign.',
      subcaption: 'Woven drum lanterns · Yellow table legs · Blue neon live music sign',
      alt: 'Wide-angle interior view of Pata Pata dining hall with drum lamps, yellow tables, and illuminated bar lounge',
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
      title: 'Hand-Written Chalkboard Lyrics',
      description: 'Running across the overhead timber beams are the original lyrics to Miriam Makeba’s 1967 anthem: "aHiyo mama aHiyo mama, nants’ iPata Pata...".',
      tag: 'Ceiling Beams',
    },
    {
      title: 'Real Candlelight on Every Table',
      description: 'As dusk settles over Fox Street, lit wax taper candles bathe our heavy rustic wooden tables in intimate golden warmth.',
      tag: 'Table Vibe',
    },
    {
      title: 'Cylindrical Woven Drum Lamps',
      description: 'Giant suspended cylindrical lighting pendants cast soft, ambient golden halos across the wide dining hall and cocktail bar.',
      tag: 'Ambient Lighting',
    },
    {
      title: '1960s Mismatched Vintage Seating',
      description: 'Antique spindle-back timber chairs, vibrant yellow-legged tables, and retro chic decor celebrate Sophiatown spirit.',
      tag: 'Interior Craft',
    },
  ];

  return (
    <section id="atmosphere" className="relative py-24 bg-transparent text-white border-t border-amber-950/40 overflow-hidden">
      
      {/* Warm Ambient Backlight: Red, Yellow, & Orange Candlelight glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-red-600/15 via-orange-500/20 to-yellow-400/15 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950/90 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 shadow-md">
            <CandleFlame className="scale-75" />
            <span>286 Fox Street · The Living Room Atmosphere</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white mb-4">
            The Atmosphere Inside Pata Pata
          </h2>
          
          <p className="text-zinc-300 text-base leading-relaxed">
            Dimmed woven pendant lamps, handwritten chalk lyrics across ceiling beams, glowing candles on weathered wooden tables, and laughter filling the room. Switch between both views below to explore the venue.
          </p>
        </div>

        {/* Jazzy Pattern Ribbon */}
        <div className="mb-8 max-w-xl mx-auto">
          <JazzyPatternRibbon />
        </div>

        {/* Authentic Miriam Makeba Chalkboard Lyrics Marquee Banner */}
        <div className="w-full bg-[#121212]/90 border-y border-amber-500/30 py-3.5 px-4 mb-8 overflow-hidden rounded-xl shadow-inner relative">
          <div className="flex items-center justify-between text-xs tracking-wider text-amber-200/90 font-mono italic whitespace-nowrap overflow-x-auto scrollbar-none gap-6">
            <span className="text-amber-400 font-sans font-bold uppercase text-[10px] tracking-widest bg-black/80 px-2.5 py-1 rounded border border-amber-500/30 shrink-0 not-italic">
              Ceiling Beam Inscription
            </span>
            <span>&ldquo;aHiyo mama aHiyo mama, nants&apos; iPata Pata&rdquo;</span>
            <span className="text-red-500 font-bold">·</span>
            <span>&ldquo;Saguquka sathi bheka, nants&apos; iPata Pata&rdquo;</span>
            <span className="text-yellow-400 font-bold">·</span>
            <span>&ldquo;do down Johannesburg way. And everybody starts to move as soon as &apos;Pata Pata&apos; starts to play-whoo&rdquo;</span>
            <span className="text-orange-500 font-bold">·</span>
            <span>&ldquo;Saguquka sathi bheka, nants&apos; iPata Pata&rdquo;</span>
          </div>
        </div>

        {/* VIEW SELECTOR SWITCHER TABS */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Switch Atmosphere Views:</span>
            </span>
            <div className="inline-flex rounded-xl p-1 bg-zinc-950/90 border border-amber-500/30">
              <button
                type="button"
                onClick={() => setCurrentIndex(0)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  currentIndex === 0
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
                aria-label="View 1: Candlelit Tables and Lyrics"
              >
                <span>1. Candlelit Tables</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrentIndex(1)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  currentIndex === 1
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
                aria-label="View 2: Grand Dining Hall and Bar"
              >
                <span>2. Grand Hall & Bar</span>
              </button>
            </div>
          </div>

          {/* Social Media Link Badges */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 hidden sm:inline">Follow the vibe:</span>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950/80 hover:bg-zinc-900 border border-amber-500/30 text-amber-300 hover:text-white text-xs font-medium transition-colors"
              title="Follow Pata Pata on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-orange-400" />
              <span>{SOCIAL_LINKS.handle}</span>
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950/80 hover:bg-zinc-900 border border-amber-500/30 text-amber-300 hover:text-white text-xs font-medium transition-colors"
              title="Follow Pata Pata on TikTok"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-yellow-400" />
              <span>TikTok</span>
            </a>
          </div>
        </div>

        {/* THE BIG MAIN FEATURED ATMOSPHERE PICTURE CAROUSEL SWITCHER */}
        <div 
          className="relative rounded-3xl overflow-hidden border-2 border-amber-500/50 bg-zinc-950 shadow-2xl mb-12 group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Tri-color top glow accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 z-30" />

          {/* Auto-Switch Progress Bar */}
          <div className="absolute top-1 left-0 right-0 h-0.5 bg-black/60 z-30">
            <div 
              key={currentIndex} 
              className={`h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all ${
                isPaused ? 'w-full opacity-40' : 'w-full animate-[progress_4.5s_linear]'
              }`}
            />
          </div>

          {/* Aspect Ratio Container for Photos */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
            
            {/* Photo 1: Candlelit Tables & Chalkboard Beams */}
            <div 
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={photos[0].url}
                alt={photos[0].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
              />
            </div>

            {/* Photo 2: Grand Dining Hall, Drum Lamps & Bar */}
            <div 
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={photos[1].url}
                alt={photos[1].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
              />
            </div>
            
            {/* Measured Scrim Gradient for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20 opacity-90 z-15 pointer-events-none" />

            {/* Top Navigation Overlay Controls */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-25 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold pointer-events-auto shadow-lg">
                <CandleFlame className="scale-65" />
                <span>{currentPhoto.badge}</span>
              </div>

              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="p-2 rounded-full bg-black/75 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-amber-400 transition-colors"
                  aria-label={isPaused ? 'Resume auto-switch' : 'Pause auto-switch'}
                  title={isPaused ? 'Resume auto-switch' : 'Pause auto-switch'}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/40 text-amber-300 hover:text-white hover:bg-black/90 text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                  aria-label="Switch to next picture"
                >
                  <span>Switch Photo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Left & Right Arrow Carousel Controls */}
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-25 p-3 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-300 hover:text-white hover:bg-black/95 hover:scale-110 active:scale-95 transition-all shadow-xl"
              aria-label="Previous view"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-25 p-3 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-300 hover:text-white hover:bg-black/95 hover:scale-110 active:scale-95 transition-all shadow-xl"
              aria-label="Next view"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* In-Photo Floating Captions & Interactive CTA */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-25">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold mb-2 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>{currentPhoto.subcaption}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white drop-shadow-md">
                  {currentPhoto.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-300 drop-shadow mt-1">
                  {currentPhoto.description}
                </p>

                {/* Social tag inline */}
                <div className="flex items-center gap-3 mt-2 text-xs text-amber-400/90 font-medium">
                  <a 
                    href={SOCIAL_LINKS.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline flex items-center gap-1"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>{SOCIAL_LINKS.handle}</span>
                  </a>
                  <span>·</span>
                  <a 
                    href={SOCIAL_LINKS.tiktok} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline flex items-center gap-1"
                  >
                    <TikTokIcon className="w-3.5 h-3.5" />
                    <span>TikTok @pata.pata_maboneng</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-orange-950/60 shrink-0"
                >
                  <Phone className="w-4 h-4 fill-black" />
                  <span>Call For A Table Like This</span>
                </button>
              </div>
            </div>

            {/* Bottom-Center Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-25">
              {photos.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx
                      ? 'w-8 bg-amber-400 shadow-[0_0_8px_#f59e0b]'
                      : 'w-2 bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Jump to atmosphere view ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* 4 Authentic Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {interiorDetails.map((h, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-950/90 border border-zinc-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 mb-1 block">
                  {h.tag}
                </span>
                <h4 className="text-base font-bold font-display text-white mb-2">
                  {h.title}
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {h.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center gap-1.5 text-[11px] text-zinc-400">
                <Sparkles className="w-3 h-3 text-orange-400" />
                <span>Visible in photos above</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Call to Desk Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-black border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold font-display text-white">
                Reserve your favorite corner at Pata Pata
              </h4>
              <p className="text-xs text-zinc-300">
                Call our front desk host directly at <strong className="text-white">+27 11 334 0470</strong> to reserve your candlelit table.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shrink-0 shadow-lg"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Desk To Book</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
