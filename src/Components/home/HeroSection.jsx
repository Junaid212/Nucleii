import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/fe38f1d73_generated_7440cdda.png';

// Countdown target: next admission cycle
const TARGET = new Date('2025-06-01T00:00:00');

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function CountBox({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-4 min-w-[72px]">
      <span className="font-heading text-3xl font-bold text-white leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-white/50 font-body text-[10px] uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Students in classroom" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-body mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Admissions Open for 2025–26
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Shape Your
              <span className="block text-secondary mt-1">Academic Future</span>
            </h1>
            <p className="mt-5 text-white/75 font-body text-lg leading-relaxed max-w-xl">
              Coaching for NEET, IIT-JEE, KCET & Foundation Programs. Building strong academic
              foundations and helping students crack competitive exams with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/courses">
                <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-body font-semibold rounded-xl px-8 h-14 text-base shadow-xl shadow-secondary/30">
                  Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-body font-semibold rounded-xl px-8 h-14 text-base">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center lg:items-end"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 w-full max-w-sm">
              <p className="text-secondary font-body font-semibold text-sm tracking-widest uppercase text-center mb-2">
                Admissions Close In
              </p>
              <p className="text-white/50 font-body text-xs text-center mb-6">Limited Seats Available</p>
              <div className="flex items-center justify-center gap-3">
                <CountBox value={days} label="Days" />
                <span className="text-secondary text-2xl font-bold mb-1">:</span>
                <CountBox value={hours} label="Hrs" />
                <span className="text-secondary text-2xl font-bold mb-1">:</span>
                <CountBox value={minutes} label="Min" />
                <span className="text-secondary text-2xl font-bold mb-1">:</span>
                <CountBox value={seconds} label="Sec" />
              </div>
              <Link to="/contact">
                <Button className="w-full mt-6 bg-secondary text-white hover:bg-secondary/90 rounded-xl h-12 font-body font-semibold">
                  Secure Your Seat Now
                </Button>
              </Link>
              <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 text-center">
                {[['NEET', 'UG'], ['IIT', 'JEE'], ['KCET', 'State']].map(([t, s]) => (
                  <div key={t} className="py-2">
                    <p className="text-white font-heading font-bold text-base">{t}</p>
                    <p className="text-white/40 font-body text-[10px]">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}