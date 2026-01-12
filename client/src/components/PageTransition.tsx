import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'wouter';

/**
 * ピクセル分解オーバーレイ
 * ページ遷移時に表示されるピクセルエフェクト
 */
export function PixelTransitionOverlay() {
  const [location] = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevLocation, setPrevLocation] = useState(location);

  useEffect(() => {
    if (location !== prevLocation) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPrevLocation(location);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [location, prevLocation]);

  if (!isTransitioning) return null;

  // ピクセルグリッドを生成
  const gridSize = 8;
  const pixels = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;
    const delay = (row + col) * 0.015;
    
    pixels.push(
      <motion.div
        key={i}
        className="absolute bg-black"
        style={{
          width: `${100 / gridSize}%`,
          height: `${100 / gridSize}%`,
          left: `${(col * 100) / gridSize}%`,
          top: `${(row * 100) / gridSize}%`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1, 0],
        }}
        transition={{
          duration: 0.6,
          delay,
          times: [0, 0.3, 0.7, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden">
      {pixels}
    </div>
  );
}

export default PixelTransitionOverlay;
