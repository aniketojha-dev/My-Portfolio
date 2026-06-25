import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiExternalLink } from 'react-icons/fi';
import CertModal from './CertModal';

const experiences = [
  {
    company: 'AWS Academy + AICTE + EduSkills',
    role: 'AI/ML Virtual Intern',
    period: '2025',
    points: [
      'Completed a virtual internship focused on AI/ML fundamentals through the AWS Academy platform',
      'Built and deployed machine learning models using Amazon SageMaker and AWS services',
      'Worked on real-world projects involving data preprocessing, model training, and evaluation',
      'Gained hands-on experience with cloud-based AI/ML workflows and MLOps best practices',
    ],
    tech: ['Python', 'AWS SageMaker', 'AWS Lambda', 'S3', 'Machine Learning'],
    certificate: '/certificates/AI-ML Internship.png',
  },
  {
    company: 'ServiceNow',
    role: 'Virtual Intern',
    period: '2026',
    points: [
      'Completed ServiceNow Virtual Internship program covering platform fundamentals and application development',
      'Learned to build and configure workflows, UI policies, and business rules on the ServiceNow platform',
      'Developed skills in incident management, service catalog, and IT service management (ITSM) processes',
      'Earned certification for successful completion of the virtual internship program',
    ],
    tech: ['ServiceNow Platform', 'JavaScript', 'ITSM', 'Workflow Automation'],
    certificate: '/certificates/ServiceNow Internship.png',
  },
];

export default function Experience() {
  const [viewingCert, setViewingCert] = useState<{ image: string; title: string } | null>(null);

  return (
    <>
      <div className="flex h-full items-start justify-center overflow-y-auto px-6 py-8 md:px-10 md:py-10">
        <div className="w-full max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">Experience</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="mt-3">
            <h2 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">Professional internships and industry exposure</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="mt-7 space-y-5">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role + idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + idx * 0.1 }}
                className="group rounded-xl border border-white/5 bg-card p-6 transition-all hover:border-primary/20"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 sm:flex">
                    <FiBriefcase className="text-primary-light" size={20} />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                        <p className="text-xs text-gray-400">{exp.company}</p>
                      </div>
                      <span className="flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-light">
                        <FiCalendar size={11} /> {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-gray-400">
                          <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-primary-light" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] font-medium text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setViewingCert({ image: exp.certificate, title: `${exp.role} — ${exp.company}` })}
                    className="group/cert relative flex shrink-0 flex-col items-center overflow-hidden rounded-lg border border-white/5 bg-surface transition-all hover:border-primary/30"
                  >
                    <div className="flex h-24 w-36 items-center justify-center p-2 sm:h-28 sm:w-44">
                      <img
                        src={exp.certificate}
                        alt="Certificate"
                        className="h-full w-full object-contain opacity-70 transition-opacity group-hover/cert:opacity-100"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="flex w-full items-center justify-center gap-1 border-t border-white/5 py-1.5 text-[10px] font-medium text-primary-light">
                      <FiExternalLink size={10} />
                      Certificate
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {viewingCert && (
        <CertModal image={viewingCert.image} title={viewingCert.title} onClose={() => setViewingCert(null)} />
      )}
    </>
  );
}
