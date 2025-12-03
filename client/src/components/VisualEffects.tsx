import { useEffect, useState } from 'react';

export default function VisualEffects() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('a') ||
          (e.target as HTMLElement).closest('button')) {
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
  }, []);

  return (
    <>
      {/* Interactive Background Spotlight */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* Noise Overlay */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
           }}
      />

      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-[9999] hidden md:block transition-transform duration-150 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`
        }}
      >
        <div 
          className={`w-8 h-8 border border-[#FFFFE0] rounded-full transition-all duration-300 ${isHovering ? 'bg-[#FFFFE0]/10' : 'bg-transparent'}`}
          style={{ 
            boxShadow: '0 0 15px rgba(255, 255, 224, 0.5), 0 0 5px rgba(255, 255, 0, 0.3)',
            borderColor: '#FFFFE0'
          }}
        />
      </div>
      
      {/* Cursor Dot */}
      <div 
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div 
          className="w-1.5 h-1.5 bg-[#FFFFE0] rounded-full" 
          style={{ boxShadow: '0 0 10px 2px rgba(255, 255, 0, 0.8)' }}
        />
      </div>
    </>
  );
}
