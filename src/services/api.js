import axios from "axios";
import Cookies from "js-cookie";

export const baseFileURL = "https://www.eepcindia.org/backend/";
export const baseFileURLInfo = "https://info.eepcindia.org/";
export const baseFileURLNews = "https://news.eepcindia.com/";

export const memberBaseUrl = "https://members.eepcindia.com/";
export const memberLogin = "oauth/validate_user";
export const API_MASTER = "Api_master/";
export const memberProfileURL = memberBaseUrl + API_MASTER + "my_profile";
export const myMembershipURL = memberBaseUrl + API_MASTER + "my_membership";
export const eepcURLS = "https://app.eepcindia.com/ems/webservices/";
export const myParticipationsURL = eepcURLS + "get_participation_details";
export const guestLogin = memberBaseUrl + API_MASTER + "validate_guest_user";
export const guestProfile = "guest_profile";
export const guestProfileURL = memberBaseUrl + API_MASTER + guestProfile;
export const baseSupplierURL = "https://rcmc.eepcindia.com/webservices/";

//Static token
export const SUPPLIER_TOKEN = "ec114620220922-RCMC-andr-20220930";

// Set up Axios instance
export const api = axios.create({
  baseURL: "https://www.eepcindia.org/backend/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Set up Axios instance
export const apiInfo = axios.create({
  baseURL: "https://info.eepcindia.org/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendFormData = async (url, formData) => {
  try {
    const response = await axios.post(url, formData);
    // const response = await axios.post(url, formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    return response;
  } catch (error) {
    console.error("Error during API request:", error);
    throw error;
  }
};

// Interceptor to add the JWT token from cookies to headers
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("auth_token"); // Use the correct token name here
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
