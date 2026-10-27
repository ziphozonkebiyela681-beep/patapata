import { useState } from 'react';
import { MapPin, Phone, ShieldCheck, Navigation, ExternalLink, Camera, Sparkles, X, Maximize2 } from 'lucide-react';
import { CandleFlame, JazzyPatternRibbon } from './CandlelightVibe';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from './SocialIcons';

interface LocationAndHoursProps {
  onOpenBooking: () => void;
}

interface FoxStreetScene {
  id: string;
  image: string;
  badge: string;
  tagline: string;
  title: string;
  description: string;
  vibe: string;
}

const FOX_STREET_SCENES: FoxStreetScene[] = [
  {
    id: 'veranda',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_4.15.08_PM_c1e139f2.jpeg',
    badge: 'Outdoor Dining',
    tagline: 'Under Fox Street Chandeliers',
    title: 'Evening on Fox Street',
    description: 'Pavement dining beneath our glowing suspended chandeliers, covered street awnings, and the vibrant evening pulse of Maboneng.',
    vibe: 'Al Fresco · Chandeliers · Street Culture',
  },
  {
    id: 'entrance',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_4.09.08_PM_38abf8e9.jpg',
    badge: 'The Welcome',
    tagline: 'Step Through 286 Fox',
    title: 'The Open Doorway',
    description: 'Our team welcomes you at the iconic multi-pane steel & glass entrance beneath the bold Pata Pata geometric signage.',
    vibe: 'Warm Greeting · Industrial Glass · Maboneng Gateway',
  },
  {
    id: 'patrons',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_4.09.08_PM__1__4928af90.jpg',
    badge: 'The Community',
    tagline: 'Regulars, Artists & Friends',
    title: 'The Heart of the Room',
    description: 'The authentic soul of Pata Pata — dear patrons, jazz lovers, and friends gathered together beneath our vintage pressed-tin ceiling tile wall and overhead bicycle.',
    vibe: 'Community · Heritage Wall · Living Room Soul',
  },
];

export function LocationAndHours({ onOpenBooking }: LocationAndHoursProps) {
  const gmapsUrl = 'https://maps.google.com/?q=Pata+Pata+286+Fox+Street+Maboneng+Johannesburg';
  const [activePhoto, setActivePhoto] = useState<FoxStreetScene | null>(null);

  return (
    <section id="location" className="relative py-24 bg-transparent text-white border-t border-amber-950/40 overflow-hidden">
      
      {/* Background warm ember lights */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-gradient-to-l from-red-600/10 via-orange-500/15 to-yellow-400/10 rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            <CandleFlame className="scale-75" />
            <span>Maboneng Arts District</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white mb-3">
            Find Us on Fox Street
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Nestled in the creative heart of eastern downtown Johannesburg, surrounded by street murals, vibrant energy, and the rhythm of the city.
          </p>
        </div>

        {/* Jazzy Pattern Ribbon */}
        <div className="mb-14 max-w-xl mx-auto">
          <JazzyPatternRibbon />
        </div>

        {/* 2-Column Split: Details & Venue Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-zinc-950 border border-amber-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-black border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">286 Fox Street</h3>
                  <span className="text-xs text-amber-300 font-medium">Maboneng, Johannesburg, 2094</span>
                </div>
              </div>

              {/* Service Timetable */}
              <div className="space-y-3 mb-8">
                <span className="text-xs uppercase tracking-widest font-bold text-amber-400 block mb-2">
                  Operating Hours (7 Days a Week)
                </span>
                
                <div className="flex items-center justify-between text-xs py-2 border-b border-zinc-900">
                  <span className="text-zinc-300">Monday – Thursday</span>
                  <span className="font-mono text-white font-semibold">08:00 AM – 23:00 PM</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-zinc-900">
                  <span className="text-zinc-300 flex items-center gap-1.5">
                    <span>Friday & Saturday (Live Jazz & Candles)</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  </span>
                  <span className="font-mono text-amber-400 font-bold">08:00 AM – Late</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-zinc-900">
                  <span className="text-zinc-300">Sunday (Soul & Chill)</span>
                  <span className="font-mono text-white font-semibold">08:00 AM – 22:00 PM</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 text-zinc-400">
                  <span>Front Desk Phone Lines</span>
                  <span className="font-mono text-amber-300 font-semibold">Active throughout service</span>
                </div>
              </div>

              {/* Precinct Notes */}
              <div className="p-4 rounded-xl bg-black/70 border border-amber-500/20 mb-6 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Precinct Safety & Parking</span>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  Fox Street features 24/7 dedicated Maboneng precinct security marshals. Secure street parking is available along Fox & Kruger Streets, with friendly local car guards assisting guests.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-900">
              <a
                href={gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-xs font-bold text-white hover:bg-zinc-800 transition-colors"
              >
                <Navigation className="w-4 h-4 text-orange-400" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              <button
                onClick={onOpenBooking}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black text-xs font-extrabold uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              >
                <Phone className="w-3.5 h-3.5 fill-black" />
                <span>Call Desk to Book</span>
              </button>
            </div>
          </div>

          {/* Map & Neighborhood Visual Landmark Box */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-zinc-950 border border-amber-500/30 flex flex-col justify-between relative overflow-hidden">
            
            {/* Visual Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Neighborhood Landmarks
                </span>
                <span className="text-xs text-amber-300 font-mono">Joburg East</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-3">
                In Good Company on Fox Street
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                Make an entire day or evening of your visit to Pata Pata. We are situated within walking distance of key cultural icons:
              </p>

              {/* Landmarks List */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-black border border-zinc-850 flex items-start justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">Arts on Main</span>
                    <span className="text-zinc-400">Contemporary artist studios, galleries & Sunday market</span>
                  </div>
                  <span className="text-[11px] text-amber-400 font-mono font-bold shrink-0">50m away</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black border border-zinc-850 flex items-start justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">The Bioscope Independent Cinema</span>
                    <span className="text-zinc-400">Classic cinema & indie African film screenings</span>
                  </div>
                  <span className="text-[11px] text-orange-400 font-mono font-bold shrink-0">120m away</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black border border-zinc-850 flex items-start justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">Drivelines Studios</span>
                    <span className="text-zinc-400">Iconic upcycled shipping container architecture</span>
                  </div>
                  <span className="text-[11px] text-red-400 font-mono font-bold shrink-0">200m away</span>
                </div>
              </div>
            </div>

            {/* Direct Dial Reminder */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-orange-950/30 to-black border border-amber-500/30 text-xs">
              <span className="text-amber-400 font-bold block mb-1">
                Lost or need street directions?
              </span>
              <p className="text-zinc-300 mb-2">
                Call our front desk host directly at <strong className="text-white">+27 11 334 0470</strong> and we will guide you to our front doors.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-zinc-800/80">
                <a
                  href="tel:+27113340470"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-bold hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Desk for Directions</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-black/60 hover:bg-zinc-900 border border-amber-500/30 text-amber-300 hover:text-white transition-colors"
                    title="Instagram @pata.pata_maboneng"
                    aria-label="Instagram @pata.pata_maboneng"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-black/60 hover:bg-zinc-900 border border-amber-500/30 text-amber-300 hover:text-white transition-colors"
                    title="TikTok @pata.pata_maboneng"
                    aria-label="TikTok @pata.pata_maboneng"
                  >
                    <TikTokIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Fox Street Arrival & Atmosphere Showcase (User Photo Section) */}
        <div className="mt-16 pt-12 border-t border-amber-950/40">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                <span>Scenes from 286 Fox Street</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                The Veranda, The Welcome & The Regulars
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md">
              From pavement dining under the chandeliers to our open front doors and the community that fills this room with soul every day.
            </p>
          </div>

          {/* 3-Photo Responsive Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOX_STREET_SCENES.map((scene) => (
              <div
                key={scene.id}
                onClick={() => setActivePhoto(scene)}
                className="group cursor-pointer rounded-3xl bg-zinc-950 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={scene.image}
                    alt={scene.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {scene.badge}
                    </span>
                  </div>

                  {/* Top Right Zoom Icon */}
                  <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 rounded-full bg-black/80 backdrop-blur-md border border-amber-400 flex items-center justify-center text-amber-300">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tagline */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 pointer-events-none">
                    <span className="text-[11px] font-mono text-amber-300 font-semibold uppercase tracking-wider">
                      {scene.tagline}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors mb-1.5">
                      {scene.title}
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                      {scene.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px]">
                    <span className="text-amber-400/90 font-mono font-medium">
                      {scene.vibe}
                    </span>
                    <span className="text-zinc-400 group-hover:text-amber-300 font-bold transition-colors">
                      View Photo →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Full View */}
      {activePhoto && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-zinc-950 border border-amber-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-red-950/80 border border-zinc-700 hover:border-red-500 flex items-center justify-center text-white transition-colors"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center p-2">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[60vh] md:max-h-[80vh] w-auto object-contain rounded-2xl"
              />
            </div>

            {/* Modal Details */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black border border-amber-500/40 text-xs font-bold text-amber-300 uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activePhoto.badge}</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  {activePhoto.title}
                </h3>
                <p className="text-xs font-mono text-amber-300 font-semibold mb-4">
                  {activePhoto.tagline}
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {activePhoto.description}
                </p>
                <div className="p-3.5 rounded-xl bg-black border border-zinc-800 text-xs space-y-1 mb-6">
                  <span className="text-zinc-400 block font-mono text-[11px] uppercase">Fox Street Atmosphere</span>
                  <span className="text-amber-300 font-medium">{activePhoto.vibe}</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-900">
                <button
                  onClick={() => {
                    setActivePhoto(null);
                    onOpenBooking();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 fill-black" />
                  <span>Call Desk for a Table (+27 11 334 0470)</span>
                </button>
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-750 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Directions to 286 Fox Street</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

