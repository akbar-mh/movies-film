import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    const progress = (scrollY / (scrollHeight - windowHeight)) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    controls.start({ width: `${scrollProgress}%` });
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollProgress, controls]);

  return (
    <motion.div
      initial={{ width: '0%' }}
      animate={controls}
      transition={{ duration: 0.3 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}
    >
      <LinearProgress
        color="primary"
        sx={{ backgroundColor: '#2EBF70' }}
      />
    </motion.div>
  );
};

export default ScrollProgressBar;
