'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRocket, FaUsers, FaBolt } from 'react-icons/fa';

const stats = [
  { icon: FaCode, value: '30+', label: 'Projects Completed' },
  { icon: FaUsers, value: '15+', label: 'Happy Clients' },
  { icon: FaBolt, value: '3+', label: 'Years Experience' },
  { icon: FaRocket, value: '24/7', label: 'Support' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id='about' className='py-24 bg-gray-50 dark:bg-gray-900/50'>
      <div className='container mx-auto px-6'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
            About Me
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto' />
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl blur-2xl opacity-20' />
              <div className='relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl'>
                <h3 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  Najimul Haque
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4 leading-relaxed'>
                  I am a passionate Full Stack Developer. I have been working in
                  the web development industry since 2021. I love building
                  user-friendly and performant applications using modern
                  technologies.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Currently, I work as a freelancer and consultant for various
                  startups. I am always eager to learn and share new
                  technologies.
                </p>
              </div>
            </div>
          </motion.div>

          <div className='grid grid-cols-2 gap-6'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className='text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow'
              >
                <stat.icon className='w-12 h-12 mx-auto text-rose-500 mb-3' />
                <div className='text-3xl font-bold text-gray-900 dark:text-white'>
                  {stat.value}
                </div>
                <div className='text-gray-600 dark:text-gray-400'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
