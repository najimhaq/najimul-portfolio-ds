'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'najimulhaque@gmail.com',
      href: 'mailto:najimul@example.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+880 1712 155987',
      href: 'tel:+8801234567890',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: 'Khulna, Bangladesh',
      href: null,
    },
  ];

  return (
    <section id='contact' className='py-24'>
      <div className='container mx-auto px-6'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
            Get In Touch
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-rose-500 to-pink-600 mx-auto' />
          <p className='text-gray-600 dark:text-gray-400 mt-4'>
            Feel free to contact me for any work
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-6'
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className='flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md'
              >
                <div className='p-3 bg-rose-100 dark:bg-rose-900/30 rounded-full'>
                  <info.icon className='w-6 h-6 text-rose-500' />
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className='font-semibold text-gray-900 dark:text-white hover:text-rose-500 transition-colors'
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className='font-semibold text-gray-900 dark:text-white'>
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className='space-y-4'
          >
            <input
              type='text'
              placeholder='Your Name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500'
            />
            <input
              type='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500'
            />
            <textarea
              placeholder='Your Message...'
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none'
            />
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50'
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FaPaperPlane size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
