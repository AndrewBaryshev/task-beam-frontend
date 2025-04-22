import { useEffect, useRef, useState } from 'react';

import { useMediaQuery } from './useMediaQuery';

export const useCardAnimation = () => {
  const [isHovering, setIsHovering] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  // hover animation only for PC
  const isTouchDevice = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!cardRef.current) {
        return;
      }
      setIsHovering(true);
      const { clientX, clientY } = event;
      const { width, height, left, top } =
        refContainer.current!.getBoundingClientRect();

      const maxRotation = 15;

      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const rotateY = -((clientX - centerX) / (width / 2)) * maxRotation;
      const rotateX = -((centerY - clientY) / (height / 2)) * maxRotation;

      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'unset';

        setTimeout(() => {
          if (cardRef.current) {
            setIsHovering(false);
          }
        }, 300);
      }
    };

    const container = refContainer.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isHovering]);

  if (isTouchDevice) {
    return { isHovering: false, refContainer: null, cardRef: null };
  }

  return { isHovering, refContainer, cardRef };
};
