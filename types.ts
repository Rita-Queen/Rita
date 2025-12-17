export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
}

export interface CertificateItem {
  title: string;
  link: string;
  tag: string;
}

export interface CertificateCategory {
  id: string;
  title: string;
  subtitle: string;
  type: 'course' | 'cert';
  items: CertificateItem[];
}

export type FilterType = 'all' | 'course' | 'cert';
