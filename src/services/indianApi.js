import { api } from "./api";

// Exim
export const getExim = async () => {
  try {
    const res = await api.get("glossary");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("Exim:", error);
    return [];
  }
};

// Incoterms
export const getIncoterms = async () => {
  try {
    const res = await api.get("incoterms");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("incoterms:", error);
    return [];
  }
};

// India Design Mark
export const getIndiaDesignMark = async () => {
  try {
    const res = await api.get("india-design-mark");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("india-design-mark:", error);
    return [];
  }
};