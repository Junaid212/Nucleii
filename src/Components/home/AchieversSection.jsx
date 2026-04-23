import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy } from 'lucide-react';
import SectionLabel from '@/components/landing/SectionLabel';

const achievers = [
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/661ed5c1b_generated_image.png',
    name: 'Ananya Sharma',
    exam: 'NEET UG 2024',
    score: '695 / 720',
    rank: 'AIR 312',
    college: 'AIIMS New Delhi',
    tag: 'NEET Topper',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/a56275ecb_generated_image.png',
    name: 'Rahul Verma',
    exam: 'IIT-JEE Advanced 2024',
    score: '312 / 360',
    rank: 'AIR 487',
    college: 'IIT Bombay',
    tag: 'JEE Achiever',
  },
];

export default function AchieversSection() {
  return (
    <section className="py-24 bg-muted/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <SectionLabel>Top Performers</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Star Achievers
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Proud students who cracked the nation's toughest competitive exams with Nucleii's guidance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {achievers.map((a, idx) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative bg-card rounded-3xl overflow-hidden shadow-xl border border-border/40 group"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 bg-secondary text-white text-xs font-body font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Trophy className="w-3 h-3" /> {a.tag}
              </div>

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img src={a.img} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 bg-card">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{a.name}</h3>
                    <p className="text-muted-foreground font-body text-sm mt-0.5">{a.college}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-heading text-2xl font-bold text-secondary">{a.rank}</span>
                    <p className="text-xs text-muted-foreground font-body">{a.exam}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between bg-primary/5 rounded-xl px-4 py-3">
                  <span className="text-foreground/70 font-body text-sm">Score</span>
                  <span className="font-heading font-bold text-primary text-lg">{a.score}</span>
                </div>
                <div className="flex mt-3 gap-0.5">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}