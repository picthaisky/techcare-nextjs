"use client";

import { useState } from "react";
import { ContactForm } from "@/lib/types";

interface UseContactFormReturn {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  submitForm: (data: ContactForm) => Promise<void>;
  resetForm: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: ContactForm) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      setIsSuccess(true);

      // Auto-reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  };

  return {
    isSubmitting,
    isSuccess,
    error,
    submitForm,
    resetForm,
  };
}

// Additional hooks for form management
export function useFormPersistence<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
      } catch {
        return defaultValue;
      }
    }
    return defaultValue;
  });

  const updateValue = (newValue: T) => {
    setValue(newValue);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error("Failed to save to localStorage:", error);
      }
    }
  };

  const clearValue = () => {
    setValue(defaultValue);
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };

  return [value, updateValue, clearValue] as const;
}
