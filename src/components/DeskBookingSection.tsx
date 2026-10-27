import { useState } from 'react';
import { Phone, Clock, Users, Music, Check, Copy, MessageCircle, AlertCircle, Flame } from 'lucide-react';
import { CandleFlame, JazzyPatternRibbon } from './CandlelightVibe';

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
    <section id="reservations" className="relative py-24 bg-transparent text-white overflow-hidden border-t border-amber-950/40">
      
      {/* Warm Red, Yellow & Orange Candlelight Backlight */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-red-600/15 via-orange-500/20 to-yellow-400/15 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* Subtle Jazz Pattern Backdrop Texture */}
      <div aria-hidden="true" className="absolute inset-0 bg-jazz-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/30 text-xs font-bold text-amber-400 mb-4">
            <CandleFlame className="scale-75" />
            <span>Direct Desk Reservations Only</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white mb-4">
            Reserve by Calling Our Desk
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed">
            We preserve the personal human touch of the 1960s Sophiatown era. Call our front desk host directly to arrange your table—ensuring prime candlelight views of the bandstand or breezy street patio seating.
          </p>
        </div>

        {/* Jazzy Pattern Ribbon */}
        <div className="mb-12 max-w-xl mx-auto">
          <JazzyPatternRibbon />
        </div>

        {/* FRONTLINE DESK CALL BOX WITH CLEARLY VISIBLE WOOD-FIRED HEARTH BACKGROUND */}
        <div className="max-w-4xl mx-auto border-2 border-amber-500/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
          
          {/* Authentic Wood-Fired Hearth Fireplace Background Space Picture (Clearly Visible) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={hearthOvenBgUrl}
              alt="Pata Pata wood-fired hearth oven glowing with fire"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.1] group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Measured Vignette ensuring both the roaring flame and stone oven arch are vividly visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/80" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Top Tri-Color Jazz Glow Line */}
          <div className="absolute inset-x-8 -top-px h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full z-10" />

          {/* Central Translucent Call Card with High-Contrast Legibility */}
          <div className="relative z-10 bg-black/75 backdrop-blur-md border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center">
            
            <div className="relative mb-4">
              <div className="w-16 h-16 rounded-2xl bg-black/90 border border-amber-500/60 flex items-center justify-center text-amber-400 shadow-[0_0_24px_rgba(245,158,11,0.5)]">
                <Phone className="w-8 h-8" />
              </div>
              <div className="absolute -top-3 -right-3">
                <CandleFlame className="scale-75" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/80 border border-amber-500/40 text-[11px] uppercase tracking-widest text-amber-300 font-extrabold mb-2 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>Frontline Desk Direct Line · 7 Days A Week</span>
            </div>

            <div className="text-3xl sm:text-5xl font-display font-black text-white tracking-wider mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              {primaryPhone}
            </div>

            <p className="text-xs sm:text-sm text-zinc-200 mb-8 max-w-md drop-shadow">
              Speak directly to our floor host. For large group feasts, candlelit live jazz evenings, or sidewalk patio tables.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href={`tel:${rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-base hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(245,158,11,0.7)]"
              >
                <Phone className="w-5 h-5 fill-black" />
                <span>Tap To Call The Desk</span>
              </a>

              <button
                type="button"
                onClick={copyNumber}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-black/90 border border-amber-500/50 text-amber-200 font-bold text-sm hover:text-white hover:bg-black transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-black/80 border border-zinc-700 text-zinc-200 font-semibold text-sm hover:text-white hover:bg-black transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-orange-400" />
                <span>WhatsApp Desk: {altPhone}</span>
              </a>
            </div>

            {/* Wood-Fired Hearth Badge */}
            <div className="mt-6 flex items-center gap-2 text-xs text-amber-300 font-semibold bg-black/80 px-4 py-1.5 rounded-full border border-amber-500/30">
              <Flame className="w-3.5 h-3.5 text-red-500" />
              <span>Wood-Fired Hearth Oven & Slow-Simmered Soul Food</span>
            </div>

          </div>

          {/* Details Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 text-left">
            <div className="p-4 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/30 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-black border border-amber-500/40 text-amber-400 shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Desk Hours</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Monday to Sunday<br />08:00 AM – 23:00 PM (SAST). Calls answered continuously.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/30 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-black border border-red-500/40 text-red-400 shrink-0 mt-0.5">
                <Music className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Live Jazz Table Holds</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Friday & Saturday evenings from 19:30, plus Sunday sessions (14:00 - 18:00). Book 24h ahead for front stage.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/85 backdrop-blur-md border border-orange-500/30 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-black border border-orange-500/40 text-orange-400 shrink-0 mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Group Feasts & Parties</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Groups of 6+ can pre-order Grand Platters and custom wine selections when speaking with the host.
                </p>
              </div>
            </div>
          </div>

          {/* Polite notice banner */}
          <div className="relative z-10 mt-6 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/30 flex items-center gap-3 text-xs text-zinc-300">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Walk-in Policy:</strong> We hold a dedicated portion of outdoor sidewalk tables on Fox Street for spontaneous walk-ins on a first-come basis.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
