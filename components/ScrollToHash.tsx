import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;

    const rawTargetId = hash.substring(1).toLowerCase();
    const targetId =
      rawTargetId === 'imu' || rawTargetId === 'vision'
        ? `${rawTargetId}-terms`
        : rawTargetId;

    let cancelled = false;
    let attempts = 0;

    const scrollToTarget = () => {
      if (cancelled) return;

      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo(0, 0);
        window.scrollTo({
          top: Math.max(offsetPosition, 0),
          behavior: 'auto',
        });
        return;
      }

      attempts += 1;
      if (attempts < 30) {
        window.requestAnimationFrame(scrollToTarget);
      }
    };

    window.requestAnimationFrame(scrollToTarget);

    return () => {
      cancelled = true;
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
