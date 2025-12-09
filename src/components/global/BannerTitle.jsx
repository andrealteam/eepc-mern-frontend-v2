import React from "react";
import { useLocation } from "react-router-dom";

function formatSegment(segment) {
  const decoded = decodeURIComponent(segment.toLowerCase());

  if (decoded === "bsms-rbsms") return "BSMs/RBSMs";

  return decoded
    .split("-")
    .map((word) => {
      if (word.includes("eepc")) return "EEPC";
      if (word === "mou") return "MOUs";
      if (word === "depb") return "DEPB";
      if (word === "hs") return "HS";
      if (word === "exim") return "EXIM";
      if (word === "loc") return "LoC";
      if (word === "mai") return "MAI";
      if (word === "iess") return "IESS";
      if (word === "indee") return "INDEE";
      if (word === "msme") return "MSME";
      if (word === "dgft") return "DGFT";
      if (word === "gst") return "GST";
      if (word === "rbi") return "RBI";

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function BannerTitle() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  let formattedTitle = "";

  if (location.pathname.startsWith("/hs-codes")) {
    formattedTitle = "HS Codes";
  } else if (location.pathname.startsWith("/big-mint")) {
    formattedTitle = "Bigmint";
  } else if (location.pathname.includes("/dashboard")) {
    const dashboardSegment =
      location.pathname.split("/dashboard")[1]?.split("/").filter(Boolean)[0] ||
      "";
    formattedTitle = formatSegment(dashboardSegment);
  } else if (pathSegments[0] === "award-scheme" && pathSegments[1]) {
    formattedTitle = formatSegment(pathSegments[1]);
  } else if (pathSegments[0] === "trade-associations" && pathSegments[1]) {
    formattedTitle = formatSegment(pathSegments[1]);
  } else if (pathSegments[0] === "gallery-view") {
    formattedTitle = "Gallery View";
  } else if (pathSegments[0] === "gallery") {
    formattedTitle = formatSegment(pathSegments[1]);
  } else {
    formattedTitle = pathSegments
      .map((segment) => {
        if (segment === "indee-exhibitions") return "INDEE Exhibitions";
        if (segment === "iess-exhibitions") return "IESS Exhibitions";
        return formatSegment(segment);
      })
      .join(" ");
  }

  // 🎯 FINAL: force uppercase unless special formatting required
  const finalTitle =
    formattedTitle === "India Uk Ceta Faq"
      ? "India–UK CETA FAQs"
      : formattedTitle.toUpperCase();

  return <h1>{finalTitle}</h1>;
}

export default BannerTitle;
