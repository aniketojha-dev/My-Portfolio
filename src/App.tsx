import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenu, setMobileMenu] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setMobileMenu(false);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeSection]);

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
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="fixed left-4 top-4 z-[70] flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-card text-white shadow-lg md:hidden"
      >
        {mobileMenu ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenu(false)}
      />

      <div className={`fixed left-0 top-0 z-50 h-screen w-[260px] transition-transform duration-300 md:hidden ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      </div>

      <div className="hidden h-screen w-[90px] shrink-0 border-r border-white/5 bg-card md:flex lg:w-[240px]">
        <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      </div>

      <main className="flex h-screen flex-1 flex-col overflow-hidden">
        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="flex w-full flex-col pt-14 pb-6 sm:pt-16 sm:pb-8 md:py-8 lg:py-10"
              >
                <div className="w-full max-w-5xl mx-auto">
                  {renderSection()}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
