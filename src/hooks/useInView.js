import { useEffect, useRef, useState } from "react";

// once: 한 번 보이면 관찰을 멈춘다 (등장 애니메이션용)
export const useInView = ({ threshold = 0.15, once = false } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (once && entry.isIntersecting) observer.disconnect();
      },
      { threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, inView];
};
