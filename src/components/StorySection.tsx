import { Disc3, Flame, MapPin } from 'lucide-react';
import { SaxophoneSilhouette, DancingCoupleSilhouette, VINTAGE_SAX_SKETCH } from './JazzSketches';
import { AfricanContinentSVG, AfricanContinentSeal, AfricanGeometricDivider } from './AfricanMotifs';
import { VintagePhotoFrame } from './VintagePhotoFrame';

export function StorySection() {
  const entrancePhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_12.36.43_PM__1__729d645c.jpeg';
  const logoUrl = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_3.44.31_AM_78ac61fd.jpg';

  return (
    <section id="story" className="py-16 sm:py-20 bg-stone-50 text-stone-900 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <SaxophoneSilhouette className="w-5 h-6 text-stone-900" />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Origins &amp; Soul of Sophiatown
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-stone-950">
              The Story Behind the Rhythm
            </h2>
          </div>
          <p className="max-w-md text-sm text-stone-600 leading-relaxed">
            Named after the dance and the Miriam Makeba anthem that shook the globe. A living tribute to Sophiatown jazz, slow-cooked feasts, and warm African hospitality.
          </p>
        </div>

        {/* African Geometric Divider */}
        <div className="max-w-xl mx-auto mb-10">
          <AfricanGeometricDivider />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official Logo + Heritage Entrance Photo + Quote */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            
            {/* Clean Logo Header */}
            <div className="py-2 w-full flex flex-col items-center justify-center">
              <img
                src={logoUrl}
                alt="Pata Pata Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            {/* Vintage Archival Framed Entrance Photo */}
            <div className="my-4 w-full">
              <VintagePhotoFrame
                src={entrancePhotoUrl}
                alt="The retro heritage soul entrance of Pata Pata on Fox Street with open doors"
                aspectRatio="aspect-[4/3]"
                plateText="286 FOX STREET • HERITAGE ENTRANCE"
                caption="Open steel French doors welcoming Maboneng"
                showCorners={true}
              />
            </div>

            {/* Makeba Quote Card with African Continent Silhouette & Dancing Silhouette */}
            <div className="w-full p-5 rounded-xl bg-white border border-stone-200 text-left shadow-2xs relative overflow-hidden">
              {/* Background watermark of African continent */}
              <div className="absolute -right-3 -bottom-4 opacity-[0.07] pointer-events-none select-none">
                <AfricanContinentSVG className="w-36 h-40 text-stone-950" showJoburgStar={true} />
              </div>

              <div className="flex items-start justify-between relative z-10">
                <span className="text-stone-900 text-3xl font-serif leading-none block mb-2">&ldquo;</span>
                <div className="flex items-center gap-2">
                  <AfricanContinentSVG className="w-7 h-8 text-stone-900 opacity-80" showJoburgStar={true} />
                  <DancingCoupleSilhouette className="w-9 h-9 text-stone-900 opacity-75" />
                </div>
              </div>
              <p className="text-xs sm:text-sm italic text-stone-700 mb-3 leading-relaxed font-serif relative z-10">
                Pata Pata is the name of a dance we do down in Johannesburg... and everybody starts to move as soon as Pata Pata starts to play.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 border-t border-stone-100 pt-2.5 relative z-10">
                <span className="font-bold text-stone-900">Miriam Makeba (Mama Africa)</span>
                <span className="font-mono">Released 1967</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Chapters */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Chapter 01: Featuring Vintage Saxophone Sketch */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 border border-stone-200 bg-stone-50 hidden xs:block">
                  <img
                    src={VINTAGE_SAX_SKETCH}
                    alt="Vintage sketch of elder jazz saxophonist playing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-stone-900 shrink-0">
                      <Disc3 className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-950 font-display">
                      01. The Sophiatown 1960s Marabi Spirit
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    In the 1950s and 60s, Sophiatown (Kofifi) was South Africa’s cultural Harlem—a fiery crucible of marabi rhythms, kwela pennywhistles, swing jazz, bohemian writers, and lively shebeens. Pata Pata was created to keep that immortal vibe alive: vintage mismatched wooden chairs, tin mugs, warm vinyl crackle, and the soulful feeling of shared community.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 02 */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-stone-900 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-950">
                  02. Beating Heart of Maboneng
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Maboneng translates to <em>&ldquo;Place of Light&rdquo;</em> in Sesotho. Located at 286 Fox Street, our open industrial French doors welcome artists, travelers, local musicians, and Sunday brunchers stepping from the paved sidewalk into an oasis of jazz and heritage cuisine.
              </p>
            </div>

            {/* Chapter 03 */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-stone-900 shrink-0">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-950">
                  03. Slow Cast-Iron Fires & Heritage Food
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our kitchen respects the heritage. Mogodu is slow-simmered in aromatic broth until it is tender as silk. Rich oxtail rests in cast-iron potjies soaking in Cape red wine and spices for 6 hours. From freshly steamed dumpling bread (dombolo) to spicy braai chakalaka, every dish is an authentic South African homecoming.
              </p>
            </div>

            {/* Pillars strip */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              <div className="p-3 rounded-lg bg-white border border-stone-200 flex flex-col items-center">
                <span className="block text-lg font-black text-stone-950">1967</span>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Makeba Roots</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-stone-200 flex flex-col items-center">
                <span className="block text-lg font-black text-stone-950">286 Fox</span>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Maboneng, JHB</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-stone-200 flex flex-col items-center">
                <span className="block text-lg font-black text-stone-950">7 Days</span>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Open Daily</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
