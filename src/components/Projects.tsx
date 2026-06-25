import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'MyDocReader',
    description:
      'Browser-based RAG document assistant. Upload PDF, DOCX, or TXT files and ask questions — answers are grounded in your documents with automatic citations.',
    features: [
      { text: 'RAG Pipeline (browser)' },
      { text: 'PDF / DOCX / TXT Parsing' },
      { text: 'Local Vector Embeddings' },
      { text: 'Citation-Backed Answers' },
    ],
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'OpenRouter', 'Groq', 'Transformers.js', 'IndexedDB'],
    gradient: 'from-violet-500/10 to-cyan-500/10',
    github: 'https://github.com/aniketojha-dev/MyDocReader',
    demo: 'https://my-doc-reader-beige.vercel.app/',
    tag: 'Featured Project',
  },
  {
    title: 'NewsVerify',
    description:
      'Real-time news verification system using hybrid retrieval (FAISS + SQLite) with LLM fallback. Cross-references events against a curated 1,000+ event knowledge base.',
    features: [
      { text: 'Hybrid FAISS + SQLite Search' },
      { text: 'Confidence Scoring System' },
      { text: 'Live Web Search Fallback' },
      { text: 'Structured Source References' },
    ],
    tech: ['React', 'FastAPI', 'FAISS', 'SQLite', 'OpenRouter', 'DuckDuckGo', 'scikit-learn'],
    gradient: 'from-emerald-500/10 to-teal-500/10',
    github: 'https://github.com/aniketojha-dev/NewsVerify',
    demo: 'https://newsverify-i7bo.onrender.com/',
  },
];

export default function Projects() {
  return (
    <div className="flex h-full items-center justify-center px-6 py-6 md:px-8 md:py-8">
      <div className="w-full max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">My Work</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="mt-2 text-2xl font-bold text-white">
          Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="mt-4 grid gap-5 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + idx * 0.1 }}
              className="group flex flex-col rounded-2xl border border-white/5 bg-card shadow-lg shadow-black/10 transition-all duration-300 hover:border-primary/30 hover:shadow-primary/5"
            >
              <div className={`relative flex h-36 items-center justify-center rounded-t-2xl bg-gradient-to-br ${project.gradient}`}>
                {project.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    {project.tag}
                  </span>
                )}
                <p className="text-xl font-bold tracking-tight text-white/15 transition-colors group-hover:text-white/30">
                  {project.title}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-white">{project.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{project.description}</p>
                <div className="mt-3">
                  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Metrics</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {project.features.map((feature) => (
                      <div key={feature.text} className="flex items-center gap-1.5 text-xs text-gray-400">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {feature.text}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] font-medium text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center border-t border-white/5 pt-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-medium text-white shadow-lg shadow-primary/20 transition-shadow hover:shadow-primary/30"
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
