import React from 'react';
import { motion, useAnimation, useViewportScroll } from 'framer-motion';


const YourComponent = () => {
                                  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const { scrollYProgress } = useViewportScroll();
  const itemAnimation = useAnimation();

  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={itemAnimation}
          transition={{ duration: 0.5 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default YourComponent;
