import { guestProfileURL, sendFormData } from "./api";


export const getGuestProfile = async (user_id) => {
  try {
    const formData = new FormData();
    formData.append('user_email', user_id);
    const res = await sendFormData(guestProfileURL, formData);
    if (res.status === 200 && res.data.status) {
      return res.data || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Erro in member my-profile :", error);
    return [];
  }
};