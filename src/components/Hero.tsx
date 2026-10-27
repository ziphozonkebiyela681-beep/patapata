import { Phone, ArrowDown, Clock, MapPin, Music } from 'lucide-react';
import { PataPataSignature } from './PataPataSignature';
import { CandleFlame, JazzyPatternRibbon } from './CandlelightVibe';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const heroBgUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.02.19_PM_0a091eb0.jpg';

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden bg-black text-white">
      
      {/* AUTHENTIC PATA PATA POTJIE & DINING ROOM BACKGROUND SPACE PICTURE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBgUrl}
          alt="Pata Pata traditional potjie pot on polished timber dining table with warm ambient lamps"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] scale-105"
        />
        
        {/* Atmospheric Scrim Overlays: lets the potjie pot, warm woven drum lights & Ubuntu sign shine through while ensuring 100% crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Warm Red, Yellow & Orange Candlelight Backlight Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[480px] bg-gradient-to-r from-red-600/20 via-orange-500/25 to-amber-400/20 rounded-full blur-[140px] pointer-events-none z-1" 
      />

      {/* Floating Candlelight Sparkle & Stardust Accents */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-1">
        <span className="absolute top-[16%] left-[12%] w-1.5 h-1.5 bg-[#f59e0b] rounded-full animate-sparkle shadow-[0_0_12px_#f59e0b]" />
        <span className="absolute top-[24%] right-[14%] w-2 h-2 bg-[#ef4444] rounded-full animate-sparkle [animation-delay:1.2s] shadow-[0_0_14px_#ef4444]" />
        <span className="absolute bottom-[32%] left-[18%] w-1.5 h-1.5 bg-[#ff6b00] rounded-full animate-sparkle [animation-delay:2s] shadow-[0_0_12px_#ff6b00]" />
        <span className="absolute bottom-[24%] right-[20%] w-1 h-1 bg-[#fde047] rounded-full animate-sparkle [animation-delay:0.8s] shadow-[0_0_10px_#fde047]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* District Kicker with Candlelight Flame & Warm Accent */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-xs text-zinc-200 font-medium mb-7 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
          <CandleFlame className="-my-1" />
          <span className="text-amber-400 font-bold">Fox Street Jazz & Soul</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-300">Maboneng, Johannesburg</span>
        </div>

        {/* ISOLATED SIGNATURE LOGOTYPE (NO BOX, NO BORDER, PURE WRITING ONLY) */}
        <div className="mb-7 relative flex flex-col items-center">
          {/* Subtle warm amber/red starlight behind the signature writing */}
          <div 
            aria-hidden="true" 
            className="absolute -inset-6 bg-gradient-to-r from-red-500/25 via-orange-500/35 to-amber-400/25 blur-2xl opacity-80 pointer-events-none" 
          />
          
          <div className="relative group cursor-default">
            <PataPataSignature 
              className="w-auto h-28 sm:h-36 md:h-44 text-white hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_30px_rgba(255,107,0,0.65)]"
              color="jazz"
              glow
            />
          </div>

          <div className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-400 font-extrabold drop-shadow">
            <span className="text-red-500">Touch</span>
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
            <span className="text-orange-400">Touch</span>
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            <span className="text-amber-300">1960s Sophiatown Beat</span>
          </div>
        </div>

        {/* Jazzy Geometric Chevron Ribbon */}
        <div className="w-full max-w-md my-3">
          <JazzyPatternRibbon />
        </div>

        {/* Editorial Headline with warm fiery accents */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white max-w-3xl leading-[1.08] mb-5 text-balance drop-shadow-[0_3px_15px_rgba(0,0,0,0.9)]">
          The Beating Heart of Fox Street. Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Candlelit Afro-Jazz</span> Meets Heritage Soul.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-200 max-w-2xl leading-relaxed mb-9 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Honoring Miriam Makeba&apos;s timeless rhythm. Slow-simmered rich Mogodu, cast-iron oxtail potjies, sizzling peri-peri grills, and warm candlelight over Fox Street every evening.
        </p>

        {/* Main CTA Cluster */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(245,158,11,0.6)]"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>Call Desk To Book</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-black/75 backdrop-blur-md border border-amber-500/40 text-amber-200 font-bold text-sm hover:bg-black/90 hover:border-amber-400 hover:text-white transition-all shadow-lg"
          >
            <span>Explore Online Menu</span>
            <ArrowDown className="w-4 h-4 text-orange-400" />
          </a>
        </div>

        {/* 4-Item Quick Facts Strip with Red/Yellow/Orange Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          
          <div className="p-4 rounded-xl bg-black/80 backdrop-blur-md border border-orange-500/30 hover:border-orange-500/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500" />
            <div className="flex items-center gap-2 text-orange-400 mb-1">
              <Phone className="w-4 h-4" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-300">Desk Line</span>
            </div>
            <span className="text-sm font-bold text-white block">+27 11 334 0470</span>
            <span className="text-[11px] text-amber-300">Call to hold table</span>
          </div>

          <div className="p-4 rounded-xl bg-black/80 backdrop-blur-md border border-yellow-500/30 hover:border-yellow-500/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400" />
            <div className="flex items-center gap-2 text-yellow-400 mb-1">
              <Music className="w-4 h-4" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-300">Live Jazz</span>
            </div>
            <span className="text-sm font-bold text-white block">Fri, Sat & Sun</span>
            <span className="text-[11px] text-amber-300">Candlelight sets</span>
          </div>

          <div className="p-4 rounded-xl bg-black/80 backdrop-blur-md border border-red-500/30 hover:border-red-500/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500" />
            <div className="flex items-center gap-2 text-red-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-300">Precinct</span>
            </div>
            <span className="text-sm font-bold text-white block">286 Fox Street</span>
            <span className="text-[11px] text-amber-300">Maboneng, Joburg</span>
          </div>

          <div className="p-4 rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/30 hover:border-amber-500/60 transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-amber-400" />
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-300">Service</span>
            </div>
            <span className="text-sm font-bold text-white block">08:00 – 23:00</span>
            <span className="text-[11px] text-amber-300">Open 7 days</span>
          </div>

        </div>

      </div>
    </section>
  );
}
