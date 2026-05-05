'use client';

import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      {/* Animated Background - Light mode friendly */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-rose-500/10 dark:bg-rose-500/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000' />
      </div>

      <div className='container mx-auto px-6 py-32 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent'>
              Najimul Haque
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4'>
            Full Stack Developer | Next.js Expert
          </p>
          <p className='text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto'>
            I love building modern web applications. 3+ years of experience in
            React, Next.js & Node.js.
          </p>

          <div className='flex justify-center space-x-4 my-8'>
            <a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors text-gray-700 dark:text-gray-300'
            >
              <FaGithub size={24} />
            </a>
            <a
              href='https://linkedin.com/in/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors text-gray-700 dark:text-gray-300'
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href='mailto:najimul@example.com'
              className='p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors text-gray-700 dark:text-gray-300'
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <div className='flex justify-center gap-4 flex-wrap'>
            <button
              onClick={() => scrollToSection('#projects')}
              className='px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300'
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className='px-8 py-3 border-2 border-rose-500 text-rose-500 dark:text-rose-400 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300'
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer'
          onClick={() => scrollToSection('#about')}
        >
          <FaArrowDown
            size={32}
            className='text-gray-400 dark:text-gray-500 hover:text-rose-500 transition-colors'
          />
        </motion.div>
      </div>
    </section>
  );
}
