import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PageHero from '@/components/landing/PageHero';
import SectionLabel from '@/components/landing/SectionLabel';

const BG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/9996e3903_generated_f767cef9.png';

const alumni = [
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/37bb9a1c0_generated_image.png',
    name: 'Vikram Sharma',
    degree: 'B.Tech – Computer Science',
    college: 'IIT Bombay',
    exam: 'JEE Advanced 2023 – AIR 234',
    year: '2023',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/32f9121eb_generated_image.png',
    name: 'Dr. Meera Krishnan',
    degree: 'MBBS – General Medicine',
    college: 'AIIMS New Delhi',
    exam: 'NEET UG 2023 – AIR 189',
    year: '2023',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/e6eff7e32_generated_image.png',
    name: 'Divya Patel',
    degree: 'MBBS – Surgery',
    college: 'AIIMS Bangalore',
    exam: 'NEET UG 2023 – AIR 412',
    year: '2023',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/34d8fa445_generated_image.png',
    name: 'Arjun Nayak',
    degree: 'B.Tech – Mechanical Engg.',
    college: 'NIT Surathkal',
    exam: 'JEE Mains 2023 – 98.7%ile',
    year: '2023',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/661ed5c1b_generated_image.png',
    name: 'Ananya Sharma',
    degree: 'MBBS',
    college: 'JIPMER Puducherry',
    exam: 'NEET UG 2024 – AIR 312',
    year: '2024',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/a56275ecb_generated_image.png',
    name: 'Rahul Verma',
    degree: 'B.Tech – Electrical Engg.',
    college: 'IIT Bombay',
    exam: 'JEE Advanced 2024 – AIR 487',
    year: '2024',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/37bb9a1c0_generated_image.png',
    name: 'Riya Shetty',
    degree: 'B.Tech – Data Science',
    college: 'BITS Pilani',
    exam: 'JEE Mains 2024 – 99.2%ile',
    year: '2024',
  },
  {
    img: 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/32f9121eb_generated_image.png',
    name: 'Kiran Bhat',
    degree: 'MBBS',
    college: 'Kasturba Medical College',
    exam: 'NEET UG 2024 – AIR 678',
    year: '2024',
  },
];

export default function Results() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <PageHero
        title="Our Alumnies"
        subtitle="Proud students who made it to India's top institutions through dedication and Nucleii's guidance."
        breadcrumb="Results"
        bgImage={BG}
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <SectionLabel>Alumnies</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Hall of Fame
            </h2>
            <p className="mt-4 text-muted-foreground font-body text-lg max-w-xl mx-auto">
              These are the bright minds who turned their dreams into reality with Nucleii's guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            {alumni.map((a, idx) => (
              <motion.div
                key={`${a.name}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                className="group bg-card rounded-2xl border border-border/40 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44 sm:h-56">
                  <img src={a.img} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute top-3 right-3 bg-secondary text-white text-[10px] font-body font-bold px-2 py-0.5 rounded-full">
                    {a.year}
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-foreground">{a.name}</h3>
                  <p className="text-secondary font-body text-xs font-semibold mt-0.5">{a.exam}</p>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <GraduationCap className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-body text-xs">{a.degree}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-body text-xs">{a.college}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}