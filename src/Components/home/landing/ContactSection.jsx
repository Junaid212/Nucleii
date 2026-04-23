import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error('Please fill in your name and phone number.');
      return;
    }
    setSending(true);
    // Simulate send
    await new Promise(r => setTimeout(r, 1200));
    toast.success('Thank you! We will contact you shortly.');
    setForm({ name: '', email: '', phone: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">
            Have questions? Reach out to us and we'll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Address</h4>
                <p className="text-muted-foreground font-body text-sm mt-1">Bangalore, Karnataka, India</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Phone</h4>
                <p className="text-muted-foreground font-body text-sm mt-1">+91-080-66468966</p>
                <p className="text-muted-foreground font-body text-sm">+91-90365 51390</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground font-body text-sm mt-1">info@nucleii.in</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border/50 p-8 shadow-lg space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="font-body text-sm">Name *</Label>
                  <Input
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    className="rounded-xl h-12 font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-body text-sm">Email</Label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className="rounded-xl h-12 font-body"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-body text-sm">Phone *</Label>
                <Input
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  className="rounded-xl h-12 font-body"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-body text-sm">Message</Label>
                <Textarea
                  placeholder="Tell us about your academic goals..."
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  className="rounded-xl min-h-[120px] font-body resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary hover:bg-primary/90 font-body font-semibold rounded-xl h-12 text-base"
              >
                {sending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}