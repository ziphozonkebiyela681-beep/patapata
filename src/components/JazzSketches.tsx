export const VINTAGE_SAX_SKETCH = '/src/assets/images/vintage_jazz_sax_sketch_1793759037700.jpg';
export const VINTAGE_DANCERS_SKETCH = '/src/assets/images/vintage_jazz_dancers_sketch_1793759056974.jpg';

export function SaxophoneSilhouette({ className = 'w-12 h-12', opacity = 'opacity-85' }: { className?: string; opacity?: string }) {
  return (
    <svg 
      viewBox="0 0 100 120" 
      fill="currentColor" 
      className={`${className} ${opacity} text-stone-900 shrink-0 select-none`}
      aria-hidden="true"
    >
      {/* Fedora Hat */}
      <path d="M28 22 C32 15 48 14 56 18 C60 20 62 25 58 27 C46 27 38 26 28 22 Z" />
      <path d="M22 25 C34 22 58 23 70 27 C68 29 60 29 50 28 C36 28 26 27 22 25 Z" />
      {/* Head tilted back blowing into mouthpiece */}
      <path d="M42 27 C48 27 52 30 52 36 C52 42 46 45 42 47 C40 45 38 41 38 35 C38 30 40 27 42 27 Z" />
      {/* Glasses / brow silhouette */}
      <circle cx="48" cy="33" r="2.5" />
      {/* Saxophone neck and mouthpiece */}
      <path d="M48 37 C54 39 59 44 60 48 L56 50 C54 46 51 43 46 41 Z" />
      {/* Neck & Vest / Shoulders leaning back */}
      <path d="M38 45 C32 50 26 58 25 70 L38 72 C41 62 45 54 46 47 Z" />
      <path d="M44 47 C48 54 52 64 54 75 L42 75 C40 68 38 60 38 52 Z" />
      {/* Saxophone Body with Keys */}
      <path d="M60 48 L65 78 C66 84 62 92 52 94 C42 96 35 90 35 82 C35 76 39 72 45 72 C49 72 52 75 52 79 C52 83 49 85 46 85 C44 85 43 83 43 81 C43 78 48 76 54 84 C58 76 56 68 54 52 Z" />
      {/* Flared Bell of Saxophone */}
      <path d="M44 72 C38 65 30 65 24 72 C18 79 20 90 28 95 C36 100 46 96 48 88 L44 72 Z" />
      {/* Hands on Keys */}
      <ellipse cx="58" cy="62" rx="4" ry="2.5" transform="rotate(-15 58 62)" />
      <ellipse cx="61" cy="72" rx="4" ry="2.5" transform="rotate(-20 61 72)" />
      {/* Floating Jazz Notes */}
      <path d="M72 35 C72 32 75 30 78 31 L84 29 L84 38 L76 40 L76 35 Z M76 40 A3 3 0 1 1 73 37 A3 3 0 0 1 76 40 Z" />
      <path d="M85 46 C85 44 87 42 89 43 L94 41 L94 48 L88 50 L88 46 Z M88 50 A2.5 2.5 0 1 1 85.5 47.5 A2.5 2.5 0 0 1 88 50 Z" />
      <circle cx="68" cy="22" r="1.5" />
    </svg>
  );
}

export function DancingCoupleSilhouette({ className = 'w-14 h-14', opacity = 'opacity-85' }: { className?: string; opacity?: string }) {
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="currentColor" 
      className={`${className} ${opacity} text-stone-900 shrink-0 select-none`}
      aria-hidden="true"
    >
      {/* Male Dancer (Left) - Fedored Hat, Swing Stance */}
      <ellipse cx="38" cy="22" rx="7" ry="2.5" transform="rotate(-10 38 22)" />
      <circle cx="38" cy="20" r="5" />
      {/* Male Torso leaning back in rhythm */}
      <path d="M33 27 C28 35 27 48 30 60 L42 58 C40 48 41 36 43 28 Z" />
      {/* Male Arm reaching out holding partner's hand */}
      <path d="M38 32 C48 34 56 36 64 36 L64 40 C55 39 46 37 38 36 Z" />
      {/* Male Left Arm raised high */}
      <path d="M32 32 C26 26 22 20 18 16 L15 19 C19 23 23 30 30 36 Z" />
      {/* Male Legs (Kick & Stride) */}
      <path d="M30 60 C26 72 20 85 14 96 L20 98 C26 87 32 74 36 60 Z" />
      <path d="M38 59 C41 72 45 84 52 97 L57 94 C50 82 45 70 41 58 Z" />

      {/* Connection Hand Clasp */}
      <circle cx="64" cy="38" r="3" />

      {/* Female Dancer (Right) - Headband/Afro, Swing Dress */}
      <circle cx="78" cy="24" r="5.5" />
      <path d="M74 21 C76 18 82 18 84 22 C84 25 80 27 75 25 Z" />
      {/* Female Arm holding partner's hand */}
      <path d="M76 34 C72 36 68 37 64 38 L65 41 C69 40 73 38 78 36 Z" />
      {/* Female Other Arm curved gracefully */}
      <path d="M82 33 C88 35 94 40 98 48 L94 50 C91 44 86 39 80 37 Z" />
      {/* 1960s Flared Swing A-line Dress */}
      <path d="M76 32 C74 42 72 50 64 68 C76 72 88 71 96 64 C90 50 84 40 82 32 Z" />
      {/* Female Dancing Legs & Heels */}
      <path d="M72 68 C70 78 68 88 66 98 L71 99 C74 89 76 79 78 69 Z" />
      <path d="M84 66 C87 76 92 86 98 94 L102 91 C96 83 91 74 88 65 Z" />

      {/* Motion Sparkles & Swirls */}
      <path d="M52 14 Q56 12 58 16 Q60 12 64 14 Q60 16 58 20 Q56 16 52 14 Z" />
      <circle cx="106" cy="32" r="1.5" />
      <circle cx="12" cy="42" r="1.5" />
    </svg>
  );
}

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
