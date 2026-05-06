'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - (isHovered ? 24 : 16));
      cursorY.set(e.clientY - (isHovered ? 24 : 16));
    };

    // হোভার এলিমেন্ট খুঁজে বের করার জন্য
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isHovered]);

  return (
    <motion.div
      ref={cursorRef}
      className='fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference'
      animate={{
        width: isHovered ? 58 : 13,
        height: isHovered ? 58 : 13,
        backgroundColor: isHovered ? '#ff57b4' : '#fa0f90',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
}
