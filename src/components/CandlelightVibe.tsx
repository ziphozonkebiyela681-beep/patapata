interface CandlelightVibeProps {
  className?: string;
}

export function CandleFlame({ className = '' }: CandlelightVibeProps) {
  return (
    <span className={`inline-flex items-center justify-center text-amber-700 select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 20 20"
        className="w-4 h-4 fill-amber-600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.527.82-1.127 2.18-1.554 3.72a18.72 18.72 0 00-.77 4.09c-.198-.444-.336-.933-.404-1.45-.115-.873-.13-1.802-.047-2.61a1 1 0 00-1.898-.386c-.452.924-.707 2.046-.777 3.208-.073 1.206.059 2.535.53 3.738C6.18 16.32 8.04 18 10.5 18c2.97 0 5.5-2.46 5.5-5.5 0-2.316-1.39-4.733-3.605-9.947z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

/**
 * Simple, humble geometric accent hairline divider
 */
export function JazzyPatternRibbon({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center py-2 select-none ${className}`}>
      <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
    </div>
  );
}
