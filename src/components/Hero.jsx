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
      {/* CSS Grid Lines Background */}
      <div className='absolute inset-0 -z-10'>
        {/* Main Grid */}
        <div className='absolute inset-0 bg-[linear-gradient(90deg,#e11d4810_1px,transparent_1px),linear-gradient(0deg,#e11d4810_1px,transparent_1px)] bg-[size:50px_50px]' />

        {/* Diagonal Technical Lines */}
        <svg className='absolute inset-0 w-full h-full opacity-20 dark:opacity-30'>
          <defs>
            <pattern
              id='techLines'
              x='0'
              y='0'
              width='100'
              height='100'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M0 100 L100 0'
                stroke='#e11d48'
                strokeWidth='0.5'
                fill='none'
                opacity='0.3'
              />
              <path
                d='M0 50 L150 0'
                stroke='#f43f5e'
                strokeWidth='0.3'
                fill='none'
                opacity='0.2'
              />
              <path
                d='M50 100 L100 50'
                stroke='#ec4899'
                strokeWidth='0.4'
                fill='none'
                opacity='0.2'
              />
              <circle cx='25' cy='25' r='2' fill='#e11d48' opacity='0.4' />
              <circle cx='75' cy='75' r='1.5' fill='#f43f5e' opacity='0.3' />
              <circle cx='50' cy='10' r='1' fill='#ec4899' opacity='0.4' />
            </pattern>
          </defs>
          <rect x='0' y='0' width='100%' height='100%' fill='url(#techLines)' />
        </svg>

        {/* Animated Gradient Orbs */}
        <div className='absolute top-20 left-10 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000' />

        {/* Radial Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent dark:from-gray-900/60 dark:via-gray-900/30 dark:to-transparent' />
      </div>

      <div className='container mx-auto px-6 py-32 text-center relative z-10'>
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
          <p className='text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4'>
            Full Stack Developer | Next.js Expert
          </p>
          <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            I love building modern web applications. 3+ years of experience in
            React, Next.js & Node.js.
          </p>

          <div className='flex justify-center space-x-4 my-8'>
            <a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500'
            >
              <FaGithub size={24} />
            </a>
            <a
              href='https://linkedin.com/in/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500'
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href='mailto:najimul@example.com'
              className='p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500'
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
            className='text-gray-500 dark:text-gray-400 hover:text-rose-500 transition-colors'
          />
        </motion.div>
      </div>
    </section>
  );
}
