import { useState } from 'react';
import { Phone, Clock, MapPin, Copy, Check, X, Music, Flame } from 'lucide-react';
import { CandleFlame } from './CandlelightVibe';

interface DeskBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeskBookingModal({ isOpen, onClose }: DeskBookingModalProps) {
  const [copied, setCopied] = useState(false);
  const [guests, setGuests] = useState('2');
  const [seating, setSeating] = useState('Front Row Live Jazz');
  const [occasion, setOccasion] = useState('Dinner & Live Jazz');
  const [day, setDay] = useState('Friday Evening');

  if (!isOpen) return null;

  const primaryPhone = '+27 11 334 0470';
  const rawPhone = '+27113340470';
  const altPhone = '+27 72 268 0313';
  const hearthOvenBgUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_1.36.28_PM_dee41a5f.jpeg';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-zinc-950 border border-amber-500/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl shadow-orange-950/40 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        {/* Tri-color top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 rounded-t-2xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors z-20"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-black border border-amber-500/40 text-amber-400">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase flex items-center gap-1.5">
              <CandleFlame className="scale-65" /> Frontline Desk Direct Line
            </span>
            <h2 id="booking-title" className="text-2xl font-bold font-display tracking-tight text-white">
              Call To Reserve Your Table
            </h2>
          </div>
        </div>

        <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
          At Pata Pata, we keep it personal and authentic. All table reservations are handled directly by calling our restaurant desk on Fox Street.
        </p>

        {/* Primary Call Action Card WITH WOOD-FIRED HEARTH BACKGROUND SPACE PIC */}
        <div className="p-5 sm:p-6 rounded-xl border border-amber-500/40 mb-6 relative overflow-hidden group">
          
          {/* Wood-Fired Hearth Fireplace Background Space Picture */}
          <div className="absolute inset-0 z-0">
            <img
              src={hearthOvenBgUrl}
              alt="Pata Pata wood-fired hearth oven glowing with fire"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15] scale-105"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/92" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>
          
          {/* Foreground Call Card Content */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-300 font-bold mb-1">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Pata Pata Main Desk Line</span>
              </div>
              <div className="text-2xl sm:text-3xl font-display font-black tracking-wider text-white mt-0.5 drop-shadow-md">
                {primaryPhone}
              </div>
              <span className="text-xs text-zinc-300 mt-1 block">
                Local SA: 011 334 0470 · Alternate / Mobile: {altPhone}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${rawPhone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(245,158,11,0.5)]"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Call Desk Now</span>
              </a>

              <button
                type="button"
                onClick={() => copyToClipboard(primaryPhone)}
                className="p-3 rounded-xl bg-black/75 backdrop-blur-md border border-amber-500/40 text-amber-200 hover:text-white hover:bg-black/90 transition-colors"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copied ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {copied && (
            <div className="relative z-10 mt-3 text-xs text-amber-400 flex items-center gap-1.5 font-bold animate-fadeIn">
              <Check className="w-3.5 h-3.5" /> Number copied to clipboard! Dial from your phone.
            </div>
          )}
        </div>

        {/* Desk Schedule & Hours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3">
            <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-zinc-200 block">Desk Hours</span>
              <span className="text-zinc-400">Monday – Sunday: 08:00 – 23:00 (SAST)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-zinc-200 block">Venue Address</span>
              <span className="text-zinc-400">286 Fox St, Maboneng, JHB</span>
            </div>
          </div>
        </div>

        {/* Reservation Call Assistant / Cheatsheet */}
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-amber-500/20 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <CandleFlame className="scale-65" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Quick Call Planner (What to tell the host)
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 text-xs">
            <div>
              <label className="text-[11px] text-zinc-400 block mb-1">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-lg p-1.5 text-zinc-200 text-xs focus:border-amber-400 outline-none"
              >
                <option value="1 person">1 person</option>
                <option value="2 people">2 people</option>
                <option value="4 people">4 people</option>
                <option value="6 people">6 people</option>
                <option value="8+ party">8+ party</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-zinc-400 block mb-1">Preferred Time</label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-lg p-1.5 text-zinc-200 text-xs focus:border-amber-400 outline-none"
              >
                <option value="Friday Evening">Fri Evening</option>
                <option value="Saturday Night">Sat Night</option>
                <option value="Sunday Afternoon">Sun Afternoon</option>
                <option value="Weekday Dinner">Weekday Dinner</option>
                <option value="Lunch Service">Lunch Service</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-zinc-400 block mb-1">Seating Vibe</label>
              <select
                value={seating}
                onChange={(e) => setSeating(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-lg p-1.5 text-zinc-200 text-xs focus:border-amber-400 outline-none"
              >
                <option value="Front Row Live Jazz">Front Stage</option>
                <option value="Fox St Sidewalk Patio">Fox St Patio</option>
                <option value="Main Vintage Hall">Vintage Hall</option>
                <option value="Cozy Corner Booth">Corner Booth</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-zinc-400 block mb-1">Occasion</label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-lg p-1.5 text-zinc-200 text-xs focus:border-amber-400 outline-none"
              >
                <option value="Dinner & Live Jazz">Jazz Night</option>
                <option value="Birthday Dinner">Birthday</option>
                <option value="Date Night">Date Night</option>
                <option value="Family Gathering">Family Feast</option>
              </select>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-black/70 border border-zinc-800 text-xs text-zinc-300 font-mono">
            <span className="text-amber-400 font-sans font-bold text-[11px] block mb-0.5">Your call sheet:</span>
            &ldquo;Hi Pata Pata! I&apos;d like to book for <strong className="text-white">{guests}</strong> for <strong className="text-white">{occasion}</strong> on <strong className="text-white">{day}</strong> in the <strong className="text-white">{seating}</strong> area.&rdquo;
          </div>
        </div>

        {/* Footer Notes */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400 border-t border-zinc-900 pt-4">
          <div className="flex items-center gap-1.5">
            <Music className="w-3.5 h-3.5 text-amber-400" />
            <span>Weekend Live Jazz sets start at 19:30</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs text-amber-300 hover:text-white underline underline-offset-4"
          >
            Close this window
          </button>
        </div>
      </div>
    </div>
  );
}
