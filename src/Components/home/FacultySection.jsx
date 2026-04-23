import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionLabel from '@/components/landing/SectionLabel';

const faculty = [
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/a08a1f78b_generated_image.png',
    name: 'Dr. Suresh Nair',
    subject: 'Physics',
    degree: 'Ph.D – IIT Madras',
    experience: '18 Years',
    role: 'Senior Faculty & Academic Head',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/d7034ecf6_generated_image.png',
    name: 'Dr. Priya Menon',
    subject: 'Chemistry',
    degree: 'M.Sc, Ph.D – Bangalore University',
    experience: '14 Years',
    role: 'Chemistry Faculty Lead',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/deedb9ca8_generated_image.png',
    name: 'Prof. Ramesh Iyer',
    subject: 'Mathematics',
    degree: 'M.Tech – NIT Trichy',
    experience: '20 Years',
    role: 'Mathematics Senior Professor',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/44ec5e572_generated_image.png',
    name: 'Dr. Kavitha Rao',
    subject: 'Biology',
    degree: 'M.B.B.S, M.D – AIIMS',
    experience: '12 Years',
    role: 'Biology Faculty & Mentor',
  },
];

export default function FacultySection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <SectionLabel>Expert Educators</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Faculty
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Learn from the best. Our faculty brings decades of combined experience from premier institutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {faculty.map((f, idx) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-secondary text-white text-xs font-body font-bold px-2.5 py-1 rounded-full">
                  {f.subject}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-foreground">{f.name}</h3>
                <p className="text-muted-foreground font-body text-xs mt-0.5">{f.role}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-foreground/70 font-body text-xs">
                    <GraduationCap className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                    <span>{f.degree}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70 font-body text-xs">
                    <Briefcase className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                    <span>{f.experience} Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}