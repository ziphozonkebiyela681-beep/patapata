import { Heart, Utensils, Users } from 'lucide-react';
import { VintagePhotoFrame } from './VintagePhotoFrame';
import { AfricanContinentSVG, AfricanGeometricDivider } from './AfricanMotifs';

export function FamilySection() {
  const chefPhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.22.20_PM__1__960a757f.jpeg';
  const serversPhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_2.22.20_PM_5b9204a4.jpeg';

  return (
    <section id="family" className="py-16 sm:py-20 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Humble Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 block">
            The Heart of 286 Fox Street
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-stone-950 mb-3">
            The Pata Pata Family
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Behind every slow-simmered potjie and welcoming table is a dedicated team passionate about authentic South African cooking and heartfelt hospitality.
          </p>
        </div>

        {/* 3-Part Layout: Chef | Center Story Card | Floor Hosts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left: Head Chef in 1960s Archival Frame */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-xs">
              <VintagePhotoFrame
                src={chefPhotoUrl}
                alt="Pata Pata Head Chef preparing fresh ingredients in the kitchen"
                aspectRatio="aspect-[4/5]"
                plateText="HEAD CHEF • FOX ST KITCHEN"
                caption="Slow-simmered oxtail & dombolo bread"
                showCorners={true}
              />
            </div>
          </div>

          {/* Center: Dedicated Experience Passage */}
          <div className="lg:col-span-4 md:col-span-2 text-center">
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs relative overflow-hidden">
              {/* African Continent Watermark */}
              <div className="absolute -left-6 -bottom-6 opacity-[0.06] pointer-events-none select-none">
                <AfricanContinentSVG className="w-36 h-40 text-stone-900" showJoburgStar={true} />
              </div>

              <span className="text-xs uppercase tracking-widest text-stone-500 font-bold block mb-2">
                Ubuntu In Action
              </span>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-950 mb-4 leading-snug">
                &ldquo;At Pata Pata, Hospitality is Home.&rdquo;
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed text-left sm:text-center">
                <p>
                  From the early morning kitchen fires where our head chef meticulously prepares traditional spice rubs and fresh chakalaka from scratch, to our warm floor hosts who greet you like lifelong friends.
                </p>
                <p>
                  We treat every guest who walks through our doors on Fox Street with genuine warmth, honoring the spirit of Miriam Makeba&apos;s joyful welcome.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-center gap-2 text-xs text-stone-500">
                <Heart className="w-3.5 h-3.5 text-stone-900" />
                <span>Crafted with care by the Kitchen & Floor Team</span>
              </div>
            </div>
          </div>

          {/* Right: Floor Hosts & Servers in 1960s Archival Frame */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-xs">
              <VintagePhotoFrame
                src={serversPhotoUrl}
                alt="Pata Pata servers and floor hosts smiling at the service pass"
                aspectRatio="aspect-[4/5]"
                plateText="FLOOR HOSTS • 286 FOX ST"
                caption="Ubuntu hospitality & table care"
                showCorners={true}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
