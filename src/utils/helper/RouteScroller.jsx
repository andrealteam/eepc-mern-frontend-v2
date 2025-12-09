import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteScroller = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location]);
};

export default RouteScroller;
