import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, Atom, PenTool, ArrowRight } from 'lucide-react';

const courses = [
  {
    icon: Clock,
    title: 'Long Term Coaching',
    desc: 'Designed for students who have completed PU and are preparing again for NEET or similar exams. Intensive daily schedule with expert faculty.',
    tag: 'NEET / JEE',
    color: 'bg-blue-500/10 text-blue-600',
    iconColor: 'text-blue-600',
  },
  {
    icon: BookOpen,
    title: 'PU Integrated Coaching',
    desc: 'Combines board syllabus with preparation for NEET, JEE, and KCET in a structured format. Study smarter, not harder.',
    tag: 'Most Popular',
    color: 'bg-amber-500/10 text-amber-600',
    iconColor: 'text-amber-600',
  },
  {
    icon: Atom,
    title: 'Foundation Course',
    desc: 'For students in Classes 8–10 to build early concepts for competitive exams. Develop strong fundamentals from an early stage.',
    tag: 'Classes 8–10',
    color: 'bg-emerald-500/10 text-emerald-600',
    iconColor: 'text-emerald-600',
  },
  {
    icon: PenTool,
    title: 'Tuition Classes',
    desc: 'Subject-specific coaching for students needing extra support. Focused sessions for Physics, Chemistry, Mathematics & Biology.',
    tag: 'Subject-wise',
    color: 'bg-purple-500/10 text-purple-600',
    iconColor: 'text-purple-600',
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 sm:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Our Programs
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Courses Designed for Success
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Comprehensive programs tailored to meet diverse academic needs and competitive exam aspirations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 bg-card rounded-2xl overflow-hidden">
                <CardHeader className="pb-3">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${course.color}`}>
                    <course.icon className={`w-7 h-7 ${course.iconColor}`} />
                  </div>
                  <span className={`inline-block text-xs font-body font-semibold px-3 py-1 rounded-full w-fit ${course.color}`}>
                    {course.tag}
                  </span>
                  <CardTitle className="font-heading text-xl mt-2">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{course.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-primary font-body font-semibold text-sm mt-5 group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}