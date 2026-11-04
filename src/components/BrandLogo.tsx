interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export function BrandLogo({ className = '', size = 'md', showTagline = false }: BrandLogoProps) {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16 md:h-20',
    xl: 'h-20 sm:h-24 md:h-28',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <img
        src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_3.44.31_AM_78ac61fd.jpg"
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
        src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_3.44.31_AM_78ac61fd.jpg"
        alt="PATAPATA - SA Cuisine • Bar • Live Music"
        className="w-auto h-20 sm:h-28 md:h-36 object-contain"
      />
    </div>
  );
}
