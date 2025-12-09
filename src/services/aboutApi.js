import { api } from "./api";

// FAQ
export const getFAQs = async () => {
  try {
    const res = await api.get("faq");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("FAQ:", error);
    return [];
  }
};

// Chairman
export const getChairmanPen = async () => {
  try {
    const res = await api.get("chairman-pen");
    // console.log(res.data);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error("ChairmanPen:", error);
    return [];
  }
};

// Brief Profile
export const getBriefProfile = async () => {
  try {
    const res = await api.get("brief-profile");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("BriefProfile:", error);
    return [];
  }
};

// Activities
export const getActivities = async () => {
  try {
    const res = await api.get("activities-and-services");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Activities:", error);
    return [];
  }
};

// Seminar Conferences
export const getSeminarConferences = async () => {
  try {
    const res = await api.get("seminars_and_conferences");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("SeminarConferences:", error);
    return [];
  }
};

// Buyer Seller
export const getBuyerSeller = async () => {
  try {
    const res = await api.get("buyer-seller-meet-delegation");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("BuyerSeller:", error);
    return [];
  }
};

// promote-made-in-india-brand
export const getPromote = async () => {
  try {
    const res = await api.get("promote-made-in-india-brand");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("promote-made-in-india-brand:", error);
    return [];
  }
};

// services-to-members
export const getServicesMembers = async () => {
  try {
    const res = await api.get("services-to-members");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("services-to-members:", error);
    return [];
  }
};

// exhibitions-and-trade-fairs
export const getExhibitionsTrade = async () => {
  try {
    const res = await api.get("exhibitions-and-trade-fairs");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("exhibitions-and-trade-fairs:", error);
    return [];
  }
};

// services-to-foreign-buyers
export const getServicesForeign = async () => {
  try {
    const res = await api.get("services-to-foreign-buyers");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("services-to-foreign-buyers:", error);
    return [];
  }  
};

// Product Panels
export const getProductPanels = async () => {
  try {
    const res = await api.get("product-panel");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("product-panel:", error);
    return [];
  }
};
