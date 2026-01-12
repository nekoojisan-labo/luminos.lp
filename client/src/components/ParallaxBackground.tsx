import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxBackgroundProps {
  children?: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  speed?: number;
  className?: string;
  overlayClassName?: string;
  enableMeshGradient?: boolean;
}

/**
 * Prism Dimension - Dimensional Backdrop
 * パララックス画像 + メッシュグラデーションオーバーレイ
 */
export function ParallaxBackground({
  children,
  imageSrc,
  imageAlt = 'Background',
  speed = 0.3,
  className = '',
  overlayClassName = '',
  enableMeshGradient = true,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Image Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 z-[1] ${overlayClassName}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Mesh Gradient Overlay */}
      {enableMeshGradient && (
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay animate-mesh-gradient"
            style={{
              background: `
                radial-gradient(at 40% 20%, rgba(0, 85, 255, 0.3) 0px, transparent 50%),
                radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.3) 0px, transparent 50%),
                radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.2) 0px, transparent 50%),
                radial-gradient(at 80% 50%, rgba(0, 229, 255, 0.2) 0px, transparent 50%),
                radial-gradient(at 0% 100%, rgba(0, 255, 136, 0.2) 0px, transparent 50%),
                radial-gradient(at 80% 100%, rgba(255, 0, 85, 0.2) 0px, transparent 50%)
              `,
              backgroundSize: '200% 200%',
            }}
          />
        </div>
      )}

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 z-[3] opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('/images/noise.png')`,
        }}
      />

      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * シンプルなパララックスセクション
 */
interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 50}px`, `${speed * 50}px`]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

export default ParallaxBackground;
