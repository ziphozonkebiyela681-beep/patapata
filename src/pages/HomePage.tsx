import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Music, BookOpen, Compass, MapPin, Phone, Flame, Sparkles } from 'lucide-react';
import { Hero } from '../components/Hero';
import { FamilySection } from '../components/FamilySection';
import { CandleFlame, JazzyPatternRibbon } from '../components/CandlelightVibe';

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
    <div className="space-y-6">
      {/* 1. Hero with Potjie Dining Room Background and Pure Signature Logotype */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Multi-Page Exploration Quick Hub */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="p-4 sm:p-6 rounded-2xl bg-zinc-950/80 border border-amber-500/30 backdrop-blur-md shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <CandleFlame className="scale-65" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
                Explore Pata Pata Multi-Page Experience
              </span>
            </div>
            <span className="text-xs text-zinc-400 font-mono">
              286 Fox Street · Maboneng, Johannesburg
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            <Link
              to="/menu"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400 hover:bg-zinc-850 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-yellow-400 mb-2">
                <Utensils className="w-4 h-4" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Online Menu</span>
                <span className="text-[10px] text-zinc-400">Mogodu, potjies & braai</span>
              </div>
            </Link>

            <Link
              to="/story"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400 hover:bg-zinc-850 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-amber-400 mb-2">
                <BookOpen className="w-4 h-4" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Our Story</span>
                <span className="text-[10px] text-zinc-400">1967 Makeba heritage</span>
              </div>
            </Link>

            <Link
              to="/atmosphere"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400 hover:bg-zinc-850 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-orange-400 mb-2">
                <Compass className="w-4 h-4" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Atmosphere</span>
                <span className="text-[10px] text-zinc-400">Candlelight & photos</span>
              </div>
            </Link>

            <Link
              to="/jazz"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400 hover:bg-zinc-850 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-red-400 mb-2">
                <Music className="w-4 h-4" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Live Jazz</span>
                <span className="text-[10px] text-zinc-400">Weekend resident sets</span>
              </div>
            </Link>

            <Link
              to="/location"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-400 hover:bg-zinc-850 transition-all flex flex-col justify-between group col-span-2 sm:col-span-1"
            >
              <div className="flex items-center justify-between text-amber-300 mb-2">
                <MapPin className="w-4 h-4" />
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Fox Street Hub</span>
                <span className="text-[10px] text-zinc-400">Hours & neighborhood</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. The Pata Pata Family (Head Chef & Servers Dedicated to Best Experience) */}
      <FamilySection />

      {/* 4. Featured Menu Snippet with Link to Dedicated Menu Page */}
      <section className="relative py-16 bg-transparent text-white border-t border-amber-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-widest text-amber-400 mb-2">
                <Utensils className="w-3.5 h-3.5 text-yellow-400" />
                <span>Culinary Signatures</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-display text-white">
                Taste of Sophiatown
              </h2>
            </div>
            
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300 hover:text-white transition-colors"
            >
              <span>Explore All 24+ Menu Dishes</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {featuredDishes.map((dish, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-950/90 border border-zinc-850 hover:border-amber-500/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                      {dish.tag}
                    </span>
                    <span className="text-base font-black font-display text-amber-300 tabular-nums">
                      {dish.price}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-display text-white group-hover:text-amber-300 transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-zinc-400 font-mono">286 Fox St Pass</span>
                  <Link
                    to="/menu"
                    className="text-amber-400 hover:underline font-bold text-[11px] flex items-center gap-1"
                  >
                    <span>View Menu</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
            >
              <Utensils className="w-4 h-4 fill-black" />
              <span>Open Online Menu Page</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Live Jazz Spotlight Teaser */}
      <section className="relative py-16 bg-transparent text-white border-t border-amber-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950/90 border border-amber-500/40 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400" />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                  <Music className="w-3.5 h-3.5 text-red-500" />
                  <span>Weekend Residency</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-white mb-3">
                  Live Afro-Jazz Right by the Fox Street Window
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  Experience our house quartet—tenor saxophone, keys, upright bass, and drums—filling Fox Street with marabi warmth every Friday, Saturday, and Sunday.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/jazz"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
                  >
                    <span>View Weekend Jazz Lineup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black border border-amber-500/40 text-amber-200 font-bold text-xs hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" />
                    <span>Hold Stage Table</span>
                  </button>
                </div>
              </div>

              {/* Band Preview Card */}
              <div className="w-full lg:w-80 rounded-2xl overflow-hidden border border-amber-500/30 bg-black shadow-xl shrink-0">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-27_at_12.36.43_PM_55c5dbcc.jpeg"
                    alt="Pata Pata live jazz bandstand"
                    className="w-full h-full object-cover filter contrast-[1.05]"
                  />
                </div>
                <div className="p-3.5 text-xs text-center">
                  <span className="font-bold text-amber-400 block">The Resident Quartet</span>
                  <span className="text-[11px] text-zinc-400">Performing Fri & Sat 19:30 · Sun 14:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Desk Call & Reservations Teaser Banner */}
      <section className="relative py-12 bg-transparent text-white border-t border-amber-950/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-amber-500/30">
            <CandleFlame className="scale-75 mb-3" />
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
              Ready for a Candlelit Evening at Pata Pata?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto mb-6">
              Call our front desk host directly at <strong className="text-white">+27 11 334 0470</strong> or browse our dedicated pages.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Call Desk (+27 11 334 0470)</span>
              </button>

              <Link
                to="/reservations"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-xs hover:border-amber-400 transition-colors"
              >
                <span>Desk Booking Planner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
