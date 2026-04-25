import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import menuData from '../data/menu.json';

const categories = menuData.map((c) => c.category);
const allTags = ['Halal', 'Vegetarian', 'Signature', 'Caffeine-free'];

export default function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState('Coffee');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const prefersReduced = useReducedMotion();

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

  const cardVariants = prefersReduced
    ? {}
    : {
        hidden: { opacity: 0, y: 24 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: i * 0.07,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }),
      };

  return (
    <div className="bg-off-white pb-20 sm:pb-28">
      {/* Tabs */}
      <div className="sticky top-16 sm:top-20 z-40 bg-off-white/95 backdrop-blur-md border-b border-wheat-beige/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-3 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green ${
                  activeCategory === cat
                    ? 'text-deep-forest'
                    : 'text-sage-grey hover:text-deep-forest'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span
                    layoutId="menuTab"
                    className="absolute inset-0 rounded-full border-2 border-pistachio"
                    transition={prefersReduced ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 30 }}
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
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleFilter(tag)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green ${
                activeFilters.includes(tag)
                  ? 'bg-pistachio/20 border-pistachio text-deep-forest'
                  : 'bg-transparent border-wheat-beige text-sage-grey hover:border-pistachio/50'
              }`}
            >
              {tag === 'Halal' && activeFilters.includes(tag) ? 'Halal ✓' : tag}
            </button>
          ))}
          {activeFilters.length > 0 && (
            <button
              onClick={() => setActiveFilters([])}
              className="text-xs text-sage-grey hover:text-terracotta underline underline-offset-2 ml-1"
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
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            exit={prefersReduced ? {} : { opacity: 0, y: -12 }}
            transition={prefersReduced ? {} : { duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {items.map((item, i) => (
              <motion.article
                key={item.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="group relative flex flex-col bg-cream rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(157,190,141,0.18)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-wheat-beige">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center bg-wheat-beige">
                    <svg className="w-12 h-12 text-pistachio/40" viewBox="0 0 64 64" fill="none">
                      <path d="M16 48c0-16 8-24 16-24s16 8 16 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M24 28c0-8 4-12 8-12s8 4 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <ellipse cx="32" cy="20" rx="6" ry="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M42 20h4c4 0 6 3 6 7s-2 7-6 7h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M20 48h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  {item.signature && (
                    <span className="absolute top-3 left-3 bg-pistachio text-deep-forest text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      Signature
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col gap-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg text-deep-forest">{item.name}</h3>
                    <span className="text-sm font-medium text-forest-green whitespace-nowrap">
                      RM {item.price}
                    </span>
                  </div>
                  <p className="text-sm italic text-sage-grey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {items.length === 0 && (
          <div className="text-center py-20">
            <p className="text-sage-grey text-sm">
              No items match these filters in {activeCategory}.
            </p>
            <button
              onClick={() => setActiveFilters([])}
              className="mt-3 text-sm text-forest-green hover:underline underline-offset-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
