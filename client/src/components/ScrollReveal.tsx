import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  enable3D?: boolean;
}

/**
 * Prism Dimension - Dimensional Emergence Effect
 * スライド + 回転 + 奥行きの3D出現エフェクト
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'left',
  enable3D = true,
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -50, rotateY: 15 };
      case 'right':
        return { x: 50, rotateY: -15 };
      case 'up':
        return { y: 50, rotateX: -15 };
      case 'down':
        return { y: -50, rotateX: 15 };
      default:
        return { x: -50, rotateY: 15 };
    }
  };

  const initial = getInitialPosition();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: initial.x || 0,
      y: initial.y || 0,
      rotateX: enable3D ? (initial.rotateX || 0) : 0,
      rotateY: enable3D ? (initial.rotateY || 0) : 0,
      scale: enable3D ? 0.9 : 1,
      z: enable3D ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      z: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // ease-out-expo
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      style={{ 
        transformStyle: enable3D ? 'preserve-3d' : 'flat',
        perspective: enable3D ? 1000 : 'none',
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * スタガー（順次出現）コンテナ
 */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  enable3D?: boolean;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'left',
  enable3D = true,
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const getItemInitial = () => {
    switch (direction) {
      case 'left':
        return { x: -50, rotateY: 15 };
      case 'right':
        return { x: 50, rotateY: -15 };
      case 'up':
        return { y: 50, rotateX: -15 };
      case 'down':
        return { y: -50, rotateX: 15 };
      default:
        return { x: -50, rotateY: 15 };
    }
  };

  const initial = getItemInitial();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: initial.x || 0,
      y: initial.y || 0,
      rotateX: enable3D ? (initial.rotateX || 0) : 0,
      rotateY: enable3D ? (initial.rotateY || 0) : 0,
      scale: enable3D ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      style={{ perspective: enable3D ? 1000 : 'none' }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{ transformStyle: enable3D ? 'preserve-3d' : 'flat' }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

export default ScrollReveal;
