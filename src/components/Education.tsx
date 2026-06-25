import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiFileText, FiX, FiBook, FiCalendar, FiStar } from 'react-icons/fi';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts';

const SEMESTER_DATA = [
  { sem: 'Sem 1', sgpa: 9.3, result: '/results/Sem-1 Result.pdf' },
  { sem: 'Sem 2', sgpa: 9.05, result: '/results/Sem-2 Result.pdf' },
  { sem: 'Sem 3', sgpa: 9.58, result: '/results/Sem-3 Result.pdf' },
  { sem: 'Sem 4', sgpa: 9.61, result: '/results/Sem-4 Result.pdf' },
  { sem: 'Sem 5', sgpa: 10, result: '/results/Sem-5 Result.pdf' },
  { sem: 'Sem 6', sgpa: null, result: null },
  { sem: 'Sem 7', sgpa: null, result: null },
  { sem: 'Sem 8', sgpa: null, result: null },
];

const timeline = [
  {
    period: '2023 – 2027',
    title: 'Bachelor of Technology',
    subtitle: 'Computer Science Engineering',
    specialization: 'Artificial Intelligence',
    institution: 'KL University',
    location: 'Hyderabad, Telangana',
    status: 'Current',
  },
  {
    period: '2021 – 2023',
    title: 'Intermediate',
    institution: 'Resonance Junior College',
    location: 'Hyderabad, Telangana',
    status: 'Completed',
  },
  {
    period: '2021',
    title: 'Schooling',
    institution: 'TIME School',
    location: 'Hyderabad, Telangana',
    status: 'Completed',
  },
];

const summaryCards = [
  { label: 'Degree', value: 'B.Tech CSE (AI)', icon: FiBook },
  { label: 'University', value: 'KL University', icon: FiMapPin },
  { label: 'Graduation', value: '2027', icon: FiCalendar },
  { label: 'Current CGPA', value: '9.55', icon: FiStar, highlight: true },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length && payload[0].value !== null) {
    return (
      <div className="rounded-lg border border-white/10 bg-card px-3 py-2 shadow-xl">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm font-bold text-white">SGPA: {Number(payload[0].value).toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export default function Education() {
  const [viewingPdf, setViewingPdf] = useState<string | null>(null);

  return (
    <>
      <div className="flex h-full items-start justify-center overflow-y-auto px-6 py-8 md:px-10 md:py-10">
        <div className="w-full max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">Academic Background</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="mt-3">
            <h2 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">My academic journey and performance across semesters</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {summaryCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className={`flex flex-col rounded-xl border p-5 ${
                    card.highlight ? 'border-primary/30 bg-primary/10' : 'border-white/5 bg-card'
                  }`}
                >
                  <div className={`mb-3 inline-flex w-fit rounded-lg p-2 ${
                    card.highlight ? 'bg-primary/20' : 'bg-surface'
                  }`}>
                    <Icon size={16} className={card.highlight ? 'text-primary-light' : 'text-gray-400'} />
                  </div>
                  <p className="text-[11px] text-gray-500">{card.label}</p>
                  <p className={`mt-1 text-sm font-bold ${card.highlight ? 'text-primary-light' : 'text-white'}`}>
                    {card.value}
                  </p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 rounded-xl border border-white/5 bg-card p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Academic Performance</h3>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-light">
                CGPA: 9.55
              </span>
            </div>

            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={SEMESTER_DATA} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="sem" tick={{ fill: '#9ca3af', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[7, 10]} ticks={[7, 8, 9, 10]} tick={{ fill: '#9ca3af', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)' }} />
                  <Line
                    type="monotone"
                    dataKey="sgpa"
                    stroke="#7c3aed"
                    strokeWidth={2}
                    dot={{ fill: '#7c3aed', stroke: '#7c3aed', strokeWidth: 2, r: 4 }}
                    activeDot={{ fill: '#8b5cf6', stroke: '#7c3aed', strokeWidth: 2, r: 6 }}
                    connectNulls={false}
                  />
                  {(() => {
                    const filled = SEMESTER_DATA.filter(s => s.sgpa !== null);
                    if (filled.length === 0) return null;
                    const last = filled[filled.length - 1];
                    return <ReferenceDot x={last.sem} y={last.sgpa!} r={6} fill="#f59e0b" stroke="#f59e0b" strokeWidth={2} />;
                  })()}
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-4">
              {SEMESTER_DATA.map((s) => (
                <button
                  key={s.sem}
                  disabled={!s.result}
                  onClick={() => s.result && setViewingPdf(s.result)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-medium transition-colors ${
                    s.result
                      ? 'bg-surface text-gray-300 hover:bg-primary/10 hover:text-primary-light'
                      : 'bg-surface/50 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  <FiFileText size={12} />
                  {s.sem} {s.sgpa !== null && `(${Number(s.sgpa).toFixed(1)})`}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-8 space-y-4"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Education Timeline</h3>
            {timeline.map((item, idx) => (
              <motion.div
                key={item.institution + idx}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.3 + idx * 0.08 }}
                className="relative rounded-xl border border-white/5 bg-card p-6 transition-colors hover:border-primary/20"
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-primary to-secondary opacity-60" />
                <div className="flex flex-wrap items-start justify-between gap-3 pl-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      {item.status === 'Current' && (
                        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary-light">Current</span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-gray-300">{item.institution}</p>
                    {item.subtitle && <p className="mt-0.5 text-xs text-gray-400">{item.subtitle}</p>}
                    {item.specialization && <p className="text-xs text-primary-light">Specialization: {item.specialization}</p>}
                    <p className="mt-1.5 flex items-center gap-1 text-[11px] text-gray-500">
                      <FiMapPin size={11} /> {item.location}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    {item.period && (
                      <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-light">{item.period}</span>
                    )}
                    {item.status === 'Completed' && (
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">Completed</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {viewingPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={(e) => { if (e.target === e.currentTarget) setViewingPdf(null); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
                <span className="text-sm font-semibold text-white">Semester Result</span>
                <button onClick={() => setViewingPdf(null)} className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                  <FiX size={18} />
                </button>
              </div>
              <div className="h-[75vh] w-full">
                <iframe src={viewingPdf} className="h-full w-full" title="Semester Result" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
