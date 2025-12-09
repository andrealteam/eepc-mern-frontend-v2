import axios from "axios";
import { api, baseFileURL, sendFormData } from "./api";

// My Profile
export const getProfile = async (emp_code) => {
  try {
    // console.log("profile");
    const res = await api.get(`employee/employee-profile/${emp_code}`);
    // const res = await api.get(`employee/employee-profile/0339`);
    // console.info(res.data.data[0]);
    return res.status === 200 ? res.data.data[0] : [];
  } catch (error) {
    console.error("my-colleagues:", error);
    return [];
  }
};

// Colleague Profile
export const getProfileById = async (eid) => {
  try {
    const res = await api.get(`employee/employee-profile/${eid}`);
    // const res = await api.get(`employee/employee-profile/0339`);
    // console.info(res.data.data[0]);
    return res.status === 200 ? res.data.data[0] : [];
  } catch (error) {
    console.error("my-colleagues:", error);
    return [];
  }
};

//My Colleagues
export const getColleagues = async (id) => {
  try {
    const res = await api.get(`employee/my-colleagues/${id}`);
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data.colleague : [];
  } catch (error) {
    console.error("my-colleagues:", error);
    return [];
  }
};

// MOU
export const getMou = async () => {
  try {
    const res = await api.get("mous");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("MOU:", error);
    return [];
  }
};
// Ie2
export const getIe2 = async () => {
  try {
    const res = await api.get("ie2-archive-list");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Ie2:", error);
    return [];
  }
};
// export-import-monitor
export const getIeMonitor = async () => {
  try {
    const res = await api.get("export-import-monitor");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("export-import-monitor:", error);
    return [];
  }
};
// metal-price-monitor-archive-list
export const getMetalPriceMonitor = async () => {
  try {
    const res = await api.get("metal-price-monitor-archive-list");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Metal Price Monitor:", error);
    return [];
  }
};
// Info Bulletin
export const getInfoBulletin = async () => {
  try {
    const res = await axios.get("https://info.eepcindia.org/api/infobulletin");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Info Bulletin:", error);
    return [];
  }
};
// Holiday List
export const getHolidays = async (emp_office) => {
  try {
    const res = await api.post("holiday-list", {
      emp_office: emp_office,
    });
    console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Info Bulletin:", error);
    return [];
  }
};

// birthday
export const getBirthdays = async (id) => {
  try {
    const res = await api.get(`employee/employee-birthday/${id}`);
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("employee-birthday:", error);
    return [];
  }
};

// post birthday
export const postBirthdays = async (data) => {
  console.log("post bth", data);
  try {
    const response = await api.post(`employee/birthday-wish`, {
      emp_from: data?.emp_from,
      emp_to: data?.id,
      message: data?.message,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw new Error("Failed to submit the form.");
  }
};

// update Profile
export const updateProfile = async (data) => {
  console.log("post bth", data);
  const formData = new FormData();

  formData.append("emp_code", data.emp_code);
  formData.append("mobile_no", data.mobile);
  formData.append("food_preference", data.foodPreference);
  formData.append("pan_no", data.pan);
  if (data.passportFile instanceof File) {
    formData.append("passport", data.passportFile);
  }
  formData.append("passport_no", data.passportNo);
  formData.append("passport_place_of_issue", data.passportPlace);
  formData.append("passport_date_of_issue", data.passportIssue);
  formData.append("passport_date_of_expiry", data.passportExpiry);
  formData.append("about_me", data.aboutMe);
  formData.append(
    "extra_curricular_activities",
    data.extraCurricularActivities
  );
  formData.append("acheivements", data.acheivements);

  const url = baseFileURL + "api/employee/update-profile";
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

// update Profile
export const updateProfileImage = async (data) => {
  console.log("post image", data);
  const formData = new FormData();

  formData.append("emp_code", data.emp_code);
    formData.append("image", data.image);

  const url = baseFileURL + "api/employee/update-profile-image";
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

//get birthday message
export const getBirthdayMessages = async (id) => {
  try {
    const res = await api.get(
      `employee/employee-birthday-wish-notification/${id}`
    );
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("employee-birthday:", error);
    return [];
  }
};
