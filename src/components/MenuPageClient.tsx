import { useState, useMemo } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import menuData from '../data/menu.json';

const categories = menuData.map((c) => c.category);
const allTags = ['Halal', 'Vegetarian', 'Signature', 'Caffeine-free'];

export default function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState('Coffee');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (tag: string) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const items = useMemo(() => {
    const cat = menuData.find((c) => c.category === activeCategory);
    if (!cat) return [];
    return cat.items.filter((item) => {
      if (activeFilters.length === 0) return true;
      const itemTags = item.tags.map((t) =>
        t === 'halal'
          ? 'Halal'
          : t === 'vegetarian'
          ? 'Vegetarian'
          : t === 'signature'
          ? 'Signature'
          : t === 'caffeine-free'
          ? 'Caffeine-free'
          : t
      );
      return activeFilters.every((f) => itemTags.includes(f));
    });
  }, [activeCategory, activeFilters]);

  return (
    <MotionConfig reducedMotion="never">
      <div className="bg-[#f5ead4] pb-20 sm:pb-28">
        {/* Tabs */}
        <div className="sticky top-16 sm:top-20 z-40 bg-[#f5ead4]/95 backdrop-blur-md border-y border-[#1a0e08]/15">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-3 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative shrink-0 px-5 py-2 text-xs font-display tracking-[0.22em] uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c97b3a] ${
                    activeCategory === cat
                      ? 'text-[#1a0e08]'
                      : 'text-[#5c5048] hover:text-[#1a0e08]'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="menuTab"
                      className="absolute inset-0 border border-[#1a0e08] bg-[#c97b3a]/15"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-6 pb-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#c97b3a] mr-2">Filter by ›</span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleFilter(tag)}
                className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c97b3a] ${
                  activeFilters.includes(tag)
                    ? 'bg-[#1a0e08] border-[#1a0e08] text-[#f5ead4]'
                    : 'bg-transparent border-[#1a0e08]/30 text-[#5c5048] hover:border-[#c97b3a] hover:text-[#1a0e08]'
                }`}
              >
                {tag === 'Halal' && activeFilters.includes(tag) ? 'Halal ✓' : tag}
              </button>
            ))}
            {activeFilters.length > 0 && (
              <button
                onClick={() => setActiveFilters([])}
                className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#c97b3a] hover:underline underline-offset-2 ml-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + activeFilters.join(',')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {items.map((item, i) => {
                const num = String(i + 1).padStart(2, '0');
                return (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.2, 0.7, 0.2, 1] }}
                  className="group relative flex flex-col card-spec overflow-hidden"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#1a0e08]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover-zoom mix-blend-luminosity opacity-90 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden items-center justify-center bg-[#2a1610]">
                      <svg className="w-32 h-32 text-[#c97b3a]/60" viewBox="0 0 120 120" fill="none">
                        <ellipse cx="60" cy="60" rx="36" ry="22" stroke="currentColor" strokeWidth="1.4"/>
                        <path d="M60 38 Q60 60 60 82" stroke="currentColor" strokeWidth="1.4"/>
                        <path d="M40 50 Q60 56 80 50" stroke="currentColor" strokeWidth="1.2" opacity="0.7"/>
                        <path d="M40 70 Q60 64 80 70" stroke="currentColor" strokeWidth="1.2" opacity="0.7"/>
                      </svg>
                    </div>
                    <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-3 z-10">
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#f5ead4]/80">№ {num}</span>
                      {item.signature && (
                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#1a0e08] bg-[#c97b3a] px-2 py-0.5">
                          Signature
                        </span>
                      )}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a0e08] via-[#1a0e08]/40 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="px-5 pt-5 pb-6 flex flex-col gap-2 bg-[#f5ead4]">
                    <div className="flex items-baseline justify-between gap-3 border-b border-[#1a0e08]/15 pb-2">
                      <h3 className="font-display text-2xl tracking-wide uppercase text-[#1a0e08] leading-none">{item.name}</h3>
                      <span className="font-mono text-sm text-[#c97b3a] whitespace-nowrap">
                        RM {item.price}
                      </span>
                    </div>
                    <p className="text-sm italic text-[#5c5048] leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {items.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#5c5048] text-sm font-body italic">
                No items match these filters in {activeCategory}.
              </p>
              <button
                onClick={() => setActiveFilters([])}
                className="mt-3 text-xs font-mono uppercase tracking-[0.25em] text-[#c97b3a] hover:underline underline-offset-2"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}
