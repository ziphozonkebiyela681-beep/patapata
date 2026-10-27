import React from 'react';

export function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function TikTokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.882 2.87 2.896 2.896 0 0 1-2.883-2.87 2.896 2.896 0 0 1 2.883-2.87c.294 0 .576.044.843.125V9.45a6.335 6.335 0 0 0-.843-.057c-3.528 0-6.388 2.859-6.388 6.388 0 3.528 2.86 6.388 6.388 6.388 3.528 0 6.388-2.86 6.388-6.388V8.718a8.212 8.212 0 0 0 4.887 1.583V6.857a4.814 4.814 0 0 1-1.201-.171z" />
    </svg>
  );
}

export const SOCIAL_LINKS = {
  handle: '@pata.pata_maboneng',
  instagram: 'https://www.instagram.com/pata.pata_maboneng/',
  tiktok: 'https://www.tiktok.com/@pata.pata_maboneng',
};
