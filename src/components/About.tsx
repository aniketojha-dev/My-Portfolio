import { motion } from 'framer-motion';
import { FiCode, FiCamera, FiCoffee, FiMapPin } from 'react-icons/fi';

const techBadges = [
  { name: 'Python', color: 'from-yellow-400/20 to-yellow-400/5', text: 'text-yellow-400' },
  { name: 'Java', text: 'text-orange-500', color: 'from-orange-400/20 to-orange-400/5' },
  { name: 'FastAPI', text: 'text-green-400', color: 'from-green-400/20 to-green-400/5' },
  { name: 'Docker', text: 'text-sky-400', color: 'from-sky-400/20 to-sky-400/5' },
  { name: 'MongoDB', text: 'text-emerald-400', color: 'from-emerald-400/20 to-emerald-400/5' },
  { name: 'YOLOv8', text: 'text-red-400', color: 'from-red-400/20 to-red-400/5' },
  { name: 'LLaMA', text: 'text-purple-400', color: 'from-purple-400/20 to-purple-400/5' },
  { name: 'JavaScript', text: 'text-yellow-400', color: 'from-yellow-400/20 to-yellow-400/5' },
];

const hobbies = [
  { name: 'Video Games', icon: FiCode },
  { name: 'Football', icon: FiCamera },
  { name: 'Cooking', icon: FiCoffee },
  { name: 'Adventure & Travel', icon: FiMapPin },
];

export default function About() {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-10">
      <div className="flex-1">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
          <span className="inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-3 py-1 text-[11px] font-medium text-primary-light">
            Open To Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl"
        >
          <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
            Aniket Ojha
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-2"
        >
          <p className="text-base font-semibold text-gray-200 sm:text-lg">Software Developer</p>
        <p className="text-base font-semibold text-gray-200/80 sm:text-lg">AI/ML Engineer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 space-y-2"
        >
          <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
            Computer Science Engineering student specializing in Artificial Intelligence at{' '}
            <span className="font-medium text-white">KL University, Hyderabad</span>.
          </p>
          <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
            Passionate about building software systems, AI-powered applications, and intelligent solutions that solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-4 rounded-xl border border-white/5 bg-card p-4 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
        >
          <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Interests</h3>
          <div className="flex flex-wrap gap-1.5">
            {['Software Development', 'Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'System Design'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/5 bg-surface px-2.5 py-0.5 text-xs text-gray-300 transition-all hover:border-primary/20 hover:text-primary-light hover:scale-105"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-3 rounded-xl border border-white/5 bg-card p-4 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
        >
          <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Beyond Coding</h3>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby) => (
              <span key={hobby.name} className="flex items-center gap-1.5 text-xs text-gray-400 transition-all hover:text-gray-200 hover:scale-105">
                <hobby.icon size={13} className="text-primary-light" />
                {hobby.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-4"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-block rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 transition-all hover:border-white/20 hover:text-white hover:shadow-lg hover:shadow-white/5 hover:scale-105 sm:text-sm"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="hidden shrink-0 lg:block"
      >
        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent opacity-60 blur-2xl" />
          <div className="relative w-72 rounded-2xl border border-white/10 bg-card p-5 shadow-xl shadow-black/20 transition-all hover:border-primary/20 hover:shadow-primary/5">
            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-secondary p-[3px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-dark text-xl font-bold text-white">
                    AO
                  </div>
                </div>
                <div className="absolute -right-2 -top-1 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-dark whitespace-nowrap">
                  CGPA 9.55
                </div>
              </div>
              <h3 className="text-base font-semibold text-white">Aniket Ojha</h3>
              <p className="text-xs text-gray-400">Software Developer &middot; AI/ML Engineer</p>
              <p className="mt-1 flex items-center gap-1 text-[11px] text-gray-500">
                <FiMapPin size={11} /> Hyderabad, India
              </p>

              <div className="mt-4 w-full border-t border-white/5 pt-4">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Technologies</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {techBadges.map((badge) => (
                    <span
                      key={badge.name}
                      className={`rounded-full bg-gradient-to-r ${badge.color} ${badge.text} border border-white/5 px-2.5 py-0.5 text-[10px] font-medium transition-all hover:scale-105`}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
