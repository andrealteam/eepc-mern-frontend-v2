import { api } from "./api";

// becoming-a-member
export const getMembershipBenefits = async () => {
  try {
    const res = await api.get("membership-benefits");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error(" MembershipBenefits:", error);
    return [];
  }
};

// becoming-a-member
export const getBecomingMember = async () => {
  try {
    const res = await api.get("becoming-a-member");
    // console.info(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("becoming-a-member:", error);
    return [];
  }
};

// past-chairmen
export const getPastChairmen = async () => {
  try {
    const res = await api.get("past-chairmen");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("past-chairmen:", error);
    return [];
  }
};

// election-for-the-post-of-senior-vice-chairman
export const getSeniorViceChairman = async () => {
  try {
    const res = await api.get("election-for-the-post-of-senior-vice-chairman");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("election-for-the-post-of-senior-vice-chairman:", error);
    return [];
  }
};

// working-committee
export const getWorkingCommittee = async () => {
  try {
    const res = await api.get("working-committee");
    console.table(res.data.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("working-committee:", error);
    return [];
  }
};

// committees
export const getCommittees = async () => {
  try {
    const res = await api.get("committees");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("committees:", error);
    return [];
  }
};

// working-committee-election
export const getWorkingCommitteeElection = async () => {
  try {
    const res = await api.get("working-committee-election");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("working-committee-election:", error);
    return [];
  }
};

// committee-of-administration
export const getCommitteeAdministration = async () => {
  try {
    const res = await api.get("committee-of-administration");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("committee-of-administration:", error);
    return [];
  }
};

// deputy-regional-chairmen
export const getDeputyRegionalChairmen = async () => {
  try {
    const res = await api.get("deputy-regional-chairmen");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("deputy-regional-chairmen:", error);
    return [];
  }
};

// chapters
export const getChapters = async () => {
  try {
    const res = await api.get("chapters");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("chapters:", error);
    return [];
  }
};

// annual-general-meeting
export const getAGM = async () => {
  try {
    const res = await api.get("annual-general-meeting");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("annual-general-meeting:", error);
    return [];
  }
};

// award-scheme
export const getAwardScheme = async () => {
  try {
    const res = await api.get("award-scheme");
    // console.log(res.data);
    return res.status === 200 ? res.data.data : [];
  } catch (error) {
    console.error("award-scheme:", error);
    return [];
  }
};


