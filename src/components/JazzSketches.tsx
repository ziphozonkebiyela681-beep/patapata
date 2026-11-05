export const VINTAGE_MIRIAM_SKETCH = '/assets/aistudio/miriam_makeba_singing_isolated.png';
export const VINTAGE_DANCERS_SKETCH = '/assets/aistudio/vintage_dancers_sketch_ivory.png';
// User request: where there is a harabi horn put this picture instead, carve out the women and leave the background out
export const VINTAGE_SAX_SKETCH = '/assets/aistudio/miriam_makeba_singing_isolated.png';

/**
 * Carved-out portrait of Miriam Makeba (Mama Africa) singing into a microphone.
 * Isolated from the background with zero smudges, rendered as pure white chalk on transparent alpha.
 * Replaces the marabi horn / saxophone per the user's explicit request.
 */
export function MiriamMakebaSilhouette({ 
  className = 'w-16 h-18', 
  opacity = 'opacity-95' 
}: { 
  className?: string; 
  opacity?: string; 
}) {
  return (
    <img
      src="/assets/aistudio/miriam_makeba_singing_isolated.png"
      alt="Miriam Makeba singing into vintage microphone - carved out sketch"
      className={`${className} ${opacity} object-contain shrink-0 select-none pointer-events-none drop-shadow-sm`}
      loading="lazy"
    />
  );
}

// User request: "where there is a harabi horn put this picture instead, carve out the women and leave the backgound out of it please. just want the woman."
export const SaxophoneSilhouette = MiriamMakebaSilhouette;
export const MiriamMakebaSketch = MiriamMakebaSilhouette;

/**
 * Authentic Vintage Pen-and-Ink / Chalk Sketch of people joyfully dancing in Sophiatown.
 * Background isolated with pure transparency, inverted to ivory chalk for charcoal background.
 */
export function DancingCoupleSilhouette({ 
  className = 'w-18 h-16', 
  opacity = 'opacity-95' 
}: { 
  className?: string; 
  opacity?: string; 
}) {
  return (
    <img
      src="/assets/aistudio/vintage_dancers_sketch_ivory.png"
      alt="Vintage chalk sketch of people joyfully dancing Pata Pata"
      className={`${className} ${opacity} object-contain shrink-0 select-none pointer-events-none drop-shadow-sm`}
      loading="lazy"
    />
  );
}

export const DancingPeopleSketch = DancingCoupleSilhouette;

export function UprightBassSilhouette({ className = 'w-10 h-10', opacity = 'opacity-85' }: { className?: string; opacity?: string }) {
  return (
    <svg 
      viewBox="0 0 80 120" 
      fill="currentColor" 
      className={`${className} ${opacity} text-stone-900 shrink-0 select-none`}
      aria-hidden="true"
    >
      {/* Bassist Head leaning over instrument */}
      <circle cx="34" cy="22" r="5" />
      <path d="M28 26 C24 35 22 45 25 58 L32 56 C30 46 31 36 34 28 Z" />
      {/* Scroll & Pegbox */}
      <circle cx="48" cy="14" r="4" />
      <rect x="46" y="14" width="4" height="28" rx="1.5" />
      {/* Left Hand on Fingerboard */}
      <circle cx="45" cy="30" r="3" />
      {/* Right Hand plucking string */}
      <circle cx="42" cy="52" r="3" />
      {/* Double Bass Body - Upper Bout, Waist, Lower Bout */}
      <path d="M46 42 C40 44 35 48 36 55 C37 60 42 63 40 68 C34 74 32 86 36 96 C42 104 54 104 60 96 C64 86 62 74 56 68 C54 63 59 60 60 55 C61 48 56 44 50 42 Z" />
      {/* F-holes */}
      <path d="M42 74 C41 78 44 82 43 86" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M54 74 C55 78 52 82 53 86" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Endpin */}
      <rect x="47" y="102" width="2" height="12" />
    </svg>
  );
}

export function TrumpeterSilhouette({ className = 'w-10 h-10', opacity = 'opacity-85' }: { className?: string; opacity?: string }) {
  return (
    <svg 
      viewBox="0 0 90 90" 
      fill="currentColor" 
      className={`${className} ${opacity} text-stone-900 shrink-0 select-none`}
      aria-hidden="true"
    >
      {/* Head tilted upward */}
      <circle cx="30" cy="30" r="6" />
      {/* Cheeks puffed */}
      <ellipse cx="34" cy="33" rx="3" ry="2" />
      {/* Trumpet pointing diagonally up */}
      <rect x="36" y="31" width="30" height="3" transform="rotate(-15 36 31)" />
      <path d="M64 20 L76 14 L78 26 L66 23 Z" />
      {/* Trumpet valves */}
      <rect x="48" y="24" width="2" height="5" />
      <rect x="52" y="23" width="2" height="5" />
      <rect x="56" y="22" width="2" height="5" />
      {/* Hands holding trumpet */}
      <circle cx="51" cy="30" r="3" />
      <circle cx="43" cy="32" r="3" />
      {/* Shoulders & Torso */}
      <path d="M26 36 C20 44 18 56 19 70 L28 68 C27 58 29 48 32 38 Z" />
      {/* Notes floating out of bell */}
      <circle cx="82" cy="12" r="1.5" />
      <circle cx="86" cy="18" r="2" />
    </svg>
  );
}

interface VintageSketchCardProps {
  type: 'sax' | 'dancers';
  className?: string;
  caption?: string;
}

export function VintageSketchCard({ type, className = '', caption }: VintageSketchCardProps) {
  const isSax = type === 'sax';
  const imgUrl = isSax ? VINTAGE_SAX_SKETCH : VINTAGE_DANCERS_SKETCH;
  const defaultCaption = isSax 
    ? 'Elder Jazz Saxophonist — Sophiatown Marabi Soul' 
    : 'The 1960s Pata Pata Touch-Dance Groove';

  return (
    <div className={`rounded-xl overflow-hidden border border-stone-200 bg-white p-3 shadow-2xs group ${className}`}>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-stone-50 border border-stone-100">
        <img
          src={imgUrl}
          alt={defaultCaption}
          className="w-full h-full object-cover filter contrast-[1.08] group-hover:scale-102 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/75 text-[10px] uppercase font-mono font-bold tracking-wider text-white">
          {isSax ? 'Vintage Sketch' : 'Sophiatown 1960s'}
        </div>
      </div>
      <div className="pt-2 px-1 text-center">
        <span className="text-xs font-semibold text-stone-900 block font-display">
          {caption || defaultCaption}
        </span>
        <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono">
          Hand-drawn Ink Illustration
        </span>
      </div>
    </div>
  );
}
