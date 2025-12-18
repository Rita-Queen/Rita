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
  items: CertificateItem[];
}