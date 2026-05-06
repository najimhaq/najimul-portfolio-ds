'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='bg-gray-900 dark:bg-black text-white py-12'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-center text-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#home')}
            className='text-2xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition'
          >
            Najimul Haque
          </motion.button>
          <p className='text-gray-400 mb-6 max-w-md'>
            Building modern web applications that users love.
          </p>

          <div className='flex space-x-4 mb-8'>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full bg-gray-800 hover:bg-rose-500 transition-colors'
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              href='https://linkedin.com/in/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full bg-gray-800 hover:bg-rose-500 transition-colors'
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href='https://twitter.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full bg-gray-800 hover:bg-rose-500 transition-colors'
            >
              <FaTwitter size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              href='mailto:najimul@example.com'
              className='p-2 rounded-full bg-gray-800 hover:bg-rose-500 transition-colors'
            >
              <FaEnvelope size={20} />
            </motion.a>
          </div>

          <div className='text-gray-500 text-sm'>
            © {currentYear} Najimul Hasan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
