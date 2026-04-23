import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Results', to: '/results' },
  { label: 'Media', to: '/media' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white">Nucleii</span>
                <span className="block text-[10px] font-body tracking-widest uppercase -mt-1 text-white/50">
                  Educational Academy
                </span>
              </div>
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed max-w-md">
              Building strong academic foundations and helping students crack competitive exams with
              confidence since 2009. Your success is our mission.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 hover:text-secondary font-body text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2.5 text-white/60 font-body text-sm">
              <p>Bangalore, Karnataka</p>
              <p>+91-080-66468966</p>
              <p>+91-90365 51390</p>
              <p>info@nucleii.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-body text-sm">
            © 2025 Nucleii Educational Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-secondary font-body text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-secondary font-body text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}