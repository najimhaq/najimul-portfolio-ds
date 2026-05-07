'use client';

import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import TypingAnimation from './TypingAnimation';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsMounted(true);

    const newParticles = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      width: Math.random() * 6 + 3,
      height: Math.random() * 6 + 3,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
      yStart: 0,
      yEnd: -25,
      xStart: 0,
      xEnd: 12,
    }));
    setParticles(newParticles);
  }, []);

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
      {/* Gradient + Grid + Particles Background */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000' />

        {/* Grid Pattern - Static, no hydration issue */}
        <div
          className='absolute inset-0 opacity-30
    bg-[linear-gradient(to_right,rgba(120,120,120,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.12)_1px,transparent_1px)]
    bg-[size:40px_40px]'
        />

        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20 dark:via-black/5 dark:to-black/20' />

        {/* Particles - only client side render */}
        {isMounted &&
          particles.map((particle) => (
            <motion.span
              key={particle.id}
              className='absolute rounded-full bg-rose-400/20 dark:bg-rose-300/10'
              style={{
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, 12, 0],
                opacity: [0.15, 0.5, 0.15],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: particle.delay,
              }}
            />
          ))}
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

          {/* Typing Animation */}
          <div className='text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 h-14'>
            <TypingAnimation />
          </div>

          <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            I love building modern web applications. 3+ years of experience in
            React, Next.js & Node.js.
          </p>

          <div className='flex justify-center space-x-4 my-8'>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href='https://github.com/najimhaq'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500'
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              href='https://linkedin.com/in/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500'
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href='mdnajimulhaque@gmail.com'
              className='p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-rose-500'
            >
              <FaEnvelope size={24} />
            </motion.a>
          </div>

          <div className='flex justify-center gap-4 flex-wrap'>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 15px rgba(244, 63, 94, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className='px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300'
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className='px-8 py-3 border-2 border-rose-500 text-rose-500 dark:text-rose-400 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300'
            >
              Contact Me
            </motion.button>
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
