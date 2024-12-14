import React, { useEffect, useRef, useState } from "react";
import "../../style/Components/Header.css";
import "../../style/Profile/Profile.css";

const Header = () => {
  const hrRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (hrRef.current) {
      observer.observe(hrRef.current);
    }

    return () => {
      if (hrRef.current) {
        observer.unobserve(hrRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1 className="Header">Front-end Developer</h1>
      <hr ref={hrRef} className={`ProfileHr ${isVisible ? "animate" : ""}`} />
    </div>
  );
};

export default Header;
