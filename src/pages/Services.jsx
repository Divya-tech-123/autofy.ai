import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Check, Zap, Globe, Cpu, Database, Palette, TrendingUp } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const services = [
  {
    emoji: '🌐', icon: Globe,
    title: 'Web Development',
    desc: 'High-performance websites and web apps built with Next.js, React, and modern stacks. SEO-ready and lightning fast.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    gradient: 'from-teal-400 to-emerald-500',
    light: 'bg-teal-50', border: 'border-teal-200',
    features: ['Custom UI/UX Design', 'SEO Optimisation', 'Mobile Responsive', 'Core Web Vitals 95+'],
  },
  {
    emoji: '🤖', icon: Cpu,
    title: 'AI Automation',
    desc: 'Intelligent workflows that eliminate repetitive tasks, connect your tools, and let your team focus on what matters.',
    tags: ['n8n', 'Make', 'GPT-4', 'Zapier'],
    gradient: 'from-violet-400 to-purple-500',
    light: 'bg-violet-50', border: 'border-violet-200',
    features: ['Workflow Automation', 'LLM Integration', 'API Orchestration', 'Bot Development'],
  },
  {
    emoji: '📱', icon: Database,
    title: 'SaaS Products',
    desc: 'Ready-to-launch SaaS tools with authentication, payments, and scalable cloud infrastructure built in.',
    tags: ['Supabase', 'Stripe', 'AWS', 'Auth'],
    gradient: 'from-blue-400 to-indigo-500',
    light: 'bg-blue-50', border: 'border-blue-200',
    features: ['Auth & Billing', 'Multi-Tenancy', 'Admin Dashboard', 'Cloud Deployment'],
  },
  {
    emoji: '📊', icon: TrendingUp,
    title: 'Analytics & Dashboards',
    desc: 'Real-time data dashboards that turn your business metrics into clear, actionable insights.',
    tags: ['Charts', 'APIs', 'Live Data', 'Postgres'],
    gradient: 'from-amber-400 to-orange-500',
    light: 'bg-amber-50', border: 'border-amber-200',
    features: ['Real-time Updates', 'Custom KPIs', 'Data Pipelines', 'Export & Reports'],
  },
  {
    emoji: '🎨', icon: Palette,
    title: 'Brand & Design',
    desc: 'Logo design, brand identity, and creative strategy that makes your business unforgettable.',
    tags: ['Branding', 'UI/UX', 'Motion', 'Figma'],
    gradient: 'from-pink-400 to-rose-500',
    light: 'bg-pink-50', border: 'border-pink-200',
    features: ['Logo & Identity', 'Design System', 'UI/UX Prototypes', 'Brand Guidelines'],
  },
  {
    emoji: '🚀', icon: Zap,
    title: 'Growth Strategy',
    desc: 'Content marketing, SEO, and digital growth campaigns designed to attract and convert your ideal customers.',
    tags: ['SEO', 'Content', 'Funnels', 'Analytics'],
    gradient: 'from-emerald-400 to-teal-500',
    light: 'bg-emerald-50', border: 'border-emerald-200',
    features: ['Technical SEO', 'Content Strategy', 'Funnel Optimisation', 'Conversion CRO'],
  },
]

const process = [
  { step: '01', label: 'Discovery Call', desc: 'We understand your goals and scope in 30 min.' },
  { step: '02', label: 'Proposal & Pricing', desc: 'Clear, itemised quote with no hidden costs.' },
  { step: '03', label: 'Build & Deliver', desc: 'Iterative builds with weekly progress demos.' },
  { step: '04', label: 'Launch & Support', desc: '30-day post-launch support included free.' },
]

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-50/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-50/60 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-6">
            <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-4 block">What We Offer</span>
            <h1 className="font-display font-bold leading-tight mb-5" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Services Built to <span className="gradient-text">Scale Your Business</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              From design to development and beyond — everything you need to dominate your market online.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap justify-center gap-3 mt-8">
            {['Web Dev', 'AI Automation', 'SaaS', 'Analytics', 'Branding', 'Growth'].map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600">{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map(({ emoji, title, desc, tags, gradient, light, border, features }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-white rounded-[24px] overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${light} flex items-center justify-center mb-5 text-3xl group-hover:scale-110 transition-transform duration-300`}>{emoji}</div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-teal-500 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tags.map(tag => (
                      <span key={tag} className={`px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-50 text-slate-600 border border-slate-100`}>{tag}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group/link">
                    Get Started <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">How It Works</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900">Simple, Transparent <span className="gradient-text">Process</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, idx) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="font-display font-black text-3xl text-teal-500/30 mb-3">{p.step}</div>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">{p.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">Not sure which service is right for you?</h2>
            <p className="text-slate-500 mb-8 text-base">Book a free 30-minute discovery call. We'll assess your needs and recommend the best path forward.</p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
