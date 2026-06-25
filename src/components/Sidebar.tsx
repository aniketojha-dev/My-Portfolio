import { motion } from 'framer-motion';
import { FiUser, FiCode, FiFolder, FiBriefcase, FiBookOpen, FiShield, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'about', label: 'About', icon: FiUser },
  { id: 'skills', label: 'Skills', icon: FiCode },
  { id: 'projects', label: 'Projects', icon: FiFolder },
  { id: 'experience', label: 'Experience', icon: FiBriefcase },
  { id: 'education', label: 'Education', icon: FiBookOpen },
  { id: 'certifications', label: 'Certifications', icon: FiShield },
  { id: 'contact', label: 'Contact', icon: FiMail },
];

const shortLabels: Record<string, string> = {
  certifications: 'Certs',
};

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <>
      <aside className="hidden h-screen w-64 flex-col border-r border-white/5 bg-card md:flex">
        <div className="flex h-16 items-center border-b border-white/5 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-[10px] font-bold text-white shadow-lg shadow-primary/25">
              P
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Portfolio
            </span>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary-light'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={18} />
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="ml-auto h-2 w-2 rounded-full bg-primary"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/5 px-6 py-4">
          <div className="flex items-center gap-3 text-gray-500">
            <FiGithub size={18} />
            <FiLinkedin size={18} />
          </div>
          <p className="mt-2 text-xs text-gray-600">&copy; 2026 Aniket Ojha</p>
        </div>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around overflow-x-auto border-t border-white/5 bg-card md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex shrink-0 flex-col items-center gap-0.5 px-2.5 py-1 text-[10px] font-medium transition-colors ${
                isActive ? 'text-primary-light' : 'text-gray-500'
              }`}
            >
              <Icon size={18} />
              {shortLabels[item.id] || item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
