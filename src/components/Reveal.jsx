import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...props }) {
  const elementRef = useRef(null);
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add('is-visible'); observer.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <Tag ref={elementRef} data-reveal style={{ '--reveal-delay': `${delay}ms` }} className={className} {...props}>{children}</Tag>;
}
