export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  mobile: string;
  email: string;
  workingHours: string;
}

export interface Stats {
  customers: number;
  experience: number;
  availability: string;
  quality: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}
