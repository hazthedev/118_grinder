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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isScrolled
            ? 'bg-off-white/95 backdrop-blur-md border-b border-wheat-beige/50 shadow-sm'
            : 'bg-off-white/80 backdrop-blur-md border-b border-wheat-beige/50'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex flex-col leading-none">
            <span className="font-display text-xl sm:text-2xl text-deep-forest">118 Grinder</span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-sage-grey mt-0.5">
              Coffee · Dessert
            </span>
          </a>

          <nav
            className="flex items-center gap-6 sm:gap-8"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredHref(link.href)}
                onFocus={() => setHoveredHref(link.href)}
                onBlur={() => setHoveredHref(null)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  currentPath === link.href
                    ? 'text-deep-forest'
                    : 'text-sage-grey hover:text-deep-forest'
                }`}
              >
                {link.label}
                {highlightedHref === link.href && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pistachio rounded-full"
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
          <div className="bg-pistachio/20 text-center py-1.5 text-xs font-medium text-deep-forest">
            Closed today — see you tomorrow
          </div>
        )}
      </header>
    </MotionConfig>
  );
}
