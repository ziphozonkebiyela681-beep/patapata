import { PataPataSignature } from './PataPataSignature';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export function BrandLogo({ className = '', size = 'md', showSubtitle = false }: BrandLogoProps) {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-32',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Pure isolated signature writing, zero boxes */}
      <PataPataSignature className={sizeClasses[size]} color="#ffffff" glow />
      {showSubtitle && (
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-amber-400 mt-2">
          Maboneng · Fox Street
        </span>
      )}
    </div>
  );
}

// Pure isolated signature display for hero / story without any box or border
export function IsolatedSignatureShowcase({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <PataPataSignature 
        className="w-auto h-28 sm:h-40 md:h-48 text-white filter drop-shadow-[0_0_24px_rgba(255,107,0,0.45)]"
        color="jazz"
      />
    </div>
  );
}

