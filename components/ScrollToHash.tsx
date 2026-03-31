import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash || pathname.startsWith('/legal')) return;

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
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }

      attempts += 1;
      if (attempts < 90) {
        window.setTimeout(scrollToTarget, 16);
      }
    };

    scrollToTarget();

    return () => {
      cancelled = true;
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
