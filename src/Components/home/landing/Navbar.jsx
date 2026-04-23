import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Results', href: '/results' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-xl shadow-lg shadow-primary/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className={`font-heading font-bold text-xl tracking-tight ${transparent ? 'text-white' : 'text-primary'}`}>
                Nucleii
              </span>
              <span className={`block text-[10px] font-body tracking-widest uppercase -mt-1 ${transparent ? 'text-white/70' : 'text-muted-foreground'}`}>
                Academy
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-body font-medium transition-colors ${
                    transparent
                      ? active ? 'text-secondary' : 'text-white/80 hover:text-white hover:bg-white/10'
                      : active ? 'text-secondary bg-secondary/5' : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link to="/contact">
              <Button className="ml-3 bg-secondary text-white hover:bg-secondary/90 font-body font-semibold rounded-xl px-6 shadow-lg shadow-secondary/25">
                Enquire Now
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg ${transparent ? 'text-white' : 'text-foreground'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-body font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-secondary bg-secondary/5'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full mt-3 bg-secondary text-white font-body font-semibold rounded-xl">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}