import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PageHero from '@/components/landing/PageHero';
import SectionLabel from '@/components/landing/SectionLabel';

const BG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/5b3b37f7e_generated_image.png';

const categories = ['All', 'Campus', 'Events', 'Students', 'Labs'];

const gallery = [
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/9996e3903_generated_f767cef9.png', alt: 'Students celebrating', cat: 'Students' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/72a2fe4bc_generated_488354f0.png', alt: 'Science Lab session', cat: 'Labs' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/f9f76c785_generated_b45120c3.png', alt: 'Library study', cat: 'Campus' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/7ec415676_generated_2c870448.png', alt: 'Seminar hall', cat: 'Events' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/5ba55f2e8_generated_9294bd40.png', alt: 'Annual day', cat: 'Events' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/f71600950_generated_2ffd57f8.png', alt: 'Sports day', cat: 'Events' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/e78c920dc_generated_3f7411fd.png', alt: 'Campus building', cat: 'Campus' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/82db3d637_generated_image.png', alt: 'Exam hall', cat: 'Students' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/5b3b37f7e_generated_image.png', alt: 'Award ceremony', cat: 'Events' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/c75de7d6d_generated_image.png', alt: 'Campus corridor', cat: 'Campus' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/fe38f1d73_generated_7440cdda.png', alt: 'Classroom session', cat: 'Students' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/7ec415676_generated_2c870448.png', alt: 'Guest lecture', cat: 'Events' },
];

export default function Media() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? gallery : gallery.filter(g => g.cat === active);

  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <PageHero
        title="Media Gallery"
        subtitle="Glimpses of our vibrant campus life, events and student achievements."
        breadcrumb="Media"
        bgImage={BG}
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">Photo Gallery</h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full font-body font-medium text-sm transition-all ${
                    active === cat
                      ? 'bg-secondary text-white shadow-lg shadow-secondary/25'
                      : 'bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filtered.map((img, idx) => (
                <motion.div
                  key={img.src + img.cat + idx}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] shadow-md hover:shadow-xl transition-shadow"
                  onClick={() => setLightbox(img)}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all flex items-center justify-center">
                    <span className="text-white font-body font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 px-3 py-1 rounded-full">
                      {img.alt}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 bg-secondary/90 text-white text-[10px] font-body font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.cat}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}