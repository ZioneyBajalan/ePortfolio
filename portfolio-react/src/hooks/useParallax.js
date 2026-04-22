import { useEffect, useRef } from 'react';

export const useParallax = (strength = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const scrollY = window.scrollY;
      const elementOffset = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      // Only apply parallax if element is in view
      if (
        scrollY + windowHeight > elementOffset &&
        scrollY < elementOffset + elementHeight
      ) {
        const yOffset = (scrollY - elementOffset) * strength;
        element.style.transform = `translateY(${yOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [strength]);

  return ref;
};
