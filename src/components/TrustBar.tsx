import { useEffect, useRef } from 'react';

const badges = [
  { icon: '✓', label: 'APEDA Registered', color: '#00A651' },
  { icon: '✓', label: 'FSSAI Certified', color: '#0A2540' },
  { icon: '✓', label: 'ISO 9001:2015', color: '#FF6B00' },
  { icon: '✓', label: 'Export License Holder', color: '#00A651' },
  { icon: '✓', label: '25+ Countries Served', color: '#0A2540' },
  { icon: '✓', label: 'HALAL Certified', color: '#FF6B00' },
];

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    const speed = 0.5;
    const totalWidth = track.scrollWidth / 2;
    let raf: number;

    const animate = () => {
      pos -= speed;
      if (Math.abs(pos) >= totalWidth) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const doubled = [...badges, ...badges];

  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        <div className="trust-track-wrapper">
          <div className="trust-track" ref={trackRef}>
            {doubled.map((b, i) => (
              <div key={i} className="trust-badge">
                <span className="trust-check" style={{ color: b.color }}>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
