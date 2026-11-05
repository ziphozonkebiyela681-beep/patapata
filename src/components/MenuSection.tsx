import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Search, Plus, Check, X, Phone, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menuData';
import { MiriamMakebaSilhouette, DancingCoupleSilhouette, VINTAGE_DANCERS_SKETCH } from './JazzSketches';
import { VintageMenuRibbon, VintageStampBadge } from './VintageAccents';
import { AfricanGeometricDivider, AfricanContinentSVG } from './AfricanMotifs';
import { VintagePhotoFrame } from './VintagePhotoFrame';

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

  // Category horizontal scroll ref and state
  const categoriesScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (categoriesScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoriesScrollRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
    }
  }, []);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoriesScrollRef.current) {
      const scrollDistance = 240;
      categoriesScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 320);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [checkScroll]);

  // The 2 authentic kitchen photographs provided by Pata Pata (unlabeled as requested)
  const stewDomboloPhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_3.53.36_PM__1__48d9f749.jpg';
  const harvestVegPhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_3.53.36_PM_d00fe59c.jpg';

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'traditional' && searchQuery.trim() !== '' 
        ? true 
        : item.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = q === '' || (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q))
      );

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
    <section id="menu" className="py-16 sm:py-20 bg-[#1c1b19] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Humble Section Header with Miriam Makeba and Dancers Sketches */}
        <div className="text-center max-w-2xl mx-auto mb-10 relative">
          <div className="flex items-center justify-center gap-4 mb-2">
            <MiriamMakebaSilhouette className="w-8 h-10 opacity-80 hidden sm:block" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Fox Street Kitchen &amp; Marabi Sounds
            </span>
            <DancingCoupleSilhouette className="w-9 h-10 opacity-80 hidden sm:block" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-display text-white mb-3">
            Our Food &amp; Drinks Menu
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Slow-cooked Mogodu, 6-hour Oxtail potjies, flame-seared braai cuts, and signature Miriam Makeba cocktails. All prices in South African Rand (ZAR).
          </p>
        </div>

        {/* Menu Flanking Layout: Left Unlabeled Framed Photo · Menu Detail (Center) · Right Unlabeled Framed Photo */}
        <div className="flex flex-col lg:flex-row items-start gap-6 xl:gap-8">
          
          {/* Left Side: Unlabeled Kitchen Photo in Antique Gold Baroque Frame */}
          <div className="hidden lg:block lg:w-48 xl:w-56 shrink-0">
            <div className="sticky top-28">
              <VintagePhotoFrame
                src={stewDomboloPhotoUrl}
                alt="Kitchen specialty"
                aspectRatio="aspect-[3/4]"
                frameSize="sm"
              />
            </div>
          </div>

          {/* Center Column: The Menu Detail */}
          <div className="flex-1 min-w-0 w-full">
            
            {/* Mobile / Tablet (< lg): Unlabeled photos side-by-side in antique gold baroque frames */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 lg:hidden">
              <VintagePhotoFrame
                src={stewDomboloPhotoUrl}
                alt="Kitchen specialty"
                aspectRatio="aspect-[4/3]"
                frameSize="sm"
              />
              <VintagePhotoFrame
                src={harvestVegPhotoUrl}
                alt="Kitchen specialty"
                aspectRatio="aspect-[4/3]"
                frameSize="sm"
              />
            </div>

            {/* 1960s Traditional Kitchen Pass Ribbon */}
            <VintageMenuRibbon title="TRADITIONAL SOUTH AFRICAN PASS • 1960s SOPHIATOWN HERITAGE" />

            {/* Search & Tag Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search dishes, oxtail, samosas, cocktails..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#242220] border border-stone-700 focus:border-amber-400 rounded-xl text-sm text-white placeholder-stone-400 focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Tag Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
                <button
                  onClick={() => setSelectedTag('all')}
                  className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                    selectedTag === 'all'
                      ? 'bg-stone-100 text-stone-950 font-bold'
                      : 'bg-[#242220] text-stone-300 border border-stone-800 hover:bg-stone-800 hover:text-white'
                  }`}
                >
                  All Plates
                </button>
                <button
                  onClick={() => setSelectedTag('special')}
                  className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                    selectedTag === 'special'
                      ? 'bg-amber-400 text-stone-950 font-bold'
                      : 'bg-[#242220] text-stone-300 border border-stone-800 hover:bg-stone-800 hover:text-white'
                  }`}
                >
                  Chef’s Special
                </button>
                <button
                  onClick={() => setSelectedTag('spicy')}
                  className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                    selectedTag === 'spicy'
                      ? 'bg-amber-400 text-stone-950 font-bold'
                      : 'bg-[#242220] text-stone-300 border border-stone-800 hover:bg-stone-800 hover:text-white'
                  }`}
                >
                  Fiery &amp; Spiced
                </button>
                <button
                  onClick={() => setSelectedTag('vegetarian')}
                  className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                    selectedTag === 'vegetarian'
                      ? 'bg-amber-400 text-stone-950 font-bold'
                      : 'bg-[#242220] text-stone-300 border border-stone-800 hover:bg-stone-800 hover:text-white'
                  }`}
                >
                  Vegetarian
                </button>
              </div>
            </div>

            {/* Category Navigation Tabs with Forward and Back Scrolling Arrows */}
            {!searchQuery && (
              <div className="relative mb-6">
                <div className="flex items-center gap-2 pb-3 border-b border-stone-800">
                  
                  {/* Scroll Back Arrow Button */}
                  <button
                    type="button"
                    onClick={() => scrollCategories('left')}
                    disabled={!canScrollLeft}
                    className={`p-2 rounded-lg border transition-all shrink-0 flex items-center justify-center min-h-[40px] min-w-[40px] ${
                      canScrollLeft
                        ? 'bg-[#242220] border-stone-700 text-stone-200 hover:bg-stone-800 hover:border-amber-400'
                        : 'bg-stone-900/50 border-stone-800 text-stone-600 cursor-not-allowed opacity-40'
                    }`}
                    aria-label="Scroll categories back"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Scrollable Categories Row Container */}
                  <div
                    ref={categoriesScrollRef}
                    onScroll={checkScroll}
                    className="flex-1 flex items-center gap-2 overflow-x-auto py-1 scroll-smooth scrollbar-none"
                  >
                    {MENU_CATEGORIES.map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={(e) => {
                            setActiveCategory(cat.id);
                            e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                            setTimeout(checkScroll, 300);
                          }}
                          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                            isActive
                              ? 'bg-stone-100 text-stone-950 font-bold shadow-md'
                              : 'bg-[#242220] text-stone-300 border border-stone-800 hover:bg-stone-800 hover:text-white'
                          }`}
                        >
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Scroll Forward Arrow Button */}
                  <button
                    type="button"
                    onClick={() => scrollCategories('right')}
                    disabled={!canScrollRight}
                    className={`p-2 rounded-lg border transition-all shrink-0 flex items-center justify-center min-h-[40px] min-w-[40px] ${
                      canScrollRight
                        ? 'bg-[#242220] border-stone-700 text-stone-200 hover:bg-stone-800 hover:border-amber-400'
                        : 'bg-stone-900/50 border-stone-800 text-stone-600 cursor-not-allowed opacity-40'
                    }`}
                    aria-label="Scroll categories forward"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                </div>
              </div>
            )}

            {/* Category Tagline */}
            {!searchQuery && activeCategoryInfo && (
              <div className="mb-6 flex items-center justify-between text-xs text-stone-500">
                <p className="italic">
                  — {activeCategoryInfo.tagline}
                </p>
                <span className="font-mono">
                  {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'}
                </span>
              </div>
            )}

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => {
                const isWishlisted = wishlist.some(w => w.id === item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedDish(item)}
                    className="group p-4 sm:p-5 rounded-xl bg-[#242220] border border-stone-800 hover:border-stone-600 transition-colors cursor-pointer flex flex-col justify-between shadow-md"
                  >
                    <div>
                      {/* Card Top: Title & Price */}
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                              {item.name}
                            </h3>
                            {item.isChefSpecial && (
                              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 bg-amber-950/60 border border-amber-800/60 px-1.5 py-0.5 rounded shrink-0">
                                Special
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-400 mt-0.5">
                            {item.tags.map((t, idx) => (
                              <span key={idx} className="flex items-center gap-1.5">
                                <span>{t}</span>
                                {idx < item.tags.length - 1 && <span>·</span>}
                              </span>
                            ))}
                            {item.spicyLevel && item.spicyLevel > 0 && (
                              <>
                                <span>·</span>
                                <span className="text-amber-400 font-medium">
                                  Spiced
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right shrink-0">
                          <span className="text-base font-bold text-amber-400 tabular-nums font-mono">
                            R{item.price}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed mb-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Bottom: Pairing / Add Note */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-stone-800 text-xs gap-2">
                      <span className="text-stone-400 truncate text-xs max-w-[180px] sm:max-w-[240px]">
                        {item.pairing ? `Pairing: ${item.pairing}` : 'Tap for details'}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => toggleWishlist(item, e)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors shrink-0 ${
                          isWishlisted
                            ? 'bg-amber-400 text-stone-950 font-bold'
                            : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
                        }`}
                      >
                        {isWishlisted ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Saved</span>
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
              <div className="text-center py-12 px-4 bg-[#242220] rounded-xl border border-stone-800">
                <Utensils className="w-6 h-6 text-stone-500 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">No dishes matched &apos;{searchQuery}&apos;</h4>
                <p className="text-xs text-stone-400 mb-4">Try searching for &apos;oxtail&apos;, &apos;mogodu&apos;, or &apos;potjie&apos;.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedTag('all'); }}
                  className="px-3.5 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-semibold text-stone-200 hover:bg-stone-700"
                >
                  Reset Search
                </button>
              </div>
            )}

            {/* Vintage Touch-Dance Sketch Vignette */}
            <div className="mt-8 p-4 rounded-xl bg-[#242220] border border-stone-800 flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 border border-stone-800 bg-[#1c1b19] flex items-center justify-center p-1">
                <img
                  src={VINTAGE_DANCERS_SKETCH}
                  alt="Vintage sketch of Sophiatown touch dance"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-amber-400 block">
                  1960s Sophiatown Beat
                </span>
                <h4 className="text-sm font-bold text-white font-display">
                  Food That Moves With The Rhythm
                </h4>
                <p className="text-xs text-stone-300 line-clamp-2">
                  Just like Miriam Makeba sang, every plate at Pata Pata is served with rhythm, laughter, and warm African hospitality.
                </p>
              </div>
            </div>

            {/* Call Host Note below menu */}
            <div className="mt-6 p-6 rounded-xl bg-[#242220] border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-950 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 fill-stone-950" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Craving our slow-simmered Oxtail or Mogodu?
                  </h4>
                  <p className="text-xs text-stone-300">
                    Call our desk host to ensure your favorite dish is held hot for your arrival.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5 fill-stone-950" />
                <span>Call Desk (+27 11 334 0470)</span>
              </button>
            </div>

          </div>

          {/* Right Side: Unlabeled Kitchen Photo in Antique Gold Baroque Frame */}
          <div className="hidden lg:block lg:w-48 xl:w-56 shrink-0">
            <div className="sticky top-28">
              <VintagePhotoFrame
                src={harvestVegPhotoUrl}
                alt="Kitchen specialty"
                aspectRatio="aspect-[3/4]"
                frameSize="sm"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-[#242220] border border-stone-700 rounded-2xl p-6 sm:p-8 text-stone-100 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
              aria-label="Close dish details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold font-mono">
                  {selectedDish.category.toUpperCase()}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                  {selectedDish.name}
                </h3>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-amber-400 tabular-nums shrink-0 font-mono">
                R{selectedDish.price}
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed mb-5">
              {selectedDish.description}
            </p>

            {selectedDish.heritageNote && (
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                  Heritage Note
                </span>
                <p className="text-xs text-stone-300 italic leading-relaxed">
                  &ldquo;{selectedDish.heritageNote}&rdquo;
                </p>
              </div>
            )}

            {selectedDish.pairing && (
              <div className="text-xs text-stone-300 mb-6 flex items-center gap-2">
                <span className="font-semibold text-white">Recommended Pairing:</span>
                <span className="text-amber-300">{selectedDish.pairing}</span>
              </div>
            )}

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-stone-800">
              <button
                onClick={(e) => toggleWishlist(selectedDish, e)}
                className="flex-1 py-2.5 rounded-lg border border-stone-700 bg-stone-850 text-xs font-semibold text-stone-200 hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5"
              >
                {wishlist.some(w => w.id === selectedDish.id) ? (
                  <>
                    <Check className="w-4 h-4 text-amber-400" />
                    <span>In Your Table Notes</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-stone-400" />
                    <span>Add to Table Order Notes</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setSelectedDish(null);
                  onOpenBooking();
                }}
                className="py-2.5 px-4 rounded-lg bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Phone className="w-3.5 h-3.5 fill-stone-950" />
                <span>Call Desk</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Wishlist / Table Order Note Trigger */}
      {wishlist.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setShowWishlistDrawer(true)}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-stone-100 text-stone-950 shadow-2xl hover:bg-white transition-colors font-bold"
          >
            <div className="w-5 h-5 rounded-full bg-stone-950 text-white font-bold text-xs flex items-center justify-center">
              {wishlist.length}
            </div>
            <div className="text-left text-xs">
              <span className="font-medium text-stone-700 block">Order Notes</span>
              <span className="font-bold font-mono">Est. R{wishlistTotal}</span>
            </div>
          </button>
        </div>
      )}

      {/* Wishlist Drawer Modal */}
      {showWishlistDrawer && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-xs">
          <div className="w-full sm:max-w-md bg-[#242220] border border-stone-700 rounded-t-2xl sm:rounded-2xl p-6 text-stone-100 max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Dining Selection
                </span>
                <h3 className="text-base font-bold font-display text-white">
                  Table Order Notes ({wishlist.length} items)
                </h3>
              </div>
              <button
                onClick={() => setShowWishlistDrawer(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300 mb-4">
              Keep this list handy when you call the front desk or arrive at your table!
            </p>

            <div className="space-y-2 mb-4">
              {wishlist.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-xs">
                  <div>
                    <span className="font-semibold text-white block">{item.name}</span>
                    <span className="text-stone-400 text-[11px]">{item.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-amber-400 font-bold">R{item.price}</span>
                    <button
                      onClick={(e) => toggleWishlist(item, e)}
                      className="text-stone-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between py-2.5 border-t border-stone-800 text-sm font-semibold mb-4">
              <span className="text-stone-300">Estimated Total:</span>
              <span className="text-amber-400 text-base font-mono font-bold">R{wishlistTotal}</span>
            </div>

            <button
              onClick={() => {
                setShowWishlistDrawer(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 fill-stone-950" />
              <span>Call Desk With This Order</span>
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
