import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BannerPlatinum = () => {
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-09-21T00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="floating-notice">
      <a href="#" className="notice-img">
        <img
          src="https://andrealtech.in/eepc-landing/assets/images/logo-w.png"
          alt="Logo"
        />
      </a>
      <p className="blink-text" style={{ color: "#fff", fontSize: "20px" }}>
        Celebrating Excellence in Engineering Exports
      </p>

      <div className="floating-count">
        <a href="#">
          <span className="counts">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="texts">Days</span>
        </a>
        <a href="#">
          <span className="counts">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="texts">Hours</span>
        </a>
        <a href="#">
          <span className="counts">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="texts">Minutes</span>
        </a>
        <a href="#">
          <span className="counts">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="texts">Seconds</span>
        </a>
      </div>

      <div className="read-btn-wrap">
        <a
          href="https://eepcindia.org/platinum-jubilee"
          className="read-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BannerPlatinum;
