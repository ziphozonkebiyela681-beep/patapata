import React from 'react';

interface VintagePhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string; // e.g., 'aspect-4/3', 'aspect-square', 'aspect-16/10'
  plateText?: string;
  caption?: string;
  priority?: boolean;
  showCorners?: boolean;
}

/**
 * Authentic 1960s Archival Framed Photograph.
 * Features:
 * - Multi-layered vintage wood & charcoal exhibition molding
 * - Archival warm ivory passe-partout matting (`bg-[#faf7f2]`)
 * - Authentic 1960s metallic/charcoal photo mounting corner brackets in all four corners
 * - Fine inner framing hairline & vintage paper depth
 * - Optional engraved vintage brass/charcoal archive plate at the base
 */
export function VintagePhotoFrame({
  src,
  alt,
  className = '',
  imageClassName = 'object-cover',
  aspectRatio = 'aspect-4/3',
  plateText,
  caption,
  priority = false,
  showCorners = true,
}: VintagePhotoFrameProps) {
  return (
    <figure
      className={`relative group bg-[#faf7f2] p-2.5 sm:p-3.5 rounded-sm border-[4px] sm:border-[6px] border-stone-900 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.25)] ring-1 ring-stone-800/40 transition-transform duration-300 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.35)] ${className}`}
    >
      {/* Outer decorative molding line */}
      <div className="absolute inset-1 border border-stone-300/80 pointer-events-none rounded-[1px]" />

      {/* The Matting & Photo Container */}
      <div className={`relative overflow-hidden ${aspectRatio} w-full bg-stone-900 border-2 border-stone-800 shadow-inner`}>
        {/* The Photograph */}
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full ${imageClassName} transition-transform duration-500 group-hover:scale-[1.02]`}
        />

        {/* Vintage vignette / warm photo paper tone layer */}
        <div
          className="absolute inset-0 pointer-events-none shadow-[inset_0_0_24px_rgba(0,0,0,0.3)] mix-blend-multiply opacity-40"
          aria-hidden="true"
        />

        {/* 1960s Archival Photo Mounting Corner Brackets */}
        {showCorners && (
          <>
            {/* Top-Left Corner Bracket */}
            <div
              className="absolute top-0 left-0 w-5 h-5 pointer-events-none border-t-[3px] border-l-[3px] border-stone-900 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)]"
              aria-hidden="true"
            >
              <div className="w-2.5 h-2.5 bg-stone-900/90 -rotate-45 -translate-x-1 -translate-y-1" />
            </div>

            {/* Top-Right Corner Bracket */}
            <div
              className="absolute top-0 right-0 w-5 h-5 pointer-events-none border-t-[3px] border-r-[3px] border-stone-900 drop-shadow-[-1px_1px_1px_rgba(255,255,255,0.6)]"
              aria-hidden="true"
            >
              <div className="w-2.5 h-2.5 bg-stone-900/90 rotate-45 translate-x-1 -translate-y-1 ml-auto" />
            </div>

            {/* Bottom-Left Corner Bracket */}
            <div
              className="absolute bottom-0 left-0 w-5 h-5 pointer-events-none border-b-[3px] border-l-[3px] border-stone-900 drop-shadow-[1px_-1px_1px_rgba(255,255,255,0.6)]"
              aria-hidden="true"
            >
              <div className="w-2.5 h-2.5 bg-stone-900/90 rotate-45 -translate-x-1 translate-y-1 mt-auto" />
            </div>

            {/* Bottom-Right Corner Bracket */}
            <div
              className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none border-b-[3px] border-r-[3px] border-stone-900 drop-shadow-[-1px_-1px_1px_rgba(255,255,255,0.6)]"
              aria-hidden="true"
            >
              <div className="w-2.5 h-2.5 bg-stone-900/90 -rotate-45 translate-x-1 translate-y-1 mt-auto ml-auto" />
            </div>
          </>
        )}
      </div>

      {/* Engraved Vintage Brass / Archive Nameplate */}
      {(plateText || caption) && (
        <div className="mt-2.5 pt-2 border-t border-stone-300 flex items-center justify-between gap-2 px-1 text-stone-800">
          {plateText && (
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-stone-100 border border-stone-400/80 shadow-2xs font-typewriter text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-stone-900">
              <span className="w-1 h-1 rounded-full bg-stone-800" />
              <span>{plateText}</span>
              <span className="w-1 h-1 rounded-full bg-stone-800" />
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
