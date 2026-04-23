import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookMarked, MessageCircle, ClipboardCheck, BarChart3, Heart, Lightbulb } from 'lucide-react';

const features = [
  { icon: Users, title: 'Strong Academic Team', desc: 'Faculty from premier institutes with years of coaching experience.' },
  { icon: BookMarked, title: 'Quality Study Material', desc: 'Comprehensive and curated resources aligned with latest exam patterns.' },
  { icon: MessageCircle, title: 'Doubt-Solving Sessions', desc: 'Dedicated time slots for clearing concepts and questions.' },
  { icon: ClipboardCheck, title: 'Regular Testing', desc: 'Weekly and cumulative tests to track progress consistently.' },
  { icon: BarChart3, title: 'Exam Analysis', desc: 'Detailed performance analysis to identify strengths and areas to improve.' },
  { icon: Heart, title: 'Academic Mentorship', desc: 'One-on-one guidance to keep students motivated and focused.' },
  { icon: Lightbulb, title: 'Research-Based Methods', desc: 'Teaching strategies backed by educational research for better outcomes.' },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Why Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What We Offer
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Everything a student needs to succeed in competitive exams, all under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex gap-5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                <f.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}