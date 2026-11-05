interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export function BrandLogo({ className = '', size = 'md', showTagline = false }: BrandLogoProps) {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-13',
    lg: 'h-16 sm:h-20 md:h-24',
    xl: 'h-24 sm:h-30 md:h-38',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <img
        src="/assets/aistudio/patapata_logo_white_isolated.png"
        alt="PATAPATA - SA Cuisine • Bar • Live Music"
        className={`${sizeClasses[size]} w-auto object-contain`}
        loading="eager"
      />
      {showTagline && (
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-600 mt-1">
          Fox Street · Maboneng
        </span>
      )}
    </div>
  );
}

export function IsolatedSignatureShowcase({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <img
        src="/assets/aistudio/patapata_logo_white_isolated.png"
        alt="PATAPATA - SA Cuisine • Bar • Live Music"
        className="w-auto h-20 sm:h-28 md:h-36 object-contain"
      />
    </div>
  );
}
