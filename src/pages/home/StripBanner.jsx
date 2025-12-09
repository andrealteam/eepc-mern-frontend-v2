import React, { useEffect, useState } from "react";
// import EEPC_award from "../../assets/images/banner/55th-award-2.jpg";

const StripBanner = () => {
  const targetDate = new Date("2025-09-21T00:00:00"); // 🎯 21st Sept 2025
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);
  return (
    <div className="e-banner1 mt-2">
  <div className="container-fluid">
    <div className="row g-3">
      <div className="col-md-6">
        <img 
          src="https://www.eepcindia.org/backend/uploads/1765173956.jpg" 
          className="img-fluid" 
          alt="Banner 1" 
        />
      </div>
      <div className="col-md-6">
        <img 
          src="https://www.eepcindia.org/backend/uploads/1765173937.jpg" 
          className="img-fluid" 
          alt="Banner 2" 
        />
      </div>
    </div>
  </div>
</div>
  );
};

export default StripBanner;
