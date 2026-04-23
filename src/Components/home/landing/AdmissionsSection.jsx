import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, GraduationCap, ClipboardCheck, Building } from 'lucide-react';

const highlights = [
  { icon: Users, text: 'Limited batch size for personal attention' },
  { icon: GraduationCap, text: 'Expert faculty from premier institutes' },
  { icon: ClipboardCheck, text: 'Regular tests with detailed discussion' },
  { icon: Building, text: 'Hostel facilities available' },
];

export default function AdmissionsSection() {
  return (
    <section id="admissions" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-card border border-border/50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-body font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Admissions Open 2025–26
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Start Your Journey <br className="hidden sm:block" />
                <span className="text-secondary">Today</span>
              </h2>
              <p className="mt-6 text-muted-foreground font-body text-lg leading-relaxed">
                Applications are now open for our NEET long-term coaching program. Secure your seat
                and begin your preparation with the best faculty and resources.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold rounded-xl px-8 h-14 text-base shadow-lg shadow-secondary/25">
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="tel:+919036551390">
                  <Button size="lg" variant="outline" className="font-body font-semibold rounded-xl px-8 h-14 text-base">
                    Call: +91 90365 51390
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((h, idx) => (
                <div key={idx} className="bg-muted/50 rounded-2xl p-6 border border-border/30">
                  <h.icon className="w-8 h-8 text-primary mb-3" />
                  <p className="font-body text-sm text-foreground/80 leading-relaxed">{h.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}