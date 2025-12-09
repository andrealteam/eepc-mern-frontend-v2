import axios from "axios";
import api, {
  API_MASTER,
  memberBaseUrl,
  memberProfileURL,
  myMembershipURL,
  myParticipationsURL,
  sendFormData,
} from "./api";
import Cookies from "js-cookie";

export const getProfile = async (member_id) => {
  try {
    const formData = new FormData();
    formData.append("mem_id", Cookies.get("member_id"));
    const res = await sendFormData(memberProfileURL, formData);
    if (res.status === 200 && res.data.status) {
      return res.data || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error in member my-profile :", error);
    return [];
  }
};

export const getExporterHomePage = async (member_id) => {
  try {
    const res = await api.get(`get-exporter-homepage/${member_id}`);
    // console.log("res check",res)
    if (res.status === 200) {
      return res.data || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error in member my-profile :", error);
    return [];
  }
};

export const getAllUsersForMsg = async (member_id) => {
  try {
    const res = await api.get(`get-member-messages/${member_id}`);
    // console.log("res check",res)
    if (res.status === 200) {
      return res.data || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error in member my-profile :", error);
    return [];
  }
};

export const getAllReviewTestimonials = async (member_id) => {
  try {
    const res = await api.get(
      `get-exporter-testimonial-by-member/${member_id}`
    );
    // console.log("res check",res)
    if (res.status === 200) {
      return res.data.data || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error in member my-profile :", error);
    return [];
  }
};

//get Exporter Activity Log
export const getExporterActivityLog = async (member_id) => {
  try {
    const res = await api.get(`get-exporter-activity-log/${member_id}`);
    // console.table(res.data.data);
    return res.status === 200 ? res.data?.data : [];
  } catch (error) {
    console.error("Exporter Home:", error);
    return [];
  }
};

//get Messages
export const getMessages = async (email, website_url) => {
  try {
    const res = await api.post(`get-messages-based-on-email/${website_url}`, {
      email: email,
    });

    return res.status === 200 ? res.data.data : {};
  } catch (error) {
    console.error("Get Header:", error);
    return {};
  }
};

// Post Message
export const postMessages = async (data, website_url) => {
  try {
    const res = await api.post(`exporter-messages-post/${website_url}`, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      from_user: data.from_user,
    });

    if (res.status === 200 && res.status) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    console.error("update:", error);
    return {};
  }
};

// post and get edit on edit button click
export const postEdit = async (member_id) => {
  try {
    const res = await api.post(`exporter-testimonial-edit-status-change`, {
      member_id: member_id,
    });

    if (res.status === 200) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    console.error("update:", error);
    return {};
  }
};


// edit product panel in profile
export const postEditProductPanel = async (member_id,productPanel) => {
  try {
    const res = await api.post(`update-exporter-product-panel-section`, {
      member_id: member_id,
      product_panel:productPanel
    });

    if (res.status === 201) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    console.error("update:", error);
    return {};
  }
};

// Post Review Testimonial
export const postReviewTestimonial = async (id, is_live) => {
  try {
    const res = await api.post(`exporter-testimonial-status-change`, {
      id: id,
      is_live: is_live,
    });

    if (res.status === 200 && res.status) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    console.error("update:", error);
    return {};
  }
};

export const postEditExporterHomePage = async (member_id) => {
  try {
    const res = await api.post("exporter-homepage-edit-status-change", {
      member_id: member_id,
    });

    if (res.status === 200 && res.status) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    console.error("update:", error);
    return {};
  }
};

export const myMembershipData = async (member_id) => {
  try {
    const formData = new FormData();
    formData.append("mem_id", member_id);
    const res = await sendFormData(myMembershipURL, formData);
    if (res.status === 200 && res.data.status) {
      return res.data || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error in member my-profile :", error);
    return [];
  }
};

export const getExportReturn = async (member_id) => {
  try {
    const formData = new FormData();
    formData.append("mem_id", member_id);
    const res = await sendFormData(
      "https://export.eepcindia.com/webservices/get_export_information_details",
      formData
    );
    if (res.status === 200 && res.data.status) {
      return res.data.message || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error Export Return :", error);
    return [];
  }
};

export const getPhysicalEvents = async (member_id) => {
  try {
    const formData = new FormData();
    formData.append("mem_id", `M${member_id}`);
    const res = await sendFormData(myParticipationsURL, formData);
    // console.log(res.data);
    if (res.status === 200 && res.data.status) {
      // console.log(res.data.status);
      return res.data || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error in member my-profile :", error);
    return [];
  }
};

export const getVirtualEvents = async (member_id) => {
  try {
    const formData = new FormData();
    formData.append("mem_id", member_id);
    const res = await sendFormData(
      "https://eepcvirtualexpo.com/webservices/get_participation_details",
      formData
    );
    // console.log(res.data);
    if (res.status === 200 && res.data.status) {
      // console.log(res.data.status);
      return res.data || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error in member my-profile :", error);
    return [];
  }
};

// Tender
export const getTender = async () => {
  try {
    // const res = await api.get(`employee/employee-profile/${eid}`);
    const res = await axios.get("https://info.eepcindia.org/api/tender");
    // console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Tender:", error);
    return [];
  }
};

// Reset password function for member
export const changePwdMember = async (data) => {
  const url = memberBaseUrl + API_MASTER + "reset_member_password";

  const formData = new FormData();
  formData.append("mem_id", data.memberId);
  formData.append("mem_email", data.memberEmail);

  try {
    const res = await sendFormData(url, formData);
    // If signup is successful
    if (res.status === 200 && res.data.status) {
      return res.data;
    } else {
      throw new Error("Member reset password failed");
    }
  } catch (error) {
    console.error("Member failed:", error);
    return { status: false, message: "Member reset password Failed" };
  }
};
