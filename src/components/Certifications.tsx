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
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">Certifications</span>
        <p className="mt-2 text-sm text-gray-500">Professional certifications and achievements</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title + cert.issuer}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 + idx * 0.05 }}
            className="group rounded-xl border border-white/5 bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="mb-4 flex h-32 items-center justify-center overflow-hidden rounded-lg bg-surface">
              <img
                src={cert.image}
                alt={cert.title}
                className="h-full w-full object-cover opacity-80 transition-all group-hover:opacity-100 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <h3 className="text-base font-semibold text-white leading-snug">{cert.title}</h3>
            <p className="mt-1 text-sm text-gray-400">{cert.issuer}</p>
            <button
              onClick={() => setModalCert(cert)}
              className="mt-4 flex items-center gap-1.5 rounded-lg bg-primary/10 px-4 py-2 text-xs font-medium text-primary-light transition-all hover:bg-primary/20 hover:scale-105"
            >
              <FiExternalLink size={12} />
              View Certificate
            </button>
          </motion.div>
        ))}
      </motion.div>

      {modalCert && (
        <CertModal image={modalCert.image} title={modalCert.title} onClose={() => setModalCert(null)} />
      )}
    </>
  );
}
