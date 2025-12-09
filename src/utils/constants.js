// Logos imports
import logoLeft from "../assets/images/logo-left.png";
import logoRight from "../assets/images/70_year_logo-r.png";
// import logoRight from "../assets/images/70_year_logo.png";
// import logoRight from "../assets/images/logo-right.png";
import logoMiddle from "../assets/images/logo-middle.jpg";
import Bmge from "../assets/images/BMGE-MoC-logo-white.png";
import bgPattern from "../assets/images/bg-pattern.jpeg";
export { bgPattern };
// Banner imports
import bannerImage1 from "../assets/images/banner/1.jpg";
import logoWhite from "../assets/images/logo-white.png";
import pubicationImg1 from "../assets/images/publications/1697011018.png";
//Page Banner imports
import brief from "../assets/images/banner/brief-banner.webp";

// Awards Image Imports
import awardsIcon from "../assets/images/icon/awards-icon.png";
export { awardsIcon };

import awardConstantImg from "../assets/images/award.jpg";
export { awardConstantImg };

// New Badge Icon
import newBadgeIcon from "../assets/images/icon/new-badge.png";
export { newBadgeIcon };

// QR and App Store/Google Play images
import qrCodeImage from "../assets/images/QR_code_for_mobile_English_Wikipedia.svg";
import googlePlayImage from "../assets/images/icon/google-play.png";
import appStoreImage from "../assets/images/icon/app-store.png";
import mobileMockupImage from "../assets/images/mob-mockup.webp";

// Import images for useful links
import demographyIcon from "../assets/images/icon/demography.png";
import developerGuideIcon from "../assets/images/icon/developer_guide.png";
import addChartIcon from "../assets/images/icon/add_chart.png";
import faqIcon from "../assets/images/icon/faq.png";
import memberIcon from "../assets/images/icon/member-card.png";
export { demographyIcon, developerGuideIcon, addChartIcon, memberIcon };

// Import images for photo gallery
import galleryImg1 from "../assets/images/photo-gallery/1731315451.jpg";
import galleryImg2 from "../assets/images/photo-gallery/1731063504.jpeg";
import galleryImg3 from "../assets/images/photo-gallery/1730091668.jpeg";
import galleryImg4 from "../assets/images/photo-gallery/1731068230.jpeg";

// Import images for catalogue
import cataloguePump from "../assets/images/catalogue/pump.png";
import catalogueMedical from "../assets/images/catalogue/medical.png";
import catalogueMachinery from "../assets/images/catalogue/machinery.png";
import catalogueTextile from "../assets/images/catalogue/textile.png";
import catalogueTools from "../assets/images/catalogue/tools.png";
import catalogueConstruction from "../assets/images/catalogue/construction.png";
import catalogueAgri from "../assets/images/catalogue/agricultural.png";
import catalogueHand from "../assets/images/catalogue/hand-tools.png";
import fallBackImage from "../assets/images/fallback-img.webp";
export { fallBackImage };
import infoFallbackImage from "../assets/images/info-fallback.jpg";
export { infoFallbackImage };

export const Logos = {
  logoLeft: {
    imgSrc: logoLeft,
    altText: "Department Commerce Logo",
  },
  logoRight: {
    imgSrc: logoRight,
    altText: "EEPC India Logo",
  },
  logoMiddle: {
    imgSrc: logoMiddle,
    altText: "indian engineering",
  },
  logoWhite: {
    imgSrc: logoWhite,
    altText: "EEPC India Logo",
  },
  Bmge: {
    imgSrc: Bmge,
    altText: "EEPC India Logo",
  },
};

export const pageBannerList = {
  brief: {
    imgSrc: brief,
    altText: "Brief Banner",
  },
};

export const bannerList = [
  {
    id: 1,
    banner: bannerImage1,
    altText: "Banner 1",
  },
  {
    id: 2,
    banner: bannerImage1,
    altText: "Banner 2",
  },
  {
    id: 3,
    banner: bannerImage1,
    altText: "Banner 3",
  },
];

export const publicationList = [
  {
    id: 1,
    title: "Engineering export analysis",
    imageSrc: pubicationImg1,
    link: "#",
  },
  {
    id: 2,
    title: "Market analysis report",
    imageSrc: pubicationImg1,
    link: "#",
  },
  {
    id: 1,
    title: "Export performance 2024",
    imageSrc: pubicationImg1,
    link: "#",
  },
];

// Array of forthcoming events
export const forthcomingEvents = [
  {
    id: 1,
    title: "Gulfood Manufacturing 2024",
    date: "5th November 2024 - 7th November 2024",
    location: "Dubai, UAE",
    link: "#",
  },
  {
    id: 2,
    title: "Gulfood Manufacturing 2024",
    date: "5th November 2024 - 7th November 2024",
    location: "Dubai, UAE",
    link: "#",
  },
  {
    id: 3,
    title: "Gulfood Manufacturing 2024",
    date: "5th November 2024 - 7th November 2024",
    location: "Dubai, UAE",
    link: "#",
  },
  {
    id: 4,
    title: "Gulfood Manufacturing 2024",
    date: "5th November 2024 - 7th November 2024",
    location: "Dubai, UAE",
    link: "#",
  },
];

// Array of upcoming seminars/webinars
export const upcomingSeminars = [
  {
    id: 1,
    title: "Gulfood Manufacturing 2024",
    date: "5th November 2024 - 7th November 2024",
    location: "Dubai, UAE",
    link: "#",
  },
  {
    id: 2,
    title: "Gulfood Manufacturing 2024",
    date: "5th November 2024 - 7th November 2024",
    location: "Dubai, UAE",
    link: "#",
  },
  {
    id: 3,
    title: "Gulfood Manufacturing 2024",
    date: "5th November 2024 - 7th November 2024",
    location: "Dubai, UAE",
    link: "#",
  },
  {
    id: 4,
    title: "Gulfood Manufacturing 2024",
    date: "5th November 2024 - 7th November 2024",
    location: "Dubai, UAE",
    link: "#",
  },
];

export const AppDownloadImages = {
  qrCode: qrCodeImage,
  googlePlay: googlePlayImage,
  appStore: appStoreImage,
  mobileMockup: mobileMockupImage,
};

// Policy Links Array
export const policyLinks = [
  {
    id: 1,
    icon: demographyIcon,
    altText: "How To Export",
    link: "/how-to-export",
  },
  {
    id: 2,
    icon: developerGuideIcon,
    altText: "Export Benefits",
    link: "/export-benefits",
  },
  {
    id: 3,
    icon: addChartIcon,
    altText: "Foreign Trade Policy",
    link: "/foreign-trade-policy",
  },
  {
    id: 4,
    icon: demographyIcon,
    altText: "Tender Information",
    link: "https://www.eepcindia.org/auth/login",
  },
  {
    id: 5,
    icon: faqIcon,
    altText: "FAQS",
    link: "/frequently-asked-questions",
  },
  {
    id: 6,
    icon: addChartIcon,
    altText: "Get in Touch",
    link: "/enquiry-form",
  },
];

// export const catalogueImages = [
//   {
//     id: 1,
//     imgSrc: cataloguePump,
//     altText: "Pumps & Valves",
//     link: "https://ingineering-brands.com/pumps-and-valves",
//   },
//   {
//     id: 2,
//     imgSrc: cataloguePump,
//     altText: "Machine Tools",
//     link: "https://ingineering-brands.com/machine-tools",
//   },
//   {
//     id: 3,
//     imgSrc: cataloguePump,
//     altText: "Electrical Machineries",
//     link: "https://ingineering-brands.com/electrical-machineries-equipments-and-components",
//   },
//   {
//     id: 4,
//     imgSrc: cataloguePump,
//     altText: "Agricultural MAchineries",
//     link: "https://ingineering-brands.com/agricultural-Machinery-and-parts",
//   },
//   {
//     id: 5,
//     imgSrc: cataloguePump,
//     altText: "Pumps & Valves",
//     link: "https://ingineering-brands.com/pumps-and-valves",
//   },
//   {
//     id: 6,
//     imgSrc: cataloguePump,
//     altText: "Machine Tools",
//     link: "https://ingineering-brands.com/machine-tools",
//   },
//   {
//     id: 7,
//     imgSrc: cataloguePump,
//     altText: "Electrical Machineries",
//     link: "https://ingineering-brands.com/electrical-machineries-equipments-and-components",
//   },
//   {
//     id: 8,
//     imgSrc: cataloguePump,
//     altText: "Agricultural MAchineries",
//     link: "https://ingineering-brands.com/agricultural-Machinery-and-parts",
//   },
// ];

export const photoGalleryData = [
  {
    id: 1,
    imgSrc: galleryImg1,
    altText: "Gallery Image 1",
    description:
      "5 Days Foreign Trade Master Class (on all aspects of foreign trading)",
    link: "#",
  },
  {
    id: 2,
    imgSrc: galleryImg2,
    altText: "Gallery Image 2",
    description: "Curtain Raiser on Bharat Mobility 2025",
    link: "#",
  },
  {
    id: 3,
    imgSrc: galleryImg3,
    altText: "Gallery Image 3",
    description:
      "Niryat Bandhu Seminar on Engineering Export Opportunities & Role of EEPC India to Boost the Exports",
    link: "#",
  },
  {
    id: 4,
    imgSrc: galleryImg4,
    altText: "Gallery Image 4",
    description:
      "Launch of the Platinum Jubilee Celebrations of EEPC India as it turns 69",
    link: "#",
  },
];

// Array for Awards Data
export const awardsData = [
  {
    id: 1,
    title:
      "54th EEPC All India Award (2021 - 2022) & 55th EEPC ALL India Award (2022 - 2023)",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    imgSrc: awardsIcon,
    link: "#",
  },
  {
    id: 2,
    title:
      "54th EEPC All India Award (2021 - 2022) & 55th EEPC ALL India Award (2022 - 2023)",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    imgSrc: awardsIcon,
    link: "#",
  },
  {
    id: 3,
    title:
      "54th EEPC All India Award (2021 - 2022) & 55th EEPC ALL India Award (2022 - 2023)",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    imgSrc: awardsIcon,
    link: "#",
  },
];

// Array for Catalogue Data
export const catalogueData = [
  {
    id: 1,
    imgSrc: cataloguePump,
    altText: "Pumps & Valves",
    link: "https://ingineering-brands.com/pumps-and-valves",
  },
  {
    id: 2,
    imgSrc: catalogueMedical,
    altText: "Medical Devices",
    link: "https://ingineering-brands.com/surgical-equipments-medical-devices-and-pharmaceutical-machineries",
  },
  {
    id: 3,
    imgSrc: catalogueMachinery,
    altText: "Electrical Machineries, Equipments and Components",
    link: "https://ingineering-brands.com/electrical-machineries-equipments-and-components",
  },
  {
    id: 4,
    imgSrc: catalogueTextile,
    altText: "Textile Machinery and Accessories",
    link: "https://ingineering-brands.com/textiles-machineries",
  },
  {
    id: 5,
    imgSrc: catalogueTools,
    altText: "Machine Tools",
    link: "https://ingineering-brands.com/machine-tools",
  },
  {
    id: 6,
    imgSrc: catalogueConstruction,
    altText: "Construction & Earthmoving Machinery & Parts",
    link: "https://ingineering-brands.com/construction-and-earthmoving-machinery-and-parts",
  },
  {
    id: 7,
    imgSrc: catalogueAgri,
    altText: "Agricultural Machinery & Parts",
    link: "https://ingineering-brands.com/agricultural-Machinery-and-parts",
  },
  {
    id: 8,
    imgSrc: catalogueHand,
    altText: "Hand Tools",
    link: "https://ingineering-brands.com/hand-tools",
  },
];

import mockimg from "../assets/images/mock-img.jpg";
import mapWorldimg from "../assets/images/map-world.png";
export const mockImg = mockimg;
export const mapWorldImg = mapWorldimg;
