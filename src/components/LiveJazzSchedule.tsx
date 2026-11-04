import { Music2, Clock, Phone, Radio, Volume2 } from 'lucide-react';
import { SaxophoneSilhouette, DancingCoupleSilhouette, UprightBassSilhouette, VINTAGE_SAX_SKETCH } from './JazzSketches';
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
      silhouette: <SaxophoneSilhouette className="w-8 h-9 text-stone-900 opacity-60" />,
    },
    {
      day: 'Saturday Evenings',
      time: '19:30 – 23:00',
      title: 'The Modern African Jazz Collective',
      description: 'Soulful keyboard progressions and Hugh Masekela & Abdullah Ibrahim classics played under warm dinner lights.',
      vibe: 'Soulful · Saxophone & piano',
      stage: 'Bandstand & Dining Hall',
      silhouette: <UprightBassSilhouette className="w-7 h-9 text-stone-900 opacity-60" />,
    },
    {
      day: 'Sunday Afternoons',
      time: '14:00 – 18:00',
      title: 'Sunday Soul Sessions & Vinyl Groove',
      description: 'Daytime groove by the open Fox Street window. Mellow bass, cold craft beers, and slow-braised oxtail with family.',
      vibe: 'Relaxed · Family friendly',
      stage: 'Street-Facing Bandstand',
      silhouette: <DancingCoupleSilhouette className="w-8 h-9 text-stone-900 opacity-60" />,
    },
  ];

  return (
    <section id="jazz" className="py-16 sm:py-20 bg-stone-50 text-stone-900 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Silhouettes */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <SaxophoneSilhouette className="w-7 h-8 text-stone-900 opacity-75 hidden sm:block" />
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              Live Music Residency · Friday, Saturday &amp; Sunday
            </span>
            <AfricanContinentSVG className="w-6 h-7 text-stone-900 opacity-80" showJoburgStar={true} />
            <DancingCoupleSilhouette className="w-8 h-8 text-stone-900 opacity-75 hidden sm:block" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-display text-stone-950 mb-3">
            The Sound of Pata Pata
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Tenor saxophone, synthesizer, soulful upright grooves, and the timeless marabi heartbeat of Johannesburg filling 286 Fox Street every weekend.
          </p>
        </div>

        {/* Band Photo Showcase in 1960s Archival Frame */}
        <div className="mb-8 max-w-5xl mx-auto">
          <VintagePhotoFrame
            src={bandPhotoUrl}
            alt="Pata Pata live jazz band performing at the Fox Street window bandstand"
            aspectRatio="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]"
            plateText="286 FOX STREET • WINDOW BANDSTAND • LIVE RESIDENT QUARTET"
            caption="Tenor sax, synthesizer, drums & upright bass every Friday, Saturday & Sunday"
            showCorners={true}
          />

          {/* Under-frame Quick Booking Strip */}
          <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-2.5 text-xs text-stone-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shrink-0" />
              <span className="font-bold text-stone-950">Weekend Live Sets:</span>
              <span>Fri &amp; Sat from 19:30 · Sun from 14:00</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Stage Table (+27 11 334 0470)</span>
            </button>
          </div>
        </div>

        {/* Vintage Sketch Spotlight: The Elder Saxophonist */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-2xs mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0 border border-stone-200 bg-stone-50">
            <img
              src={VINTAGE_SAX_SKETCH}
              alt="Vintage ink sketch of elderly African jazz musician playing saxophone"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase font-bold tracking-wider text-stone-500 mb-1">
              <span>Living Marabi Tradition</span>
              <span>·</span>
              <span>Hand-Drawn Vintage Sketch</span>
            </div>
            <h4 className="text-base font-bold font-display text-stone-950 mb-1">
              The Lineage of Johannesburg&apos;s Jazz Masters
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed max-w-2xl">
              From the shebeens of Sophiatown to 286 Fox Street, the raw acoustic power of the tenor saxophone has been the beating soul of South African resilience, celebration, and storytelling.
            </p>
          </div>
          <div className="shrink-0 hidden md:block">
            <DancingCoupleSilhouette className="w-16 h-16 text-stone-900 opacity-70" />
          </div>
        </div>

        {/* 3 Weekly Sessions Breakdown with Silhouettes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {sessions.map((session, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200 hover:border-stone-400 transition-colors flex flex-col justify-between shadow-2xs"
            >
              <div>
                {/* Day & Time Header */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-100">
                  <div className="flex items-center gap-1.5">
                    <Music2 className="w-4 h-4 text-stone-700" />
                    <span className="font-bold text-stone-950 text-sm">{session.day}</span>
                  </div>
                  <span className="text-xs font-mono text-stone-600 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-500" />
                    {session.time}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-stone-950">
                    {session.title}
                  </h3>
                  {session.silhouette}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {session.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs">
                <div className="text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-stone-800">Stage:</span> {session.stage} · {session.vibe}
                </div>
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 px-3 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-stone-700" />
                  <span>Call to book for {session.day.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Jazz Seating Tip */}
        <div className="p-6 rounded-xl bg-white border border-stone-200 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-2xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-900 shrink-0 mt-0.5">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-950 mb-0.5">
                Frontline Stage Seating
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
                The wooden tables directly by the saxophone and keys provide intimate acoustic warmth. When calling our front desk (+27 11 334 0470), you can request <em>&ldquo;Bandstand Front Stage&rdquo;</em> seating.
              </p>
            </div>
          </div>

          <a
            href="tel:+27113340470"
            className="w-full lg:w-auto px-6 py-2.5 rounded-lg bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shrink-0 flex items-center justify-center gap-2 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Desk (+27 11 334 0470)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
