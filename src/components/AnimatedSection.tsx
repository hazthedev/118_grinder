import { motion, MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className = '',
  once = true,
}: FadeInProps) {
  return (
    <MotionConfig reducedMotion="never">
      <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: '-50px' }}
        transition={{ duration, delay, ease: 'easeOut' }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
