import { useState, useEffect } from 'react';
import { motion, MotionConfig } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarClientProps {
  currentPath: string;
  isMonday?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Visit', href: '/visit' },
];

export default function NavbarClient({ currentPath, isMonday = false }: NavbarClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const highlightedHref = hoveredHref ?? currentPath;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="never">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          isScrolled
            ? 'bg-[#f5ead4]/95 backdrop-blur-md border-b border-[#1a0e08]/15 shadow-[0_1px_0_0_rgba(201,123,58,0.4)]'
            : 'bg-[#f5ead4]/80 backdrop-blur-md border-b border-[#1a0e08]/10'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-3 leading-none group">
            {/* Burr-grinder mark */}
            <svg width="34" height="34" viewBox="0 0 40 40" className="text-[#c97b3a] transition-transform duration-700 group-hover:rotate-90" aria-hidden="true">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="20" cy="20" r="3" fill="currentColor" />
              {[0,45,90,135,180,225,270,315].map((deg) => (
                <line key={deg} x1="20" y1="6" x2="20" y2="11" stroke="currentColor" strokeWidth="1.2" transform={`rotate(${deg} 20 20)`} />
              ))}
            </svg>
            <span className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl tracking-[0.08em] text-[#1a0e08] uppercase">118 Grinder</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#c97b3a] mt-0.5">
                EST · COFFEE · CRAFT
              </span>
            </span>
          </a>

          <nav
            className="flex items-center gap-6 sm:gap-9"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredHref(link.href)}
                onFocus={() => setHoveredHref(link.href)}
                onBlur={() => setHoveredHref(null)}
                className={`relative font-display text-sm tracking-[0.22em] uppercase transition-colors duration-300 py-1 ${
                  currentPath === link.href
                    ? 'text-[#1a0e08]'
                    : 'text-[#5c5048] hover:text-[#1a0e08]'
                }`}
              >
                {link.label}
                {highlightedHref === link.href && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#c97b3a]"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </a>
            ))}
          </nav>
        </div>

        {isMonday && (
          <div className="bg-[#1a0e08] text-[#f5ead4] text-center py-1.5 text-[11px] font-mono uppercase tracking-[0.3em] border-t border-[#c97b3a]/40">
            <span className="text-[#c97b3a]">●</span> Closed today — back tomorrow
          </div>
        )}
      </header>
    </MotionConfig>
  );
}
