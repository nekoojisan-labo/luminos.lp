import { useEffect, useState, useCallback } from 'react';

/**
 * Prism Dimension - Prism Cursor System
 * カスタムカーソル + マグネットボタン + スポットライト
 */
export default function VisualEffects() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMagnetActive, setIsMagnetActive] = useState(false);

  // マグネットボタンの処理
  const handleMagnetEffect = useCallback((e: MouseEvent) => {
    const magnetElements = document.querySelectorAll('[data-magnet]');
    let magnetFound = false;

    magnetElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      const magnetRange = 100;

      if (distance < magnetRange) {
        magnetFound = true;
        const pull = (magnetRange - distance) / magnetRange;
        const moveX = (e.clientX - centerX) * pull * 0.3;
        const moveY = (e.clientY - centerY) * pull * 0.3;
        
        (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        (element as HTMLElement).style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      } else {
        (element as HTMLElement).style.transform = 'translate(0, 0)';
      }
    });

    setIsMagnetActive(magnetFound);
  }, []);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      handleMagnetEffect(e);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-magnet') ||
        target.closest('[data-magnet]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [handleMagnetEffect]);

  // スポットライトのグラデーションカラー（プリズムカラー）
  const spotlightGradient = `radial-gradient(600px at ${position.x}px ${position.y}px, 
    rgba(29, 78, 216, 0.15), 
    rgba(139, 92, 246, 0.08) 30%, 
    rgba(236, 72, 153, 0.05) 50%, 
    transparent 80%)`;

  return (
    <>
      {/* Interactive Background Spotlight - Prism Version */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: spotlightGradient,
        }}
      />

      {/* Noise Overlay */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Custom Cursor - Outer Ring */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block transition-all duration-150 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering || isMagnetActive ? 2.5 : 1})`,
        }}
      >
        <div
          className={`w-8 h-8 border rounded-full transition-all duration-300 ${
            isHovering || isMagnetActive ? 'bg-[#FFFFE0]/10' : 'bg-transparent'
          }`}
          style={{
            boxShadow: isMagnetActive
              ? '0 0 25px rgba(139, 92, 246, 0.6), 0 0 10px rgba(236, 72, 153, 0.4)'
              : '0 0 15px rgba(255, 255, 224, 0.5), 0 0 5px rgba(255, 255, 0, 0.3)',
            borderColor: isMagnetActive ? 'rgba(139, 92, 246, 0.8)' : '#FFFFE0',
          }}
        />
      </div>

      {/* Cursor Dot */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full transition-all duration-200"
          style={{
            backgroundColor: isMagnetActive ? '#8B5CF6' : '#FFFFE0',
            boxShadow: isMagnetActive
              ? '0 0 15px 3px rgba(139, 92, 246, 0.8)'
              : '0 0 10px 2px rgba(255, 255, 0, 0.8)',
          }}
        />
      </div>
    </>
  );
}
