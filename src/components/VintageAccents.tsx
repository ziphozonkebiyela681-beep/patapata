import React from 'react';

export function VintageDoubleRule({ className = 'my-4' }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <div className="flex-1 h-[3px] border-y border-stone-700/80" />
      <span className="text-[10px] font-typewriter text-amber-400 tracking-[0.25em] uppercase px-1">
        ◆ 1960s SOPHIATOWN MARABI ◆
      </span>
      <div className="flex-1 h-[3px] border-y border-stone-700/80" />
    </div>
  );
}

export function VintageStampBadge({ 
  text = 'RECORDED 1967 • SOPHIATOWN', 
  className = '' 
}: { 
  text?: string; 
  className?: string; 
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-dashed border-stone-600 rounded text-[10px] font-typewriter uppercase tracking-widest text-stone-200 bg-stone-900/90 -rotate-1 shadow-2xs select-none ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      <span>{text}</span>
    </span>
  );
}

export function VinylRecordBadge({ 
  label = 'PATA PATA 45 RPM', 
  sublabel = 'MAKEBA • 1967', 
  className = '' 
}: { 
  label?: string; 
  sublabel?: string; 
  className?: string; 
}) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242220] border border-stone-700 shadow-md ${className}`}>
      {/* Mini 45 RPM vinyl spindle hole */}
      <div className="w-5 h-5 rounded-full bg-stone-950 flex items-center justify-center shrink-0 border border-stone-700">
        <div className="w-2 h-2 rounded-full bg-amber-400" />
      </div>
      <div className="text-left font-typewriter leading-none">
        <span className="text-[10px] font-bold text-white uppercase block tracking-wider">{label}</span>
        <span className="text-[8px] text-stone-400 uppercase tracking-widest block">{sublabel}</span>
      </div>
    </div>
  );
}

export function VintageMenuRibbon({ title = "CHEF'S TRADITIONAL KITCHEN PASS" }: { title?: string }) {
  return (
    <div className="w-full flex items-center justify-between border-y border-stone-700 py-1.5 px-3 mb-6 bg-[#242220] font-typewriter text-xs text-stone-200">
      <span className="font-bold tracking-widest uppercase text-amber-400">№ 286 FOX STREET</span>
      <span className="tracking-widest uppercase font-semibold hidden sm:inline text-stone-300">{title}</span>
      <span className="tracking-wider text-stone-400">SERVED HOT DAILY</span>
    </div>
  );
}
