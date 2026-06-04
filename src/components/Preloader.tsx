import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo1 from '../images/logo1.jpg';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

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
          <div className="preloader-center">
            {/* Logo */}
            <motion.div
              className="preloader-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="preloader-logo-icon">
                <img src={logo1} alt="Akshyaa Global Exports logo" width={56} height={56} className="rounded" />
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
