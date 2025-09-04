import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// รวม Tailwind classes และจัดการ conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// จัดรูปแบบเบอร์โทรศัพท์
export function formatPhone(phone: string): string {
  // ลบอักขระที่ไม่ใช่ตัวเลข
  const cleaned = phone.replace(/\D/g, "");

  // จัดรูปแบบเบอร์โทรไทย
  if (cleaned.length === 10 && cleaned.startsWith("0")) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  // จัดรูปแบบเบอร์โทรบ้าน
  if (cleaned.length === 9 && cleaned.startsWith("02")) {
    return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 5)}-${cleaned.slice(5)}`;
  }

  return phone;
}

// จัดรูปแบบอีเมล
export function formatEmail(email: string): string {
  return email.toLowerCase().trim();
}

// สร้าง slug จากข้อความภาษาไทย
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // ลบอักขระพิเศษ
    .replace(/[\s_-]+/g, "-") // แทนที่ space ด้วย dash
    .replace(/^-+|-+$/g, ""); // ลบ dash ที่ต้นและท้าย
}

// ตรวจสอบรูปแบบอีเมล
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ตรวจสอบรูปแบบเบอร์โทร
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[0-9]{9,10}$/;
  const cleaned = phone.replace(/\D/g, "");
  return phoneRegex.test(cleaned);
}

// แปลงเวลาเป็นข้อความ
export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

// แปลงวันที่เป็นข้อความ
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

// สร้าง delay สำหรับ animation
export function staggerDelay(index: number, baseDelay: number = 0.1): number {
  return index * baseDelay;
}

// ตรวจสอบว่าอยู่ในโหมด development หรือไม่
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

// ตรวจสอบว่าอยู่ในโหมด production หรือไม่
export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

// จัดการ smooth scroll
export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId.replace("#", ""));
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// สร้าง loading delay
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// จัดรูปแบบตัวเลข
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("th-TH").format(num);
}

// แปลง bytes เป็น human readable
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

// ตัดข้อความ
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
}

// ลบ HTML tags
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

// สร้าง unique ID
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// จัดการ error message
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ";
}

// ตรวจสอบ browser support
export function checkBrowserSupport(): {
  webp: boolean;
  webgl: boolean;
  localStorage: boolean;
} {
  const canvas = document.createElement("canvas");
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  return {
    webp: (() => {
      const canvas = document.createElement("canvas");
      return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    })(),
    webgl: !!gl,
    localStorage: (() => {
      try {
        const test = "test";
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch (e) {
        return false;
      }
    })(),
  };
}
