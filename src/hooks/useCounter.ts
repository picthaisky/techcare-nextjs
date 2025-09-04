// src/hooks/useCounter.ts
import { useState, useEffect, useCallback } from "react";

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
}: UseCounterOptions) {
  const [count, setCount] = useState(start);
  const [isActive, setIsActive] = useState(false);

  const startCounter = useCallback(() => {
    if (isActive) return;

    setIsActive(true);
    const startTime = Date.now() + delay;
    const difference = end - start;

    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed < 0) return;

      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + difference * easeOutQuart);

      setCount(currentCount);

      if (progress >= 1) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [start, end, duration, delay, isActive]);

  return { count, startCounter, isActive };
}
