interface PataPataSignatureProps {
  className?: string;
  color?: string; // e.g. "currentColor" or custom gradient
  glow?: boolean;
}

/**
 * Isolated authentic signature textmark of Pata Pata.
 * Renders ONLY the pure iconic geometric letterforms and central divider
 * with the signature diamond-cutout 'A's, without any box, card, or border.
 */
export function PataPataSignature({ 
  className = 'w-auto h-24 sm:h-32', 
  color = 'currentColor',
  glow = false,
}: PataPataSignatureProps) {
  return (
    <div className={`inline-block select-none ${glow ? 'filter drop-shadow-[0_0_20px_rgba(255,107,0,0.5)]' : ''}`}>
      <svg
        viewBox="0 0 381 221"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-transform duration-300`}
        aria-label="Pata Pata signature logotype"
        role="img"
      >
        <defs>
          <linearGradient id="jazzEmberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffa040" />
          </linearGradient>
        </defs>

        <g fill={color === 'jazz' ? 'url(#jazzEmberGradient)' : color} fillRule="evenodd">
          {/* ================= ROW 1: P A T A (y: 0 to 100) ================= */}
          
          {/* P 1: Left stem, curved upper lobe with inner cutout */}
          <path d="M 0,0 L 42,0 C 65,0 75,12 75,28 C 75,44 65,56 42,56 L 26,56 L 26,100 L 0,100 Z M 26,18 L 40,18 C 50,18 53,22 53,28 C 53,34 50,38 40,38 L 26,38 Z" />

          {/* A 1: Equilateral triangle with centered diamond cutout */}
          <path d="M 135,0 L 181,100 L 89,100 Z M 135,58 L 147,74 L 135,90 L 123,74 Z" />

          {/* T 1: Bold top horizontal bar with centered vertical trunk */}
          <path d="M 195,0 L 275,0 L 275,22 L 247,22 L 247,100 L 223,100 L 223,22 L 195,22 Z" />

          {/* A 2: Equilateral triangle with centered diamond cutout */}
          <path d="M 335,0 L 381,100 L 289,100 Z M 335,58 L 347,74 L 335,90 L 323,74 Z" />

          {/* ================= CENTRAL HORIZONTAL DIVIDER (y: 107 to 114) ================= */}
          <rect x="0" y="107" width="381" height="7" rx="1" />

          {/* ================= ROW 2: P A T A (y: 121 to 221) ================= */}
          
          {/* P 2 */}
          <path d="M 0,121 L 42,121 C 65,121 75,133 75,149 C 75,165 65,177 42,177 L 26,177 L 26,221 L 0,221 Z M 26,139 L 40,139 C 50,139 53,143 53,149 C 53,155 50,159 40,159 L 26,159 Z" />

          {/* A 3 */}
          <path d="M 135,121 L 181,221 L 89,221 Z M 135,179 L 147,195 L 135,211 L 123,195 Z" />

          {/* T 2 */}
          <path d="M 195,121 L 275,121 L 275,143 L 247,143 L 247,221 L 223,221 L 223,143 L 195,143 Z" />

          {/* A 4 */}
          <path d="M 335,121 L 381,221 L 289,221 Z M 335,179 L 347,195 L 335,211 L 323,195 Z" />
        </g>
      </svg>
    </div>
  );
}
