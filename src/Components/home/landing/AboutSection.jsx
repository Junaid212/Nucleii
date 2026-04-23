import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const CAMPUS_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/e78c920dc_generated_3f7411fd.png';

const points = [
  'Experienced teaching faculty from premier institutes',
  'Student-focused personalized learning approach',
  'Regular tests and performance tracking',
  'Dedicated doubt-solving sessions',
  'Academic mentorship programs',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={CAMPUS_IMG} alt="Nucleii campus" className="w-full aspect-video object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-secondary font-body font-semibold text-sm tracking-widest uppercase mb-3">
              About Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              About Nucleii Academy
            </h2>
            <p className="mt-6 text-muted-foreground font-body text-lg leading-relaxed">
              Nucleii Educational Academy is dedicated to delivering high-quality education through
              structured coaching and personalized guidance. Our goal is to help students excel in both
              board exams and competitive entrance tests without unnecessary stress.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80 font-body">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}