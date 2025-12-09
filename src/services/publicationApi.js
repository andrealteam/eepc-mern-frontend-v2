import { api, baseFileURL, sendFormData } from "./api";

// publications
export const getPublications = async () => {
  try {
    const res = await api.get("publications");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("publications:", error);
    return [];
  }
};
// PublicationsEepc;
// strategy-paper
export const getStrategy = async () => {
  try {
    const res = await api.get("strategy-paper");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("strategy-paper:", error);
    return [];
  }
};

// Preventing Sexual Harassment
export const getPreventingSexualHarassment = async () => {
  try {
    const res = await api.get("preventing_sexual_harassment");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("preventing_sexual_harassment:", error);
    return [];
  }
};

// Annual Report
export const getAnnualReport = async () => {
  try {
    const res = await api.get("annual-report");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("annual-report:", error);
    return [];
  }
};

// update Profile
export const postCareer = async (formData) => {
  console.log("in api career", formData)
  const url = baseFileURL + "api/career-send-mail";
  try {
    const res = await sendFormData(url, formData);
    if (res.status === 200 && res.data.status) {
      // console.log(res.data.status);
      return res.data || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error posting data:", error);
    throw new Error("Failed to submit the form.");
  }
};
