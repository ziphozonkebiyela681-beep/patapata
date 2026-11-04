import React from 'react';

/**
 * High-precision, elegant SVG silhouette of the African Continent.
 * Features an authentic silhouette with a highlighted heartbeat marker / star over Johannesburg (South Africa)
 * and subtle acoustic marabi soundwaves radiating outwards.
 */
export function AfricanContinentSVG({ 
  className = 'w-16 h-16', 
  showJoburgStar = true,
  opacity = 'opacity-90' 
}: { 
  className?: string; 
  showJoburgStar?: boolean;
  opacity?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="currentColor"
      className={`${className} ${opacity} text-stone-900 shrink-0 select-none`}
      aria-label="African Continent Silhouette"
    >
      {/* 
        Authentic African Continent Path
        Coordinates meticulously drafted:
        North Africa (Morocco -> Tunisia -> Egypt -> Horn of Africa),
        West Africa (Senegal bulge -> Gulf of Guinea),
        Equatorial & Central Africa,
        East Africa (Somali peninsula, Swahili coast),
        Southern Africa (Namibia, South Africa, Cape of Good Hope, Mozambique),
        and Madagascar.
      */}
      <path
        d="M 58 24 
           C 68 20, 82 18, 98 18 
           C 112 18, 126 14, 134 22 
           C 142 30, 148 28, 158 32 
           C 166 36, 172 44, 178 54 
           C 184 64, 192 76, 194 88 
           C 196 98, 188 106, 178 114 
           C 168 122, 162 132, 160 144 
           C 158 156, 152 170, 142 184 
           C 134 196, 124 206, 114 212 
           C 106 216, 100 216, 96 210 
           C 90 202, 84 190, 82 178 
           C 80 166, 76 156, 70 148 
           C 64 140, 56 138, 48 136 
           C 40 134, 34 130, 30 120 
           C 26 110, 20 102, 12 96 
           C 6 90, 4 82, 8 72 
           C 12 62, 22 56, 32 50 
           C 40 44, 46 36, 52 28 
           Z"
        fill="currentColor"
      />

      {/* Madagascar */}
      <path
        d="M 172 152 
           C 176 148, 180 152, 182 160 
           C 184 168, 180 182, 176 190 
           C 172 196, 168 194, 166 186 
           C 164 178, 168 162, 172 152 
           Z"
        fill="currentColor"
      />

      {/* Johannesburg / Maboneng Star & Pulsing Soundwaves */}
      {showJoburgStar && (
        <g className="text-white">
          {/* Subtle radiating acoustic rings around Southern Africa */}
          <circle cx="108" cy="186" r="16" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <circle cx="108" cy="186" r="24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.4" />
          
          {/* Star Marker on Johannesburg (26.2° S, 28.0° E) */}
          <polygon
            points="108,180 110,184 114,184 111,187 112,191 108,188 104,191 105,187 102,184 106,184"
            fill="#ffffff"
            stroke="#1c1917"
            strokeWidth="0.75"
          />
        </g>
      )}
    </svg>
  );
}

/**
 * Authentic Vintage African Heritage Seal with circular typography,
 * continent silhouette, and Miriam Makeba tribute coordinates.
 */
export function AfricanContinentSeal({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-stone-50 border-2 border-stone-800 shadow-2xs ${className}`}>
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-black text-white p-1.5 flex items-center justify-center shrink-0 border border-stone-700">
        <AfricanContinentSVG className="w-full h-full text-white" showJoburgStar={true} />
      </div>
      <div className="text-left font-typewriter">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-stone-950 uppercase tracking-widest block">
            MAMA AFRICA HERITAGE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-stone-900 animate-pulse" />
        </div>
        <span className="text-[9px] text-stone-600 uppercase tracking-wider block">
          Fox St · 26.20° S, 28.04° E
        </span>
        <span className="text-[8px] text-stone-500 uppercase tracking-widest block font-sans font-semibold text-stone-700">
          Cradle of Afro-Jazz &amp; Marabi
        </span>
      </div>
    </div>
  );
}

/**
 * Minimalist traditional African geometric border divider.
 * Inspired by traditional Zulu, Ndebele, and Xhosa chevron and triangle patterns,
 * rendered in crisp, clean black-and-stone line work.
 */
export function AfricanGeometricDivider({ className = 'my-6' }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center gap-2 overflow-hidden ${className}`} aria-hidden="true">
      <div className="flex-1 h-[1px] bg-stone-300" />
      
      {/* Repeating Chevron & Diamond Motif */}
      <div className="flex items-center gap-1 text-stone-800 px-2 select-none shrink-0">
        <span className="text-xs font-mono">▲</span>
        <span className="text-[10px] font-mono">◆</span>
        <span className="text-xs font-mono">▼</span>
        <span className="text-[11px] font-typewriter tracking-[0.2em] uppercase font-bold px-2 text-stone-900">
          AFRICA • JAZZ • HERITAGE
        </span>
        <span className="text-xs font-mono">▲</span>
        <span className="text-[10px] font-mono">◆</span>
        <span className="text-xs font-mono">▼</span>
      </div>

      <div className="flex-1 h-[1px] bg-stone-300" />
    </div>
  );
}
