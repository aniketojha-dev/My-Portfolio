import { motion } from 'framer-motion';
import { FaPython, FaJava } from 'react-icons/fa';
import {
  SiJavascript,
  SiC,
  SiMysql,
  SiMongodb,
  SiScikitlearn,
  SiFastapi,
  SiHtml5,
  SiCss,
  SiDocker,
  SiKubernetes,
  SiGit,
} from 'react-icons/si';
import { FiServer, FiLayers, FiEye, FiDatabase, FiRefreshCw, FiTerminal, FiGlobe, FiBox, FiGrid, FiCode, FiGithub } from 'react-icons/fi';
import type { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
      { name: 'Java', icon: FaJava, color: 'text-orange-500' },
      { name: 'C', icon: SiC, color: 'text-blue-400' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Machine Learning', icon: FiLayers, color: 'text-purple-400' },
      { name: 'Neural Networks', icon: FiGrid, color: 'text-pink-400' },
      { name: 'NLP', icon: FiCode, color: 'text-green-400' },
      { name: 'Computer Vision', icon: FiEye, color: 'text-cyan-400' },
      { name: 'RAG', icon: FiDatabase, color: 'text-violet-400' },
      { name: 'FAISS', icon: FiGrid, color: 'text-orange-400' },
      { name: 'LLaMA', icon: FiLayers, color: 'text-pink-400' },
      { name: 'YOLOv8', icon: FiEye, color: 'text-red-400' },
      { name: 'OpenCV', icon: FiEye, color: 'text-blue-400' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: 'text-yellow-400' },
    ],
  },
  {
    title: 'Software Dev',
    skills: [
      { name: 'FastAPI', icon: SiFastapi, color: 'text-green-400' },
      { name: 'REST APIs', icon: FiServer, color: 'text-blue-400' },
      { name: 'Streamlit', icon: FiCode, color: 'text-red-400' },
      { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: SiCss, color: 'text-blue-500' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-400' },
      { name: 'SQL', icon: SiMysql, color: 'text-blue-500' },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Docker', icon: SiDocker, color: 'text-sky-400' },
      { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
      { name: 'Git', icon: SiGit, color: 'text-orange-500' },
      { name: 'GitHub', icon: FiGithub, color: 'text-gray-300' },
      { name: 'CI/CD', icon: FiRefreshCw, color: 'text-green-400' },
    ],
  },
  {
    title: 'Core CS',
    skills: [
      { name: 'DSA', icon: FiGrid, color: 'text-cyan-400' },
      { name: 'DBMS', icon: FiDatabase, color: 'text-blue-400' },
      { name: 'Operating Systems', icon: FiTerminal, color: 'text-gray-300' },
      { name: 'Computer Networks', icon: FiGlobe, color: 'text-green-400' },
      { name: 'OOP', icon: FiBox, color: 'text-yellow-400' },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">Skills & Technologies</span>
        <p className="mt-2 text-sm text-gray-500">Technologies, frameworks, and tools I use to design, develop, and deploy high-quality software solutions.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
            className="rounded-xl border border-white/5 bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">{category.title}</h3>
            <div className="space-y-2.5">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group flex items-center gap-3">
                  <div className="rounded-lg bg-surface p-1.5 transition-all group-hover:bg-primary/10 group-hover:scale-110">
                    <skill.icon className={`text-base ${skill.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-300 transition-all group-hover:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
