import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    exam: 'NEET 2024 – Rank 342',
    text: 'The structured tests and mentoring helped me improve my performance significantly. The faculty here truly cares about every student.',
    initials: 'PS',
  },
  {
    name: 'Arjun Reddy',
    exam: 'IIT-JEE Advanced 2024',
    text: 'Nucleii gave me the right direction and confidence. The doubt-solving sessions were incredibly helpful in clearing my concepts.',
    initials: 'AR',
  },
  {
    name: 'Sneha Patil',
    exam: 'KCET 2024 – Top 100',
    text: 'The integrated coaching program at Nucleii helped me balance both boards and KCET preparation perfectly. Highly recommended!',
    initials: 'SP',
  },
  {
    name: 'Rohit Kumar',
    exam: 'NEET 2024 – 650+ Score',
    text: 'Regular testing and detailed analysis helped me understand my weak points. The mentors here go above and beyond for their students.',
    initials: 'RK',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Success Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What Students Say
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <Quote className="w-8 h-8 text-secondary/50 mb-3" />
              <p className="text-white/80 font-body text-sm leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-1 mt-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-body font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-body font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 font-body text-xs">{t.exam}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}