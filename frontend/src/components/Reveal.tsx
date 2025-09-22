import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  variant?: 'up' | 'left' | 'right' | 'fade';
  delayMs?: number;
  className?: string;
  repeat?: boolean; // if true, animate every time it enters viewport
};

export default function Reveal({ children, variant = 'up', delayMs = 0, className = '', repeat = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (repeat) {
              setTimeout(() => setVisible(true), delayMs);
            } else {
              setTimeout(() => setVisible(true), delayMs);
              observer.unobserve(entry.target);
            }
          } else if (repeat) {
            // reset when leaving viewport to re-trigger on scroll back
            setVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  const base = 'reveal';
  const dir = variant ? ` reveal-${variant}` : '';
  const vis = visible ? ' reveal-visible' : '';

  return (
    <div ref={ref} className={`${base}${dir}${vis} ${className}`.trim()}>
      {children}
    </div>
  );
}


