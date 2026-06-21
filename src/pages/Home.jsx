import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Globe, Zap, Code2, Sparkles, ChevronRight,
  Database, Cpu, ClipboardList, Lightbulb, Hammer, Rocket,
  CheckCheck, Star, Quote, TrendingUp, Shield, Users, Award,
  MessageSquare, Play, Check,
  Handshake,
  Truck
} from 'lucide-react'
import HeroVisual from '../components/HeroVisual'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

// ─── 1. HERO ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative pt-40 pb-40 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-50 to-indigo-50 blur-[120px] opacity-80" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-50 to-teal-50 blur-[100px] opacity-60" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-12 lg:gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-left">
            <motion.div variants={fadeUp} className="mb-6 inline-flex">
              <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold px-4 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-teal-500 animate-pulse" />
                Website Development & AI Automation
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display font-bold text-slate-900 leading-[1.08] mb-6 tracking-tight" style={{ fontSize: 'clamp(38px, 5.5vw, 68px)' }}>
              Automate. Elevate.<br />
              <span className="bg-gradient-to-r from-teal-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">Scale Your Business.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-light">
             We build premium websites, AI automations, and scalable software that help ambitious businesses grow faster.
            </motion.p>
          
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/websites" className="px-6 py-3 rounded-full font-semibold text-sm tracking-wide border-2 border-slate-200 text-slate-700 transition-all duration-300 hover:border-teal-300 bg-white hover:text-slate-900 flex items-center gap-2 shadow-sm">
                See Our Work<ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} className="w-full relative z-10">
            <div className="relative rounded-[28px] border border-slate-200/60 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <HeroVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── 2. TRUSTED BY / MARQUEE ─────────────────────────────────────────────────
const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'OpenAI', 'Supabase', 'n8n', 'Stripe', 'AWS', 'Tailwind', 'FastAPI', 'PostgreSQL']

function TrustedBy() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">Technologies & Tools We Master</p>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-6 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="shrink-0 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 shadow-sm whitespace-nowrap">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── 3. SERVICES SNAPSHOT ────────────────────────────────────────────────────
const serviceCards = [
  { emoji: '🌐', title: 'Web Development', desc: 'High-performance websites and web apps built with Next.js, React. SEO-ready and blazing fast.', color: 'from-teal-400 to-emerald-500', light: 'bg-teal-50' },
  { emoji: '🤖', title: 'AI Automation', desc: 'Intelligent workflows that eliminate repetitive tasks and connect your tools seamlessly.', color: 'from-violet-400 to-purple-500', light: 'bg-violet-50' },
  { emoji: '📱', title: 'SaaS Products', desc: 'Ready-to-launch SaaS tools with auth, payments, and scalable cloud infrastructure.', color: 'from-blue-400 to-indigo-500', light: 'bg-blue-50' },
  { emoji: '📊', title: 'Analytics & Dashboards', desc: 'Real-time data dashboards turning business metrics into clear, actionable insights.', color: 'from-amber-400 to-orange-500', light: 'bg-amber-50' },
  { emoji: '🎨', title: 'Brand & Design', desc: 'Logo, identity, and creative strategy that makes your business unforgettable.', color: 'from-pink-400 to-rose-500', light: 'bg-pink-50' },
  { emoji: '🚀', title: 'Growth Strategy', desc: 'SEO, content, and digital growth campaigns designed to attract and convert ideal customers.', color: 'from-emerald-400 to-teal-500', light: 'bg-emerald-50' },
]

function ServicesSnapshot() {
  return (
    <section className="py-28 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-50/50 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">What We Offer</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 leading-tight">
            Services Built to <span className="gradient-text">Scale Your Business</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base leading-relaxed">
            From design to deployment — everything you need to dominate your market online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group bg-white border border-slate-100 hover:border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.light} flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                {s.emoji}
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <Link to="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors group/link">
                Learn More <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-teal-300 hover:text-teal-700 transition-all duration-300">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── 4. HOW IT WORKS ─────────────────────────────────────────────────────────
const steps = [
  { number: '01', icon: ClipboardList, title: 'Discovery & Scoping', desc: 'We begin with a focused intake session — mapping your goals, existing stack, user flows, and success metrics to define a clear project scope.', accent: 'teal', detail: '1–2 days' },
  { number: '02', icon: Lightbulb, title: 'Strategy & Architecture', desc: 'Our engineers design the technical blueprint — choosing the right stack, API integrations, and scalability patterns before a line of code is written.', accent: 'indigo', detail: '2–3 days' },
  { number: '03', icon: Hammer, title: 'Build & Iterate', desc: 'We develop in sprints with full transparency. You get live previews, weekly demos, and direct GitHub access throughout the build cycle.', accent: 'violet', detail: 'Ongoing sprints' },
  { number: '04', icon: CheckCheck, title: 'QA & Optimisation', desc: 'Every deliverable goes through rigorous performance profiling, cross-device QA, accessibility checks, and load testing before handoff.', accent: 'amber', detail: '2–4 days' },
  { number: '05', icon: Rocket, title: 'Launch & Support', desc: 'We deploy to your preferred infrastructure and remain on call for the first 30 days post-launch with zero extra cost.', accent: 'teal', detail: 'Ongoing' },
]

const accentMap = {
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   icon: 'text-teal-600',   num: 'text-teal-400/20', badge: 'bg-teal-50 text-teal-700 border-teal-200' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'text-indigo-600', num: 'text-indigo-400/20', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', icon: 'text-violet-600', num: 'text-violet-400/20', badge: 'bg-violet-50 text-violet-700 border-violet-200' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  icon: 'text-amber-600',  num: 'text-amber-400/20',  badge: 'bg-amber-50 text-amber-700 border-amber-200' },
}

function StepCard({ step, Icon, a }) {
  return (
    <div className="group relative bg-white border border-slate-100 hover:border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 max-w-md w-full">
      <span className={`absolute top-5 right-6 font-display font-black text-6xl leading-none select-none pointer-events-none ${a.num}`}>{step.number}</span>
      <div className="relative z-10">
        <div className={`w-11 h-11 rounded-2xl ${a.bg} border ${a.border} flex items-center justify-center mb-5 shadow-sm`}>
          <Icon className={`w-5 h-5 ${a.icon}`} />
        </div>
        <h3 className="font-display font-bold text-lg text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">{step.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{step.desc}</p>
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${a.badge}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />{step.detail}
        </span>
      </div>
    </div>
  )
}

function HowItWorks() {
  return (
    <section className="py-28 bg-slate-50/60 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-teal-400/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-400/5 blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">Our Process</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900">How We Bring Your <br/><span className="gradient-text">Vision to Life</span></h2>
          <p className="text-slate-500 mt-5 text-base leading-relaxed">A transparent five-stage process built for speed, quality, and zero surprises.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-teal-200 via-indigo-200 to-teal-200 -translate-x-1/2 opacity-40" />
          <div className="flex flex-nowrap gap-8 justify-start py-8 overflow-x-auto">
  {steps.map((step, idx) => {
    const Icon = step.icon;
    const a = accentMap[step.accent] || accentMap.teal;
    return (
      <div key={step.number} className="flex flex-col items-center text-center w-64 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
        <div className={`w-12 h-12 rounded-full ${a.bg} border-2 ${a.border} flex items-center justify-center mb-4`}> 
          <Icon className={`w-5 h-5 ${a.icon}`} />
        </div>
        <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
        <p className="text-slate-500 text-sm mb-1">{step.desc}</p>
        <p className="text-teal-600 font-medium">{step.detail}</p>
      </div>
    );
  })}
</div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mt-16">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── 5. WHY CHOOSE AUTOFY ────────────────────────────────────────────────────
const outcomes = [
  { icon: Zap, title: 'Premium Engineering', desc: 'Clean architecture and scalable systems built for long-term reliability.', gradient: 'from-teal-500/8 to-teal-500/0', hover: 'group-hover:border-teal-400/40' },
  { icon: Truck, title: 'Fast Delivery', desc: '	Rapid development cycles without compromising on quality or testing.', gradient: 'from-indigo-500/8 to-indigo-500/0', hover: 'group-hover:border-indigo-400/40' },
  { icon: Handshake, title: 'Long-term Partnership', desc: 'Continuous support, maintenance, and strategic guidance beyond launch.', gradient: 'from-purple-500/8 to-purple-500/0', hover: 'group-hover:border-purple-400/40' },
 
]

function WhyChooseAutofy() {
  return (
    <section className="py-28 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">Why Autofy</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900">Engineered for <span className="gradient-text">Real Growth</span></h2>
          <p className="text-slate-500 mt-4 text-base max-w-xl mx-auto">We bypass cookie-cutter formats and deliver premium, hyper-optimized infrastructure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {outcomes.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative rounded-3xl p-8 bg-slate-50/40 border border-slate-100 ${item.hover} transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── 6. STATS / COMPANY HIGHLIGHTS ──────────────────────────────────────────
const highlights = [
  { value: '10+', label: 'Projects Shipped', desc: 'Custom apps, SaaS portals, and automations', icon: Award },
  { value: '10+', label: 'Happy Clients', desc: 'Across fintech, e-commerce, legal tech & SaaS', icon: Users },
  { value: '4.9★', label: 'Average Rating', desc: 'Every build aligned to concrete business metrics', icon: Star },
  { value: '100%', label: 'Quality', desc: 'Consistently delivering exceptional results', icon: TrendingUp },
]

function CompanyHighlights() {
  return (
    <section className="py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-xs tracking-wider uppercase mb-3 block">By The Numbers</span>
          <h2 className="font-display font-bold text-4xl text-white leading-tight">Our Track Record <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">Speaks</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/8 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <div className="font-display font-extrabold text-4xl text-teal-400 mb-2">{item.value}</div>
                <div className="font-semibold text-white text-sm mb-1">{item.label}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{item.desc}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── 7. TESTIMONIALS ─────────────────────────────────────────────────────────



// ─── 8. ABOUT PREVIEW ────────────────────────────────────────────────────────
function AboutPreview() {
  return (
    <section className="py-28 bg-slate-50/60 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase block">Company Gateway</span>
            <h2 className="font-display font-bold text-4xl text-slate-900 leading-tight">We Build to Transform <span className="gradient-text">Ideas Into Impact.</span></h2>
            <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full" />
            <blockquote className="text-slate-700 font-light italic leading-relaxed text-sm border-l-2 border-teal-300 pl-4">
              "Behind every digital interface we craft, there lies a relentless commitment to absolute engineering execution and high-converting commercial aesthetics."
            </blockquote>
            <ul className="space-y-3">
              {['Founders who code, not just consultants', '100% transparent delivery process', 'Dedicated post-launch support included'].map(p => (
                <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-teal-500 shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm space-y-5">
            <h3 className="font-semibold text-slate-800 text-lg">Who We Are</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Autofy.ai is an elite, full-stack design and automation studio. We specialize in engineering ultra-fast client interfaces, integrating real-time APIs, and building automated bot pathways that save companies thousands of engineering hours.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded by developers, we operate without sales fluff — direct design transparency, automated progress timelines, and robust source repositories.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[{ v: '10+', l: 'Projects' }, { v: '10+', l: 'Clients' }, { v: '100%', l: 'Quality' }, { v: '100%', l: 'Satisfaction' }].map(s => (
                <div key={s.l} className="text-center bg-slate-50 rounded-xl p-3">
                  <div className="font-display font-bold text-xl text-teal-600">{s.v}</div>
                  <div className="text-xs text-slate-500">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group">
              Meet Our Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── 9. FAQ ──────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'How long does a typical project take?', a: 'Most projects range from 2–6 weeks depending on scope. A landing page can be live in 5–7 days; a full SaaS platform typically takes 4–8 weeks including QA and launch.' },
  { q: 'Do you work with international clients?', a: 'Absolutely. We work remotely with clients across India, the US, UK, UAE, and beyond. All communication is async-friendly with regular video check-ins.' },
  { q: 'What is your pricing model?', a: 'We offer fixed-scope project pricing and monthly retainer options. After a free discovery call, you get a detailed quote with no hidden fees.' },
  { q: 'Do you provide post-launch support?', a: 'Yes. Every project includes 30 days of free post-launch support. After that, we offer monthly maintenance retainers for updates, security patches, and new features.' },
  { q: 'Can you integrate AI into my existing product?', a: 'Yes. We specialize in retrofitting AI — whether adding a GPT-powered feature, building an n8n automation layer, or creating a custom LLM pipeline into your existing stack.' },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">FAQ</span>
          <h2 className="font-display font-bold text-4xl text-slate-900">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/40 hover:border-slate-200 transition-colors"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-semibold text-slate-900 text-sm">{faq.q}</span>
                <span className={`shrink-0 w-7 h-7 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 transition-transform duration-300 ${open === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === idx ? 'auto' : 0, opacity: open === idx ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 10. CONTACT CTA ─────────────────────────────────────────────────────────
function ContactCTA() {
  return (
    <section className="py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-teal-600/20 blur-[80px] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-teal-400 font-semibold text-xs tracking-wider uppercase mb-4 block">Start Today</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Ready to Accelerate <br /><span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">Your Business Growth?</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Let's evaluate your codebase, map out automation pathways, or start designing your new platform. Book a free discovery call — no commitment, no sales pitch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919392472134" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/20 hover:scale-105">
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all duration-300 shadow-lg hover:scale-105">
              Book a Free Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="bg-white">
      <Hero />
      <TrustedBy />
      <ServicesSnapshot />
      <HowItWorks />
      <WhyChooseAutofy />
      <CompanyHighlights />
     
      <AboutPreview />
      <FAQ />
      <ContactCTA />
    </motion.div>
  )
}




