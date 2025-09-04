import { Service, CompanyInfo, Stats } from "./types";

export const SERVICES: Service[] = [
  {
    id: "repair",
    title: "ซ่อมคอมพิวเตอร์",
    description:
      "บริการซ่อมคอมพิวเตอร์ โน้ตบุ๊ค และอุปกรณ์ไอทีทุกยี่ห้อ ด้วยช่างผู้เชี่ยวชาญ รับประกันคุณภาพ",
    icon: "laptop-medical",
  },
  {
    id: "network",
    title: "ติดตั้งระบบเครือข่าย",
    description:
      "ออกแบบและติดตั้งระบบเครือข่าย LAN/WAN, WiFi, ระบบรักษาความปลอดภัยสำหรับบ้านและสำนักงาน",
    icon: "network-wired",
  },
  {
    id: "server",
    title: "ระบบเซิร์ฟเวอร์",
    description:
      "ติดตั้งและดูแลเซิร์ฟเวอร์ ระบบฐานข้อมูล ระบบคลาวด์ และระบบสำรองข้อมูล",
    icon: "server",
  },
  {
    id: "security",
    title: "รักษาความปลอดภัย",
    description:
      "ติดตั้งระบบรักษาความปลอดภัยทางไซเบอร์ แอนตี้ไวรัส และระบบป้องกันการโจมตี",
    icon: "shield-alt",
  },
  {
    id: "mobile",
    title: "ซ่อมโทรศัพท์มือถือ",
    description:
      "บริการซ่อมสมาร์ทโฟน แท็บเล็ต เปลี่ยนจอ แบตเตอรี่ และอุปกรณ์ต่างๆ",
    icon: "mobile-alt",
  },
  {
    id: "consulting",
    title: "ให้คำปรึกษา",
    description:
      "ให้คำปรึกษาด้านเทคโนโลยี การเลือกซื้อฮาร์ดแวร์ และวางแผนระบบไอทีสำหรับองค์กร",
    icon: "headset",
  },
];

export const COMPANY_INFO: CompanyInfo = {
  name: "TechCare Solutions",
  address: "123 ถนนเทคโนโลยี แขวงไอที เขตดิจิทัล กรุงเทพฯ 10110",
  phone: "02-123-4567",
  mobile: "081-234-5678",
  email: "info@techcaresolutions.com",
  workingHours: "จันทร์-เสาร์ 8:00-18:00, อาทิตย์ 9:00-17:00",
};

export const STATS: Stats = {
  customers: 1000,
  experience: 10,
  availability: "24/7",
  quality: 100,
};
