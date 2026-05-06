'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '@/data/projectsData';

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [filter, setFilter] = useState('all');

  // Extract unique categories from projects
  const categories = [
    'all',
    ...new Set(projectsData.map((project) => project.category || 'general')),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter(
          (project) => (project.category || 'general') === filter
        );

  return (
    <section id='projects' className='py-24 bg-gray-50 dark:bg-gray-900/50'>
      <div className='container mx-auto px-6'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
            My Projects
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto' />
          <p className='text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto'>
            Some of my notable projects
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 mb-12'
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rose-100 dark:hover:bg-rose-900/30'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className='group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
            >
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 bg-white rounded-full hover:bg-rose-500 hover:text-white transition-colors text-gray-800'
                  >
                    <FaExternalLinkAlt size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 bg-white rounded-full hover:bg-rose-500 hover:text-white transition-colors text-gray-800'
                  >
                    <FaGithub size={20} />
                  </motion.a>
                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-3'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 text-sm bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.category && (
                  <span className='inline-block px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full'>
                    {project.category}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-600 dark:text-gray-400'>
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
