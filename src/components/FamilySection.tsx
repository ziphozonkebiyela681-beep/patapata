import { Heart, Sparkles, Utensils, Users } from 'lucide-react';
import { CandleFlame, JazzyPatternRibbon } from './CandlelightVibe';

export function FamilySection() {
  const chefPhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.22.20_PM__1__960a757f.jpeg';
  const serversPhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.22.20_PM_5b9204a4.jpeg';

  return (
    <section id="family" className="relative py-20 bg-transparent text-white border-t border-amber-950/40 overflow-hidden">
      
      {/* Warm Ambient Ember Backlight */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-red-600/10 via-orange-500/15 to-yellow-400/10 rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Section Tag */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            <CandleFlame className="scale-75" />
            <span>The Heart of 286 Fox Street</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            The Pata Pata Family
          </h2>
        </div>

        {/* Jazzy Pattern Ribbon */}
        <div className="mb-12 max-w-xl mx-auto">
          <JazzyPatternRibbon />
        </div>

        {/* Mobile / Tablet (< lg): Compact side-by-side cards for Chef & Servers flanking above passage */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto mb-6 lg:hidden">
          {/* Chef Card */}
          <div className="rounded-xl overflow-hidden border border-amber-500/40 bg-zinc-950 shadow-md flex flex-col">
            <div className="aspect-[4/5] w-full overflow-hidden bg-black">
              <img
                src={chefPhotoUrl}
                alt="Pata Pata Head Chef preparing fresh ingredients"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
              />
            </div>
            <div className="p-2 sm:p-3 bg-zinc-950/95 border-t border-amber-500/20 text-center">
              <div className="inline-flex items-center gap-1 text-amber-400 text-[11px] sm:text-xs font-bold mb-0.5">
                <Utensils className="w-3 h-3" />
                <span>Our Head Chef</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-300 leading-tight">
                Slow-simmering 6-hour oxtail potjies daily.
              </p>
            </div>
          </div>

          {/* Servers Card */}
          <div className="rounded-xl overflow-hidden border border-amber-500/40 bg-zinc-950 shadow-md flex flex-col">
            <div className="aspect-[4/5] w-full overflow-hidden bg-black">
              <img
                src={serversPhotoUrl}
                alt="Pata Pata servers and floor hosts smiling"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
              />
            </div>
            <div className="p-2 sm:p-3 bg-zinc-950/95 border-t border-amber-500/20 text-center">
              <div className="inline-flex items-center gap-1 text-amber-400 text-[11px] sm:text-xs font-bold mb-0.5">
                <Users className="w-3 h-3" />
                <span>Floor Hosts</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-300 leading-tight">
                Warm smiles & personal table care on Fox St.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Part Flanking Layout for Laptop (lg:grid) + Center Passage for all */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left: Head Chef (Desktop / Laptop Only) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-center">
            <div className="w-full max-w-[240px] rounded-2xl overflow-hidden border border-amber-500/40 bg-zinc-950 shadow-xl group">
              <div className="aspect-[4/5] w-full overflow-hidden bg-black">
                <img
                  src={chefPhotoUrl}
                  alt="Pata Pata Head Chef preparing fresh ingredients in the kitchen"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                />
              </div>
              <div className="p-3.5 bg-zinc-950/95 border-t border-amber-500/20 text-center">
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-0.5">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Our Head Chef</span>
                </div>
                <p className="text-[11px] text-zinc-300 leading-tight">
                  Hand-grating fresh vegetables and slow-simmering our 6-hour oxtail potjies daily.
                </p>
              </div>
            </div>
          </div>

          {/* Center: Dedicated Experience Passage */}
          <div className="lg:col-span-6 text-center px-1 sm:px-6">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-amber-500/30 shadow-2xl relative overflow-hidden">
              
              {/* Top tri-color hairline */}
              <div className="absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400" />

              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-400 font-extrabold block mb-2">
                Dedicated To Giving You The Best Experience
              </span>

              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold font-display text-white mb-3 sm:mb-4 leading-snug">
                &ldquo;At Pata Pata, Hospitality is Ubuntu in Action.&rdquo;
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal text-left sm:text-center">
                <p>
                  Behind every steaming bowl of Mogodu, every flame-grilled cut, and every cold craft draft is a tight-knit family devoted to your comfort and joy.
                </p>
                <p>
                  From the early morning kitchen fires where our head chef meticulously prepares our secret spice rubs and fresh chakalaka from scratch, to our warm floor hosts who greet you by name and remember your favorite corner table—we treat every guest who walks through our doors as lifelong family.
                </p>
                <p className="text-amber-300 font-medium italic pt-1">
                  &ldquo;We don’t just serve food; we craft memories, laughter, and timeless Fox Street jazz soul.&rdquo;
                </p>
              </div>

              {/* Heartbeat badge */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-zinc-800 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-zinc-400">
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
                <span>Crafted with love by the Pata Pata Kitchen & Floor Team</span>
              </div>
            </div>
          </div>

          {/* Right: Servers & Floor Hosts (Desktop / Laptop Only) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-center">
            <div className="w-full max-w-[240px] rounded-2xl overflow-hidden border border-amber-500/40 bg-zinc-950 shadow-xl group">
              <div className="aspect-[4/5] w-full overflow-hidden bg-black">
                <img
                  src={serversPhotoUrl}
                  alt="Pata Pata servers and floor hosts smiling at the service pass"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                />
              </div>
              <div className="p-3.5 bg-zinc-950/95 border-t border-amber-500/20 text-center">
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-0.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Floor Hosts & Servers</span>
                </div>
                <p className="text-[11px] text-zinc-300 leading-tight">
                  Greeting you with genuine smiles and personalized table care at the Fox Street pass.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
