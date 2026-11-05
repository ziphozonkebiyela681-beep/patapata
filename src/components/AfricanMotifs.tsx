import React from 'react';

export const AFRICA_SUNSET_ISOLATED = '/assets/aistudio/africa_sunset_silhouette_isolated.png';
export const AFRICA_SUNSET_THUMB = '/assets/aistudio/africa_sunset_silhouette_thumb.png';

/**
 * Isolated African Continent Silhouette Map.
 * Uses the user's uploaded African continent map silhouette featuring the warm golden sunset,
 * glowing sun, acacia tree canopy, and giraffe in Southern Africa, with 100% isolated transparent background.
 */
export function AfricanContinentMap({ 
  className = 'w-12 h-14',
  alt = 'African continent sunset silhouette with giraffe and acacia',
}: { 
  className?: string; 
  alt?: string;
}) {
  return (
    <img
      src={AFRICA_SUNSET_ISOLATED}
      alt={alt}
      loading="lazy"
      className={`${className} object-contain select-none shrink-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]`}
    />
  );
}

/**
 * Drop-in replacement for AfricanContinentSVG that uses the isolated African continent sunset silhouette.
 * Supports legacy props (showJoburgStar, opacity) while rendering the user's isolated map.
 */
export function AfricanContinentSVG({ 
  className = 'w-12 h-14', 
  opacity = 'opacity-100' 
}: { 
  className?: string; 
  showJoburgStar?: boolean;
  opacity?: string;
}) {
  return (
    <img
      src={AFRICA_SUNSET_ISOLATED}
      alt="African Continent Map Silhouette"
      loading="lazy"
      className={`${className} ${opacity} object-contain select-none shrink-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]`}
    />
  );
}

/**
 * Authentic Vintage African Heritage Seal featuring the isolated Africa sunset silhouette map,
 * typewriter coordinates, and Miriam Makeba cradle of Afro-Jazz tribute.
 */
export function AfricanContinentSeal({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-[#242220] border-2 border-stone-700 shadow-md ${className}`}>
      <div className="w-12 h-14 sm:w-14 sm:h-16 rounded-xl bg-[#181715] p-1 flex items-center justify-center shrink-0 border border-stone-700 shadow-inner overflow-hidden">
        <AfricanContinentMap className="w-full h-full object-contain" />
      </div>
      <div className="text-left font-typewriter">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-white uppercase tracking-widest block">
            MAMA AFRICA HERITAGE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        </div>
        <span className="text-[9px] text-stone-400 uppercase tracking-wider block">
          Fox St · 26.20° S, 28.04° E
        </span>
        <span className="text-[8px] text-amber-300 uppercase tracking-widest block font-sans font-semibold">
          Cradle of Afro-Jazz &amp; Marabi
        </span>
      </div>
    </div>
  );
}

/**
 * Minimalist traditional African geometric border divider.
 * Inspired by traditional Zulu, Ndebele, and Xhosa chevron and triangle patterns,
 * rendered in crisp, clean warm stone and amber on charcoal background.
 */
export function AfricanGeometricDivider({ className = 'my-6' }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center gap-2 overflow-hidden ${className}`} aria-hidden="true">
      <div className="flex-1 h-[1px] bg-stone-700/80" />
      
      {/* Repeating Chevron & Diamond Motif with Mini Africa Sunset Silhouette */}
      <div className="flex items-center gap-1.5 text-stone-400 px-2 select-none shrink-0">
        <span className="text-xs font-mono text-amber-400">▲</span>
        <span className="text-[10px] font-mono text-stone-500">◆</span>
        <AfricanContinentMap className="w-4 h-5" alt="" />
        <span className="text-[11px] font-typewriter tracking-[0.2em] uppercase font-bold px-1.5 text-stone-200">
          AFRICA • JAZZ • HERITAGE
        </span>
        <AfricanContinentMap className="w-4 h-5" alt="" />
        <span className="text-[10px] font-mono text-stone-500">◆</span>
        <span className="text-xs font-mono text-amber-400">▼</span>
      </div>

      <div className="flex-1 h-[1px] bg-stone-700/80" />
    </div>
  );
}

export default AfricanContinentMap;
