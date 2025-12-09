import { api } from "./api";

export const getHomeBanner = async () => {
  try {
    const res = await api.get("home-banner");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Banner:", error);
    return [];
  }
};

//extra pages
export const getExtraPages = async (url) => {
  try {
    const res = await api.get(`get-extra-page/${url}`);
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("all-webinar-seminar:", error);
    return [];
  }
};

// Publications
export const getPublications = async () => {
  try {
    const res = await api.get("archive-ie2-metal-infobulletin-metal");
    // console.log(res.data);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error("Publication:", error);
    return [];
  }
};

//Awards
export const getAwardsLimit = async () => {
  try {
    const res = await api.get("award-scheme");
    // console.log(res.data.data.national_award_scheme);
    return res.status === 200 ? res.data.data.national_award_scheme : [];
  } catch (error) {
    console.error("Banner:", error);
    return [];
  }
};

// Upcoming Events
export const getUpcomingEvents = async () => {
  try {
    const res = await api.get("upcoming-events");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Upcoming Events:", error);
    return [];
  }
};

// Upcoming Webinar/Seminar
export const getUpcomingWebinar = async () => {
  try {
    const res = await api.get("upcoming-webinar-seminar");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Seminars / Webinars:", error);
    return [];
  }
};

// how-to-export
export const getHowToExport = async () => {
  try {
    const res = await api.get("how-to-export");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("how-to-exports:", error);
    return [];
  }
};

// export-benefits
export const getExportBenefits = async () => {
  try {
    const res = await api.get("export-benefits");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("export-benefits:", error);
    return [];
  }
};

// get-in-touch-submit
export const postGetInTouch = async (data) => {
  try {
    const response = await api.post("get-in-touch-submit", data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw new Error("Failed to submit the form.");
  }
};
// terms_of_use
export const getTermsOfUse = async () => {
  try {
    const res = await api.get("terms-of-use");
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("terms-of-use:", error);
    return [];
  }
};
// disclaimer
export const getDisclaimer = async () => {
  try {
    const res = await api.get("disclaimer");
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("disclaimer:", error);
    return [];
  }
};
// Privacy Policy
export const getPrivacyPolicy = async () => {
  try {
    const res = await api.get("privacy-policy");
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("PrivacyPolicy:", error);
    return [];
  }
};
import data from "./bigMint.json";
// Bigmint API
export const getBigMint = async () => {
  try {
    const res = await api.get(
      "https://www.bigmint.co/getApiData/EEPC_qkoeI6XB7YZhxupVE2Oe93"
    );
    // console.table(res.data);
    // console.table(data.price);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error("Big Mint:", error);
    return [];
  }
};
