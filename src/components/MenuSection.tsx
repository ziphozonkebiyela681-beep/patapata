import { useState, useMemo } from 'react';
import { Search, Flame, Plus, Check, X, Phone, Utensils, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menuData';
import { CandleFlame, JazzyPatternRibbon } from './CandlelightVibe';

interface MenuSectionProps {
  onOpenBooking: () => void;
}

export function MenuSection({ onOpenBooking }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category']>('traditional');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [wishlist, setWishlist] = useState<MenuItem[]>([]);
  const [showWishlistDrawer, setShowWishlistDrawer] = useState(false);

  // The 2 authentic kitchen photographs provided by Pata Pata
  const stewDomboloPhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_3.53.36_PM__1__48d9f749.jpg';
  const harvestVegPhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_3.53.36_PM_d00fe59c.jpg';

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory = activeCategory === 'traditional' && searchQuery.trim() !== '' 
        ? true 
        : item.category === activeCategory;

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = q === '' || (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q))
      );

      // Tag filter
      const matchesTag = selectedTag === 'all' || (
        selectedTag === 'special' ? item.isChefSpecial :
        selectedTag === 'spicy' ? (item.spicyLevel && item.spicyLevel > 0) :
        selectedTag === 'vegetarian' ? item.tags.includes('Vegetarian') :
        item.tags.includes(selectedTag)
      );

      return (searchQuery.trim() !== '' ? matchesSearch : (matchesCategory && matchesSearch)) && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  const toggleWishlist = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (wishlist.some(w => w.id === item.id)) {
      setWishlist(wishlist.filter(w => w.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  const wishlistTotal = useMemo(() => {
    return wishlist.reduce((acc, curr) => acc + curr.price, 0);
  }, [wishlist]);

  const activeCategoryInfo = MENU_CATEGORIES.find(c => c.id === activeCategory);

  return (
    <section id="menu" className="relative py-24 bg-transparent text-white border-t border-amber-950/40 overflow-hidden">
      
      {/* Warm Jazz Backlight */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-b from-red-600/10 via-orange-500/15 to-transparent rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 shadow-md">
            <CandleFlame className="scale-75" />
            <span>Fox Street Soul Kitchen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white mb-3">
            The Online Menu
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Slow-cooked Mogodu, 6-hour Oxtail potjies, flame-seared T-bones, and signature Miriam Makeba cocktails. Prices in South African Rand (ZAR).
          </p>
        </div>

        {/* Jazzy Pattern Ribbon */}
        <div className="mb-12 max-w-xl mx-auto">
          <JazzyPatternRibbon />
        </div>

        {/* Menu Flanking Layout: Left Unlabeled Photo · Menu Detail (Center) · Right Unlabeled Photo */}
        <div className="flex flex-col lg:flex-row items-start gap-6 xl:gap-8">
          
          {/* Left Side: Unlabeled Kitchen Photo (Stew & Dombolo) */}
          <div className="hidden lg:block lg:w-48 xl:w-56 shrink-0">
            <div className="sticky top-28">
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-950 shadow-xl group hover:border-amber-400/50 transition-all duration-300">
                <img
                  src={stewDomboloPhotoUrl}
                  alt="Pata Pata Kitchen"
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Center Column: The Menu Detail */}
          <div className="flex-1 min-w-0 w-full">
            
            {/* Mobile / Tablet (< lg): Unlabeled photos side-by-side framing menu detail */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 lg:hidden">
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-950 shadow-lg aspect-[4/3]">
                <img
                  src={stewDomboloPhotoUrl}
                  alt="Pata Pata Kitchen"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-950 shadow-lg aspect-[4/3]">
                <img
                  src={harvestVegPhotoUrl}
                  alt="Pata Pata Kitchen"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Search & Tag Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
            <input
              type="text"
              placeholder="Search dishes, oxtail, samosas, cocktails..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-amber-400 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Tag Pills in Warm Red/Yellow/Orange */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
                selectedTag === 'all'
                  ? 'bg-white text-black'
                  : 'bg-zinc-950 text-zinc-300 border border-zinc-800 hover:text-white'
              }`}
            >
              All Plates
            </button>
            <button
              onClick={() => setSelectedTag('special')}
              className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                selectedTag === 'special'
                  ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(251,191,36,0.5)]'
                  : 'bg-zinc-950 text-amber-300 border border-amber-900/40 hover:text-white'
              }`}
            >
              <CandleFlame className="scale-65" /> Chef’s Special
            </button>
            <button
              onClick={() => setSelectedTag('spicy')}
              className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors flex items-center gap-1 ${
                selectedTag === 'spicy'
                  ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.5)]'
                  : 'bg-zinc-950 text-red-400 border border-red-900/40 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5" /> Peri-Peri / Fiery
            </button>
            <button
              onClick={() => setSelectedTag('vegetarian')}
              className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
                selectedTag === 'vegetarian'
                  ? 'bg-orange-500 text-black'
                  : 'bg-zinc-950 text-orange-400 border border-orange-900/40 hover:text-white'
              }`}
            >
              Vegetarian
            </button>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        {!searchQuery && (
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-zinc-800 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black shadow-lg shadow-orange-950/50 scale-[1.02]'
                      : 'bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Category Tagline */}
        {!searchQuery && activeCategoryInfo && (
          <div className="mb-8 flex items-center justify-between">
            <p className="text-xs text-amber-300/90 italic">
              — {activeCategoryInfo.tagline}
            </p>
            <span className="text-xs font-mono text-zinc-400">
              {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'}
            </span>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredItems.map((item) => {
            const isWishlisted = wishlist.some(w => w.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedDish(item)}
                className="group relative p-6 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-amber-500/50 hover:bg-zinc-900/70 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Top: Title, Price, & Action */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h3>
                        {item.isChefSpecial && (
                          <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30 shrink-0 flex items-center gap-1">
                            ★ Special
                          </span>
                        )}
                      </div>
                      
                      {/* Zero-Pill Metadata */}
                      <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
                        {item.tags.map((t, idx) => (
                          <span key={idx} className="flex items-center gap-2">
                            <span>{t}</span>
                            {idx < item.tags.length - 1 && <span aria-hidden="true">·</span>}
                          </span>
                        ))}
                        {item.spicyLevel && item.spicyLevel > 0 && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-red-400 flex items-center gap-0.5 font-bold">
                              <Flame className="w-3 h-3" />
                              {'🌶️'.repeat(item.spicyLevel)}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Price in Rand */}
                    <div className="text-right shrink-0">
                      <span className="text-lg font-black font-display tracking-tight text-amber-300 tabular-nums">
                        R{item.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom: Pairing / Wishlist trigger */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-900 text-xs">
                  <span className="text-zinc-400 truncate max-w-[240px]">
                    {item.pairing ? `Pairing: ${item.pairing}` : 'Tap for culinary story'}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => toggleWishlist(item, e)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                      isWishlisted
                        ? 'bg-amber-400 text-black font-extrabold shadow-[0_0_10px_rgba(251,191,36,0.4)]'
                        : 'bg-zinc-900 text-amber-300 hover:text-white hover:bg-orange-600 hover:text-black'
                    }`}
                    title={isWishlisted ? 'In table order note' : 'Add to table order note'}
                  >
                    {isWishlisted ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Note</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 px-4 bg-zinc-950/60 rounded-2xl border border-zinc-900">
            <Utensils className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white mb-1">No dishes matched &apos;{searchQuery}&apos;</h4>
            <p className="text-xs text-zinc-400 mb-4">Try searching for &apos;oxtail&apos;, &apos;mogodu&apos;, &apos;samosas&apos;, or &apos;platter&apos;.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedTag('all'); }}
              className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-white hover:bg-zinc-800"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call Host Note below menu */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-zinc-900 to-amber-950/40 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-black border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold font-display text-white">
                Craving our slow-simmered Oxtail, Stew or Mogodu?
              </h4>
              <p className="text-xs text-zinc-300">
                Call our front desk to ensure your favorite dish is held hot for your dinner or jazz night.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-colors shrink-0 shadow-lg shadow-orange-950/40"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>Call Desk To Book</span>
          </button>
        </div>

          </div>

          {/* Right Side: Unlabeled Kitchen Photo (Pan-Sautéed Greens) */}
          <div className="hidden lg:block lg:w-48 xl:w-56 shrink-0">
            <div className="sticky top-28">
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-950 shadow-xl group hover:border-amber-400/50 transition-all duration-300">
                <img
                  src={harvestVegPhotoUrl}
                  alt="Pata Pata Kitchen"
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-zinc-950 border border-amber-500/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 z-20"
              aria-label="Close dish details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  {selectedDish.category.toUpperCase()}
                </span>
                <h3 className="text-2xl font-black font-display text-white mt-1">
                  {selectedDish.name}
                </h3>
              </div>
              <div className="text-2xl font-black font-display text-amber-300 tabular-nums shrink-0">
                R{selectedDish.price}
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {selectedDish.description}
            </p>

            {selectedDish.heritageNote && (
              <div className="p-4 rounded-xl bg-black border border-amber-500/30 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1 flex items-center gap-1.5">
                  <CandleFlame className="scale-65" /> Heritage & Soul
                </span>
                <p className="text-xs text-zinc-200 italic leading-relaxed">
                  &ldquo;{selectedDish.heritageNote}&rdquo;
                </p>
              </div>
            )}

            {selectedDish.pairing && (
              <div className="text-xs text-zinc-400 mb-6 flex items-center gap-2">
                <span className="font-semibold text-amber-300">Recommended Pairing:</span>
                <span>{selectedDish.pairing}</span>
              </div>
            )}

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-zinc-900">
              <button
                onClick={(e) => toggleWishlist(selectedDish, e)}
                className="flex-1 py-3 rounded-xl border border-zinc-750 bg-zinc-900 text-xs font-bold text-white hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
              >
                {wishlist.some(w => w.id === selectedDish.id) ? (
                  <>
                    <Check className="w-4 h-4 text-amber-400" />
                    <span>In Your Table Notes</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-amber-400" />
                    <span>Add to Table Order Notes</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setSelectedDish(null);
                  onOpenBooking();
                }}
                className="py-3 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-extrabold hover:brightness-110 transition-all flex items-center gap-2 shrink-0"
              >
                <Phone className="w-3.5 h-3.5 fill-black" />
                <span>Call Desk</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Wishlist / Table Order Note Drawer Trigger */}
      {wishlist.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setShowWishlistDrawer(true)}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-950 border border-amber-500/50 text-white shadow-2xl hover:border-amber-400 transition-all glow-orange-sm"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-extrabold text-xs flex items-center justify-center">
              {wishlist.length}
            </div>
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold block">Table Order Note</span>
              <span className="text-xs font-bold text-white font-mono">Est. R{wishlistTotal}</span>
            </div>
          </button>
        </div>
      )}

      {/* Wishlist Drawer Modal */}
      {showWishlistDrawer && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full sm:max-w-md bg-zinc-950 border border-amber-500/40 rounded-t-3xl sm:rounded-2xl p-6 text-white max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Your Custom Dining Selection
                </span>
                <h3 className="text-lg font-bold font-display text-white">
                  Table Order Notes ({wishlist.length} dishes)
                </h3>
              </div>
              <button
                onClick={() => setShowWishlistDrawer(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-zinc-300 mb-4">
              Keep this list handy when you call the front desk to reserve or arrive for your meal!
            </p>

            <div className="space-y-2 mb-6">
              {wishlist.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs">
                  <div>
                    <span className="font-semibold text-white block">{item.name}</span>
                    <span className="text-[11px] text-amber-400">{item.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-zinc-200">R{item.price}</span>
                    <button
                      onClick={(e) => toggleWishlist(item, e)}
                      className="text-zinc-500 hover:text-red-400"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between py-3 border-t border-zinc-900 text-sm font-semibold mb-6">
              <span className="text-zinc-300">Estimated Total:</span>
              <span className="text-amber-300 text-base font-mono font-bold">R{wishlistTotal}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setShowWishlistDrawer(false);
                  onOpenBooking();
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Call Desk With This Order</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
