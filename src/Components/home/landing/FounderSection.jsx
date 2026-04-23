import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const FOUNDER_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/26d792c62_generated_d23b37cd.png';

export default function FounderSection() {
  return (
    <section className="py-24 sm:py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <span className="inline-block text-secondary font-body font-semibold text-sm tracking-widest uppercase mb-3">
              Founder's Message
            </span>
            <Quote className="w-12 h-12 text-secondary/40 mb-4" />
            <p className="font-heading text-2xl sm:text-3xl text-white/90 leading-relaxed italic">
              Every student has unique potential. At Nucleii, we focus on identifying and nurturing
              that potential through the right academic environment.
            </p>
            <p className="mt-6 text-white/60 font-body text-lg leading-relaxed">
              With years of experience in training students for competitive exams, we aim to build not
              just academic strength but also confidence, discipline, and a competitive mindset. Our
              mission is to prepare students for future challenges with strong fundamentals and modern
              skills.
            </p>
            <div className="mt-8 border-l-2 border-secondary pl-4">
              <p className="text-white font-heading font-semibold text-lg">Dr. Rajesh Kumar</p>
              <p className="text-white/50 font-body text-sm">Founder & Director, Nucleii Academy</p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img src={FOUNDER_IMG} alt="Dr. Rajesh Kumar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary/30 rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}