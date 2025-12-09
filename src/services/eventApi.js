import { api } from "./api";

// upcoming-events
export const getForthcomingEvents = async () => {
  try {
    const res = await api.get("upcoming-events");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("upcoming-events:", error);
    return [];
  }
};

// all-past-events
export const getPastEvents = async () => {
  try {
    const res = await api.get("all-past-events");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("all-past-events:", error);
    return [];
  }
};

// INDEE
export const getIndee = async () => {
  try {
    const res = await api.get("events/indee-exhibitions-text");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("indee-exhibition:", error);
    return [];
  }
};

// INDEE-Events
export const getIndeeEvents = async () => {
  try {
    const res = await api.get("events/indee-exhibition");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("indee-exhibition:", error);
    return [];
  }
};

// iess
export const getIess = async () => {
  try {
    const res = await api.get("events/iess");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("iess:", error);
    return [];
  }
};

// iess-previous
export const getIessPrev = async () => {
  try {
    const res = await api.get("events/previous-iess");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("previous-iess:", error);
    return [];
  }
};

// All Webinar Seminar
export const getWebinarSeminar = async () => {
  try {
    const res = await api.get("all-webinar-seminar");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("all-webinar-seminar:", error);
    return [];
  }
};

//specific Webinar Seminar
export const getSpecificWebinarSeminar = async (url) => {
  try {
    const res = await api.get(`upcoming-webinar-seminar/${url}`);
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("all-webinar-seminar:", error);
    return [];
  }
};




// All Past Webinar Seminar
export const getPastWebinarSeminar = async () => {
  try {
    const res = await api.get("past-webinar-seminar");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("past-webinar-seminar:", error);
    return [];
  }
};

// Other Events
export const getOtherEvents = async () => {
  try {
    const res = await api.get("events/other-events");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("events/other-events:", error);
    return [];
  }
};

// Award Presentation Details
export const getAwardPresentationDetails = async (slug) => {
  try {
    const res = await api.get(`events/past-award-presentations/${slug}`);
    // console.table(res.data.data[0]);
    return res.status === 200 ? res.data.data[0] : [];
  } catch (error) {
    console.error("events/award-presentation:", error);
    return [];
  }
};

// Past Award Presentation Details
export const getPastAwardPresentation = async () => {
  try {
    const res = await api.get("events/past-award-presentations");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("past-award-presentations:", error);
    return [];
  }
};
