import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export interface LoadingDotsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingDots({ className, size = 'md' }: LoadingDotsProps) {
  const dotSizes = {
    sm: 8,
    md: 14,
    lg: 20,
  };

  const gapSizes = {
    sm: 'gap-1.5',
    md: 'gap-2.5',
    lg: 'gap-4',
  };

  const colors = ['#004b8b', '#00bd67', '#ffc400'];

  return (
    <div className={cn('flex items-center justify-center', gapSizes[size], className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: dotSizes[size],
            height: dotSizes[size],
            backgroundColor: colors[i],
          }}
          animate={{
            scale: [0.65, 1.15, 0.65],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
}

LoadingDots.displayName = 'LoadingDots';
