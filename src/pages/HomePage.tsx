import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Music, BookOpen, Compass, MapPin, Phone } from 'lucide-react';
import { Hero } from '../components/Hero';
import { FamilySection } from '../components/FamilySection';
import { SaxophoneSilhouette, DancingCoupleSilhouette } from '../components/JazzSketches';
import { VinylRecordBadge, VintageStampBadge } from '../components/VintageAccents';

interface HomePageProps {
  onOpenBooking: () => void;
}

export function HomePage({ onOpenBooking }: HomePageProps) {
  const featuredDishes = [
    {
      name: 'Pata Pata Mogodu & Dombolo',
      price: 'R145',
      tag: 'Heritage Special',
      description: 'Slow-simmered beef tripe in deeply aromatic spiced broth, served with freshly steamed traditional dumpling bread.',
    },
    {
      name: 'Traditional Oxtail Potjie',
      price: 'R215',
      tag: 'Chef’s Signature',
      description: 'Slow-simmered for 6 hours in Cape Pinotage reduction, sweet baby carrots, fresh herbs and soft creamy pap.',
    },
    {
      name: 'Fox Street Flame T-Bone (400g)',
      price: 'R195',
      tag: 'Charcoal Braai',
      description: 'Charcoal-grilled prime aged cut seasoned in our secret marabi spice rub, with roasted marrow and hot chakalaka.',
    },
    {
      name: 'Miriam Makeba Cocktail',
      price: 'R88',
      tag: 'Signature Libation',
      description: 'Amarula cream, dark rum, cold brew espresso, roasted coconut flake rim, served on chipped rock ice.',
    },
  ];

  return (
    <div className="bg-white text-stone-900">
      {/* 1. Clean, Humble Hero */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Simple Page Navigation Hub */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-stone-200">
            <div>
              <h2 className="text-lg font-bold text-stone-950">Explore Pata Pata</h2>
              <p className="text-xs text-stone-600">Everything you need to know about our Fox Street restaurant</p>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              286 Fox St · Maboneng, Johannesburg
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <Link
              to="/menu"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-black transition-colors flex flex-col justify-between group shadow-2xs"
            >
              <div className="flex items-center justify-between text-stone-900 mb-3">
                <Utensils className="w-4 h-4 text-stone-700" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-stone-400" />
              </div>
              <div>
                <span className="text-sm font-bold text-stone-950 block">Menu</span>
                <span className="text-xs text-stone-500">Mogodu, potjies & braai</span>
              </div>
            </Link>

            <Link
              to="/story"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-black transition-colors flex flex-col justify-between group shadow-2xs"
            >
              <div className="flex items-center justify-between text-stone-900 mb-3">
                <BookOpen className="w-4 h-4 text-stone-700" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-stone-400" />
              </div>
              <div>
                <span className="text-sm font-bold text-stone-950 block">Our Story</span>
                <span className="text-xs text-stone-500">1960s Makeba heritage</span>
              </div>
            </Link>

            <Link
              to="/atmosphere"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-black transition-colors flex flex-col justify-between group shadow-2xs"
            >
              <div className="flex items-center justify-between text-stone-900 mb-3">
                <Compass className="w-4 h-4 text-stone-700" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-stone-400" />
              </div>
              <div>
                <span className="text-sm font-bold text-stone-950 block">Atmosphere</span>
                <span className="text-xs text-stone-500">Spaces & photography</span>
              </div>
            </Link>

            <Link
              to="/jazz"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-black transition-colors flex flex-col justify-between group shadow-2xs"
            >
              <div className="flex items-center justify-between text-stone-900 mb-3">
                <Music className="w-4 h-4 text-stone-700" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-stone-400" />
              </div>
              <div>
                <span className="text-sm font-bold text-stone-950 block">Live Jazz</span>
                <span className="text-xs text-stone-500">Weekend performance sets</span>
              </div>
            </Link>

            <Link
              to="/location"
              className="p-4 rounded-xl bg-white border border-stone-200 hover:border-black transition-colors flex flex-col justify-between group shadow-2xs col-span-2 sm:col-span-1"
            >
              <div className="flex items-center justify-between text-stone-900 mb-3">
                <MapPin className="w-4 h-4 text-stone-700" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-stone-400" />
              </div>
              <div>
                <span className="text-sm font-bold text-stone-950 block">Visit Us</span>
                <span className="text-xs text-stone-500">Hours, map & contacts</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. The Pata Pata Family (Head Chef & Servers) */}
      <FamilySection />

      {/* 4. Featured Menu Snippet */}
      <section className="py-14 border-t border-stone-200 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                  Traditional Kitchen
                </span>
                <VintageStampBadge text="EST. 1960s SOPHIATOWN RECIPES" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-stone-950">
                Signature South African Dishes
              </h2>
            </div>
            
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900 hover:underline"
            >
              <span>Explore Complete Menu</span>
              <ArrowRight className="w-4 h-4 text-stone-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {featuredDishes.map((dish, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-stone-200 hover:border-stone-400 transition-colors flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                      {dish.tag}
                    </span>
                    <span className="text-base font-bold text-stone-950 tabular-nums">
                      {dish.price}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-stone-950 mb-1.5">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-mono">Traditional</span>
                  <Link
                    to="/menu"
                    className="text-stone-900 hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 text-stone-500" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white font-semibold text-xs sm:text-sm hover:bg-stone-800 transition-colors shadow-sm"
            >
              <Utensils className="w-4 h-4" />
              <span>Open Online Menu Page</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Live Jazz Spotlight */}
      <section className="py-14 border-t border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-800">
                    <Music className="w-3.5 h-3.5 text-stone-900" />
                    <span>Weekend Jazz Residency</span>
                  </div>
                  <VinylRecordBadge label="45 RPM SOUL" sublabel="KWELA &amp; SWING" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-2xl sm:text-3xl font-black font-display text-stone-950 mb-3">
                    Live Afro-Jazz Right by Fox Street
                  </h2>
                  <DancingCoupleSilhouette className="w-12 h-12 text-stone-900 opacity-60 hidden sm:block shrink-0" />
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-6 font-serif italic">
                  Experience our house quartet—tenor saxophone, keys, upright bass, and drums—filling Fox Street with marabi warmth every Friday, Saturday, and Sunday evening.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/jazz"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors"
                  >
                    <span>View Jazz Lineup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-stone-300 text-stone-900 font-semibold text-xs hover:bg-stone-100 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Reserve a Table</span>
                  </button>
                </div>
              </div>

              {/* Band Photo Card */}
              <div className="w-full lg:w-80 rounded-xl overflow-hidden border border-stone-200 bg-white shadow-sm shrink-0">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-27_at_12.36.43_PM_55c5dbcc.jpeg"
                    alt="Pata Pata live jazz bandstand"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-xs text-center border-t border-stone-100">
                  <span className="font-bold text-stone-950 block">The Resident Quartet</span>
                  <span className="text-stone-500">Performing Fri & Sat 19:30 · Sun 14:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Desk Call & Reservations Banner */}
      <section className="py-12 border-t border-stone-200 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-950 mb-2">
            Ready to Join Us at Pata Pata?
          </h3>
          <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
            Call our front desk host directly at <strong className="text-stone-950">+27 11 334 0470</strong> to reserve your spot, or walk in any time.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+27113340470"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white font-semibold text-xs sm:text-sm hover:bg-stone-800 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Desk: +27 11 334 0470</span>
            </a>

            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-stone-300 text-stone-900 font-semibold text-xs sm:text-sm hover:bg-stone-100 transition-colors"
            >
              <span>Desk Booking Planner</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
