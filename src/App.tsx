import { useState, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiUser, FiCode, FiFolder, FiBriefcase, FiBookOpen, FiShield, FiMail } from 'react-icons/fi';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const navItems = [
  { id: 'about', label: 'About', icon: FiUser },
  { id: 'skills', label: 'Skills', icon: FiCode },
  { id: 'projects', label: 'Projects', icon: FiFolder },
  { id: 'experience', label: 'Experience', icon: FiBriefcase },
  { id: 'education', label: 'Education', icon: FiBookOpen },
  { id: 'certifications', label: 'Certs', icon: FiShield },
  { id: 'contact', label: 'Contact', icon: FiMail },
];

const shortLabels: Record<string, string> = {
  certifications: 'Certs',
};

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    });
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'experience': return <Experience />;
      case 'education': return <Education />;
      case 'certifications': return <Certifications />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-dark">
      <div className="hidden h-screen w-[90px] shrink-0 border-r border-white/5 bg-card md:flex lg:w-[240px]">
        <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      </div>

      <main className="flex h-screen flex-1 flex-col overflow-hidden">
        <div ref={scrollRef} className="flex-1 overflow-y-auto pb-14 md:pb-0">
          <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="flex w-full flex-col py-6 sm:py-8 md:py-8 lg:py-10"
              >
                <div className="w-full max-w-5xl mx-auto">
                  {renderSection()}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-14 items-center justify-around border-t border-white/5 bg-card md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`flex shrink-0 flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-medium transition-all ${
                isActive ? 'text-primary-light scale-110' : 'text-gray-500'
              }`}
            >
              <Icon size={18} />
              {shortLabels[item.id] || item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
