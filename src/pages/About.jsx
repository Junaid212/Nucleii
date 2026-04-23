import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PageHero from '@/components/landing/PageHero';
import SectionLabel from '@/components/landing/SectionLabel';

const FOUNDER_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/26d792c62_generated_d23b37cd.png';
const CAMPUS_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/e78c920dc_generated_3f7411fd.png';

const bullets = [
  'Expert faculty from IITs, NITs, AIIMS and top universities',
  'Structured curriculum aligned with latest exam patterns',
  'Small batch sizes for focused personal attention',
  'Regular mock tests, detailed analysis and feedback',
  'Dedicated academic mentorship and counselling',
  'Proven track record with 3000+ successful students',
];

export default function About() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <PageHero
        title="About Nucleii Academy"
        subtitle="We believe every student deserves the right guidance to achieve their dreams."
        breadcrumb="About"
        bgImage={CAMPUS_IMG}
      />

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Why Thousands of Students Trust Nucleii
              </h2>

              <p className="mt-6 text-muted-foreground font-body text-base leading-relaxed">
                Nucleii Educational Academy was founded with a singular mission — to bridge the gap between
                classroom learning and competitive exam preparation. We understand the pressure students face
                and have designed our programs to make the journey effective, structured and stress-free.
              </p>
              <p className="mt-4 text-muted-foreground font-body text-base leading-relaxed">
                Our integrated approach combines board exam preparation with competitive entrance coaching,
                so students never have to choose between the two. This dual-track methodology has consistently
                produced outstanding results across NEET, IIT-JEE, and KCET.
              </p>
              <p className="mt-4 text-muted-foreground font-body text-base leading-relaxed">
                At Nucleii, we invest in every student's journey — from foundation building in Classes 8-10
                through PU integrated programs and long-term coaching. Our faculty, infrastructure and
                methodology are continuously updated to reflect the evolving exam landscape.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3 bg-muted/50 rounded-xl p-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-foreground/80">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={CAMPUS_IMG} alt="Campus" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img src={FOUNDER_IMG} alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary/30 rounded-3xl -z-10" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
              <SectionLabel>Founder's Message</SectionLabel>
              <Quote className="w-12 h-12 text-secondary/40 mb-4" />
              <p className="font-heading text-2xl sm:text-3xl text-white/90 leading-relaxed italic">
                Every student has unique potential. At Nucleii, we focus on identifying and nurturing
                that potential through the right academic environment.
              </p>
              <p className="mt-6 text-white/60 font-body text-lg leading-relaxed">
                With years of experience in training students for competitive exams, we aim to build not
                just academic strength but also confidence, discipline, and a competitive mindset. Our
                mission is to prepare students for future challenges with strong fundamentals and modern skills.
              </p>
              <div className="mt-8 border-l-2 border-secondary pl-4">
                <p className="text-white font-heading font-semibold text-lg">Dr. Rajesh Kumar</p>
                <p className="text-white/50 font-body text-sm">Founder & Director, Nucleii Academy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Ready to Begin Your Journey?</h2>
            <p className="mt-4 text-muted-foreground font-body text-lg">Join thousands of students who have transformed their academic careers at Nucleii.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 font-body font-semibold rounded-xl px-8 h-13">
                  Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-body font-semibold rounded-xl px-8 h-13">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}