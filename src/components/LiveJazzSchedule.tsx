import { Music2, Clock, Phone, Radio, Volume2 } from 'lucide-react';
import { MiriamMakebaSilhouette, DancingCoupleSilhouette, UprightBassSilhouette, VINTAGE_MIRIAM_SKETCH } from './JazzSketches';
import { AfricanContinentSVG, AfricanGeometricDivider } from './AfricanMotifs';
import { VintagePhotoFrame } from './VintagePhotoFrame';

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
      vibe: 'Full quartet · Dinner & swing',
      stage: 'Front Window Bandstand',
      silhouette: <MiriamMakebaSilhouette className="w-8 h-9 opacity-80" />,
    },
    {
      day: 'Saturday Evenings',
      time: '19:30 – 23:00',
      title: 'The Modern African Jazz Collective',
      description: 'Soulful keyboard progressions and Hugh Masekela & Abdullah Ibrahim classics played under warm dinner lights.',
      vibe: 'Soulful · Saxophone & piano',
      stage: 'Bandstand & Dining Hall',
      silhouette: <UprightBassSilhouette className="w-7 h-9 text-stone-400 opacity-80" />,
    },
    {
      day: 'Sunday Afternoons',
      time: '14:00 – 18:00',
      title: 'Sunday Soul Sessions & Vinyl Groove',
      description: 'Daytime groove by the open Fox Street window. Mellow bass, cold craft beers, and slow-braised oxtail with family.',
      vibe: 'Relaxed · Family friendly',
      stage: 'Street-Facing Bandstand',
      silhouette: <DancingCoupleSilhouette className="w-8 h-9 opacity-80" />,
    },
  ];

  return (
    <section id="jazz" className="py-16 sm:py-20 bg-[#1c1b19] text-stone-100 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Silhouettes */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <MiriamMakebaSilhouette className="w-8 h-9 opacity-85 hidden sm:block" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Live Music Residency · Friday, Saturday &amp; Sunday
            </span>
            <AfricanContinentSVG className="w-7 h-8" />
            <DancingCoupleSilhouette className="w-8 h-8 opacity-85 hidden sm:block" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-display text-white mb-3">
            The Sound of Pata Pata
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Tenor saxophone, synthesizer, soulful upright grooves, and the timeless marabi heartbeat of Johannesburg filling 286 Fox Street every weekend.
          </p>
        </div>

        {/* Band Photo Showcase in Antique Gilded Baroque Gold Frame */}
        <div className="mb-8 max-w-5xl mx-auto">
          <VintagePhotoFrame
            src={bandPhotoUrl}
            alt="Pata Pata live jazz band performing at the Fox Street window bandstand"
            aspectRatio="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]"
            plateText="286 FOX STREET • WINDOW BANDSTAND • LIVE RESIDENT QUARTET"
            caption="Tenor sax, synthesizer, drums & upright bass every Friday, Saturday & Sunday"
            frameSize="lg"
          />

          {/* Under-frame Quick Booking Strip */}
          <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-[#242220] border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2.5 text-xs text-stone-300">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
              <span className="font-bold text-white">Weekend Live Sets:</span>
              <span>Fri &amp; Sat from 19:30 · Sun from 14:00</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-sm shrink-0"
            >
              <Phone className="w-3.5 h-3.5 fill-stone-950" />
              <span>Book Stage Table (+27 11 334 0470)</span>
            </button>
          </div>
        </div>

        {/* Vintage Sketch Spotlight: Mama Africa Miriam Makeba */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#242220] border border-stone-800 shadow-md mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0 border border-stone-800 bg-[#1c1b19] flex items-center justify-center p-1">
            <img
              src={VINTAGE_MIRIAM_SKETCH}
              alt="Vintage chalk sketch of Miriam Makeba singing"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-amber-400 mb-1">
              <span>Living Marabi Tradition</span>
              <span>·</span>
              <span>Mama Africa Tribute</span>
            </div>
            <h4 className="text-base font-bold font-display text-white mb-1">
              The Lineage of Johannesburg&apos;s Jazz Masters
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed max-w-2xl">
              From the shebeens of Sophiatown to 286 Fox Street, the raw acoustic spirit of Miriam Makeba and Marabi jazz has been the beating soul of South African resilience, celebration, and storytelling.
            </p>
          </div>
          <div className="shrink-0 hidden md:block">
            <DancingCoupleSilhouette className="w-18 h-16 opacity-80" />
          </div>
        </div>

        {/* 3 Weekly Sessions Breakdown with Silhouettes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {sessions.map((session, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-[#242220] border border-stone-800 hover:border-stone-700 transition-colors flex flex-col justify-between shadow-md"
            >
              <div>
                {/* Day & Time Header */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-800">
                  <div className="flex items-center gap-1.5">
                    <Music2 className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-white text-sm">{session.day}</span>
                  </div>
                  <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {session.time}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-white">
                    {session.title}
                  </h3>
                  {session.silhouette}
                </div>

                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  {session.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800 text-xs">
                <div className="text-xs text-stone-400 mb-3">
                  <span className="font-semibold text-stone-200">Stage:</span> {session.stage} · {session.vibe}
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 px-3 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>Call to book for {session.day.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Jazz Seating Tip */}
        <div className="p-6 rounded-xl bg-[#242220] border border-stone-800 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-md">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-700 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">
                Frontline Stage Seating
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
                The wooden tables directly by the stage and keys provide intimate acoustic warmth. When calling our front desk (+27 11 334 0470), you can request <em>&ldquo;Bandstand Front Stage&rdquo;</em> seating.
              </p>
            </div>
          </div>

          <a
            href="tel:+27113340470"
            className="w-full lg:w-auto px-6 py-2.5 rounded-lg bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0 flex items-center justify-center gap-2 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-stone-950" />
            <span>Call Desk (+27 11 334 0470)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
