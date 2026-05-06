'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: theme === 'dark' ? 360 : 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='relative w-14 h-7 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 shadow-inner'
    >
      <motion.div
        className='absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center'
        animate={{ x: theme === 'dark' ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {theme === 'dark' ? (
          <FaMoon size={10} className='text-gray-700' />
        ) : (
          <FaSun size={10} className='text-yellow-500' />
        )}
      </motion.div>
    </motion.button>
  );
}
