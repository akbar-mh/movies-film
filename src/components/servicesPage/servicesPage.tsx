import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './ScrollEffect.css'; // Create a CSS file for styling

function ScrollEffect() {
  const controls = useAnimation();

  // Function to trigger animation when the element is in the viewport
  const handleScroll = () => {
    const element = document.querySelector('.scroll-effect-element');
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        controls.start({ opacity: 1, y: 0 });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-effect-container">
      <motion.div
        className="scroll-effect-element"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <h1>Fade-in on Scroll</h1>
        <p>This element fades in as you scroll down the page.</p>
      </motion.div>
    </div>
  );
}

export default ScrollEffect;
