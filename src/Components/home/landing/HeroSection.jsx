import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Trophy, BookOpen } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/fe38f1d73_generated_7440cdda.png';

const stats = [
  { icon: Users, value: '5000+', label: 'Students Trained' },
  { icon: Trophy, value: '95%', label: 'Success Rate' },
  { icon: BookOpen, value: '15+', label: 'Years of Excellence' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Students in classroom" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-body mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Admissions Open for 2025–26
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Shape Your
            <span className="block text-secondary"> Academic Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-white/80 font-body leading-relaxed max-w-2xl"
          >
            Coaching for NEET, IIT-JEE, KCET & Foundation Programs. Building strong academic
            foundations and helping students crack competitive exams with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#courses">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold rounded-xl px-8 h-14 text-base shadow-xl shadow-secondary/30">
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-body font-semibold rounded-xl px-8 h-14 text-base backdrop-blur-sm">
                Contact Us
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-5 text-center">
              <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/60 font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}