import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import SectionLabel from '@/components/landing/SectionLabel';

export default function GetInTouchSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handle = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { toast.error('Please enter your name and phone.'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    toast.success('Message sent! We\'ll reach you shortly.');
    setForm({ name: '', phone: '', message: '' });
    setLoading(false);
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-secondary font-body font-semibold text-sm tracking-widest uppercase mb-3">Reach Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Get in Touch</h2>
            <p className="mt-5 text-white/60 font-body text-lg leading-relaxed">
              Have questions about our programs? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="mt-8 space-y-5">
              {[
                { icon: MapPin, val: 'Bangalore, Karnataka, India' },
                { icon: Phone, val: '+91-080-66468966 | +91-90365 51390' },
                { icon: Mail, val: 'info@nucleii.in' },
              ].map(({ icon: Icon, val }) => (
                <div key={val} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-white/70 font-body">{val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <form onSubmit={handle} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-5">
              <div className="space-y-2">
                <Label className="text-white/80 font-body text-sm">Your Name *</Label>
                <Input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Full name" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-xl h-12 focus:border-secondary" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/80 font-body text-sm">Phone Number *</Label>
                <Input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="+91 XXXXX XXXXX" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-xl h-12 focus:border-secondary" />
              </div>
              <div className="space-y-2">
                <Label className="text-white/80 font-body text-sm">Message</Label>
                <Textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="Tell us your enquiry..." className="bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-xl min-h-[100px] resize-none focus:border-secondary" />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-secondary hover:bg-secondary/90 text-white font-body font-semibold rounded-xl h-12 text-base">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4 mr-2" />Send Message</>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}