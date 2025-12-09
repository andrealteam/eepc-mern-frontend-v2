import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const useFancybox = () => {
  useEffect(() => {
    // Initialize Fancybox globally to bind to all images with data-fancybox
    Fancybox.bind("[data-fancybox]", {
      zoom: true,
      loop: true,
      infinite: true,
      hideScrollbar: true,
      animationEffect: "fade",
      transitionEffect: "circular",
      buttons: ["zoom", "close", "share"],
    });
  }, []);
};

export default useFancybox;
