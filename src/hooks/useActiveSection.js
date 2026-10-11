import { useEffect, useState } from "react";

// 화면 중앙에 걸쳐 있는 섹션 id 를 반환한다.
export const useActiveSection = (ids) => {
  const [activeId, setActiveId] = useState(null);
  const idsKey = ids.join(",");

  useEffect(() => {
    const elements = idsKey
      .split(",")
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
};
