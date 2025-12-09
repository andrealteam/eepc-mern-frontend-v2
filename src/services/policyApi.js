import { api, apiInfo } from "./api";

// rodtep
export const getRodtep = async () => {
  try {
    const res = await api.get("rodtep");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("rodtep:", error);
    return [];
  }
};

// Export Parity Price
export const getExportParityPrice = async () => {
  try {
    const res = await api.get("export-parity-price");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("ExportParityPrice:", error);
    return [];
  }
};

// Export Parity Price FAQ
export const getExportParityPriceFAQ = async () => {
  try {
    const res = await api.get("export-parity-price-faq");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Export Parity Price FAQ:", error);
    return [];
  }
};

// Export Parity Price Table
export const getExportParityPriceTable = async (data = {}) => {
  try {
    // Get current month/year if not provided
    const now = new Date();
    const month =
      data.month || now.toLocaleString("default", { month: "long" }); // e.g., "May"
    const year = data.year || now.getFullYear(); // e.g., 2025

    // Construct endpoint URL
    const endpoint =
      data.month && data.year
        ? `msme_export_parity_price1/${month}/${year}`
        : `msme_export_parity_price1/`;

    const res = await api.get(endpoint);
    // console.log(res.data);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error("Export Parity Price Table:", error);
    return [];
  }
};

// foreign-trade-policy
export const getForeignTradePolicy = async () => {
  try {
    const res = await api.get("foreign-trade-policy");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("foreign-trade-policy:", error);
    return [];
  }
};

// depb-rates
export const getDepbRates = async () => {
  try {
    const res = await api.get("depb-rates");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("depb-rates:", error);
    return [];
  }
};

// hs-code
export const getHsCodes = async (hs_code) => {
  try {
    const url = hs_code ? `hs-code/${hs_code}` : "hs-code";
    console.log(url);
    const res = await api.get(url);
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("hs-code:", error);
    return [];
  }
};

// certificate-of-origin
export const getCertificateOfOrigin = async () => {
  try {
    const res = await api.get("certificate-of-origin");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("certificate-of-origin:", error);
    return [];
  }
};

// exim-bank-loc
export const getEXIMBankLoC = async () => {
  try {
    const res = await api.get("exim-bank-loc");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("exim-bank-loc:", error);
    return [];
  }
};

// customs-exchange-rate
export const getCustomsExchangeRate = async () => {
  try {
    const res = await api.get("customs-exchange-rate");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("customs-exchange-rate:", error);
    return [];
  }
};

// dgft-circulars
export const getDgftCirculars = async () => {
  try {
    const res = await apiInfo.get("dgft-circulars");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("dgft-circulars:", error);
    return [];
  }
};
// dgft-public-notice
export const getDgftPublicNotice = async () => {
  try {
    const res = await apiInfo.get("public-notices");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("dgft-public-notices:", error);
    return [];
  }
};
// dgft-notifications
export const getDgftNotifications = async () => {
  try {
    const res = await apiInfo.get("notifications");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("dgft-notifications:", error);
    return [];
  }
};
// dgft-trade-notice
export const getDgftTradeNotices = async () => {
  try {
    const res = await apiInfo.get("trade-notice");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("dgft-trade-notice:", error);
    return [];
  }
};
// gst-circular-notification-details
export const getDgftGst = async () => {
  try {
    const res = await apiInfo.get("gst-circular-notification-details");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("gst-circular-notification-details:", error);
    return [];
  }
};
// rbi-circulars
export const getDgftRbi = async () => {
  try {
    const res = await apiInfo.get("rbi-circulars");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("rbi-circulars:", error);
    return [];
  }
};
// customs-notifications
export const getCustomsNotifications = async () => {
  try {
    const res = await apiInfo.get("customs-notifications");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("customs-notifications:", error);
    return [];
  }
};
// customs-ncirculars
export const getCustomsCirculars = async () => {
  try {
    const res = await apiInfo.get("customs-circulars");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("customs-circulars:", error);
    return [];
  }
};
// central-excise-notifications
export const getCentralExcise = async () => {
  try {
    const res = await apiInfo.get("central-excise-notifications");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("central-excise-notifications:", error);
    return [];
  }
};
// central-excise-circulars
export const getCentralExciseCirculars = async () => {
  try {
    const res = await apiInfo.get("central-excise-notifications");
    // console.table(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("central-excise-notifications:", error);
    return [];
  }
};
