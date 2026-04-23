import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BarChart3, Video, Bell } from 'lucide-react';
import SectionLabel from '@/components/landing/SectionLabel';

const APP_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/7279a2f11_generated_image.png';
const VIDEO_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/5548d982d_generated_image.png';

const features = [
  { icon: BookOpen, title: 'Course Library', desc: 'Access all course materials anytime, anywhere.' },
  { icon: BarChart3, title: 'Progress Tracking', desc: 'Real-time performance analytics and insights.' },
  { icon: Video, title: 'Live & Recorded Lectures', desc: 'Never miss a class with replay options.' },
  { icon: Bell, title: 'Smart Reminders', desc: 'Test alerts, schedule updates and more.' },
];

export default function AppDownloadSection() {
  return (
    <section className="py-24 bg-muted/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Mobile App</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Study Smarter on the Go
            </h2>
            <p className="mt-5 text-muted-foreground font-body text-base leading-relaxed">
              Download the Nucleii app and take your preparation everywhere. Access live classes,
              study materials, test series and performance insights — all from your phone.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="bg-card rounded-2xl p-5 border border-border/50 flex gap-3 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-foreground">{f.title}</h4>
                    <p className="text-muted-foreground font-body text-xs mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-2xl hover:bg-primary/90 transition-colors shadow-lg">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.07c1.22.06 2.05.78 2.81.78.89 0 2.57-.89 4.24-.7 1.48.12 2.75.82 3.5 2.05-3.13 1.81-2.62 5.65.13 6.97-.54 1.47-1.24 2.93-2.68 4.11M12 5C11.69 2.7 13.37 1 15.43 1c.29 2.58-2.35 4.5-3.43 4z"/>
                </svg>
                <div>
                  <p className="text-white/60 font-body text-[10px] leading-none">Download on</p>
                  <p className="font-body font-bold text-sm mt-0.5">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-2xl hover:bg-primary/90 transition-colors shadow-lg">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0">
                  <path d="M3.18 23.76A2.07 2.07 0 0 1 2 21.9V2.1C2 1.37 2.45.78 3.18.24L13.59 12l-10.41 11.76zm13.8-7.7-2.6-1.51-2.3 2.6 4.9 2.84a2.3 2.3 0 0 0 2.24.08l-2.24-3.99v-.02zM22 12c0 .83-.45 1.56-1.11 1.95l-2.08 1.2L15.9 12l2.91-3.15 2.08 1.2A2.24 2.24 0 0 1 22 12zM3.18.24l10.41 11.77-2.3 2.6 2.6-1.5 2.24-3.99a2.3 2.3 0 0 0-2.24.07L3.18.24z"/>
                </svg>
                <div>
                  <p className="text-white/60 font-body text-[10px] leading-none">Get it on</p>
                  <p className="font-body font-bold text-sm mt-0.5">Google Play</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: video/app mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
                <img src={VIDEO_IMG} alt="App demo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              {/* Floating app badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-border/30 flex items-center gap-3">
                <img src={APP_IMG} alt="App" className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <p className="font-heading font-bold text-sm text-foreground">Nucleii App</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-secondary text-secondary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground font-body text-xs mt-0.5">4.8 on Play Store</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}