import { useState } from 'react';
import { Phone, Clock, Users, Music, Check, Copy, MessageCircle, AlertCircle, Flame } from 'lucide-react';
import { VintageStampBadge, VinylRecordBadge } from './VintageAccents';
import { VintagePhotoFrame } from './VintagePhotoFrame';

export function DeskBookingSection() {
  const [copied, setCopied] = useState(false);
  const primaryPhone = '+27 11 334 0470';
  const rawPhone = '+27113340470';
  const altPhone = '+27 72 268 0313';
  const hearthOvenBgUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_1.36.28_PM_dee41a5f.jpeg';
  const whatsappUrl = 'https://wa.me/27722680313?text=Hello%20Pata%20Pata!%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation%20at%20Fox%20Street.';

  const copyNumber = () => {
    navigator.clipboard.writeText(primaryPhone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="reservations" className="py-16 sm:py-20 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 1960s Telephone Vintage Mark */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              Table Bookings
            </span>
            <VintageStampBadge text="DIRECT DESK DISPATCH • EST. 1967" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-stone-950 mb-3">
            Reserve by Calling Our Desk
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-serif italic">
            We preserve personal human warmth. Call our front desk host directly to arrange your table—ensuring candlelight views of the bandstand or breezy street patio seating.
          </p>
        </div>

        {/* Frontline Desk Call Box */}
        <div className="max-w-4xl mx-auto border border-stone-200 rounded-2xl p-6 sm:p-10 bg-stone-50 shadow-sm relative overflow-hidden">
          
          {/* Authentic Wood-Fired Hearth Fireplace in Antique Gold Baroque Frame */}
          <div className="mb-8">
            <VintagePhotoFrame
              src={hearthOvenBgUrl}
              alt="Pata Pata wood-fired hearth oven glowing with fire"
              aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
              plateText="286 FOX STREET • WOOD-FIRED HEARTH OVEN"
              caption="Traditional hearth cooking & slow fires"
              frameSize="md"
            />
          </div>

          {/* Central Call Card */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-2xs text-center flex flex-col items-center">
            
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-3">
              <Phone className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
              Frontline Desk · Open 7 Days
            </span>

            <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-stone-950 tracking-tight mb-2">
              {primaryPhone}
            </div>

            <p className="text-sm text-stone-600 mb-6 max-w-md">
              Speak directly to our floor host. For large group feasts, candlelit live jazz evenings, or sidewalk patio tables.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-black text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Tap To Call Desk</span>
              </a>

              <button
                type="button"
                onClick={copyNumber}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-stone-300 text-stone-900 font-semibold text-xs sm:text-sm hover:bg-stone-100 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-stone-900" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-stone-600" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-stone-300 text-stone-900 font-semibold text-xs sm:text-sm hover:bg-stone-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-stone-700" />
                <span>WhatsApp: {altPhone}</span>
              </a>
            </div>

          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-left">
            <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3 shadow-2xs">
              <div className="p-2 rounded-lg bg-stone-100 text-stone-900 shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-950 mb-0.5">Desk Hours</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Monday to Sunday<br />08:00 AM – 23:00 PM (SAST). Calls answered continuously.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3 shadow-2xs">
              <div className="p-2 rounded-lg bg-stone-100 text-stone-900 shrink-0 mt-0.5">
                <Music className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-950 mb-0.5">Live Jazz Table Holds</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Friday & Saturday from 19:30, Sunday from 14:00. Book ahead for front stage seating.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3 shadow-2xs">
              <div className="p-2 rounded-lg bg-stone-100 text-stone-900 shrink-0 mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-950 mb-0.5">Group Feasts & Parties</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Groups of 6+ can pre-order Grand Platters and beverage setups when speaking with the host.
                </p>
              </div>
            </div>
          </div>

          {/* Walk-in policy */}
          <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 flex items-center gap-3 text-xs text-stone-600 shadow-2xs">
            <AlertCircle className="w-4 h-4 text-stone-700 shrink-0" />
            <span>
              <strong>Walk-in Policy:</strong> We hold a dedicated portion of outdoor sidewalk tables on Fox Street for spontaneous walk-ins on a first-come basis.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
