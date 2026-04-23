import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Loader2, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PageHero from '@/components/landing/PageHero';
import SectionLabel from '@/components/landing/SectionLabel';

const BG = 'https://media.base44.com/images/public/69e9b07f445e9e14b63d2eb8/c75de7d6d_generated_image.png';

const info = [
  { icon: MapPin, label: 'Our Location', value: 'Bangalore, Karnataka, India', sub: 'Near Indiranagar Metro', color: 'bg-blue-500/10 text-blue-600' },
  { icon: Phone, label: 'Call Us', value: '+91-080-66468966', sub: '+91-90365 51390', color: 'bg-emerald-500/10 text-emerald-600' },
  { icon: Mail, label: 'Email Us', value: 'info@nucleii.in', sub: 'admissions@nucleii.in', color: 'bg-amber-500/10 text-amber-600' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Sat: 8AM – 7PM', sub: 'Sunday: 10AM – 2PM', color: 'bg-purple-500/10 text-purple-600' },
];

const courses = ['Long Term Coaching (NEET)', 'Long Term Coaching (JEE)', 'PU Integrated Coaching', 'Foundation Course (8–10)', 'Tuition Classes', 'Other / General Enquiry'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { toast.error('Name and phone are required.'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    toast.success('Thank you! Our team will reach out within 24 hours.');
    setForm({ name: '', email: '', phone: '', course: '', message: '' });
    setLoading(false);
  };

  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="Reach out to our admissions team — we're here to help you take the first step."
        breadcrumb="Contact"
        bgImage={BG}
      />

      {/* Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {info.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card rounded-2xl border border-border/40 p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${item.color}`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{item.label}</h3>
                <p className="mt-2 font-body text-sm text-foreground/80 font-medium">{item.value}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + CTA */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <SectionLabel>Enquiry Form</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">Send Us a Message</h2>

              <form onSubmit={submit} className="bg-card rounded-3xl border border-border/40 p-8 shadow-lg space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-medium">Full Name *</Label>
                    <Input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your full name" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-medium">Email Address</Label>
                    <Input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" className="rounded-xl h-12" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-medium">Phone Number *</Label>
                    <Input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-sm font-medium">Course of Interest</Label>
                    <Select value={form.course} onValueChange={v => set('course', v)}>
                      <SelectTrigger className="rounded-xl h-12">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="font-body text-sm font-medium">Your Message</Label>
                  <div value={form.message} onChange={e => set('message', e.target.value)} placeholder="Tell us about your academic goals and questions..." className="rounded-xl min-h-[130px] resize-none" />
                </div>
                <Button type="submit" disabled={loading} size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-body font-semibold rounded-xl h-13 text-base">
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4 mr-2" /> Send Enquiry</>}
                </Button>
              </form>
            </motion.div>

            {/* Sidebar CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-primary rounded-3xl p-8 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
                <MessageCircle className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-heading font-bold text-xl">Book a Free Counselling</h3>
                <p className="mt-2 text-white/60 font-body text-sm leading-relaxed">
                  Talk to our academic counsellor to find the right course and strategy for you.
                </p>
                <a href="tel:+919036551390">
                  <Button className="mt-5 bg-secondary hover:bg-secondary/90 text-white font-body font-semibold rounded-xl w-full">
                    Call: +91 90365 51390
                  </Button>
                </a>
              </div>

              <div className="bg-card rounded-3xl border border-border/40 p-8">
                <h3 className="font-heading font-bold text-lg text-foreground">Quick Links</h3>
                <div className="mt-4 space-y-3">
                  {[
                    { label: 'View All Courses', to: '/courses' },
                    { label: 'See Alumni Results', to: '/results' },
                    { label: 'About Nucleii', to: '/about' },
                    { label: 'Photo Gallery', to: '/media' },
                  ].map(l => (
                    <Link key={l.to} to={l.to} className="flex items-center justify-between text-foreground/70 hover:text-secondary font-body text-sm py-2 border-b border-border/40 last:border-0 transition-colors">
                      {l.label} <ArrowRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <div className="h-72 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-10 h-10 text-secondary mx-auto mb-2" />
            <p className="font-heading font-semibold text-foreground">Bangalore, Karnataka</p>
            <p className="text-muted-foreground font-body text-sm mt-1">Nucleii Educational Academy</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="mt-3 rounded-xl font-body font-semibold text-sm">
                Open in Google Maps
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}