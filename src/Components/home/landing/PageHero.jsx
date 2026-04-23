import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumb, bgImage }) {
  return (
    <section
      className="relative pt-32 pb-20 flex items-center min-h-[340px]"
      style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      <div className="absolute inset-0 bg-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 text-white/60 font-body text-sm mb-4">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary">{breadcrumb}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-white/70 font-body text-lg max-w-xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}