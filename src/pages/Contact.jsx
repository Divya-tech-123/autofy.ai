import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Phone, Instagram, Linkedin, MapPin, MessageCircle, Github, Mail, Clock, ArrowRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault();

    const required = ['name', 'email', 'phone', 'service', 'message'];

    for (const field of required) {
      if (!form[field]) {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }

    const text = `🚀 New Project Inquiry - Autofy

👤 Name: ${form.name}

📧 Email: ${form.email}

📱 Phone: ${form.phone}

🛠 Service: ${form.service}

💰 Budget: ${form.budget || "Not specified"}

📝 Message:
${form.message}`;

    const whatsappUrl = `https://wa.me/919392472134?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const channels = [
    { icon: MessageCircle, title: 'WhatsApp', subtitle: 'Fastest Response', details: '+91 93924 72134', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', link: 'https://wa.me/919392472134' },
    { icon: Mail, title: 'Email', subtitle: 'For detailed briefs', details: 'autofy07@gmail.com', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', link: 'mailto:autofy07@gmail.com' },
    { icon: Instagram, title: 'Instagram', subtitle: 'Follow our work', details: '@rathodspeaks1', color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-200', link: 'https://www.instagram.com/rathodspeaks1/' },
    { icon: Linkedin, title: 'LinkedIn', subtitle: 'Professional network', details: 'Rathod Rahul', color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200', link: 'https://www.linkedin.com/in/rathod-rahul-63ab542b0/' },
    { icon: MapPin, title: 'Location', subtitle: 'Based in India', details: 'Hyderabad, Telangana', color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-200', link: '#' },
    { icon: Clock, title: 'Response Time', subtitle: 'We reply fast', details: 'Within 2–4 hours', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200', link: '#' },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-50/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-indigo-50/60 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-4 block">Get In Touch</span>
            <h1 className="font-display font-bold text-slate-900 leading-tight mb-5" style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}>
              Let's Build <span className="gradient-text">Something Great</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
              Whether you're launching a website, automating workflows, or building a SaaS product — we're ready. Reach out through any channel below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-0 bg-white mb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: Channels */}
            <div>
              <h2 className="font-display font-bold text-xl text-slate-900 mb-6">Contact Channels</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {channels.map((ch, idx) => {
                  const Icon = ch.icon
                  return (
                    <motion.a
                      key={idx}
                      href={ch.link}
                      target={ch.link !== '#' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className={`flex items-center gap-4 bg-white border ${ch.border} rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer group`}
                    >
                      <div className={`${ch.bg} p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 ${ch.color}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{ch.title}</div>
                        <div className="text-slate-400 text-xs mb-0.5">{ch.subtitle}</div>
                        <div className="text-slate-600 text-xs font-medium">{ch.details}</div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/919392472134"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-4 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Instantly on WhatsApp →
              </motion.a>

              {/* Quick points */}
              <div className="mt-8 bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-800 text-sm mb-4">Why work with Autofy?</h3>
                <ul className="space-y-3">
                  {['Free discovery call — no commitment', 'Fixed pricing, no hidden costs', '30-day post-launch support included', 'Direct access to the founders'].map(p => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-10">
                <h2 className="font-display font-bold text-xl text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-500 text-sm mb-7">We typically respond within 2–4 hours on business days.</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-14">
                    <div className="w-16 h-16 bg-teal-50 border border-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 text-sm">Thanks for reaching out. We'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none text-sm bg-slate-50 focus:bg-white"
                          placeholder="Rathod Rahul" required />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone *</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none text-sm bg-slate-50 focus:bg-white"
                          placeholder="+91 9392472134" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none text-sm bg-slate-50 focus:bg-white"
                        placeholder="hello@example.com" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Service Needed *</label>
                        <select name="service" value={form.service} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none text-sm bg-slate-50 focus:bg-white" required>
                          <option value="">Select a service...</option>
                          <option>Web Development</option>
                          <option>AI Automation</option>
                          <option>SaaS Development</option>
                          <option>Analytics Dashboard</option>
                          <option>Brand & Design</option>
                          <option>Growth Strategy</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Budget Range</label>
                        <select name="budget" value={form.budget} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none text-sm bg-slate-50 focus:bg-white">
                          <option value="">Select budget...</option>
                          <option>Under ₹50,000</option>
                          <option>₹50,000 – ₹1,50,000</option>
                          <option>₹1,50,000 – ₹5,00,000</option>
                          <option>₹5,00,000+</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tell Us About Your Project *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none resize-none text-sm bg-slate-50 focus:bg-white"
                        placeholder="Describe your project, goals, and timeline..." required />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary justify-center py-3.5 rounded-xl text-sm font-semibold"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </motion.button>
                    <p className="text-center text-xs text-slate-400">We'll respond within 2–4 hours. No spam, ever.</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}