import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

function BrandPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-wheat-beige">
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-pistachio/30" viewBox="0 0 64 64" fill="none">
        <path d="M16 48c0-16 8-24 16-24s16 8 16 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 28c0-8 4-12 8-12s8 4 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="32" cy="20" rx="6" ry="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M42 20h4c4 0 6 3 6 7s-2 7-6 7h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 48h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [imgError, setImgError] = useState(false);

  const goNext = useCallback(() => {
    setImgError(false);
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setImgError(false);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goNext, goPrev]);

  const img = images[index];

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-deep-forest/90 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-cream/10 text-cream flex items-center justify-center hover:bg-cream/20 transition-colors"
          aria-label="Close lightbox"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {/* Counter */}
        <div className="absolute top-5 left-5 text-xs text-cream/60 font-medium tracking-wider">
          {index + 1} / {images.length}
        </div>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="max-w-[90vw] max-h-[80vh] px-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-xl overflow-hidden bg-wheat-beige">
              {!imgError ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-w-full max-h-[70vh] object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-[60vw] h-[50vh] flex items-center justify-center bg-wheat-beige">
                  <BrandPlaceholder />
                </div>
              )}
            </div>
            {img.caption && (
              <p className="text-center text-sm text-cream/70 mt-4">{img.caption}</p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/10 text-cream flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/10 text-cream flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </>
        )}
      </motion.div>
    </MotionConfig>
  );
}

interface GalleryLightboxProps {
  images: GalleryImage[];
}

function GalleryCell({
  image,
  index,
  onOpen,
  className = '',
}: {
  image: GalleryImage;
  index: number;
  onOpen: (i: number) => void;
  className?: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-wheat-beige group cursor-pointer ${className}`}
      onClick={() => onOpen(index)}
    >
      {!error ? (
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          onError={() => setError(true)}
        />
      ) : (
        <BrandPlaceholder />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/70 via-deep-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-[opacity] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />

      {/* Caption */}
      {image.caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
          <span className="text-sm text-cream font-medium">{image.caption}</span>
        </div>
      )}

      {/* Expand icon */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/20 text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-[transform,opacity] duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
      </div>
    </div>
  );
}

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAt = (i: number) => {
    setActiveIndex(i);
    setOpen(true);
  };

  // Ensure we have enough images
  const safeImages = images.length >= 7 ? images : [...images, ...images.slice(0, 7 - images.length)];

  return (
    <>
      {/* Mobile: simple 2-col grid. Desktop: true bento 12-col */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
        {safeImages.slice(0, 6).map((img, i) => (
          <GalleryCell
            key={i}
            image={img}
            index={i}
            onOpen={openAt}
            className={i === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'}
          />
        ))}
      </div>

      {/* Desktop bento */}
      <div className="hidden md:grid md:grid-cols-12 md:grid-rows-3 gap-4 lg:gap-5" style={{ height: '720px' }}>
        {/* Row 1+2: Large left feature */}
        <GalleryCell
          image={safeImages[0]}
          index={0}
          onOpen={openAt}
          className="col-span-6 row-span-2"
        />

        {/* Row 1+2: Tall right */}
        <GalleryCell
          image={safeImages[1]}
          index={1}
          onOpen={openAt}
          className="col-span-3 row-span-2"
        />

        {/* Row 1: Top right small */}
        <GalleryCell
          image={safeImages[2]}
          index={2}
          onOpen={openAt}
          className="col-span-3 row-span-1"
        />

        {/* Row 2: Middle right small */}
        <GalleryCell
          image={safeImages[3]}
          index={3}
          onOpen={openAt}
          className="col-span-3 row-span-1"
        />

        {/* Row 3: Three across */}
        <GalleryCell
          image={safeImages[4]}
          index={4}
          onOpen={openAt}
          className="col-span-4 row-span-1"
        />
        <GalleryCell
          image={safeImages[5]}
          index={5}
          onOpen={openAt}
          className="col-span-4 row-span-1"
        />
        <GalleryCell
          image={safeImages[6]}
          index={6}
          onOpen={openAt}
          className="col-span-4 row-span-1"
        />
      </div>

      <AnimatePresence>
        {open && (
          <Lightbox images={safeImages} initialIndex={activeIndex} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
