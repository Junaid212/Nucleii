import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Atom, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLabel from '@/components/landing/SectionLabel';

const courses = [
  { icon: Clock, title: 'Long Term Coaching', desc: 'Intensive preparation for NEET / JEE for students re-attempting competitive exams.', tag: 'NEET / JEE', color: 'from-blue-500 to-blue-700' },
  { icon: BookOpen, title: 'PU Integrated', desc: 'Combines board syllabus with NEET, JEE, KCET in a structured daily schedule.', tag: 'Most Popular', color: 'from-amber-500 to-orange-600' },
  { icon: Atom, title: 'Foundation Course', desc: 'Early concept building for Classes 8–10 for competitive exam readiness.', tag: 'Classes 8–10', color: 'from-emerald-500 to-teal-600' },
  { icon: PenTool, title: 'Tuition Classes', desc: 'Subject-specific coaching in Physics, Chemistry, Math & Biology.', tag: 'Subject-wise', color: 'from-purple-500 to-violet-700' },
];

export default function HomeCoursesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <SectionLabel>Our Programs</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Courses Designed for Success
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${c.color}`} />
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4`}>
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-body font-semibold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">{c.tag}</span>
                <h3 className="font-heading font-bold text-lg mt-3 text-foreground">{c.title}</h3>
                <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">{c.desc}</p>
                <Link to="/courses" className="inline-flex items-center gap-1.5 text-primary font-body font-semibold text-sm mt-5 group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/courses">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary font-body font-semibold hover:bg-primary/5 transition-colors text-sm">
              View All Courses <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}