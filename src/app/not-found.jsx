'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaArrowLeft,
  FaSearch,
  FaExclamationTriangle,
} from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 overflow-hidden relative'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl' />
      </div>

      <div className='max-w-2xl mx-auto text-center relative z-10'>
        {/* Animated 404 Number */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className='relative'
        >
          <div className='text-8xl md:text-9xl font-bold mb-4 relative'>
            <span className='bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent'>
              404
            </span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className='absolute -top-8 -right-8 md:-top-12 md:-right-12'
            >
              <FaExclamationTriangle className='text-4xl md:text-5xl text-yellow-500' />
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
            Oops! Page Not Found
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track!
          </p>
        </motion.div>

        {/* Search Suggestions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mb-12'
        >
          <div className='bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 flex items-center justify-center gap-2'>
              <FaSearch className='text-rose-500' />
              You might be looking for:
            </h3>
            <div className='flex flex-wrap justify-center gap-3'>
              {['Home', 'Projects', 'About', 'Skills', 'Contact'].map(
                (item) => (
                  <Link
                    key={item}
                    href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                    className='px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-rose-100 dark:hover:bg-rose-900/30 rounded-full transition-all duration-300'
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='flex flex-col sm:flex-row gap-4 justify-center'
        >
          <Link
            href='/'
            className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 group'
          >
            <FaHome className='group-hover:scale-110 transition-transform' />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className='inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-rose-500 text-rose-500 dark:text-rose-400 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 group'
          >
            <FaArrowLeft className='group-hover:-translate-x-1 transition-transform' />
            Go Back
          </button>
        </motion.div>

        {/* Fun Fact / Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='mt-12 text-sm text-gray-500 dark:text-gray-500'
        >
          <p className='flex items-center justify-center gap-2'>
            <span className='inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse' />
            Did you know? 404 is my favorite number now 😅
            <span className='inline-block w-2 h-2 bg-rose-500 rounded-full animate-pulse delay-700' />
          </p>
        </motion.div>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className='absolute bottom-10 left-10 text-4xl opacity-20'
      >
        🚀
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className='absolute top-20 right-10 text-3xl opacity-20'
      >
        💻
      </motion.div>
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        className='absolute bottom-20 right-20 text-2xl opacity-20'
      >
        ✨
      </motion.div>
    </div>
  );
}
