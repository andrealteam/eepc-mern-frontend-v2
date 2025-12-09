import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling more than 100px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    isVisible && (
      <div className="toTop" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    )
  );
};

export default ScrollToTopButton;
