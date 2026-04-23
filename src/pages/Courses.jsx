import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Atom, PenTool, CheckCircle, ArrowRight, Lightbulb, Users, TrendingUp, Medal, FlaskConical, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PageHero from '@/components/landing/PageHero';
import SectionLabel from '@/components/landing/SectionLabel';

const BG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/fe38f1d73_generated_7440cdda.png';
const LAB_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/72a2fe4bc_generated_488354f0.png';
const STUDY_IMG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/f9f76c785_generated_b45120c3.png';

const courseIncludes = [
  { icon: BookOpen, text: 'Comprehensive study material for all subjects' },
  { icon: CheckCircle, text: 'Daily & weekly test series with analysis' },
  { icon: Users, text: 'Small batch sizes for personal attention' },
  { icon: Lightbulb, text: 'Doubt-clearing sessions by expert faculty' },
  { icon: TrendingUp, text: 'Performance tracking and parent reports' },
  { icon: Medal, text: 'Scholarship programs for deserving students' },
];

const courses = [
  { icon: Clock, title: 'Long Term Coaching', desc: 'Designed for students who have completed PU and are preparing again for NEET or similar exams. Intensive daily schedule with expert faculty and full coverage of syllabus.', tag: 'NEET / JEE', color: 'from-blue-500 to-blue-700', duration: '12 Months', students: '60 / batch' },
  { icon: BookOpen, title: 'PU Integrated Coaching', desc: 'Combines board syllabus with preparation for NEET, JEE, and KCET in a structured format. Study smarter, not harder — all in one program.', tag: 'Most Popular', color: 'from-amber-500 to-orange-600', duration: '2 Years', students: '45 / batch' },
  { icon: Atom, title: 'Foundation Course', desc: 'For students in Classes 8–10 to build early concepts for competitive exams. Develop strong fundamentals from an early stage to get ahead of the curve.', tag: 'Classes 8–10', color: 'from-emerald-500 to-teal-600', duration: '1–3 Years', students: '50 / batch' },
  { icon: PenTool, title: 'Tuition Classes', desc: 'Subject-specific coaching for students needing extra support. Focused sessions for Physics, Chemistry, Mathematics and Biology with expert teachers.', tag: 'Subject-wise', color: 'from-purple-500 to-violet-700', duration: 'Flexible', students: '30 / batch' },
];

const journeyCards = [
  { icon: Lightbulb, title: 'Learn & Understand', desc: 'Concepts are taught from fundamentals with real-world examples and visual aids.' },
  { icon: FlaskConical, title: 'Practice & Apply', desc: 'Regular practice tests, assignments and problem sets reinforce every concept.' },
  { icon: Calculator, title: 'Analyse & Improve', desc: 'Detailed performance reports help identify weak areas and track growth over time.' },
];

const journeyImages = [
  { img: LAB_IMG, title: 'Hands-on Lab Experience', desc: 'Students get practical exposure through well-equipped science labs that reinforce theoretical concepts.' },
  { img: STUDY_IMG, title: 'Library & Self-Study Resources', desc: 'Our curated library with thousands of books, previous papers and digital resources aids thorough preparation.' },
];

export default function Courses() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <PageHero
        title="Our Courses"
        subtitle="Comprehensive programs tailored for every academic stage and competitive exam."
        breadcrumb="Courses"
        bgImage={BG}
      />

      {/* Courses Include */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <SectionLabel>What You Get</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Courses Includes
            </h2>
            <p className="mt-4 text-muted-foreground font-body text-lg max-w-xl mx-auto">
              Every program at Nucleii comes packed with resources and support to ensure your success.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courseIncludes.map((item, idx) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-4 bg-muted/50 rounded-2xl p-5 border border-border/40 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="font-body text-foreground/80 text-sm leading-relaxed pt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <SectionLabel>Our Programs</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Available Courses</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-7">
            {courses.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${c.color}`} />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0`}>
                      <c.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-body font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full h-fit">{c.tag}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl mt-4 text-foreground">{c.title}</h3>
                  <p className="text-muted-foreground font-body text-sm mt-2 leading-relaxed">{c.desc}</p>
                  <div className="mt-5 flex gap-4">
                    <div className="bg-muted/60 rounded-xl px-4 py-2 text-center">
                      <p className="font-heading font-bold text-sm text-foreground">{c.duration}</p>
                      <p className="text-muted-foreground font-body text-[10px]">Duration</p>
                    </div>
                    <div className="bg-muted/60 rounded-xl px-4 py-2 text-center">
                      <p className="font-heading font-bold text-sm text-foreground">{c.students}</p>
                      <p className="text-muted-foreground font-body text-[10px]">Batch Size</p>
                    </div>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-primary font-body font-semibold text-sm hover:gap-3 transition-all">
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Ahead */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <SectionLabel>Journey Ahead</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Gain Valuable Knowledge <br className="hidden sm:block" />& Experience
            </h2>
          </motion.div>

          {/* 3 icon cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {journeyCards.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center bg-muted/50 rounded-2xl p-8 border border-border/40 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <c.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{c.title}</h3>
                <p className="mt-2 text-muted-foreground font-body text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 2 image cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {journeyImages.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col sm:flex-row gap-0 bg-card rounded-2xl border border-border/40 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="sm:w-48 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-heading font-bold text-base text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
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