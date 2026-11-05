import React from 'react';

export interface VintagePhotoFrameProps {
  src?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string; // e.g., 'aspect-[16/9]', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/5]'
  plateText?: string;
  caption?: string;
  priority?: boolean;
  frameSize?: 'sm' | 'md' | 'lg';
  showCorners?: boolean; // kept for backwards compatibility
  children?: React.ReactNode;
}

/**
 * Authentic Antique Gilded Baroque / Rococo Carved Gold Frame.
 * Replicates the exact ornate gold carved exhibition frame provided by the user,
 * dynamically adapting its shape and dimensions to any photograph's aspect ratio
 * and screen size using calibrated 9-slice CSS border-image geometry.
 */
export function VintagePhotoFrame({
  src,
  alt = 'Photograph',
  className = '',
  imageClassName = 'object-cover',
  aspectRatio = 'aspect-[4/3]',
  plateText,
  caption,
  priority = false,
  frameSize = 'md',
  children,
}: VintagePhotoFrameProps) {
  // Proportional border width tuned to original frame slice dimensions (254px top, 225px right, 221px bottom, 223px left)
  const getBorderWidth = (size: 'sm' | 'md' | 'lg') => {
    switch (size) {
      case 'sm':
        return 'clamp(18px, 2.8vw, 28px) clamp(16px, 2.5vw, 25px) clamp(16px, 2.5vw, 25px) clamp(16px, 2.5vw, 25px)';
      case 'lg':
        return 'clamp(28px, 5vw, 52px) clamp(24px, 4.3vw, 45px) clamp(24px, 4.3vw, 45px) clamp(24px, 4.3vw, 45px)';
      case 'md':
      default:
        return 'clamp(22px, 3.8vw, 40px) clamp(20px, 3.4vw, 36px) clamp(20px, 3.4vw, 36px) clamp(20px, 3.4vw, 36px)';
    }
  };

  const frameStyle: React.CSSProperties = {
    borderStyle: 'solid',
    borderColor: '#c99a4a', // Fallback rich antique gold
    borderWidth: getBorderWidth(frameSize),
    borderImageSource: "url('/assets/aistudio/ornate_gold_frame_cutout.png')",
    borderImageSlice: '254 225 221 223',
    borderImageRepeat: 'stretch',
    filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.32)) drop-shadow(0 3px 8px rgba(0,0,0,0.22))',
  };

  return (
    <figure className={`relative group inline-block w-full text-left transition-transform duration-300 hover:scale-[1.01] ${className}`}>
      
      {/* Outer Carved Baroque Frame Container */}
      <div 
        style={frameStyle}
        className="relative w-full transition-all duration-300 select-none"
      >
        {/* Inner Photograph Well (deep rebate with inner bevel shadow) */}
        <div className={`relative w-full ${aspectRatio} overflow-hidden bg-stone-950 shadow-[inset_0_0_14px_rgba(0,0,0,0.7)] ring-1 ring-amber-950/50`}>
          {src ? (
            <img
              src={src}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              className={`w-full h-full ${imageClassName} transition-transform duration-500 group-hover:scale-[1.02]`}
            />
          ) : (
            children
          )}

          {/* Antique photograph luster & subtle warm museum depth */}
          <div
            className="absolute inset-0 pointer-events-none shadow-[inset_0_0_24px_rgba(0,0,0,0.45)] mix-blend-multiply opacity-35"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-amber-950/15 via-transparent to-amber-200/10 mix-blend-overlay"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Engraved Antique Brass Museum Plaque */}
      {(plateText || caption) && (
        <div className="mt-3 pt-1 flex flex-wrap items-center justify-between gap-2 px-1">
          {plateText && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-gradient-to-b from-[#e1bf72] via-[#c6953d] to-[#996a22] border border-[#785012] text-stone-950 font-typewriter text-[9px] sm:text-[10px] uppercase font-bold tracking-widest shadow-[0_2px_4px_rgba(0,0,0,0.22)] select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52360b] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] border border-amber-300/40" />
              <span>{plateText}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#52360b] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] border border-amber-300/40" />
            </div>
          )}
          {caption && (
            <p className="font-serif italic text-[11px] sm:text-xs text-stone-600 truncate text-right">
              {caption}
            </p>
          )}
        </div>
      )}
    </figure>
  );
}

export default VintagePhotoFrame;
