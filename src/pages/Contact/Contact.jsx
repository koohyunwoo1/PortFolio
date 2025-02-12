import React, { useState, useEffect } from "react";
import HeaderBar from "../../components/Home/HeaderBar";
import "../../style/Contact/Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Arrow from "../../components/common/Arrow";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [showHeaderBar, setShowHeaderBar] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const handleArrowClick = () => {
    const projectSubtitleElement = document.getElementById("Contact-subtitle");
    if (projectSubtitleElement) {
      projectSubtitleElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const projectItemElement = document.getElementById("Contact-item");
    if (projectItemElement) {
      const rect = projectItemElement.getBoundingClientRect();
      setShowHeaderBar(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(text + "를 복사하셨습니다.");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    setAnimateTitle(true);

    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="Contact">
      {showHeaderBar && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            width: "80%",
            margin: "0 auto",
            transition: "opacity 0.3s ease",
            opacity: showHeaderBar ? 1 : 0,
          }}
        >
          <HeaderBar />
        </div>
      )}
      <div className={`ContactTitle ${animateTitle ? "fade-in" : ""}`}>
        <i
          className="fas fa-project-diagram"
          style={{ marginRight: "10px" }}
        ></i>
        Contact
      </div>
      {showArrow && (
        <div onClick={handleArrowClick}>
          <Arrow />
        </div>
      )}
      <div className="ContactContainer">
        <div className="ContactSubtitle" id="Contact-subtitle">
          CONTACT
        </div>
        <div className="ContactSubtitle2" id="Contact-item">
          <div>
            <a
              href="https://github.com/koohyunwoo1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <div style={{ fontWeight: 200, fontSize: "14px" }}>USERNAME</div>
            <div
              onClick={() => handleCopyToClipboard("koohyunwoo1")}
              className="ContactCopy"
            >
              koohyunwoo1
            </div>
          </div>
          <div>
            <a href="mailto:kjklovekhw@gmail.com">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <div style={{ fontWeight: 200, fontSize: "14px" }}>GMAIL</div>
            <div
              onClick={() => handleCopyToClipboard("kjklovekhw@gmail.com")}
              className="ContactCopy"
            >
              kjklovekhw@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
