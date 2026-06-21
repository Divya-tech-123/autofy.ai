import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Award, Users, Globe, Zap, Target, Eye,
  Lightbulb, Shield, TrendingUp, Heart, Sparkles, Handshake,
  Star, Check, Linkedin, Instagram, Github
} from 'lucide-react'
import { teamMembers } from '../data/teamMembers'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

const stats = [
  { icon: Globe, value: '10+', label: 'Projects Delivered', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: Users, value: '10+', label: 'Happy Clients', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Award, value: '4.9★', label: 'Average Rating', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: Zap, value: '100%', label: 'Quality ', color: 'text-pink-600', bg: 'bg-pink-50' },
]

const values = [
  { icon: Heart, title: 'Integrity', desc: 'We build trust through honesty, transparency, and accountability in every interaction.', color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-200' },
  { icon: Sparkles, title: 'Innovation', desc: 'We embrace creativity and continuously explore new technologies and possibilities.', color: 'text-violet-500', bg: 'bg-violet-50', border: 'border-violet-200' },
  { icon: Handshake, title: 'Collaboration', desc: 'We believe great results come from strong teamwork and client partnerships.', color: 'text-sky-500', bg: 'bg-sky-50', border: 'border-sky-200' },
  { icon: Star, title: 'Excellence', desc: 'We strive for the highest standards in every single project we deliver.', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200' },
]

const advantages = [
  { icon: Lightbulb, title: 'Innovative Solutions', desc: 'Modern technologies and creative strategies to solve complex business challenges.', gradient: 'from-amber-400 to-orange-500' },
  { icon: Shield, title: 'Reliable Partnership', desc: 'Transparent communication, timely delivery, and long-term support on every project.', gradient: 'from-emerald-400 to-teal-500' },
  { icon: TrendingUp, title: 'Results Driven', desc: 'Focused on measurable outcomes that help businesses grow and succeed.', gradient: 'from-pink-400 to-rose-500' },
  { icon: Users, title: 'Expert Team', desc: 'Skilled founders with deep expertise in design, development, and digital transformation.', gradient: 'from-blue-400 to-indigo-500' },
]

function AboutHero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-50/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-50/60 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-4 block">About Autofy.ai</span>
          <h1 className="font-display font-bold text-slate-900 leading-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Behind every successful project is a team passionate about creating{' '}
            <span className="gradient-text">exceptional experiences.</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Designers, developers, and innovators working together to transform ideas into impactful digital solutions.
          </p>
          <motion.div initial={{ width: 0 }} animate={{ width: '80px' }} transition={{ duration: 1, delay: 0.4 }} className="h-1 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, idx) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <div className={`font-display font-extrabold text-2xl ${s.color} mb-1`}>{s.value}</div>
                <div className="text-slate-500 text-xs">{s.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section className="py-12 bg-slate-12 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-50/60 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-50/60 blur-3xl -z-10" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">Purpose & Direction</span>
          <h2 className="font-display font-bold text-4xl text-slate-900">Our Mission & <span className="gradient-text">Vision</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-teal-200/40">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-5">
              To democratize access to world-class digital engineering — giving businesses of every size the tools, technology, and automation they need to compete at the highest level.
            </p>
            <ul className="space-y-2">
              {['Build with business metrics in mind', 'Deliver premium quality at fair pricing', 'Create lasting client partnerships'].map(p => (
                <li key={p} className="flex items-center gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-teal-500 shrink-0" />{p}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200/40">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-5">
              To become a trusted global technology partner known for innovation, excellence, and transforming ambitious ideas into impactful digital experiences that drive real-world outcomes.
            </p>
            <ul className="space-y-2">
              {['Global reach, local understanding', 'AI-first engineering by default', 'Trusted by 100+ businesses by 2026'].map(p => (
                <li key={p} className="flex items-center gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0" />{p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">Our Advantages</span>
          <h2 className="font-display font-bold text-4xl text-slate-900">Why <span className="gradient-text">Choose Us</span></h2>
          <p className="text-slate-500 mt-3 text-base max-w-xl mx-auto">Four pillars that set us apart and make us the right choice for your next project.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CoreValues() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">What We Stand For</span>
          <h2 className="font-display font-bold text-4xl text-slate-900">Our Core <span className="gradient-text">Values</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, idx) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group bg-white border ${v.border} rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-all`}
              >
                <div className={`w-14 h-14 rounded-2xl ${v.bg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${v.color}`} />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const socialIcons = { linkedin: Linkedin, instagram: Instagram, github: Github }
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3 block">Our Team</span>
          <h2 className="font-display font-bold text-4xl text-slate-900">Meet the <span className="gradient-text">Founders</span></h2>
          <p className="text-slate-500 mt-3 text-base max-w-xl mx-auto">The passionate team behind Autofy.ai — building the future of digital business, one automation at a time.</p>
        </div>
        <div className="space-y-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 bg-white border border-slate-100 rounded-3xl p-12 shadow-sm hover:shadow-md transition-all`}
            >
              {/* Avatar */}
              <div className="shrink-0 flex flex-col items-center gap-4">
                <div className="w-72 h-72 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" onError={e => { e.target.style.display='none' }} />
                </div>
                <div className="text-xs font-bold text-teal-600 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">{member.label}</div>
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 text-base font-medium mb-3">{member.role}</p>
                <p className="text-slate-500 text-base leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map(s => (
                    <span key={s} className="px-2.5 py-1 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-full text-slate-600">{s}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {Object.entries(member.socials || {}).map(([key, url]) => {
                    const Icon = socialIcons[key]
                    return Icon && url ? (
                      <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-600 flex items-center justify-center text-slate-500 transition-all">
                        <Icon className="w-4 h-4" />
                      </a>
                    ) : null
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutCTA() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-teal-600/20 blur-[80px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-display font-bold text-4xl text-white mb-4">Want to Work With Us?</h2>
          <p className="text-slate-400 text-base mb-8">We're selective about the projects we take on — because we're committed to doing them exceptionally well.</p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <AboutHero />
      <MissionVision />
      <WhyChooseUs />
      <CoreValues />
      <TeamSection />
      <AboutCTA />
    </motion.div>
  )
}
