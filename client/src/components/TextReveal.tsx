import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  gradient?: boolean;
  gradientColors?: string;
}

/**
 * Prism Dimension - Gradient Mask Reveal Effect
 * マスク表示 + グラデーション移動のテキストアニメーション
 */
export function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  gradient = false,
  gradientColors = 'from-prism-blue via-prism-purple to-prism-pink',
}: TextRevealProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // テキストを行に分割
  const lines = typeof children === 'string' ? children.split('\n') : [children];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div variants={lineVariants}>
            {gradient ? (
              <span 
                className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientColors} animate-gradient-x`}
                style={{ 
                  backgroundSize: '200% 100%',
                  WebkitTextStroke: '1px rgba(100, 150, 255, 0.3)'
                }}
              >
                {line}
              </span>
            ) : (
              line
            )}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}

/**
 * ヒーロー見出し用の特別なテキストリビール
 */
interface HeroTextRevealProps {
  lines: Array<{
    text: string;
    gradient?: boolean;
    gradientColors?: string;
  }>;
  className?: string;
  baseDelay?: number;
}

export function HeroTextReveal({
  lines,
  className = '',
  baseDelay = 0.2,
}: HeroTextRevealProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: baseDelay,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      y: '110%',
      rotateX: -15,
      opacity: 0,
    },
    visible: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ perspective: 1000 }}
    >
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div 
            variants={lineVariants}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {line.gradient ? (
              <span 
                className={`text-transparent bg-clip-text bg-gradient-to-r ${line.gradientColors || 'from-prism-blue via-prism-purple to-prism-pink'} animate-gradient-x`}
                style={{ 
                  backgroundSize: '200% 100%',
                  WebkitTextStroke: '1px rgba(100, 150, 255, 0.3)'
                }}
              >
                {line.text}
              </span>
            ) : (
              <span>{line.text}</span>
            )}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}

export default TextReveal;
