import { Service, CompanyInfo, NavigationItem, Stats } from "./types";

// ข้อมูลบริษัท
export const COMPANY_INFO: CompanyInfo = {
  name: "TechCare Solutions",
  address: "123 เทคโนโลยี แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800",
  phone: "02-123-4567",
  mobile: "089-123-4567",
  email: "info@techcare.co.th",
  workingHours: "จันทร์-ศุกร์ 8:30-17:30 น. (เสาร์-อาทิตย์ นัดหมาย)",
};

// สถิติบริษัท
export const COMPANY_STATS: Stats = {
  customers: 500,
  experience: 10,
  availability: "24/7",
  quality: 98,
};

// เมนูหลัก
export const MAIN_NAVIGATION: NavigationItem[] = [
  { name: "หน้าหลัก", href: "#home" },
  { name: "บริการ", href: "#services" },
  { name: "เกี่ยวกับเรา", href: "#about" },
  { name: "ติดต่อเรา", href: "#contact" },
];

// บริการทั้งหมด
export const SERVICES: Service[] = [
  {
    id: "computer-repair",
    title: "ซ่อมคอมพิวเตอร์",
    description:
      "ซ่อมคอมพิวเตอร์ทุกยี่ห้อ ทุกปัญหา พร้อมรับประกันคุณภาพ ด้วยทีมช่างมืออาชีพ",
    icon: "🖥️",
  },
  {
    id: "network-setup",
    title: "ติดตั้งระบบเครือข่าย",
    description:
      "ติดตั้งและจัดการระบบเครือข่าย LAN, WiFi, และระบบรักษาความปลอดภัยเครือข่าย",
    icon: "🌐",
  },
  {
    id: "software-install",
    title: "ติดตั้งซอฟต์แวร์",
    description:
      "ติดตั้งและอัปเดตซอฟต์แวร์ระบบ โปรแกรมประยุกต์ และไดรเวอร์อุปกรณ์",
    icon: "💿",
  },
  {
    id: "data-recovery",
    title: "กู้ข้อมูล",
    description:
      "บริการกู้ไฟล์และข้อมูลที่สูญหาย จากฮาร์ดดิสก์ SSD และอุปกรณ์จัดเก็บข้อมูล",
    icon: "💾",
  },
  {
    id: "security-system",
    title: "ระบบรักษาความปลอดภัย",
    description:
      "ติดตั้งระบบป้องกันไวรัส ไฟร์วอลล์ และระบบสำรองข้อมูลอัตโนมัติ",
    icon: "🔒",
  },
  {
    id: "consultation",
    title: "ที่ปรึกษาเทคโนโลยี",
    description:
      "ให้คำปรึกษาด้านเทคโนโลยี วางแผนระบบ IT และแนะนำอุปกรณ์ที่เหมาะสม",
    icon: "💡",
  },
];

// ข้อมูล SEO
export const SEO_DATA = {
  title: "TechCare Solutions - บริการเทคโนโลยีครบวงจร",
  description:
    "ซ่อมคอมพิวเตอร์ ติดตั้งระบบเครือข่าย กู้ข้อมูล และให้คำปรึกษาเทคโนโลยี ด้วยทีมงานมืออาชีพ",
  keywords:
    "ซ่อมคอมพิวเตอร์, ติดตั้งเครือข่าย, กู้ข้อมูล, IT Support, เทคโนโลยี",
  author: "TechCare Solutions",
  image: "/logo.svg",
};

// ข้อมูลโซเชียลมีเดีย
export const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://facebook.com/techcare", icon: "facebook" },
  {
    name: "Line",
    url: "https://line.me/ti/p/@techcare",
    icon: "message-circle",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/techcare",
    icon: "instagram",
  },
  { name: "YouTube", url: "https://youtube.com/techcare", icon: "youtube" },
];

// การตั้งค่าแอนิเมชั่น
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  delay: {
    stagger: 0.1,
    section: 0.2,
  },
  easing: {
    default: [0.6, -0.05, 0.01, 0.99],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
};
// แผนที่ไอคอนโซเชียลมีเดีย
const socialIconMap: { [key: string]: string } = {
  'facebook': '📘',
  'line': '💬',
  'twitter': '🐦',
  'linkedin': '🔗',
  'github': '🐙',
  'twitch': '🎮',
  'discord': '🎧',
  'telegram': '✈️',
  'reddit': '👽',
  'pinterest': '📌',
  'tiktok': '🎵',
  'snapchat': '👻',
  'whatsapp': '📱',
  'weibo': '🈲',
  'tencent-wechat': '💚',
  'quora': '❓',
  'medium': '✍️',
  'stackoverflow': '💡',
  'dribbble': '🏀',
  'behance': '🎨',
  'flickr': '📷',
  'vimeo': '🎥',
  'slack': '💼',
  'skype': '📞',
  'zoom': '🔍',
  'rss': '📡',
  'blog': '📝',
  'forum': '💬',
  'email': '✉️',
  'phone': '📞',
  'location': '📍',
  'website': '🌐',
  'youtube': '▶️',
  'instagram': '📸',
};
