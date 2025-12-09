import axios from "axios";
import { api, baseSupplierURL, sendFormData, SUPPLIER_TOKEN } from "./api";

// india-a-snapshot
export const getIndiaSnapshot = async () => {
  try {
    const res = await api.get("india-a-snapshot");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("india-a-snapshot:", error);
    return [];
  }
};

// Exporter Home
export const getExporterHome = async () => {
  try {
    const res = await api.get("exporters");
    // console.table(res.data.data);
    return res.status === 200 ? res.data?.data : [];
  } catch (error) {
    console.error("Exporter Home:", error);
    return [];
  }
};

// Product Panel
export const getProductPanelList = async () => {
  try {
    const res = await axios.get(baseSupplierURL + "get_panel_list");
    // console.table(res.data.message);
    return res.status === 200 ? res.data?.message : [];
  } catch (error) {
    console.error("Exporter Home:", error);
    return [];
  }
};

// Product Panel
export const getExporterProfile = async (name, email) => {
  try {
    const res = await api.post("favourite-website-list-sort", {
      name: name,
      email: email,
    });
    console.log("in service dataaaa", res.data.data);
    return res?.status === 200 && res?.data?.data ? res.data.data : [];
  } catch (error) {
    console.error("Exporter Home:", error);
    return [];
  }
};

// State List
export const getStateList = async () => {
  try {
    const res = await axios.get(baseSupplierURL + "get_state_list");
    // console.table(res.data.message);
    return res.status === 200 ? res.data?.message : [];
  } catch (error) {
    console.error("Exporter Home:", error);
    return [];
  }
};

// City List
export const getCityList = async () => {
  try {
    const res = await axios.get(baseSupplierURL + "get_city_list");
    // console.table(res.data.message);
    return res.status === 200 ? res.data?.message : [];
  } catch (error) {
    console.error("Exporter Home:", error);
    return [];
  }
};

// Product Panel List POST
export const postProductPanelList = async (data) => {
  const url = baseSupplierURL + "search_member_directory_panelwise";

  const formData = new FormData();
  formData.append("access_token", SUPPLIER_TOKEN);
  formData.append("panel", data.productPanel);

  if (data.selectedAlphabet) {
    formData.append("sort_by", data.selectedAlphabet);
  }

  try {
    const res = await sendFormData(url, formData);
    if (res.status === 200 && res.data.status) {
      return res.data.message;
    } else {
      throw new Error("Failed to get product panel");
    }
  } catch (error) {
    console.error("Indian Supplier failed:", error);
    return { status: false, message: "Failed to get product panel" };
  }
};

// Product Panel List POST
export const postProductList = async (data) => {
  const url = baseSupplierURL + "search_member_directory_productwise";

  const formData = new FormData();
  formData.append("access_token", SUPPLIER_TOKEN);
  formData.append("product", data.productWise);

  if (data.selectedAlphabet) {
    formData.append("sort_by", data.selectedAlphabet);
  }

  try {
    const res = await sendFormData(url, formData);
    if (res.status === 200 && res.data.status) {
      return res.data.message;
    } else {
      throw new Error("Failed to get product panel");
    }
  } catch (error) {
    console.error("Indian Suppluier failed:", error);
    return { status: false, message: "Failed to get product panel" };
  }
};
// HS Code List POST
export const postHsCodeList = async (data) => {
  const url = baseSupplierURL + "search_member_directory_hscodewise";

  const formData = new FormData();
  formData.append("access_token", SUPPLIER_TOKEN);
  formData.append("hscode", data.hsCodeWise);

  if (data.selectedAlphabet) {
    formData.append("sort_by", data.selectedAlphabet);
  }

  try {
    const res = await sendFormData(url, formData);
    if (res.status === 200 && res.data.status) {
      return res.data.message;
    } else {
      throw new Error("Failed to get HS Code");
    }
  } catch (error) {
    console.error("Indian Suppluier failed:", error);
    return { status: false, message: "Failed to HS Code" };
  }
};
// Company List POST
export const postCompanyList = async (data) => {
  const url = baseSupplierURL + "search_member_directory_organizationwise";

  const formData = new FormData();
  formData.append("access_token", SUPPLIER_TOKEN);
  formData.append("organization", data.companyWise);

  if (data.selectedAlphabet) {
    formData.append("sort_by", data.selectedAlphabet);
  }

  try {
    const res = await sendFormData(url, formData);
    if (res.status === 200 && res.data.status) {
      return res.data.message;
    } else {
      throw new Error("Failed to get Company list");
    }
  } catch (error) {
    console.error("Indian Suppluier failed:", error);
    return { status: false, message: "Failed to Company list" };
  }
};
// Region List POST
export const postRegionList = async (data) => {
  const url = baseSupplierURL + "search_member_directory_regionwise";
  // console.log(data.regionWise.value);
  const formData = new FormData();
  formData.append("access_token", SUPPLIER_TOKEN);
  formData.append("region", data.regionWise);

  if (data.selectedAlphabet) {
    formData.append("sort_by", data.selectedAlphabet);
  }

  try {
    const res = await sendFormData(url, formData);
    if (res.status === 200 && res.data.status) {
      return res.data.message;
    } else {
      throw new Error("Failed to get region list");
    }
  } catch (error) {
    console.error("Indian Suppluier failed:", error);
    return { status: false, message: "Failed to region list" };
  }
};
// State List POST
export const postStateList = async (data) => {
  const url = baseSupplierURL + "search_member_directory_statewise";
  // console.log(data.stateWise.value);
  const formData = new FormData();
  formData.append("access_token", SUPPLIER_TOKEN);
  formData.append("state", data.stateWise);

  if (data.selectedAlphabet) {
    formData.append("sort_by", data.selectedAlphabet);
  }

  try {
    const res = await sendFormData(url, formData);
    if (res.status === 200 && res.data.status) {
      return res.data.message;
    } else {
      throw new Error("Failed to get state list");
    }
  } catch (error) {
    console.error("Indian Suppluier failed:", error);
    return { status: false, message: "Failed to state list" };
  }
};
// City List POST
export const postCityList = async (data) => {
  const url = baseSupplierURL + "search_member_directory_citywise";
  // console.log(data.cityWise.value);
  const formData = new FormData();
  formData.append("access_token", SUPPLIER_TOKEN);
  formData.append("city", data.cityWise);

  if (data.selectedAlphabet) {
    formData.append("sort_by", data.selectedAlphabet);
  }

  try {
    const res = await sendFormData(url, formData);
    if (res.status === 200 && res.data.status) {
      return res.data.message;
    } else {
      throw new Error("Failed to get city list");
    }
  } catch (error) {
    console.error("Indian Suppluier failed:", error);
    return { status: false, message: "Failed to city list" };
  }
};
// Product Panel List POST
export const postSendMailSupplier = async (data) => {
  const sendData = {
    mail_id: data.email,
    mail_subject: data.subject,
    mail_message: data.message,
  };

  try {
    const res = await api.post("indian-suppliers-send-mail", sendData);
    if (res.status === 200 && res.data.status) {
      return res.data.message;
    } else {
      throw new Error("Failed to send mail");
    }
  } catch (error) {
    console.error("Indian Suppluier failed:", error);
    return { status: false, message: "Failed to send mail" };
  }
};

// post exporter profile
export const postExporterProfile = async (data) => {
  console.log("in post dataaaa", data);
  const sendData = {
    member_id: data.member_id,
    user_email: data.user_email,
    user_name: data.user_name,
    user_phone: data.user_phone,
    user_lattitude: data.user_lattitude || null,
    user_longitude: data.user_longitude || null,
  };

  try {
    const res = await api.post("add-exporter-activity-log", sendData);
    if (res.status === 200 && res.data.status) {
      return res.data.message;
    } else {
      throw new Error("Failed to send mail");
    }
  } catch (error) {
    console.error("Indian Suppluier failed:", error);
    return { status: false, message: "Failed to send mail" };
  }
};
