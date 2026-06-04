import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 3,
    color: i % 3 === 0 ? '#FF6B00' : i % 3 === 1 ? '#00A651' : '#f5f0e8',
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
}

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const particles = generateParticles(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 500);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 8 + 4;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Particles */}
          <div className="preloader-particles">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="preloader-particle"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  borderRadius: p.id % 2 === 0 ? '50%' : '2px',
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Animated Globe */}
          <div className="preloader-center">
            <motion.div
              className="preloader-globe"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="55" stroke="#00A651" strokeWidth="2" opacity="0.4" />
                <circle cx="60" cy="60" r="55" stroke="#00A651" strokeWidth="2" strokeDasharray="8 4" opacity="0.8" />
                <ellipse cx="60" cy="60" rx="30" ry="55" stroke="#0A2540" strokeWidth="1.5" opacity="0.4" strokeDasharray="6 4" />
                <line x1="5" y1="60" x2="115" y2="60" stroke="#FF6B00" strokeWidth="1" opacity="0.5" />
                <line x1="5" y1="40" x2="115" y2="40" stroke="#0A2540" strokeWidth="1" opacity="0.3" />
                <line x1="5" y1="80" x2="115" y2="80" stroke="#0A2540" strokeWidth="1" opacity="0.3" />
                {/* Continents simplified */}
                <path d="M 25 50 Q 35 45 45 50 Q 50 55 45 62 Q 38 68 28 62 Z" fill="#00A651" opacity="0.5" />
                <path d="M 55 42 Q 70 38 80 45 Q 88 52 82 62 Q 72 70 60 65 Q 50 58 55 42 Z" fill="#00A651" opacity="0.5" />
                <path d="M 65 72 Q 75 70 80 78 Q 82 85 75 88 Q 68 90 64 82 Z" fill="#00A651" opacity="0.4" />
                <circle cx="60" cy="60" r="4" fill="#FF6B00" />
              </svg>
            </motion.div>

            {/* Container ships animation */}
            <motion.div
              className="preloader-ship"
              animate={{ x: [-60, 60] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 60 20" fill="none" width="60" height="20">
                <rect x="5" y="10" width="50" height="8" rx="2" fill="#0A2540" />
                <rect x="10" y="6" width="12" height="6" rx="1" fill="#FF6B00" />
                <rect x="24" y="4" width="12" height="8" rx="1" fill="#00A651" />
                <rect x="38" y="7" width="10" height="5" rx="1" fill="#0A2540" opacity="0.7" />
                <path d="M 5 18 Q 30 22 55 18" stroke="#00A651" strokeWidth="1.5" fill="none" opacity="0.5" />
              </svg>
            </motion.div>

            {/* Logo */}
            <motion.div
              className="preloader-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="preloader-logo-icon">
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                  <circle cx="30" cy="30" r="30" fill="#0A2540" />
                  <path d="M30 10 L42 22 L42 44 L18 44 L18 22 Z" fill="#00A651" opacity="0.9"/>
                  <path d="M22 20 Q30 13 38 20 Q44 27 38 34 Q30 41 22 34 Q16 27 22 20Z" fill="#FF6B00" opacity="0.85"/>
                  <circle cx="30" cy="27" r="5" fill="white"/>
                </svg>
              </div>
              <h1 className="preloader-title">AKSHYAA GLOBAL EXPORTS</h1>
              <p className="preloader-subtitle">India's Trusted Export Partner</p>
            </motion.div>

            {/* Progress */}
            <div className="preloader-progress-wrap">
              <div className="preloader-progress-bar">
                <motion.div
                  className="preloader-progress-fill"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <span className="preloader-progress-text">{Math.min(Math.round(progress), 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
