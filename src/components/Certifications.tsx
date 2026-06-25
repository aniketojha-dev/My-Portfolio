import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import CertModal from './CertModal';

interface Certification {
  title: string;
  issuer: string;
  image: string;
}

const certifications: Certification[] = [
  { title: 'MongoDB Associate Developer', issuer: 'MongoDB', image: '/certificates/MongoDB Certificate.png' },
  { title: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', image: '/certificates/CEH Certificate.png' },
  { title: 'Advanced Automation Professional', issuer: 'Automation Anywhere', image: '/certificates/Automation Anywhere.png' },
  { title: 'Prompt Engineering', issuer: 'NVIDIA', image: '/certificates/Prompt Engineering.png' },
  { title: 'RAG Agents', issuer: 'NVIDIA', image: '/certificates/NVIDIA RAG.png' },
  { title: 'Agentic AI Applications', issuer: 'NVIDIA', image: '/certificates/NVIDIA LLM.png' },
  { title: 'Technology Job Simulation', issuer: 'Deloitte', image: '/certificates/Delloite.png' },
  { title: 'Campus Drive Participation', issuer: 'GrabOn', image: '/certificates/GrabOn.png' },
  { title: 'AI for Business – AI 101 Fundamentals', issuer: 'Udemy', image: '/certificates/Udemy.png' },
];

export default function Certifications() {
  const [modalCert, setModalCert] = useState<Certification | null>(null);

  return (
    <>
      <div className="flex h-full items-start justify-center overflow-y-auto px-6 py-8 md:px-10 md:py-10">
        <div className="w-full max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">Certifications</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="mt-3">
            <h2 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">Professional certifications and achievements</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title + cert.issuer}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + idx * 0.05 }}
                className="group rounded-xl border border-white/5 bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-3 flex h-28 items-center justify-center overflow-hidden rounded-lg bg-surface">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug">{cert.title}</h3>
                <p className="mt-1 text-xs text-gray-400">{cert.issuer}</p>
                <button
                  onClick={() => setModalCert(cert)}
                  className="mt-3 flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary-light transition-colors hover:bg-primary/20"
                >
                  <FiExternalLink size={12} />
                  View Certificate
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {modalCert && (
        <CertModal image={modalCert.image} title={modalCert.title} onClose={() => setModalCert(null)} />
      )}
    </>
  );
}
