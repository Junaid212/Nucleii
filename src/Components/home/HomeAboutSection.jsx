import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionLabel from '@/components/landing/SectionLabel';

const CAMPUS_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/e78c920dc_generated_3f7411fd.png';

const points = [
  'Experienced faculty from premier institutes',
  'Student-focused personalized learning',
  'Regular tests and performance tracking',
  'Dedicated doubt-solving sessions',
  'Academic mentorship programs',
  'Integrated board + competitive prep',
];

export default function HomeAboutSection() {
  return (
    <section className="py-24 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img src={CAMPUS_IMG} alt="Campus" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              About Nucleii Academy
            </h2>
            <p className="mt-5 text-muted-foreground font-body text-base leading-relaxed">
              Nucleii Educational Academy is dedicated to delivering high-quality education through
              structured coaching and personalized guidance. Our goal is to help students excel in
              both board exams and competitive entrance tests without unnecessary stress.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/75 font-body text-sm">{p}</span>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button className="mt-8 bg-primary hover:bg-primary/90 font-body font-semibold rounded-xl px-7 h-12">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}