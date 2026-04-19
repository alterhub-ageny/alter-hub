import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Feather, Compass, Layers, BookOpen } from 'lucide-react';

const CONTENT = {
  brand: { name: 'ALTER', sub: 'HUB', tagline: 'studio of narrative' },
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Studio', href: '#studio' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    tag: 'EST · MMXXV — STUDIO OF NARRATIVE',
    title: ['Brands', 'that hold', 'their weight.'],
    italicWord: 'weight',
    subtitle: 'Alter Hub builds identities with architectural stability and editorial grace — the kind that hold their weight in any room.',
    cta: 'Begin a Conversation',
    ctaHref: '#contact',
  },
  services: [
    { id: '01', icon: Feather, title: 'Identity & Narrative', desc: 'Wordmarks, voice, and editorial systems shaped with the patience of a printmaker.' },
    { id: '02', icon: Compass, title: 'Brand Strategy', desc: 'Positioning, architecture, and long-arc storytelling for companies built to last decades.' },
    { id: '03', icon: Layers, title: 'Digital Craft', desc: 'Websites and products with the composure of a monograph and the clarity of a well-set page.' },
    { id: '04', icon: BookOpen, title: 'Editorial Systems', desc: 'Long-form content, reports, and publications — the quiet architecture of reputation.' },
  ],
  portfolio: [
    { id: '01', client: 'Meridian Labs', category: 'Identity · Web', year: '2026', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80' },
    { id: '02', client: 'Oro Finance', category: 'Campaign', year: '2026', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80' },
    { id: '03', client: 'Halo Studios', category: 'Brand · Motion', year: '2025', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80' },
    { id: '04', client: 'Vertex Ventures', category: 'Identity', year: '2025', image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=1200&q=80' },
  ],
  stats: [
    { value: '120+', label: 'Brands Launched' },
    { value: '14', label: 'Industry Awards' },
    { value: '9', label: 'Countries' },
    { value: 'MMXXV', label: 'Established' },
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

function SunMark({ size = 120, animated = true }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className="overflow-visible">
      <defs>
        <linearGradient id="sunGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#F4D98A" />
          <stop offset="100%" stopColor="#D4A855" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F4D98A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4A855" stopOpacity="0" />
        </radialGradient>
      </defs>
      {animated && (
        <>
          <circle cx="100" cy="100" r="90" fill="none" stroke="#D4A855" strokeWidth="0.4" strokeDasharray="1 6" opacity="0.35">
            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="120s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="100" r="70" fill="none" stroke="#D4A855" strokeWidth="0.3" strokeDasharray="1 4" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="90s" repeatCount="indefinite" />
          </circle>
        </>
      )}
      <circle cx="100" cy="100" r="60" fill="url(#sunGlow)" />
      <path d="M 55 105 A 45 45 0 0 1 145 105 Z" fill="url(#sunGrad)" />
      <line x1="5" y1="105" x2="195" y2="105" stroke="#D4A855" strokeWidth="1" />
      <line x1="20" y1="99" x2="20" y2="111" stroke="#D4A855" strokeWidth="1" />
      <line x1="180" y1="99" x2="180" y2="111" stroke="#D4A855" strokeWidth="1" />
      <circle cx="100" cy="105" r="4" fill="#08101C" stroke="#F4D98A" strokeWidth="1" />
      {animated && (
        <circle cx="100" cy="105" r="4" fill="none" stroke="#F4D98A" strokeWidth="0.8">
          <animate attributeName="r" values="4;10;4" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  );
}

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
    <motion.div className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block mix-blend-difference" style={{ x, y }}>
      <motion.div
        animate={{ scale: isHover ? 2.8 : 1, opacity: isHover ? 0.7 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-4 h-4 rounded-full bg-ember"
      />
    </motion.div>
  );
}

function Logo({ small = false }) {
  return (
    <a href="#" className="flex items-center gap-3" data-cursor="hover">
      <SunMark size={small ? 28 : 36} animated={false} />
      <div className="flex flex-col leading-none">
        <span className="serif-display text-bone tracking-[0.3em] text-sm md:text-base">
          {CONTENT.brand.name} {CONTENT.brand.sub}
        </span>
        {!small && (
          <span className="editorial-italic text-[0.65rem] mt-1 opacity-70">{CONTENT.brand.tagline}</span>
        )}
      </div>
    </a>
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
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'w-[94%] md:w-[90%]' : 'w-[96%] md:w-[96%]'
        }`}
      >
        <div className="glass-strong rounded-full px-5 md:px-7 py-3 flex items-center justify-between">
          <Logo small />

          <div className="hidden md:flex items-center gap-8">
            {CONTENT.nav.map((link) => (
              <a key={link.label} href={link.href} className="magnetic-link text-sm font-light text-bone/80 tracking-wide">
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-[0.65rem] font-mono uppercase tracking-[0.25em] border border-ember/40 rounded-full px-4 py-2 liquid-btn text-ember"
          >
            Inquire <ArrowUpRight size={12} />
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden text-bone">
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
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[94%] glass-strong rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {CONTENT.nav.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="serif-display text-xl text-bone tracking-wide">
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 text-ember font-mono text-xs uppercase tracking-[0.25em] border border-ember/40 rounded-full px-4 py-2.5 text-center">
                Inquire →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HeroSunVisual() {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), { damping: 20, stiffness: 80 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), { damping: 20, stiffness: 80 });

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
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="relative w-[340px] h-[340px] md:w-[560px] md:h-[560px] flex items-center justify-center sun-glow"
    >
      <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="heroSun" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#F4D98A" />
            <stop offset="100%" stopColor="#D4A855" />
          </linearGradient>
          <radialGradient id="heroHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4D98A" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#D4A855" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D4A855" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '300px 300px' }}
        >
          <circle cx="300" cy="300" r="275" fill="none" stroke="#D4A855" strokeWidth="0.5" strokeDasharray="1 8" opacity="0.3" />
          <circle cx="300" cy="300" r="225" fill="none" stroke="#D4A855" strokeWidth="0.4" strokeDasharray="2 10" opacity="0.25" />
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '300px 300px' }}
        >
          <circle cx="300" cy="300" r="195" fill="none" stroke="#D4A855" strokeWidth="0.5" opacity="0.25" />
          <circle cx="300" cy="300" r="165" fill="none" stroke="#D4A855" strokeWidth="0.3" strokeDasharray="1 5" opacity="0.4" />
          {[...Array(24)].map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const cx = 300 + Math.cos(angle) * 225;
            const cy = 300 + Math.sin(angle) * 225;
            return <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 1.5 : 0.8} fill="#F4D98A" opacity={i % 3 === 0 ? 0.9 : 0.4} />;
          })}
        </motion.g>

        <circle cx="300" cy="300" r="155" fill="url(#heroHalo)" />

        <motion.g
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '300px 300px' }}
        >
          <path d="M 180 305 A 120 120 0 0 1 420 305 Z" fill="url(#heroSun)" />
        </motion.g>

        <line x1="20" y1="305" x2="580" y2="305" stroke="#D4A855" strokeWidth="1.2" />
        <line x1="60" y1="295" x2="60" y2="315" stroke="#D4A855" strokeWidth="1.2" />
        <line x1="540" y1="295" x2="540" y2="315" stroke="#D4A855" strokeWidth="1.2" />

        <circle cx="300" cy="305" r="6" fill="#08101C" stroke="#F4D98A" strokeWidth="1.5" />
        <circle cx="300" cy="305" r="2" fill="#F4D98A" />
        <circle cx="300" cy="305" r="6" fill="none" stroke="#F4D98A" strokeWidth="1">
          <animate attributeName="r" values="6;18;6" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0;0.8" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden grid-bg">
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-ember/5 blur-[140px]" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-ink/60 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mono-tag mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-ember" />
            {CONTENT.hero.tag}
          </motion.div>

          <h1 className="serif-display font-light text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] text-bone glow-text">
            {CONTENT.hero.title.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {line.includes(CONTENT.hero.italicWord) ? (
                  <>
                    {line.split(CONTENT.hero.italicWord)[0]}
                    <span className="editorial-italic" style={{ fontSize: '0.95em' }}>{CONTENT.hero.italicWord}</span>
                    {line.split(CONTENT.hero.italicWord)[1]}
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
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-10 max-w-xl text-lg md:text-xl text-bone/60 leading-relaxed font-light"
          >
            {CONTENT.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row gap-5 items-start sm:items-center"
          >
            <a
              href={CONTENT.hero.ctaHref}
              className="liquid-btn group inline-flex items-center gap-3 bg-ember text-midnight font-mono text-xs uppercase tracking-[0.3em] px-9 py-5 rounded-full border border-ember font-semibold"
            >
              {CONTENT.hero.cta}
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </a>
            <a href="#work" className="magnetic-link font-mono text-[0.7rem] uppercase tracking-[0.25em] text-bone/60 px-4 py-2">
              View Selected Work ↓
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-5 flex justify-center items-center relative">
          <HeroSunVisual />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-10 mono-tag flex items-center gap-2"
      >
        <div className="w-px h-8 bg-ember/50" />
        SCROLL — TO EXPLORE
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
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
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
          <div className="md:col-span-6">
            <div className="mono-tag mb-5">— I · Capabilities</div>
            <h2 className="serif-display font-light text-5xl md:text-7xl leading-[1] text-bone">
              Four disciplines.<br />
              <span className="editorial-italic">One studio.</span>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-bone/60 text-lg leading-relaxed font-light">
            We operate as a single atelier — strategy, identity, and digital craft composed into work that ages well.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {CONTENT.services.map((service, i) => (
            <FadeInSection key={service.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5 }}
                className={`glass rounded-2xl p-8 md:p-12 h-full group cursor-pointer ${
                  i % 3 === 0 ? 'md:translate-y-8' : ''
                }`}
                data-cursor="hover"
              >
                <div className="flex items-start justify-between mb-16">
                  <service.icon className="text-ember" size={28} strokeWidth={1} />
                  <span className="mono-tag">{service.id}</span>
                </div>
                <h3 className="serif-display font-light text-3xl md:text-4xl mb-4 text-bone leading-tight">
                  {service.title}
                </h3>
                <p className="text-bone/50 leading-relaxed font-light">{service.desc}</p>
                <div className="mt-10 flex items-center gap-2 text-ember font-mono text-[0.65rem] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Explore <ArrowUpRight size={12} />
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
            <div className="mono-tag mb-5">— II · Selected Work</div>
            <h2 className="serif-display font-light text-5xl md:text-7xl leading-[1] text-bone">
              Recent <span className="editorial-italic">chapters</span>.
            </h2>
          </div>
          <a href="#contact" className="magnetic-link mono-tag">View The Archive →</a>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {CONTENT.portfolio.map((item, i) => (
            <FadeInSection key={item.id} delay={i * 0.08} className={i % 2 === 1 ? 'md:translate-y-20' : ''}>
              <motion.a href="#" whileHover="hover" className="block group cursor-pointer" data-cursor="hover">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6 glass">
                  <motion.img
                    src={item.image}
                    alt={item.client}
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
                  <motion.div
                    variants={{ hover: { opacity: 1, y: 0 } }}
                    initial={{ opacity: 0, y: 20 }}
                    className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-ember flex items-center justify-center"
                  >
                    <ArrowUpRight className="text-midnight" size={20} />
                  </motion.div>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="mono-tag mb-2">{item.category} · {item.year}</div>
                    <h3 className="serif-display font-light text-3xl md:text-4xl text-bone leading-none">{item.client}</h3>
                  </div>
                  <span className="mono-tag text-bone/40">{item.id}</span>
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
        <FadeInSection className="mb-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="mono-tag mb-5">— III · The Studio</div>
            <h2 className="serif-display font-light text-5xl md:text-7xl leading-[1] text-bone">
              A small atelier with a<br />
              <span className="editorial-italic">long memory</span>.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex justify-center md:justify-end">
            <SunMark size={100} />
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ember/10 rounded-2xl overflow-hidden glass">
          {CONTENT.stats.map((stat, i) => (
            <FadeInSection key={i} delay={i * 0.08}>
              <div className="bg-midnight/80 p-8 md:p-10 h-full">
                <div className="serif-display font-light text-5xl md:text-6xl text-ember mb-3 leading-none">
                  {stat.value}
                </div>
                <div className="mono-tag text-bone/60">{stat.label}</div>
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
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-ember/15 blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-ink/60 blur-[100px]" />

            <div className="relative text-center">
              <div className="flex justify-center mb-8">
                <SunMark size={70} />
              </div>
              <div className="mono-tag mb-6">— IV · Begin</div>
              <h2 className="serif-display font-light text-5xl md:text-7xl leading-[1] text-bone mb-8">
                Let us build something<br />
                <span className="editorial-italic">that lasts</span>.
              </h2>
              <p className="text-bone/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Briefs open for Q2 · 2026. Tell us what you are building — we reply within 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a
                  href={`mailto:${CONTENT.footer.email}`}
                  className="liquid-btn group inline-flex items-center gap-3 bg-ember text-midnight font-mono text-xs uppercase tracking-[0.3em] px-10 py-5 rounded-full border border-ember font-semibold"
                >
                  Begin a Conversation
                  <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                </a>
                <a href={`mailto:${CONTENT.footer.email}`} className="magnetic-link font-mono text-sm text-bone/70 tracking-wide">
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
    <footer className="border-t border-ember/10 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <Logo />
          </div>
          <div>
            <p className="mono-tag mb-4">Inquiries</p>
            <a href={`mailto:${CONTENT.footer.email}`} className="serif-display text-2xl text-bone hover:text-ember transition-colors">
              {CONTENT.footer.email}
            </a>
          </div>
          <div>
            <p className="mono-tag mb-4">Connect</p>
            <ul className="flex flex-col gap-2">
              {CONTENT.footer.socials.map((s) => (
                <motion.li key={s.name} whileHover={{ x: 4 }}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="magnetic-link text-bone/70 font-mono text-xs uppercase tracking-[0.2em]">
                    {s.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-ember/10 flex flex-col md:flex-row justify-between gap-4">
          <div className="mono-tag text-bone/40">© MMXXVI · ALTER HUB · ALL RIGHTS RESERVED</div>
          <div className="editorial-italic text-bone/40 text-sm">studio of narrative · est · MMXXV</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-midnight text-bone noise">
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
