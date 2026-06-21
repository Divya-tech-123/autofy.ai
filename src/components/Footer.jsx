import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Github, Mail, MapPin, Phone, ArrowRight, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-xl text-white tracking-tight">
                AUTO<span className="text-teal-400">FY</span>.AI
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Premium AI & web engineering studio crafting digital experiences that drive real business growth.
            </p>
            <div className="flex gap-2.5">
              <a 
                href="https://www.linkedin.com/in/rathod-rahul-63ab542b0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600/30 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/rathodspeaks1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600/30 flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/rathodrahul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-xs tracking-wider uppercase">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Services</Link>
              </li>
              <li>
                <Link to="/websites" className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Websites</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-xs tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">AI Automation</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">SaaS Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Analytics & Dashboards</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Brand & Design</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Growth Strategy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-xs tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <a href="mailto:autofy07@gmail.com" className="text-slate-400 hover:text-white text-sm transition-colors">autofy07@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <a href="tel:+919392472134" className="text-slate-400 hover:text-white text-sm transition-colors">+91 93924 72134</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 Autofy.ai Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}