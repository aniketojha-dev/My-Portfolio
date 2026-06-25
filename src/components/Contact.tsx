import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="flex h-full items-center justify-center px-6 py-6 md:px-8 md:py-8">
      <div className="w-full max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">Get In Touch</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="mt-2 text-2xl font-bold text-white">
          Let's Build Something{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Meaningful</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="mt-2 text-sm text-gray-400">
          Interested in software engineering, AI/ML, cybersecurity, or collaboration opportunities? Let's connect.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="mt-5 grid gap-5 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-white/5 bg-card p-5">
              <div className="mb-3">
                <label htmlFor="cname" className="mb-1 block text-xs font-medium text-gray-400">Name</label>
                <input id="cname" type="text" placeholder="Your name" className="w-full rounded-lg border border-white/5 bg-surface px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-primary/50" />
              </div>
              <div className="mb-3">
                <label htmlFor="cemail" className="mb-1 block text-xs font-medium text-gray-400">Email</label>
                <input id="cemail" type="email" placeholder="your@email.com" className="w-full rounded-lg border border-white/5 bg-surface px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-primary/50" />
              </div>
              <div className="mb-4">
                <label htmlFor="cmsg" className="mb-1 block text-xs font-medium text-gray-400">Message</label>
                <textarea id="cmsg" rows={3} placeholder="Your message..." className="w-full resize-none rounded-lg border border-white/5 bg-surface px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-primary/50" />
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-shadow hover:shadow-primary/30">
                <FiSend size={15} /> Send Message
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-white/5 bg-card p-5">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Contact Info</h3>
              <div className="mb-3 flex items-start gap-3 rounded-lg bg-surface p-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary-light"><FiMapPin size={16} /></div>
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="text-xs text-gray-400">Hyderabad, India</p>
                </div>
              </div>
              <div className="mb-3 flex items-start gap-3 rounded-lg bg-surface p-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary-light"><FiMail size={16} /></div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-xs text-gray-400">aniketojha2805@gmail.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <a href="https://github.com/aniketojha-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg bg-surface p-3 transition-colors hover:bg-primary/5">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary-light"><FiGithub size={16} /></div>
                  <span className="text-sm font-medium text-white">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/aniket-ojha-ao111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg bg-surface p-3 transition-colors hover:bg-primary/5">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary-light"><FiLinkedin size={16} /></div>
                  <span className="text-sm font-medium text-white">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
