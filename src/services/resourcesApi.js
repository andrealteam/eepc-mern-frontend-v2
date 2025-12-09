import { api } from "./api";

// mai-assistance
export const getMai = async () => {
  try {
    const res = await api.get("mai-assistance");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("mai-assistance:", error);
    return [];
  }
};

// sexual-harassment
export const getSexualHarassment = async () => {
  try {
    const res = await api.get("sexual-harassment");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("sexual-harassment:", error);
    return [];
  }
};

// useful-web-links
export const getUsefulWebLinks = async () => {
  try {
    const res = await api.get("useful-web-links");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("useful-web-links:", error);
    return [];
  }
};

// logistics
export const getLogistics = async () => {
  try {
    const res = await api.get("logistics");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("logistics:", error);
    return [];
  }
};

// eepc-india-conference-hall
export const getConferenceHall = async () => {
  try {
    const res = await api.get("eepc-india-conference-hall");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("eepc-india-conference-hall:", error);
    return [];
  }
};

// all-conference-hall-image
export const getConferenceHallImages = async () => {
  try {
    const res = await api.get("all-conference-hall-image");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("all-conference-hall-image:", error);
    return [];
  }
};

// award-scheme
export const getAwardScheme = async () => {
  try {
    const res = await api.get("award-scheme");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("award-scheme:", error);
    return [];
  }
};

// award-scheme-detail
export const getAwardDetail = async (id) => {
  try {
    const res = await api.get(`award-scheme/${id}`);
    // console.log(res.data.data[0]);
    return res.status === 200 ? res.data.data[0] : [];
  } catch (error) {
    console.error("award-scheme-detail:", error);
    return null;
  }
};

// trade-associations
export const getTradeAssociation = async () => {
  try {
    const res = await api.get("trade-associations");
    // console.log(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("trade-associations:", error);
    return [];
  }
};

// award-scheme-detail
// export const getTradeAssociationDetail = async (slug) => {
//   try {
//     const res = await api.get(`award-scheme/${slug}`);
//     // console.log(res.data.data[0]);
//     return res.status === 200 ? res.data.data[0] : [];
//   } catch (error) {
//     console.error("award-scheme-detail:", error);
//     return null;
//   }
// };

export const getTradeAssociationDetail = async (slug) => {
  try {
    // Make the GET request using the provided slug
    const res = await api.get(`trade-associations/${slug}`);

    // Check if the response status is 200 and if the data is available
    if (
      res.status === 200 &&
      Array.isArray(res.data.data) &&
      res.data.data.length > 0
    ) {
      // Return the first element of the data array
      console.log(res.data.data[0]);
      return res.data.data[0];
    } else {
      // If the data doesn't meet the condition, return an empty object or array
      return [];
    }
  } catch (error) {
    console.error("award-scheme-detail:", errorPublicationsEepc);
    // Return null in case of an error
    return null;
  }
};

// media room
export const getMediaCoverage = async (data = {}) => {
  try {
    const { toDate, fromDate } = data;
    console.log(data);
    // Only include params if both dates are valid
    const isDateValid = (dateStr) => /^\d{2}-\d{2}-\d{4}$/.test(dateStr);

    const hasValidDates = isDateValid(toDate) && isDateValid(fromDate);

    const endpoint = hasValidDates
      ? `https://news.eepcindia.com/webservices/get_media_coverage_news?ToDate=${toDate}&FromDate=${fromDate}`
      : `https://news.eepcindia.com/webservices/get_media_coverage_news`;

    const res = await api.get(endpoint);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error("Media Room:", error);
    return [];
  }
};
