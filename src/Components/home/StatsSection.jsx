import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function StatItem({ value, suffix, label, desc, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const id = setInterval(() => {
      start = Math.min(start + step, value);
      setCount(Math.floor(start));
      if (start >= value) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [visible, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
    >
      <div className="font-heading text-4xl sm:text-5xl font-bold text-secondary">
        {count}{suffix}
      </div>
      <div className="mt-2 font-heading font-semibold text-white text-lg">{label}</div>
      <div className="mt-1 text-white/50 font-body text-xs">{desc}</div>
    </motion.div>
  );
}

const stats = [
  { value: 2, suffix: '', label: 'States Covered', desc: 'Karnataka & Andhra Pradesh' },
  { value: 10, suffix: '+', label: 'Institutions', desc: 'Partner schools & colleges' },
  { value: 3000, suffix: '+', label: 'Students', desc: 'Trained and mentored' },
  { value: 95, suffix: '%', label: 'Success Rate', desc: 'Competitive exam pass rate' },
];

export default function StatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-body font-semibold text-sm tracking-widest uppercase">Impact</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Our Impact in Numbers
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}