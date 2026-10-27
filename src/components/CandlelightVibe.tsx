interface CandlelightVibeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function CandleFlame({ className = '' }: { className?: string }) {
  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Outer Halo Glow */}
      <div 
        aria-hidden="true" 
        className="absolute -top-4 w-10 h-10 rounded-full bg-gradient-to-t from-orange-600/40 via-amber-500/30 to-yellow-300/20 blur-md pointer-events-none" 
      />

      {/* Flickering Flame SVG */}
      <svg
        viewBox="0 0 24 36"
        className="w-5 h-8 animate-candle-flame overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="flameInner" cx="50%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </radialGradient>
          <radialGradient id="flameOuter" cx="50%" cy="85%" r="70%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ef4444" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#991b1b" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Red/Orange Flame Body */}
        <path
          d="M12 2C9.5 7.5 5 15 5 22C5 27.5 8.1 32 12 32C15.9 32 19 27.5 19 22C19 15 14.5 7.5 12 2Z"
          fill="url(#flameOuter)"
        />

        {/* Inner Bright Yellow/White Core */}
        <path
          d="M12 8C10.5 12 7.5 17 7.5 22.5C7.5 26.5 9.5 29.5 12 29.5C14.5 29.5 16.5 26.5 16.5 22.5C16.5 17 13.5 12 12 8Z"
          fill="url(#flameInner)"
        />
      </svg>

      {/* Candle Wick & Wax Tip */}
      <div className="w-0.5 h-1.5 bg-zinc-900 rounded-full -mt-0.5" />
      <div className="w-3 h-1 bg-amber-100/90 rounded-sm -mt-0.5" />
    </div>
  );
}

/**
 * Geometric Jazzy African Pattern Ribbon (Warm Ochre, Fiery Orange, Deep Red)
 */
export function JazzyPatternRibbon({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center select-none py-1.5 ${className}`}>
      <svg
        viewBox="0 0 1200 16"
        className="w-full h-3 sm:h-4 opacity-85"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="jazzChevronPattern" width="40" height="16" patternUnits="userSpaceOnUse">
          {/* Diamond in yellow */}
          <polygon points="20,0 26,8 20,16 14,8" fill="#f59e0b" fillOpacity="0.8" />
          {/* Chevrons in red & orange */}
          <polyline points="0,0 8,8 0,16" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          <polyline points="40,0 32,8 40,16" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" />
          {/* Small accent dot */}
          <circle cx="20" cy="8" r="1.5" fill="#ffffff" />
        </pattern>
        <rect width="1200" height="16" fill="url(#jazzChevronPattern)" />
      </svg>
    </div>
  );
}
