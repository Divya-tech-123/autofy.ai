import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

// Sample items (replace with real projects)
const projects = [
  {
  title: 'Elegance Fashion Commerce',
  desc: 'A premium fashion e-commerce platform featuring a luxury shopping experience, secure online payments, responsive product catalogs, and SEO-optimized performance for modern retail brands.',
  tags: ['Next.js', 'E-Commerce', 'Stripe', 'Supabase'],
  image: '/images/elegance.png',
  link: 'https://www.hiruelegance.com/',
},
{
  title: 'HealthCare',
  desc: 'An industry-driven learning and placement platform where students learn practical skills, build portfolio-worthy projects, and transform their knowledge into real job offers through structured mentorship.',
  tags: ['React', 'Next.js', 'EdTech', 'Placement Platform'],
  image: '/images/image1.png',
  link: 'https://cooper-hospital-h1e7.vercel.app/',
},

{
  title: 'Velora Fine Dining',
  desc: 'A sophisticated restaurant website designed to elevate the dining experience through immersive visuals, digital menu presentation, seamless reservations, and modern brand storytelling.',
  tags: ['React', 'Restaurant Website', 'UI/UX Design', 'Responsive'],
  image: '/images/velora.png',
  link: 'https://remix-velora-985550853043.asia-southeast1.run.app/',
},

{
  title: 'Luxury Automotive Showcase',
  desc: 'A high-end automotive experience crafted for premium vehicle brands, featuring cinematic animations, immersive product presentation, and a visually striking user journey.',
  tags: ['React', 'Framer Motion', 'Luxury UI', 'Responsive'],
  image: '/images/car.png',
  link: 'https://lamborgini-mu.vercel.app/',
},

{
  title: 'Hiru Fashion Studio',
  desc: 'A modern fashion brand website built to showcase collections, strengthen brand identity, and deliver a seamless shopping experience across desktop and mobile devices.',
  tags: ['React', 'Tailwind CSS', 'Fashion Brand', 'E-Commerce'],
  image: '/images/hero.png',
  link: 'https://hiru-nine.vercel.app/',
},

{
  title: 'Infranex Technologies',
  desc: 'A modern fashion brand website built to showcase collections, strengthen brand identity, and deliver a seamless shopping experience across desktop and mobile devices.',
  tags: ['React', 'Tailwind CSS', 'Fashion Brand', 'E-Commerce'],
  image: '/images/hero1.png',
  link: 'https://www.infranextech.in/',
},


]

export default function Websites() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-50/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-50/60 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-6">
            <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase block mb-4">Our Work</span>
            <h1 className="font-display font-bold leading-tight mb-5" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Websites <span className="gradient-text">Showcase</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Real‑world projects we’ve delivered for startups and enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map(({ title, desc, tags, image, link }) => (
              <motion.div key={title} variants={fadeUp} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group bg-white rounded-[24px] overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-50 text-slate-600 border border-slate-100">{tag}</span>
                    ))}
                  </div>
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group/link"
                  >
                    View Website <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
              Ready to build your next project?
            </h2>
            <p className="text-slate-500 mb-8 text-base">
              Let’s turn your ideas into reality. Get in touch for a free consultation.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Talk to Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}