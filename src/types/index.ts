import type { IconType } from 'react-icons';

export interface NavItem {
  id: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ProjectFeature {
  text: string;
}

export interface Project {
  title: string;
  description: string;
  features: ProjectFeature[];
  tech: string[];
  gradient: string;
  github: string;
  demo: string;
  tag?: string;
}

export interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
  label: string;
}
