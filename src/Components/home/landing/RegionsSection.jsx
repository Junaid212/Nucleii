import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const regions = [
  { name: 'Karnataka', cities: 'Bangalore, Mysore, Hubli', students: '3000+' },
  { name: 'Andhra Pradesh', cities: 'Hyderabad, Vijayawada', students: '1200+' },
  { name: 'Tamil Nadu', cities: 'Chennai, Coimbatore', students: '800+' },
];

export default function RegionsSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Our Reach
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Presence
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            We operate across multiple regions to provide quality education to a diverse student base.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border/50 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">{region.name}</h3>
              <p className="mt-2 text-muted-foreground font-body text-sm">{region.cities}</p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="text-2xl font-heading font-bold text-secondary">{region.students}</span>
                <span className="block text-xs text-muted-foreground font-body mt-0.5">Students Trained</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}