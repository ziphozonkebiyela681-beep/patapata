import { Music2, Clock, Phone, Radio, Sparkles, Volume2 } from 'lucide-react';
import { CandleFlame, JazzyPatternRibbon } from './CandlelightVibe';

interface LiveJazzScheduleProps {
  onOpenBooking: () => void;
}

export function LiveJazzSchedule({ onOpenBooking }: LiveJazzScheduleProps) {
  const bandPhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_12.36.43_PM_55c5dbcc.jpeg';

  const sessions = [
    {
      day: 'Friday Nights',
      time: '19:30 – Late',
      title: 'Sophiatown Swing & Afro-Jazz Brass',
      description: 'The full quartet takes the stage with soaring tenor sax melodies, driving marabi basslines, and syncopated drumming.',
      vibe: 'High energy · Full quartet · Dinner & swing',
      stage: 'Front Window Bandstand',
      accentColor: 'border-red-500/40 text-red-400',
    },
    {
      day: 'Saturday Evenings',
      time: '19:30 – 23:00',
      title: 'The Modern African Jazz Collective',
      description: 'Sophisticated improvisations, soulful Korg keyboard progressions, and Hugh Masekela & Abdullah Ibrahim classics.',
      vibe: 'Soulful · Saxophone & piano · Candlelit',
      stage: 'Bandstand & Dining Hall',
      accentColor: 'border-orange-500/40 text-orange-400',
    },
    {
      day: 'Sunday Afternoons',
      time: '14:00 – 18:00',
      title: 'Sunday Soul Sessions & Vinyl Groove',
      description: 'Daytime groove by the open Fox Street window. Mellow bass, crisp hi-hats, cold craft beers, and slow-braised oxtail.',
      vibe: 'Relaxed · Family friendly · Outdoor & indoor',
      stage: 'Street-Facing Bandstand',
      accentColor: 'border-yellow-500/40 text-yellow-400',
    },
  ];

  return (
    <section id="jazz" className="relative py-24 bg-transparent text-white border-t border-amber-950/30 overflow-hidden">
      
      {/* Red, Yellow & Orange Radial Stage Ambient Lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/4 w-[700px] h-[450px] bg-gradient-to-r from-red-600/20 via-orange-500/20 to-yellow-400/15 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            <CandleFlame className="scale-75" />
            <span>Live Music Residency · Friday, Saturday & Sunday</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white mb-4">
            The Soulful Sound of Pata Pata
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Meet the resident quartet that breathes life into Fox Street. Tenor saxophone, Korg synthesizer, soulful upright grooves, and the timeless marabi heartbeat of Johannesburg.
          </p>
        </div>

        {/* Jazzy Pattern Ribbon */}
        <div className="mb-10 max-w-xl mx-auto">
          <JazzyPatternRibbon />
        </div>

        {/* SHOWCASE OF THE REAL HOUSE JAZZ BAND */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/40 bg-zinc-950 shadow-2xl mb-14 group">
          
          {/* Top Tri-Color Neon Glow Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 z-20" />

          {/* Band Photo with Adaptive Aspect Ratio */}
          <div className="relative aspect-[4/3] xs:aspect-[5/4] sm:aspect-[16/10] lg:aspect-[16/9] min-h-[320px] sm:min-h-0 w-full overflow-hidden bg-black">
            <img
              src={bandPhotoUrl}
              alt="Pata Pata live jazz band performing at the Fox Street window bandstand"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 filter contrast-[1.05]"
            />

            {/* Measured Scrim Gradient for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-90" />

            {/* Floating Overlays on the Band Photo */}
            <div className="absolute top-3 sm:top-6 left-3 sm:left-6 z-15 flex items-center gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/50 text-amber-300 text-[10px] sm:text-xs font-bold shadow-lg">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse" />
              <span>LIVE BANDSTAND · FOX ST</span>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 z-15">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[10px] sm:text-xs font-bold mb-1.5 sm:mb-2">
                  <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />
                  <span>The Resident Quartet</span>
                </div>
                
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black font-display text-white drop-shadow-lg leading-tight">
                  Saxophone · Keys · Drums · Bass
                </h3>
                
                <p className="text-[11px] sm:text-sm text-zinc-300 max-w-lg mt-1 drop-shadow leading-relaxed line-clamp-2 sm:line-clamp-none">
                  Performing right by the front Fox Street window under the illuminated Pata Pata Live Music neon sign every weekend.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(245,158,11,0.5)]"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black" />
                  <span>Book Front-Row Table</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Weekly Sessions Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sessions.map((session, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-zinc-950/80 border ${session.accentColor} hover:bg-zinc-900/60 transition-all flex flex-col justify-between group relative overflow-hidden`}
            >
              <div>
                {/* Day & Time Header */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-zinc-900">
                  <div className="flex items-center gap-2">
                    <Music2 className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-white text-sm">{session.day}</span>
                  </div>
                  <span className="text-xs font-mono text-amber-300 flex items-center gap-1 font-semibold">
                    <Clock className="w-3 h-3 text-orange-400" />
                    {session.time}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {session.title}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {session.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900/80 text-xs">
                <div className="text-[11px] text-zinc-400 mb-3">
                  <span className="text-amber-400 font-semibold">Stage:</span> {session.stage} · {session.vibe}
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-200 hover:text-black hover:bg-amber-400 transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-amber-400 group-hover:text-black" />
                  <span>Call to book for {session.day.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Jazz Seating & Desk Calling Tip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950/30 via-zinc-950 to-orange-950/30 border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-black border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-1">
              <Radio className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base font-bold font-display text-white mb-1">
                Insider Tip: Frontline Bandstand Tables
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
                As seen in the photo, the wooden tables immediately next to the saxophone and keys deliver the full high-fidelity acoustic jazz warmth. When you call our front desk host (+27 11 334 0470), ask for <em>&ldquo;Bandstand Front Stage&rdquo;</em> seating.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full lg:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shrink-0 flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(245,158,11,0.4)]"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>Call Desk (+27 11 334 0470)</span>
          </button>
        </div>

      </div>
    </section>
  );
}
