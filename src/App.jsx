import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sparkles, Zap, Orbit, Layers } from 'lucide-react';

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
  import { motion } from 'framer-motion';

const footerData = {
  email: 'alterhub.me@gmail.com',
  socials: [
    { name: 'Instagram', url: 'https://instagram.com/alterhub.us' },
    { name: 'Dribbble', url: 'https://dribbble.com/alterhub' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/alterhub' },
    { name: 'Are.na', url: 'https://are.na/alter-hub' },
  ],
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-emerald-900/30 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        
        {/* Contact Info */}
        <div className="mb-10 md:mb-0">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 mb-4">Inquiries</p>
          <a 
            href={`mailto:${footerData.email}`} 
            className="text-2xl font-light text-white hover:text-emerald-400 transition-colors duration-300"
          >
            {footerData.email}
          </a>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500 mb-4">Connect</p>
          <ul className="flex flex-col gap-2">
            {footerData.socials.map((social) => (
              <motion.li key={social.name} whileHover={{ x: 5 }}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 font-mono text-sm uppercase tracking-widest"
                >
                  {social.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

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
            <span className="font-display font-bold text-sm md:text-base tracking-tight">
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
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-lg font-medium">
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
      className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] hub-glow"
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

      <motion.svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x = 250 + Math.cos(angle) * 200;
          const y = 250 + Math.sin(angle) * 200;
          return (
            <g key={i}>
              <line x1="250" y1="250" x2={x} y2={y} stroke="#10D9A3" strokeWidth="0.5" opacity="0.2" />
              <circle cx={x} cy={y} r="4" fill="#10D9A3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
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
          <text x="100" y="105" textAnchor="middle" fill="#05080A" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">
            HUB
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden grid-bg">
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-emerald-glow/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-emerald-deep/30 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mono-tag mb-6 flex items-center gap-2"
          >
            <span className="w-6 h-px bg-emerald-glow" />
            {CONTENT.hero.tag}
          </motion.div>

          <h1 className="font-display font-bold text-[clamp(3rem,9vw,8rem)] leading-[0.9] kerning-wide glow-text">
            {CONTENT.hero.title.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {i === 1 ? (
                  <>
                    the <span className="italic font-light text-emerald-glow">noise</span>.
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-8 max-w-xl text-lg md:text-xl text-white/60 leading-relaxed"
          >
            {CONTENT.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <a
              href={CONTENT.hero.ctaHref}
              className="liquid-btn group inline-flex items-center gap-3 bg-emerald-glow text-slate-void font-mono text-sm uppercase tracking-widest px-8 py-4 rounded-full border border-emerald-glow font-semibold"
            >
              {CONTENT.hero.cta}
              <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
            </a>
            <a href="#work" className="magnetic-link font-mono text-xs uppercase tracking-widest text-white/70 px-4 py-2">
              View Selected Work ↓
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-5 flex justify-center items-center relative">
          <HubVisual />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-10 mono-tag flex items-center gap-2"
      >
        <div className="w-px h-8 bg-emerald-glow/50" />
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  );
}

function FadeInSection({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="mb-20 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-5">
            <div className="mono-tag mb-4">/ 001 — CAPABILITIES</div>
            <h2 className="font-display font-bold text-5xl md:text-7xl kerning-wide leading-[0.95]">
              Four disciplines.<br />
              <span className="italic font-light text-emerald-glow">One hub.</span>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-white/60 text-lg leading-relaxed">
            We operate as a connected system — strategy, design, and technology synthesized into outcomes you can measure.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {CONTENT.services.map((service, i) => (
            <FadeInSection key={service.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className={`glass rounded-3xl p-8 md:p-10 h-full group cursor-pointer ${
                  i % 3 === 0 ? 'md:translate-y-8' : ''
                }`}
                data-cursor="hover"
              >
                <div className="flex items-start justify-between mb-12">
                  <service.icon className="text-emerald-glow" size={32} strokeWidth={1.2} />
                  <span className="mono-tag">{service.id}</span>
                </div>
                <h3 className="font-display font-semibold text-3xl md:text-4xl mb-4 kerning-wide">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-emerald-glow font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Explore <ArrowUpRight size={14} />
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className="relative py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="mono-tag mb-4">/ 002 — SELECTED WORK</div>
            <h2 className="font-display font-bold text-5xl md:text-7xl kerning-wide leading-[0.95]">
              Recent <span className="italic font-light text-emerald-glow">signals</span>.
            </h2>
          </div>
          <a href="#contact" className="magnetic-link mono-tag">View All Case Studies →</a>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {CONTENT.portfolio.map((item, i) => (
            <FadeInSection key={item.id} delay={i * 0.08} className={i % 2 === 1 ? 'md:translate-y-16' : ''}>
              <motion.a
                href="#"
                whileHover="hover"
                className="block group cursor-pointer"
                data-cursor="hover"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-5 glass">
                  <motion.img
                    src={item.image}
                    alt={item.client}
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-void via-transparent to-transparent" />
                  <motion.div
                    variants={{ hover: { opacity: 1, y: 0 } }}
                    initial={{ opacity: 0, y: 20 }}
                    className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-emerald-glow flex items-center justify-center"
                  >
                    <ArrowUpRight className="text-slate-void" size={20} />
                  </motion.div>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="mono-tag mb-1">{item.category} · {item.year}</div>
                    <h3 className="font-display font-semibold text-2xl md:text-3xl kerning-wide">{item.client}</h3>
                  </div>
                  <span className="mono-tag text-white/40">{item.id}</span>
                </div>
              </motion.a>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section id="studio" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto">
        <FadeInSection className="mb-20">
          <div className="mono-tag mb-4">/ 003 — THE STUDIO</div>
          <h2 className="font-display font-bold text-5xl md:text-7xl kerning-wide leading-[0.95] max-w-4xl">
            A small team with a <span className="italic font-light text-emerald-glow">long memory</span>.
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-emerald-glow/10 rounded-2xl overflow-hidden glass">
          {CONTENT.stats.map((stat, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="bg-slate-void/80 p-8 md:p-10 h-full">
                <div className="font-display font-bold text-5xl md:text-6xl kerning-wide text-emerald-glow mb-3">
                  {stat.value}
                </div>
                <div className="mono-tag text-white/60">{stat.label}</div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeInSection>
          <div className="relative glass-strong rounded-[2rem] p-10 md:p-20 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-glow/20 blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-deep/40 blur-[100px]" />

            <div className="relative text-center">
              <div className="mono-tag mb-6">/ 004 — START A PROJECT</div>
              <h2 className="font-display font-bold text-5xl md:text-8xl kerning-wide leading-[0.95] mb-8">
                Let's build<br />
                <span className="italic font-light text-emerald-glow">something that lasts</span>.
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Briefs open for Q2 2026. Tell us what you're building — we'll reply within 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`mailto:${CONTENT.footer.email}`}
                  className="liquid-btn group inline-flex items-center gap-3 bg-emerald-glow text-slate-void font-mono text-sm uppercase tracking-widest px-10 py-5 rounded-full border border-emerald-glow font-semibold"
                >
                  Start the Conversation
                  <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
                </a>
                <a
                  href={`mailto:${CONTENT.footer.email}`}
                  className="magnetic-link font-mono text-sm text-white/70 tracking-wide"
                >
                  {CONTENT.footer.email}
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-glow/10 py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-glow animate-pulse" />
          <span className="font-display font-bold text-sm tracking-tight">
            {CONTENT.brand.name}<span className="text-emerald-glow">/</span>{CONTENT.brand.sub}
          </span>
        </div>
        <div className="flex gap-6 justify-center">
          {CONTENT.footer.socials.map((s) => (
            <a key={s} href="#" className="magnetic-link mono-tag">{s}</a>
          ))}
        </div>
        <div className="mono-tag text-white/40 md:text-right">
          © 2026 ALTER/HUB · ALL SYSTEMS NOMINAL
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-void text-white noise">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Portfolio />
        <div className="section-divider" />
        <Stats />
        <div className="section-divider" />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
