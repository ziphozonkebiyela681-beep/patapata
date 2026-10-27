import { Disc3, Flame, MapPin } from 'lucide-react';
import { PataPataSignature } from './PataPataSignature';
import { CandleFlame, JazzyPatternRibbon } from './CandlelightVibe';

export function StorySection() {
  const entrancePhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_12.36.43_PM__1__729d645c.jpeg';

  return (
    <section id="story" className="relative py-24 bg-transparent text-white border-t border-amber-950/30 overflow-hidden">
      
      {/* Background Ambient Glow: Red, Yellow, & Orange warmth */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-red-600/15 via-orange-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-amber-500/15 via-yellow-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              <CandleFlame className="scale-75" />
              <span>Origins & Soul of Sophiatown</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              The Story Behind the Rhythm
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-300 leading-relaxed">
            Named after the dance and the Miriam Makeba anthem that shook the globe. A living tribute to Sophiatown jazz, slow-cooked feasts, and candlelit African hospitality.
          </p>
        </div>

        {/* Jazzy Geometric Chevron Ribbon */}
        <div className="mb-14">
          <JazzyPatternRibbon />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: PURE ISOLATED SIGNATURE WRITING + RETRO HERITAGE ENTRANCE */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            
            {/* Pure isolated text signature floating on canvas */}
            <div className="relative py-4 w-full flex flex-col items-center justify-center">
              <div 
                aria-hidden="true" 
                className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-500/30 to-yellow-400/20 blur-2xl rounded-full pointer-events-none" 
              />
              <PataPataSignature 
                className="w-auto h-28 sm:h-36 text-white filter drop-shadow-[0_0_25px_rgba(255,107,0,0.5)]" 
                color="jazz"
                glow
              />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-400 mt-3 block">
                The Signature Geometric Mark
              </span>
            </div>

            {/* The Retro Heritage Soul Entrance Feature Card */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/35 my-4 w-full shadow-2xl group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-black">
                <img 
                  src={entrancePhotoUrl} 
                  alt="The retro heritage soul entrance of Pata Pata on Fox Street with open doors"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">
                  Retro Heritage Soul Entrance
                </span>
                <span className="text-xs text-white font-semibold block">
                  286 Fox Street · Open Steel French Doors
                </span>
              </div>
            </div>

            {/* Candlelit Jazz Era Quote */}
            <div className="w-full mt-2 p-5 rounded-2xl bg-zinc-950/80 border border-amber-500/30 relative text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-400 text-3xl font-serif leading-none">&ldquo;</span>
                <CandleFlame className="scale-80" />
              </div>
              <p className="text-xs sm:text-sm italic text-zinc-200 mb-3 leading-relaxed font-serif">
                &ldquo;Pata Pata is the name of a dance we do down in Johannesburg... and everybody starts to move as soon as Pata Pata starts to play.&rdquo;
              </p>
              <div className="flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800 pt-2.5">
                <span className="font-bold text-amber-300">Miriam Makeba</span>
                <span className="text-orange-400 font-mono">Released 1967</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Chapters */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Chapter 01 */}
            <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-amber-500/50 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-500 to-orange-500" />
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-black border border-zinc-700 flex items-center justify-center text-amber-400">
                  <Disc3 className="w-4 h-4 animate-spin [animation-duration:8s]" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  01. The Sophiatown 1960s Marabi Spirit
                </h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed pl-1">
                In the 1950s and 60s, Sophiatown (Kofifi) was South Africa’s cultural Harlem—a fiery crucible of marabi rhythms, kwela pennywhistles, swing jazz, bohemian writers, and candlelit shebeens. Pata Pata was created to keep that immortal vibe alive: vintage mismatched wooden chairs, tin mugs, warm vinyl crackle, and the soulful feeling of shared community.
              </p>
            </div>

            {/* Chapter 02 */}
            <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-amber-500/50 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-500 to-yellow-400" />
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-black border border-zinc-700 flex items-center justify-center text-orange-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  02. Beating Heart of Maboneng
                </h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed pl-1">
                Maboneng translates to <em>&ldquo;Place of Light&rdquo;</em> in Sesotho. Located at 286 Fox Street, our open industrial French doors welcome artists, travelers, local musicians, and Sunday brunchers stepping from the paved sidewalk into an oasis of jazz and heritage cuisine.
              </p>
            </div>

            {/* Chapter 03 */}
            <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-amber-500/50 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-yellow-400 to-red-600" />
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-black border border-zinc-700 flex items-center justify-center text-red-400">
                  <Flame className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  03. Slow Cast-Iron Fires & Heritage Food
                </h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed pl-1">
                Our kitchen respects the heritage. Mogodu is slow-simmered in aromatic broth until it is tender as silk. Rich oxtail rests in cast-iron potjies soaking in Cape red wine and spices for 6 hours. From freshly steamed dumpling bread (jeqe) to spicy braai chakalaka, every dish is an authentic South African homecoming.
              </p>
            </div>

            {/* Pillars strip in warm tones */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              <div className="p-3.5 rounded-xl bg-black border border-zinc-800">
                <span className="block text-xl font-display font-black text-amber-400">1967</span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Makeba Roots</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black border border-zinc-800">
                <span className="block text-xl font-display font-black text-orange-400">286 Fox</span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Maboneng, JHB</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black border border-zinc-800">
                <span className="block text-xl font-display font-black text-red-400">7 Days</span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Candlelit Late</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
