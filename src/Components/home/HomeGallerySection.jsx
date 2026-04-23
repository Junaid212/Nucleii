import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/landing/SectionLabel';

const images = [
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/9996e3903_generated_f767cef9.png', alt: 'Students celebrating', cls: 'col-span-2 row-span-2' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/72a2fe4bc_generated_488354f0.png', alt: 'Lab session', cls: '' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/82db3d637_generated_image.png', alt: 'Exam hall', cls: '' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/5b3b37f7e_generated_image.png', alt: 'Award ceremony', cls: 'col-span-2' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/5ba55f2e8_generated_9294bd40.png', alt: 'Annual day', cls: '' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/f71600950_generated_2ffd57f8.png', alt: 'Sports day', cls: '' },
];

export default function HomeGallerySection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <SectionLabel>Life at Nucleii</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Moments at Nucleii</h2>
          </div>
          <Link to="/media" className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm hover:gap-3 transition-all">
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px] md:auto-rows-[190px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className={`rounded-2xl overflow-hidden group cursor-pointer ${img.cls}`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}