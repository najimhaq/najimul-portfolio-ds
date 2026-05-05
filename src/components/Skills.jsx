'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiGit,
  SiDocker,
} from 'react-icons/si';

const skills = [
  { name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#000000' },
  { name: 'React', icon: SiReact, level: 88, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, level: 82, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, level: 80, color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, level: 78, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 75, color: '#4169E1' },
  { name: 'TypeScript', icon: SiTypescript, level: 75, color: '#3178C6' },
  { name: 'Git', icon: SiGit, level: 85, color: '#F05032' },
  { name: 'Docker', icon: SiDocker, level: 70, color: '#2496ED' },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id='skills' className='py-24'>
      <div className='container mx-auto px-6'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>My Skills</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto' />
          <p className='text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto'>
            Technologies I work with
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className='group'
            >
              <div className='flex items-center gap-4 mb-2'>
                <skill.icon size={32} style={{ color: skill.color }} />
                <span className='font-semibold text-lg'>{skill.name}</span>
                <span className='ml-auto text-rose-500'>{skill.level}%</span>
              </div>
              <div className='w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className='h-full bg-gradient-to-r from-rose-500 to-pink-600 rounded-full'
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
