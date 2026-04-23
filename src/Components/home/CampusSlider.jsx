import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionLabel from '@/components/landing/SectionLabel';

const slides = [
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/fe38f1d73_generated_7440cdda.png', label: 'Classrooms', caption: 'State-of-the-art classrooms with smart boards' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/72a2fe4bc_generated_488354f0.png', label: 'Labs', caption: 'Fully equipped science laboratories' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/f9f76c785_generated_b45120c3.png', label: 'Library', caption: 'Extensive library with curated study resources' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/7ec415676_generated_2c870448.png', label: 'Seminar Hall', caption: 'Modern seminar hall for guest lectures' },
  { src: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/c75de7d6d_generated_image.png', label: 'Campus', caption: 'Spacious and inspiring campus environment' },
];

export default function CampusSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SectionLabel>Campus Life</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Experience Our Campus
          </h2>
        </motion.div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-72 sm:h-96 lg:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current].src}
              alt={slides[current].label}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />

          {/* Caption */}
          <div className="absolute bottom-6 left-6 right-20">
            <span className="text-secondary font-body text-xs font-semibold uppercase tracking-wider">{slides[current].label}</span>
            <p className="text-white font-heading text-xl font-semibold mt-1">{slides[current].caption}</p>
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? 'bg-secondary w-6' : 'bg-white/40 w-2'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}