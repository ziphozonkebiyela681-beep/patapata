import { useState } from 'react';
import { Phone, Clock, MapPin, Copy, Check, X, Music } from 'lucide-react';

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white border border-stone-300 rounded-2xl p-6 sm:p-8 text-stone-900 shadow-xl my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-black text-white">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-wider text-stone-500 uppercase">
              Frontline Desk
            </span>
            <h2 id="booking-title" className="text-xl sm:text-2xl font-bold font-display text-stone-950">
              Call To Reserve Your Table
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 mb-5 leading-relaxed">
          At Pata Pata, we keep it personal. All table reservations are handled directly by calling our restaurant desk on Fox Street.
        </p>

        {/* Primary Call Action Card */}
        <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-500 font-bold block mb-0.5">
                Direct Line
              </span>
              <div className="text-2xl sm:text-3xl font-display font-black text-stone-950">
                {primaryPhone}
              </div>
              <span className="text-xs text-stone-500 mt-0.5 block">
                Local: 011 334 0470 · Mobile: {altPhone}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${rawPhone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black text-white font-semibold text-xs sm:text-sm hover:bg-stone-800 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk Now</span>
              </a>

              <button
                type="button"
                onClick={() => copyToClipboard(primaryPhone)}
                className="p-2.5 rounded-lg bg-white border border-stone-300 text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copied ? <Check className="w-4 h-4 text-stone-900" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {copied && (
            <div className="mt-2.5 text-xs text-stone-800 flex items-center gap-1.5 font-medium">
              <Check className="w-3.5 h-3.5" /> Number copied to clipboard!
            </div>
          )}
        </div>

        {/* Desk Schedule & Hours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 text-xs">
          <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-950 block">Desk Hours</span>
              <span className="text-stone-600">Daily: 08:00 – 23:00 (SAST)</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-950 block">Venue Address</span>
              <span className="text-stone-600">286 Fox St, Maboneng, JHB</span>
            </div>
          </div>
        </div>

        {/* Quick Call Cheatsheet */}
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mb-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            Quick Call Planner
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 text-xs">
            <div>
              <label className="text-[11px] text-stone-500 block mb-0.5">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded p-1 text-stone-900 text-xs focus:border-stone-900 outline-none"
              >
                <option value="1 person">1 person</option>
                <option value="2 people">2 people</option>
                <option value="4 people">4 people</option>
                <option value="6 people">6 people</option>
                <option value="8+ party">8+ party</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-stone-500 block mb-0.5">Time</label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded p-1 text-stone-900 text-xs focus:border-stone-900 outline-none"
              >
                <option value="Friday Evening">Fri Evening</option>
                <option value="Saturday Night">Sat Night</option>
                <option value="Sunday Afternoon">Sun Afternoon</option>
                <option value="Weekday Dinner">Weekday Dinner</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-stone-500 block mb-0.5">Seating</label>
              <select
                value={seating}
                onChange={(e) => setSeating(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded p-1 text-stone-900 text-xs focus:border-stone-900 outline-none"
              >
                <option value="Front Row Live Jazz">Front Stage</option>
                <option value="Fox St Sidewalk Patio">Sidewalk Patio</option>
                <option value="Main Dining Hall">Dining Hall</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-stone-500 block mb-0.5">Occasion</label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-white border border-stone-300 rounded p-1 text-stone-900 text-xs focus:border-stone-900 outline-none"
              >
                <option value="Dinner & Live Jazz">Jazz Night</option>
                <option value="Birthday Dinner">Birthday</option>
                <option value="Date Night">Date Night</option>
              </select>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-xs text-stone-700">
            &ldquo;Hi Pata Pata! I&apos;d like to book for <strong className="text-stone-950">{guests}</strong> for <strong className="text-stone-950">{occasion}</strong> on <strong className="text-stone-950">{day}</strong> in the <strong className="text-stone-950">{seating}</strong> area.&rdquo;
          </div>
        </div>

        {/* Footer Notes */}
        <div className="flex items-center justify-between gap-3 text-xs text-stone-500 border-t border-stone-200 pt-3">
          <div className="flex items-center gap-1.5">
            <Music className="w-3.5 h-3.5 text-stone-700" />
            <span>Live Jazz starts 19:30 Fri & Sat · 14:00 Sun</span>
          </div>
          <button
            onClick={onClose}
            className="text-stone-900 font-medium hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
