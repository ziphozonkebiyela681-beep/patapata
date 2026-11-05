import { useState } from 'react';
import { MapPin, Phone, ShieldCheck, Navigation, ExternalLink, Camera, X, Maximize2 } from 'lucide-react';
import { InstagramIcon, TikTokIcon, SOCIAL_LINKS } from './SocialIcons';
import { DancingCoupleSilhouette, MiriamMakebaSilhouette } from './JazzSketches';
import { VintageStampBadge, VintageDoubleRule } from './VintageAccents';
import { AfricanContinentSVG, AfricanGeometricDivider } from './AfricanMotifs';
import { VintagePhotoFrame } from './VintagePhotoFrame';

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
    badge: 'Outdoor Veranda',
    tagline: 'Under Fox Street Chandeliers',
    title: 'Evening on Fox Street',
    description: 'Pavement dining beneath our hanging chandeliers, covered street awnings, and the vibrant evening pulse of Maboneng.',
    vibe: 'Al Fresco · Chandeliers · Street Life',
  },
  {
    id: 'entrance',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_4.09.08_PM__1__4928af90.jpg',
    badge: 'The Welcome',
    tagline: 'Step Through 286 Fox',
    title: 'Warm Greeting at the Door',
    description: 'Our team welcomes you at the open steel French doors beneath the Pata Pata sign, ready to find your table.',
    vibe: 'Warm Greeting · Industrial Glass · Fox Street',
  },
  {
    id: 'patrons',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_4.09.08_PM_38abf8e9.jpg',
    badge: 'The Community',
    tagline: 'Regulars, Artists & Friends',
    title: 'The Heart of the Room',
    description: 'The authentic soul of Pata Pata — dear patrons, jazz lovers, and friends gathered together beneath our vintage pressed-tin ceiling tiles and overhead bicycle.',
    vibe: 'Community · Heritage Wall · Living Room Soul',
  },
];

export function LocationAndHours({ onOpenBooking }: LocationAndHoursProps) {
  const gmapsUrl = 'https://maps.google.com/?q=Pata+Pata+286+Fox+Street+Maboneng+Johannesburg';
  const [activePhoto, setActivePhoto] = useState<FoxStreetScene | null>(null);

  return (
    <section id="location" className="py-16 sm:py-20 bg-[#1c1b19] text-stone-100 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 1960s Detailing */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Maboneng Arts District
            </span>
            <VintageStampBadge text="FOX STREET TELEGRAM • 1967" />
          </div>
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white mb-3">
              Find Us on Fox Street
            </h2>
            <MiriamMakebaSilhouette className="w-8 h-9 opacity-80 hidden sm:block" />
          </div>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-serif italic">
            Nestled in the creative heart of eastern downtown Johannesburg, surrounded by street murals, vibrant energy, and the rhythm of the city.
          </p>
        </div>

        {/* 2-Column Split: Details & Venue Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-14">
          
          {/* Details Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#242220] border border-stone-800 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-950 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 fill-stone-950" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">286 Fox Street</h3>
                  <span className="text-xs text-stone-400 font-medium">Maboneng, Johannesburg, 2094</span>
                </div>
              </div>

              {/* Service Timetable */}
              <div className="space-y-2 mb-6">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400 block mb-2 font-mono">
                  Operating Hours (Open 7 Days a Week)
                </span>
                
                <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-stone-800">
                  <span className="text-stone-300">Monday – Thursday</span>
                  <span className="font-mono text-white font-semibold">08:00 – 23:00</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-stone-800">
                  <span className="text-stone-300">Friday &amp; Saturday (Live Jazz)</span>
                  <span className="font-mono text-amber-400 font-bold">08:00 – Late</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-stone-800">
                  <span className="text-stone-300">Sunday (Soul &amp; Lunch)</span>
                  <span className="font-mono text-white font-semibold">08:00 – 22:00</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm py-2 text-stone-400">
                  <span>Front Desk Lines</span>
                  <span className="font-mono text-stone-200 font-medium">Calls answered daily</span>
                </div>
              </div>

              {/* Precinct Notes */}
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 mb-6 space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-white font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Precinct Security &amp; Parking</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  Fox Street features 24/7 dedicated Maboneng precinct security marshals. Street parking is available along Fox &amp; Kruger Streets with friendly local car guards.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-stone-800">
              <a
                href={gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-xs font-semibold text-stone-200 hover:bg-stone-800 hover:text-white transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              <button
                onClick={onOpenBooking}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-stone-100 text-stone-950 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 fill-stone-950" />
                <span>Call Desk (+27 11 334 0470)</span>
              </button>
            </div>
          </div>

          {/* Neighborhood Cultural Box */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#242220] border border-stone-800 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold font-mono">
                  Neighborhood Landmarks
                </span>
                <span className="text-xs text-stone-400 font-mono">Joburg East</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                In Good Company on Fox Street
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                Make an entire visit out of your time on Fox Street. We are situated within short walking distance of cultural landmarks:
              </p>

              {/* Landmarks List */}
              <div className="space-y-2.5 mb-6">
                <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-start justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">Arts on Main</span>
                    <span className="text-stone-400">Artist studios, galleries &amp; Sunday market</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-amber-400 shrink-0">50m away</span>
                </div>

                <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-start justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">The Bioscope Independent Cinema</span>
                    <span className="text-stone-400">Classic cinema &amp; indie African film screenings</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-amber-400 shrink-0">120m away</span>
                </div>

                <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-start justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">Drivelines Studios</span>
                    <span className="text-stone-400">Upcycled shipping container architecture</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-amber-400 shrink-0">200m away</span>
                </div>
              </div>
            </div>

            {/* Direct Dial Reminder */}
            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-xs">
              <span className="text-white font-bold block mb-1">
                Lost or need street directions?
              </span>
              <p className="text-stone-300 mb-3">
                Call our front desk host directly at <strong className="text-white">+27 11 334 0470</strong> and we will guide you to our front doors.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-800">
                <a
                  href="tel:+27113340470"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Desk for Directions</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 transition-colors"
                    title="Instagram @pata.pata_maboneng"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 transition-colors"
                    title="TikTok @pata.pata_maboneng"
                  >
                    <TikTokIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Fox Street Scenes (End of Find Us on Fox Street Section) */}
        <div className="pt-10 border-t border-stone-800">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-400/80 font-bold mb-1">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                <span>Scenes from 286 Fox Street</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-stone-100">
                The Veranda, The Welcome & The Regulars
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              From pavement dining under the chandeliers to our open front doors and the community that fills this room every day.
            </p>
          </div>

          {/* African Geometric Line */}
          <AfricanGeometricDivider className="my-6" />

          {/* 3-Photo Grid in 1960s Archival Frames */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOX_STREET_SCENES.map((scene) => (
              <div
                key={scene.id}
                onClick={() => setActivePhoto(scene)}
                className="cursor-pointer group flex flex-col justify-between"
              >
                <VintagePhotoFrame
                  src={scene.image}
                  alt={scene.title}
                  aspectRatio="aspect-[4/3] sm:aspect-[4/5]"
                  plateText={scene.badge}
                  caption={scene.tagline}
                  showCorners={true}
                />

                {/* Content underneath frame */}
                <div className="mt-2.5 p-3 rounded-lg bg-[#242220] border border-stone-800">
                  <h4 className="text-sm font-bold text-stone-100 mb-1">
                    {scene.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed mb-2">
                    {scene.description}
                  </p>
                  <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs">
                    <span className="text-stone-400 font-mono text-[11px]">{scene.vibe}</span>
                    <span className="text-amber-400 font-semibold group-hover:underline">
                      Enlarge View →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-[#242220] border border-stone-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-stone-800/90 hover:bg-stone-700 flex items-center justify-center text-stone-200 transition-colors shadow-sm border border-stone-700"
              aria-label="Close photo view"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="md:w-3/5 bg-stone-950 flex items-center justify-center">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="max-h-[50vh] md:max-h-[75vh] w-auto object-contain"
              />
            </div>

            {/* Modal Details */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-stone-800 border border-stone-700 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                  {activePhoto.badge}
                </span>
                <h3 className="text-xl font-bold font-display text-stone-100 mb-1">
                  {activePhoto.title}
                </h3>
                <p className="text-xs font-mono text-amber-400/80 mb-3">
                  {activePhoto.tagline}
                </p>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                  {activePhoto.description}
                </p>
                <div className="p-3 rounded-lg bg-[#1c1b19] border border-stone-800 text-xs mb-4">
                  <span className="text-stone-400 block text-[11px] uppercase">Atmosphere</span>
                  <span className="text-stone-200 font-medium">{activePhoto.vibe}</span>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-stone-800">
                <button
                  onClick={() => {
                    setActivePhoto(null);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Desk (+27 11 334 0470)</span>
                </button>
                <a
                  href={gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
