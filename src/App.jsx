import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sparkles, Zap, Orbit, Layers } from 'lucide-react';

// --- Consolidated Content Configuration ---
const CONTENT = {
  brand: { name: 'ALTER', sub: 'HUB' },
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Studio', href: '#studio' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    tag: 'EST. 2026 // CREATIVE INTELLIGENCE',
    title: ['We alter', 'the noise.'],
    subtitle: 'A creative marketing studio engineering luminous brand systems for companies that refuse to blend in.',
    cta: 'Start a Project',
    ctaHref: '#contact',
  },
  services: [
    { id: '01', icon: Sparkles, title: 'Brand Systems', desc: 'Identity, voice, and visual architecture that compounds in value.' },
    { id: '02', icon: Zap, title: 'Launch Campaigns', desc: 'Go-to-market narratives that convert attention into gravity.' },
    { id: '03', icon: Orbit, title: 'Digital Products', desc: 'Web, app, and interactive experiences with surgical craft.' },
    { id: '04', icon: Layers, title: 'Content Engines', desc: 'Always-on editorial systems that outpace the algorithm.' },
  ],
  portfolio: [
    { id: '01', client: 'Meridian Labs', category: 'Brand / Web', year: '2026', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80' },
    { id: '02', client: 'Oro Finance', category: 'Campaign', year: '2026', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80' },
    { id: '03', client: 'Halo Studios', category: 'Product / Motion', year: '2025', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80' },
    { id: '04', client: 'Vertex Ventures', category: 'Identity', year: '2025', image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=1200&q=80' },
  ],
  stats: [
    { value: '120+', label: 'Brands Launched' },
    { value: '14', label: 'Industry Awards' },
    { value: '9', label: 'Countries' },
    { value: '∞', label: 'Iterations' },
  ],
  footer: {
    email: 'alterhub.me@gmail.com',
    socials: [
      { name: 'Instagram', url: 'https://instagram.com/alterhub.us' },
      { name: 'Dribbble', url: 'https://dribbble.com/alterhub' },
      { name: 'LinkedIn', url: 'https://linkedin.com/company/alterhub' },
      { name: 'Are.na', url: 'https://are.na/alter-hub' },
    ],
  },
};

// --- Custom Components ---

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };
    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) setIsHover(true);
      else setIsHover(false);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block mix-blend-difference"
      style={{ x, y }}
    >
      <motion.div
        animate={{ scale: isHover ? 2.5 : 1, opacity: isHover ? 0.6 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-4 h-4 rounded-full bg-emerald-glow"
      />
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'w-[92%] md:w-[88%]' : 'w-[94%] md:w-[94%]'
        }`}
      >
        <div className="glass-strong rounded-full px-5 md:px-8 py-3 md:py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-glow animate-pulse" />
            <span className="font-display font-bold text-sm md:text-base tracking-tight text-white">
              {CONTENT.brand.name}
              <span className="text-emerald-glow">/</span>
              {CONTENT.brand.sub}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {CONTENT.nav.map((link) => (
              <a key={link.label} href={link.href} className="magnetic-link text-sm font-medium text-white/80">
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest border border-emerald-glow/40 rounded-full px-4 py-2 liquid-btn text-emerald-glow"
          >
            Let's Talk <ArrowUpRight size={14} />
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[92%] glass-strong rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {CONTENT.nav.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-lg font-medium text-white">
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 text-emerald-glow font-mono text-sm uppercase tracking-widest border border-emerald-glow/40 rounded-full px-4 py-2.5 text-center">
                Let's Talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HubVisual() {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [10, -10]), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), { damping: 20, stiffness: 100 });

  useEffect(() => {
    const onMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px]"
    >
      <motion.svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10D9A3" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#064E3B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#022C22" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10D9A3" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>
        </defs>
        <circle cx="250" cy="250" r="240" fill="none" stroke="url(#ring)" strokeWidth="0.5" strokeDasharray="2 8" opacity="0.4" />
        <circle cx="250" cy="250" r="200" fill="none" stroke="url(#ring)" strokeWidth="1" opacity="0.3" />
        <circle cx="250" cy="250" r="160" fill="none" stroke="#10D9A3" strokeWidth="0.5" strokeDasharray="1 4" opacity="0.5" />
      </motion.svg>
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-48 md:h-48">
          <circle cx="100" cy="100" r="80" fill="url(#core)" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#10D9A3" strokeWidth="1" />
          <circle cx="100" cy="100" r="20" fill="#10D9A3" opacity="0.9">
            <animate attributeName="r" values="18;24;18" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="100" y="105" textAnchor="middle" fill="#05080A" fontSize="10" fontFamily="monospace" fontWeight="600">
            HUB
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-2 text-xs font-mono text-emerald-glow">
            <span className="w-6 h-px bg-emerald-glow" />
            {CONTENT.hero.tag}
          </motion.div>
          <h1 className="font-bold text-6xl md:text-8xl leading-[0.9] tracking-tighter text-white">
            {CONTENT.hero.title[0]} <br />
            <span className="italic font-light text-emerald-glow">the noise.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/60 leading-relaxed">
            {CONTENT.hero.subtitle}
          </p>
          <div className="mt-10 flex gap-4">
            <a href={CONTENT.hero.ctaHref} className="bg-emerald-glow text-black px-8 py-4 rounded-full font-bold flex items-center gap-2">
              {CONTENT.hero.cta} <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center relative">
          <HubVisual />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-20 text-white">Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {CONTENT.services.map((s) => (
            <div key={s.id} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-glow/50 transition-colors">
              <s.icon className="text-emerald-glow mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
              <p className="text-white/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className="py-32 px-6 md:px-10 bg-black/50">
      <div className="max-w-7xl mx-auto text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-20">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {CONTENT.portfolio.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl aspect-video mb-6">
                <img src={item.image} alt={item.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-bold">{item.client}</h3>
              <p className="text-emerald-glow text-sm uppercase tracking-widest">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section id="studio" className="py-32 px-6 md:px-10 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {CONTENT.stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-5xl font-bold text-emerald-glow mb-2">{stat.value}</div>
            <div className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-20 border-t border-emerald-900/30 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 mb-4">Inquiries</p>
          <a href={`mailto:${CONTENT.footer.email}`} className="text-2xl font-light hover:text-emerald-400 transition-colors">
            {CONTENT.footer.email}
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 mb-4">Connect</p>
          <ul className="flex flex-col gap-2">
            {CONTENT.footer.socials.map((social) => (
              <motion.li key={social.name} whileHover={{ x: 5 }}>
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-mono text-sm uppercase">
                  {social.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#05080A] min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
