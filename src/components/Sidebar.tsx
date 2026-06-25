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

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 shrink-0 items-center border-b border-white/5 md:justify-center lg:px-6 lg:justify-start">
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text font-bold tracking-tight text-transparent md:text-xs lg:text-xl md:hidden lg:block">
          Portfolio
        </span>
        <span className="hidden bg-gradient-to-br from-primary to-secondary bg-clip-text font-bold text-transparent md:block md:text-lg lg:hidden">
          P
        </span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex w-full items-center rounded-lg font-medium transition-all ${
                isActive
                  ? 'bg-primary/10 text-primary-light'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              } md:justify-center md:px-0 md:py-3 lg:justify-start lg:gap-3 lg:px-4 lg:py-2.5`}
            >
              <div className={`flex items-center justify-center md:p-2 lg:p-0 ${isActive ? 'md:bg-primary/10 md:rounded-lg lg:bg-transparent lg:rounded-none' : ''}`}>
                <Icon size={18} />
              </div>
              <span className="md:hidden lg:inline text-sm">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="sidebar-indicator"
                  className="ml-auto h-2 w-2 rounded-full bg-primary md:hidden lg:block"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-white/5 md:px-0 md:py-4 lg:px-6 lg:py-4">
        <div className="flex items-center gap-3 text-gray-500 md:justify-center lg:justify-start">
          <FiGithub size={18} />
          <FiLinkedin size={18} />
        </div>
        <p className="mt-2 text-xs text-gray-600 md:text-center lg:text-left md:hidden lg:block">&copy; 2026 Aniket Ojha</p>
      </div>
    </div>
  );
}
