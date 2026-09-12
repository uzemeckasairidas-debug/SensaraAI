import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in seconds — pass `index * 0.08` for a card grid. */
  delay?: number;
  /** Starting vertical offset in pixels. */
  y?: number;
}

/** Fades an element up into place the first time it enters the viewport,
 * via GSAP + ScrollTrigger rather than framer-motion's whileInView — used
 * for section headings and card grids so reveals feel consistent with the
 * GSAP-driven 3D orb elsewhere on the page. */
export function Reveal({ children, className = '', delay = 0, y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
