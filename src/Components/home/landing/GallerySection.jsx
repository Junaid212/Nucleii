import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/9996e3903_generated_f767cef9.png', alt: 'Students celebrating results', span: 'col-span-2 row-span-2' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/72a2fe4bc_generated_488354f0.png', alt: 'Science laboratory session', span: '' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/f9f76c785_generated_b45120c3.png', alt: 'Library study session', span: '' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/7ec415676_generated_2c870448.png', alt: 'Seminar in lecture hall', span: 'col-span-2' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/5ba55f2e8_generated_9294bd40.png', alt: 'Annual day celebration', span: '' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/f71600950_generated_2ffd57f8.png', alt: 'Sports day events', span: '' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Life at Nucleii
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Moments at Nucleii
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            A glimpse into our classrooms, events, and student achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}